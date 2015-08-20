/**
 * Created by flh on 2015/6/25.
 */


function Logistic(x0, y0, r_x, r_y, beta, T) {
    var x = [x0], y = [y0], t = 0;
    while (t <= T) {
        x.push(r_x * x[x.length - 1] * (1 - x[x.length - 1]));
        y.push(r_y * y[y.length - 1] * (1 - y[y.length - 1] - beta * x[x.length - 1]));
        t += 1;
    }
    this.x = x;
    this.y = y;
}

function reconstruction(x, e, tao) {
    var x_re = [];
    for (var t = (e - 1) * tao; t < x.length; t++) {
        var vector = [];
        for (var i = 1; i <= e; i++) {
            vector.push(x[t - (i - 1) * tao]);
        }
        x_re.push(vector);
    }
    return x_re;
}

function Quadtree(x) {
    this.x = [];
    this.y = [];
    for (var i = 0, len = x.length; i < len; i++) {
        this.x.push(x[i][0]);
        this.y.push(x[i][1]);
    }
    var tree = [];
    var tree_index = []; //树枝里的点
    Array.prototype.max = function () {
        return Math.max.apply({}, this)
    };
    Array.prototype.min = function () {
        return Math.min.apply({}, this)
    };
    var count = 0, max_count = 9999; //无法剖分终止条件
    var node = [[[this.x.min() - 0.001, this.y.min() - 0.001], [this.x.max(), this.y.max()]]];
    while (node.length > 0 && count < max_count) {
        var temp = [];
        for (var i = 0, len = node.length; i < len; i++) {
            var num = 0;
            var mark = 0;
            for (var j = 0, len1 = this.x.length; j < len1; j++) {
                if (node[i][0][0] < this.x[j] && this.x[j] <= node[i][1][0] && node[i][0][1] < this.y[j] && this.y[j] <= node[i][1][1]) {
                    num = num + 1;
                    mark = j;
                }
            }
            if (num == 1) {
                tree.push(node[i]);
                tree_index.push(mark);
            }
            if (num > 1) {
                temp.push([[node[i][0][0], node[i][0][1]], [(node[i][0][0] + node[i][1][0]) / 2, (node[i][0][1] + node[i][1][1]) / 2]]);
                temp.push([[node[i][0][0], (node[i][0][1] + node[i][1][1]) / 2], [(node[i][0][0] + node[i][1][0]) / 2, node[i][1][1]]]);
                temp.push([[(node[i][0][0] + node[i][1][0]) / 2, (node[i][0][1] + node[i][1][1]) / 2], [node[i][1][0], node[i][1][1]]]);
                temp.push([[(node[i][0][0] + node[i][1][0]) / 2, node[i][0][1]], [node[i][1][0], (node[i][0][1] + node[i][1][1]) / 2]]);
            }
        }
        count += 1;
        node = temp;
    }
    var new_tree = []; //将树按点编号排序
    for (var i = 0, len = tree.length; i < len; i++) {
        for (var j = 0, len1 = tree.length; j < len1; j++) {
            if (i == tree_index[j]) new_tree.push(tree[j]);
        }
    }
    if (count == max_count)
        this.judgement = false;
    else {
        this.judgement = true;
        this.tree = new_tree;
    }
}

function GetGraphic(points, tree) {
    this.points = points;
    this.lines = [];
    for (var i = 0, len = points.length-1; i < len; i++) {
        for (var j = i+1, len1 = points.length; j < len1; j++) {
            var x1 = tree[points[i]][0][0], y1 = tree[points[i]][0][1], x2 = tree[points[i]][1][0], y2 = tree[points[i]][1][1];
            var x3 = tree[points[j]][0][0], y3 = tree[points[j]][0][1], x4 = tree[points[j]][1][0], y4 = tree[points[j]][1][1];
            if ((x1 == x3 || x2 == x3 || x1 == x4 || x2 == x4) && (y1 == y3 || y2 == y3 || y1 == y4 || y2 == y4)) {
                this.lines.push([points[i], points[j]])
            }
        }
    }
    this.points_num = this.points.length;
    this.lines_num = this.lines.length;
    this.euler_characteristic = this.points_num-this.lines_num;
}

