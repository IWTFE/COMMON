/**
 * Created by zhengwj on 2016/12/13.
 */

	/**
	* 返回随机数字数组
	* @param n 随机位数(默认一位),min 最小随机数(默认0),max 最大随机数(默认9),flag 是否可重复(默认不可重复)
	* [min max)
	*/
	var _Math = {
		randomArr: function(n, min, max, flag){
		  var n = n || 1,
		  	  min = min || 0,
		  	  max = max || 9,
		  	  flag = flag || false,
		  	  result = [],
		  	  i;
		  for(i = 0; i < n; i++){
		  	var r = this.randomOne(min, max);
		  	if(!flag){
		  		if(this.deRepeat(result, r)){
		  			i--;
		  			continue;
		  		}
		  	}
		  	result.push(r);
		  }
		  return result;
		},
		/**
		* 随机一个数字 [min max)
		* @param min 最小数 max 最大数
		*/
		randomOne: function(min, max){
			return Math.floor(Math.random()*(max-min)+min);
		},
		/**
		* 数组里是否存在一个数字
		* @param arr 数组 r 某个数字
		*/
		deRepeat: function(arr, r){
			for(var i = 0; i < arr.length; i++){
				if(arr[i] === r){
					return true;
				}
			}
			return false;
		},
		/**
		 * 组合算法
		 * @param  m n
		 */
		combin:function(m,n){
			return this.factorial(m) / this.factorial(m-n) / this.factorial(n);
		},
		/**
		* 阶乘函数
		* @param  阶乘数 n
		*/
		factorial:function(n){
		    return n > 1 ? n * this.factorial(n-1) : 1;
		}
	}
	export default{
	   randomStr: _Math.randomArr,
	   randomOne: _Math.randomOne,
	   deRepeat: _Math.deRepeat,
	   combin: _Math.combin,
	   factorial: _Math.factorial
	}
