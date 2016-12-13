# COMMON
公共方法,将一些常用方法总结，数组的操作等。
//数组方法已有：
Array.push() //在数组末尾添加新元素
Array.pop() //在数组末尾删除新元素
Array.shift() //用于把数组的第一个元素从其中删除，并返回第一个元素的值。
Array.unshift() //向数组的开头添加一个或更多元素，并返回新长度。
Array.concat() //连接两个或更多数组，并返回结果
Array.join() //把数组的所有元素放入一个字符串中。元素通过指定的分隔符进行分隔。
Array.reverse() //颠倒元素中数组的位置
Array.slice() //从某个已有的数组返回选定的元素
Array.sort() //对数组的元素进行排序
Array.splice() //删除元素，并向数组添加新元素。
Array.toSource() //返回该对象的源码
Array.toString() //把数组转化为字符串，并返回结果
Array.toLocalString() //把数组转换为本地数组，并返回结果。
Array.valueOf() //返回数组对象的原始值
//数组改进方法有：
Array.prototype.unique();  //过滤数组中的相同项。如果两个元素相同，会删除后一个元素。
Array.prototype.some();//判断一个数组中是否有部分元素满足给定条件
Array.prototype.removeAt(); //移除数组中的项
Array.prototype.remove(); //移除数组中的项
Array.prototype.lastIndexOf() //从后往前，查询数组中指定元素的索引位置
Array.prototype.indexOf() //查询数组中指定元素的索引位置
Array.prototype.hash()//将两个数组参数合并成一个类似hashMap结构的对象，这个对象使用第一个数组做为key，使用第二个数组做为值，如果第二个参数未指定，则把对象的所有值置为true。
Array.prototype.find() //从数组中寻找符合条件的第一个元素
Array.prototype.filter() //从数组中筛选符合条件的元素
Array.prototype.every() //判断一个数组中是否所有元素都满足给定条件
Array.prototype.empty() //清空一个数组
Array.prototype.each()//遍历所有数组中的元素
Array.prototype.contains() // 判断一个数组中是否包含给定元素

//数学算法：
compare();//判断两个数组大小，通常和sort();配合使用
factorial();//求n的阶乘
random_ball();随机选N次N球
f_double_fx();//复式双色球公式
d_3d_fx();//复式3D球公式
d_dantuo_fx();//胆拖公式

//对数进行操作
number.comma() //给数添加逗号分隔
number.pad() //对目标数字进行0补齐处理
number.randomInt() //生成随机整数，范围是[min, max]

//json操作
json.stringify() //将json对象序列化
json.parse(data) //将字符串解析成json对象。注：不会自动祛除空格

//object操作
object.isEmpty(obj) //检测对象是否为空
object.isPlain(obj) //判断一个对象是不是字面量对象，即判断这个对象是不是由{}或者new Object类似方式创建
object.keys(source) //获取目标对象的键名列表
object.map(source,iterator) //遍历object中所有元素，将每一个元素应用方法进行转换，返回转换后的新object。
object.extend(target,source) // 将源对象的所有属性拷贝到目标对象中遍历Object中所有元素
object.each(source,iterator) //遍历Object中所有元素
object.values(source) //获取目标对象的列表值
object.merge(target,source[,opt_options])//合并源对象的属性到目标对象。默认情况下，所有在源对象上的属性都会被非递归地合并到目标对象上并且如果目标对象上已有此属性，不会被覆盖
object.unique(); //对象进行去重比较

//判读平台
platform.android() //判断是否是android平台
platform.ipad() //是否为ipad平台
platform.iphone() //是否是iphone平台
platform.macintosh()//是否是macintosh平台