function GetNewGraphic(graphic, x_re) {
    var points_x_re = [], points_intersection = [];
    function unique(arr) {
        var result = [], hash = {};
        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    }
    for (var i = 0, len = graphic.points.length; i < len; i++) {
        points_x_re.push([x_re[[graphic.points[i]]][0], x_re[[graphic.points[i]]][1]]);
    }
    var points_on_line = [];
    for (var i = 0, len = graphic.lines.length; i < len; i++) {points_on_line[i] = [];}
    var precision = 1e-8;
    for (var i = 0, len = graphic.lines.length-1; i < len; i++) {
        for (var j = i+1, len1 = graphic.lines.length; j < len1; j++) {
            var x1 = x_re[graphic.lines[i][0]][0], x2 = x_re[graphic.lines[i][1]][0];
            var y1 = x_re[graphic.lines[i][0]][1], y2 = x_re[graphic.lines[i][1]][1];
            var x3 = x_re[graphic.lines[j][0]][0], x4 = x_re[graphic.lines[j][1]][0];
            var y3 = x_re[graphic.lines[j][0]][1], y4 = x_re[graphic.lines[j][1]][1];
            if ((x2-x1)*(y4-y3) != (x4-x3)*(y2-y1)) {
                var x = -(-x2*x3*y1+x2*x4*y1+x1*x3*y2-x1*x4*y2+x1*x4*y3-x2*x4*y3-x1*x3*y4+x2*x3*y4);
                x = x/(x3*y1-x4*y1-x3*y2+x4*y2-x1*y3+x2*y3+x1*y4-x2*y4);
                var y = -(x2*y1*y3-x4*y1*y3-x1*y2*y3+x4*y2*y3-x2*y1*y4+x3*y1*y4+x1*y2*y4-x3*y2*y4);
                y = y/(-x3*y1+x4*y1+x3*y2-x4*y2+x1*y3-x2*y3-x1*y4+x2*y4);
                if ((x1-x)*(x2-x) < -precision && (y1-y)*(y2-y) < -precision) {points_on_line[i].push([x, y]);}
                if ((x3-x)*(x4-x) < -precision && (y3-y)*(y4-y) < -precision) {points_on_line[j].push([x, y]);}
            }
        }
    }
    for (var i = 0, len = graphic.lines.length; i < len; i++) {
        points_on_line[i] = unique(points_on_line[i]);
        for (var j = 0, len1 = points_on_line[i].length; j < len1; j++) {
            points_intersection.push(points_on_line[i][j]);
        }
    }
    this.intersection = points_intersection;
    this.points = unique(points_x_re.concat(points_intersection));
    this.lines = graphic.lines;
    this.points_num = this.points.length;
    this.lines_num = graphic.lines.length+points_intersection.length;
    this.euler_characteristic = this.points_num-this.lines_num;
}

//剖分后去除逐点
function leave_one_out1(x_re, y_re) {
    this.ec_Y2X = [];
    this.ec_Y = [];
    this.ec_X = [];
    var jack = new Quadtree(y_re);
    var rose = new Quadtree(x_re);
    for (var i = 0, len = y_re.length; i < len; i++) {
        var points = [];
        for (var j = 0, len1 = y_re.length; j < len1; j++) {
            if (j != i) {points.push(j);}
        }
        var graphic = new GetGraphic(points, jack.tree);
        var newgraphic = new GetNewGraphic(graphic, x_re);
        this.ec_Y.push(graphic.euler_characteristic);
        this.ec_Y2X.push(newgraphic.euler_characteristic);
        var graphic_x = new GetGraphic(points, rose.tree);
        this.ec_X.push(graphic_x.euler_characteristic);
    }
}

//去除逐点后剖分
function leave_one_out2(x_re, y_re) {
    this.ec_Y2X = [];
    this.ec_Y = [];
    this.ec_X = [];
    var points = [];
    for (var i = 0, len = y_re.length-1; i < len; i++) {
        points.push(i);
    }
    for (var i = 0, len = y_re.length; i < len; i++) {
        var x_re_new = [], y_re_new = [];
        for (var j = 0, len1 = y_re.length; j < len1; j++) {
            if (j != i) {
                x_re_new.push(x_re[j]);
                y_re_new.push(y_re[j]);
            }
        }
        var jack = new Quadtree(y_re_new);
        var rose = new Quadtree(x_re_new);
        var graphic = new GetGraphic(points, jack.tree);
        var newgraphic = new GetNewGraphic(graphic, x_re_new);
        this.ec_Y.push(graphic.euler_characteristic);
        this.ec_Y2X.push(newgraphic.euler_characteristic);
        var graphic_x = new GetGraphic(points, rose.tree);
        this.ec_X.push(graphic_x.euler_characteristic);
    }
}

function sum(x) {
    var ans = 0;
    for (var i = 0, len = x.length; i < len; i++) {
        ans += x[i];
    }
    return ans;
}

function correlation(x, y) {
    var mean_x = sum(x)/x.length, mean_y = sum(y)/y.length;
    var up = 0, down_x = 0, down_y = 0;
    for (var i = 0, len = x.length; i < len; i++) {
        up += (x[i]-mean_x)*(y[i]-mean_y);
        down_x += Math.pow((x[i]-mean_x), 2);
        down_y += Math.pow((y[i]-mean_y), 2);
    }
    return up/(Math.pow(down_x, 0.5)*Math.pow(down_y, 0.5));
}


