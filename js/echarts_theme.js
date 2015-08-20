/**
 * Created by flh on 2015/6/25.
 */

    var theme = {
        backgroundColor: '#FFFFFF',
        // 默认色板
        color: [
            '#44B7D3','#E42B6D','#F4E24E','#FE9616','#8AED35',
            '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
            '#E95569','#ff6347','#7b68ee','#00fa9a','#ffd700',
            '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'
        ],

        // 图表标题
        title: {
            backgroundColor: '#FFFFFF',
            itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10�?
            textStyle: {
                color: '#8A826D'          // 主标题文字颜�?
            },
            subtextStyle: {
                color: '#E877A3'          // 副标题文字颜�?
            }
        },

        // 值域
        dataRange: {
            x:'right',
            y:'center',
            itemWidth: 5,
            itemHeight:25,
            color:['#E42B6D','#F9AD96'],
            text:['�?','�?'],         // 文本，默认为数��文�?
            textStyle: {
                color: '#8A826D'          // 值域文字颜色
            }
        },

        toolbox: {
            color : ['#E95569','#E95569','#E95569','#E95569'],
            effectiveColor : '#ff4500',
            itemGap: 8
        },

        // 提示�?
        tooltip: {
            backgroundColor: 'rgba(138,130,109,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑�?
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line',         // 默认为直线，可��为�?'line' | 'shadow'
                lineStyle : {          // 直线指示器样式设�?
                    color: '#6B6455',
                    type: 'dashed'
                },
                crossStyle: {          //十字准星指示�?
                    color: '#A6A299'
                },
                shadowStyle : {                     // 阴影指示器样式设�?
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        // 区域缩放控制�?
        dataZoom: {
            dataBackgroundColor: 'rgba(130,197,209,0.6)',            // 数据背景颜色
            fillerColor: 'rgba(233,84,105,0.1)',   // 填充颜色
            handleColor: 'rgba(107,99,84,0.8)'     // 手柄颜色
        },

        // 网格
        grid: {
            borderWidth:0
        },

        // 类目�?
        categoryAxis: {
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属��lineStyle控制线条样式
                    color: '#6B6455'
                }
            },
            splitLine: {           // 分隔�?
                show: false
            }
        },

        // 数��型坐标轴默认参�?
        valueAxis: {
            axisLine: {            // 坐标轴线
                show: false
            },
            splitArea : {
                show: false
            },
            splitLine: {           // 分隔�?
                lineStyle: {       // 属��lineStyle（详见lineStyle）控制线条样�?
                    color: ['#FFF'],
                    type: 'dashed'
                }
            }
        },

        polar : {
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属��lineStyle控制线条样式
                    color: '#ddd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
                }
            },
            splitLine : {
                lineStyle : {
                    color : '#ddd'
                }
            }
        },

        timeline : {
            lineStyle : {
                color : '#6B6455'
            },
            controlStyle : {
                normal : { color : '#6B6455'},
                emphasis : { color : '#6B6455'}
            },
            symbol : 'emptyCircle',
            symbolSize : 3
        },

        // 柱形图默认参�?
        bar: {
            itemStyle: {
                normal: {
                    barBorderRadius: 0
                },
                emphasis: {
                    barBorderRadius: 0
                }
            }
        },

        // 折线图默认参�?
        line: {
            smooth : true,
            symbol: 'emptyCircle',  // 拐点图形类型
            symbolSize: 3           // 拐点图形大小
        },


        // K线图默认参数
        k: {
            itemStyle: {
                normal: {
                    color: '#E42B6D',       // 阳线填充颜色
                    color0: '#44B7D3',      // 阴线填充颜色
                    lineStyle: {
                        width: 1,
                        color: '#E42B6D',   // 阳线边框颜色
                        color0: '#44B7D3'   // 阴线边框颜色
                    }
                }
            }
        },

        // 散点图默认参�?
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth:1,
                    borderColor:'rgba(200,200,200,0.5)'
                },
                emphasis: {
                    borderWidth:0
                }
            },
            symbol: 'circle',    // 图形类型
            symbolSize: 4        // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
        },

        // 雷达图默认参�?
        radar : {
            symbol: 'emptyCircle',    // 图形类型
            symbolSize:3
            //symbol: null,         // 拐点图形类型
            //symbolRotate : null,  // 图形旋转控制
        },

        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#E42B6D'
                        }
                    }
                },
                emphasis: {                 // 也是选中样式
                    areaStyle: {
                        color: '#fe994e'
                    },
                    label: {
                        textStyle: {
                            color: 'rgb(100,0,0)'
                        }
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    nodeStyle : {
                        borderColor : 'rgba(0,0,0,0)'
                    },
                    linkStyle : {
                        color : '#6B6455'
                    }
                }
            }
        },

        chord : {
            itemStyle : {
                normal : {
                    chordStyle : {
                        lineStyle : {
                            width : 0,
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis : {
                    chordStyle : {
                        lineStyle : {
                            width : 1,
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },

        gauge : {                  // 仪表�?
            center:['50%','80%'],
            radius:'100%',
            startAngle: 180,
            endAngle : 0,
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属��lineStyle控制线条样式
                    color: [[0.2, '#44B7D3'],[0.8, '#6B6455'],[1, '#E42B6D']],
                    width: '40%'
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 2,   // 每份split细分多少�?
                length: 5,        // 属��length控制线长
                lineStyle: {       // 属��lineStyle控制线条样式
                    color: '#fff'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属��默认使用全屢�文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontWeight:'bolder'
                }
            },
            splitLine: {           // 分隔�?
                length: '5%',         // 属��length控制线长
                lineStyle: {       // 属��lineStyle（详见lineStyle）控制线条样�?
                    color: '#fff'
                }
            },
            pointer : {
                width : '40%',
                length: '80%',
                color: '#fff'
            },
            title : {
                offsetCenter: [0, -20],       // x, y，单位px
                textStyle: {       // 其余属��默认使用全屢�文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize: 20
                }
            },
            detail : {
                offsetCenter: [0, 0],       // x, y，单位px
                textStyle: {       // 其余属��默认使用全屢�文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize: 40
                }
            }
        },

        textStyle: {
            fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
        }
    };


var theme1 = {
    // 默认色板
    color: [
        '#c12e34','#e6b600','#0098d9','#2b821d',
        '#005eaa','#339ca8','#cda819','#32a487'
    ],

    // 图表标题
    title: {
        textStyle: {
            fontWeight: 'normal'
        }
    },

    // 值域
    dataRange: {
        itemWidth: 15,             // 值域图形宽度，线性渐变水平布屢�宽度为该�? * 10
        color:['#1790cf','#a2d4e6']
    },

    // 工具�?
    toolbox: {
        color : ['#06467c','#00613c','#872d2f','#c47630']
    },

    // 提示�?
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    // 区域缩放控制�?
    dataZoom: {
        dataBackgroundColor: '#dedede',            // 数据背景颜色
        fillerColor: 'rgba(154,217,247,0.2)',   // 填充颜色
        handleColor: '#005eaa'     // 手柄颜色
    },

    // 网格
    grid: {
        borderWidth: 0
    },

    // 类目�?
    categoryAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        axisTick: {            // 坐标轴小标记
            show: false
        }
    },

    // 数��型坐标轴默认参�?
    valueAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        axisTick: {            // 坐标轴小标记
            show: false
        },
        splitArea: {           // 分隔区域
            show: true,       // 默认不显示，属��show控制显示与否
            areaStyle: {       // 属��areaStyle（详见areaStyle）控制区域样�?
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#005eaa'
        },
        controlStyle : {
            normal : { color : '#005eaa'},
            emphasis : { color : '#005eaa'}
        }
    },

    // K线图默认参数
    k: {
        itemStyle: {
            normal: {
                color: '#c12e34',          // 阳线填充颜色
                color0: '#2b821d',      // 阴线填充颜色
                lineStyle: {
                    width: 1,
                    color: '#c12e34',   // 阳线边框颜色
                    color0: '#2b821d'   // 阴线边框颜色
                }
            }
        }
    },

    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // 也是选中样式
                areaStyle: {
                    color: '#e6b600'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#005eaa'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },

    gauge : {
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属��lineStyle控制线条样式
                color: [[0.2, '#2b821d'],[0.8, '#005eaa'],[1, '#c12e34']],
                width: 5
            }
        },
        axisTick: {            // 坐标轴小标记
            splitNumber: 10,   // 每份split细分多少�?
            length :8,        // 属��length控制线长
            lineStyle: {       // 属��lineStyle控制线条样式
                color: 'auto'
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属��默认使用全屢�文本样式，详见TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // 分隔�?
            length : 12,         // 属��length控制线长
            lineStyle: {       // 属��lineStyle（详见lineStyle）控制线条样�?
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            width : 3,
            color : 'auto'
        },
        title : {
            textStyle: {       // 其余属��默认使用全屢�文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // 其余属��默认使用全屢�文本样式，详见TEXTSTYLE
                color: 'auto'
            }
        }
    },

    textStyle: {
        fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
    }
};

