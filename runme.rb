# encoding: utf-8
require 'csv'

arr = []
CSV.foreach("demo.csv") do |row|
  arr << row[3].encode(Encoding.find("UTF-8"), Encoding.find("GBK")).force_encoding("UTF-8")


end

brr = arr[1 .. -1]
crr = brr.uniq

drr = []
crr.each do |c|
  count = 0
  brr.each do |b|
    if c == b
      count += 1
    end
  end
  drr << count
end


for i in 0 ... drr.length
  for j in i+1 ... drr.length
    if drr[i] < drr[j]
      drr[i], drr[j] = drr[j], drr[i]
      crr[i], crr[j] = crr[j], crr[i]
    end
  end
end

str = ""
for i in 0 ... drr.length
  if i < 3
    str += "<tr class=\"am-danger\"><td>#{crr[i]}<\/td><td>#{drr[i]}<\/td><\/tr>"
  elsif i >= 3 && i < 10
    str += "<tr class=\"am-warning\"><td>#{crr[i]}<\/td><td>#{drr[i]}<\/td><\/tr>"
  elsif i >= 10 && i < 20
    str += "<tr class=\"am-success\"><td>#{crr[i]}<\/td><td>#{drr[i]}<\/td><\/tr>"
  elsif i >=20 && i < 50
    str += "<tr class=\"am-primary\"><td>#{crr[i]}<\/td><td>#{drr[i]}<\/td><\/tr>"
  elsif i >= 50 && i < 70
    str += "<tr class=\"am-active\"><td>#{crr[i]}<\/td><td>#{drr[i]}<\/td><\/tr>"
  else
    str += "<tr><td>#{crr[i]}<\/td><td>#{drr[i]}<\/td><\/tr>"
  end

end


puts str

puts drr.length