function draw_graphic(graphic, x_re, canvas) {
    paper.install(window);
    paper.setup(canvas);
    for (var i = 0, len = graphic.lines.length; i < len; i++) {
        var myPath = new Path();
        var x1 = x_re[graphic.lines[i][0]][0]*canvas.width, x2 = x_re[graphic.lines[i][1]][0]*canvas.width;
        var y1 = canvas.height-x_re[graphic.lines[i][0]][1]*canvas.height, y2 = canvas.height-x_re[graphic.lines[i][1]][1]*canvas.height;
        myPath.strokeColor = '#808080';
        myPath.add(new Point(x1, y1));
        myPath.add(new Point(x2, y2));
    }
    for (var i = 0, len = graphic.points.length; i < len; i++) {
        var x = x_re[[graphic.points[i]]][0]*canvas.width, y = canvas.height-x_re[[graphic.points[i]]][1]*canvas.height;
        new Path.Circle({
            center: new Point(x, y),
            radius: 3,
            fillColor: '#009dec'
        });
        var textItem = new PointText({
            fontFamily: "Microsoft YaHei",
            fontSize: 5,
            content: i,
            point: new Point(x, y),
            fillColor: '#808080'
        });
    }
}

function draw_new_graphic(graphic, x_re, canvas) {
    paper.install(window);
    paper.setup(canvas);
    for (var i = 0, len = graphic.lines.length; i < len; i++) {
        var myPath = new Path();
        var x1 = x_re[graphic.lines[i][0]][0]*canvas.width, x2 = x_re[graphic.lines[i][1]][0]*canvas.width;
        var y1 = canvas.height-x_re[graphic.lines[i][0]][1]*canvas.height, y2 = canvas.height-x_re[graphic.lines[i][1]][1]*canvas.height;
        myPath.strokeColor = '#808080';
        myPath.add(new Point(x1, y1));
        myPath.add(new Point(x2, y2));
    }
    for (var i = 0, len = graphic.points.length; i < len; i++) {
        var x = graphic.points[i][0]*canvas.width, y = canvas.height-graphic.points[i][1]*canvas.height;
        new Path.Circle({
            center: new Point(x, y),
            radius: 3,
            fillColor: '#009dec'
        });
    }
    for (var i = 0, len = graphic.intersection.length; i < len; i++) {
        var x = graphic.intersection[i][0]*canvas.width, y = canvas.height-graphic.intersection[i][1]*canvas.height;
        new Path.Circle({
            center: new Point(x, y),
            radius: 3,
            fillColor: 'red'
        });
    }
}

function draw_trees(x0, y0, r_x, r_y, beta, T, canvas) {
    paper.install(window);
    paper.setup(canvas);
    var L = new Logistic(x0, y0, r_x, r_y, beta, T);
    var x_re = reconstruction(L.x, 2, 1); y_re = reconstruction(L.y, 2, 1);
    var jack = new Quadtree(x_re);
    if (jack.judgement == true) {
        for (var i = 0, len = jack.tree.length; i < len; i++) {
            draw_box(jack.tree[i][0][0], jack.tree[i][0][1], jack.tree[i][1][0], jack.tree[i][1][1], 0, canvas.width/2, canvas.height, '#e9e9ff');
        }
        for (var i = 0, len = jack.tree.length; i < len; i++) {
            var textItem = new PointText({
                fontFamily: "Microsoft YaHei",
                fontSize: 3,
                content: i,
                point: new Point(x_re[i][0]*canvas.width/2, canvas.height-x_re[i][1]*canvas.height),
                fillColor: '#808080'
            });
        }
    }
    else {
        var textItem = new PointText({
            fontFamily: "Microsoft YaHei",
            fontSize: 18,
            justification: "center",
            content: "无法作空间剖分！\n可能存在周期现象！",
            point: new Point(input.width/4, input.height/2),
            fillColor: 'red'
        });
    }
    var rose = new Quadtree(y_re);
    if (rose.judgement == true) {
        for (var i = 0, len = rose.tree.length; i < len; i++) {
            draw_box(rose.tree[i][0][0], rose.tree[i][0][1], rose.tree[i][1][0], rose.tree[i][1][1], canvas.width/2, canvas.width/2, canvas.height, '#ffd2d2');
        }
        for (var i = 0, len = rose.tree.length; i < len; i++) {
            var textItem = new PointText({
                fontFamily: "Microsoft YaHei",
                fontSize: 3,
                content: i,
                point: new Point(canvas.width/2+y_re[i][0]*canvas.width/2, canvas.height-y_re[i][1]*canvas.height),
                fillColor: '#808080'
            });
        }
    }
    else {
        var textItem = new PointText({
            fontFamily: "Microsoft YaHei",
            fontSize: 18,
            justification: "center",
            content: "无法作空间剖分！\n可能存在周期现象！",
            point: new Point(3*input.width/4, input.height/2),
            fillColor: 'red'
        });
    }
}



function draw_box(x_min, y_min, x_max, y_max, left, width, height, color) {
    var path = new Path();
    path.fillColor = color;
    path.add(new Point(left+x_min*width, height-y_min*height));
    path.add(new Point(left+x_min*width, height-y_max*height));
    path.add(new Point(left+x_max*width, height-y_max*height));
    path.add(new Point(left+x_max*width, height-y_min*height));
    path.closed = true;
    path.fullySelected = false;
}
