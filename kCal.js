/*-----------------------------------------------------
* @Description:     万年历组件
* @Version:         1.0.0
* @author:          willChow(zhaokaikangwill@foxmail.com)
* @date             2016.04.07
* ==NOTES:=============================================
* v1.0.0(2016.04.07):
     初始生成
* -----------------------------------------------------*/
var kCal = function(config){
	var
		monDay = [31,28,31,30,31,30,31,31,30,31,30,31],
		leapMonDay = [31,29,31,30,31,30,31,31,30,31,30,31],
		calId = config.calId ？ config.calId : {console.log('Error:未指定万年历的父元素id';return;)}
		currentDate = config.currentDate ? config.currentDate : new Date().getDate(),
		currentMonth = config.currentMonth ? config.currentMonth : new Date().getMonth(),
		currentYear = config.currentYear ? config.currentYear : new Date().getYear(); 
	
	/**
	 * [createStaticCal 生成万年历静态部分html]
	 * @param  {[string]} calId        [万年历的父元素id]
	 * @param  {[number]} currentYear  [指定年份]
	 * @param  {[number]} currentMonth [指定月份]
	 * @return {[type]}              [description]
	 *
	 * 
	 */
	function createStaticCal(calId,currentYear,currentMonth){
		var
			wrapEle = document.getElementById(calId),
			headDiv = document.createElement('div');
		wrapEle.id = 'k_CalWrap';//方便为万年历添加样式。


	}
	/**
	 * [repeatCreateNode 重复生成多个节点]
	 * @param  {[node]} parentNode [添加子节点的父节点]
	 * @param  {[json]}   data       [如下所示,属性名为要添加的元素名，noneChild:表示有无子节点,textNode表示文本节点,当文本节点为数组时表示有多个元素需要生成，attribute表示该元素的属性
	 *                               	{
	 *										"option":{
	 *											"noneChild":true,
	 *											 textNode:[1900,...2010]
	 *										}
	 *									}
	 *									{
	 *										"span":{
	 *											"noneChild":false,
	 *											"childNode";{
	 *												a":{
	 *												   "noChild": true,
	 *												   "textNode":"左减",
	 *												   "attribute":{
	 *													 "href":"javascript:;"
	 *												   }
	 *											  	}
	 *											}
	 *										}
	 *									}
	 *									{
	 *										"div":{
	 *											"a":{
	 *												"noneChild": true,
	 *												"textNode":"左减",
	 *												"attribute":{
	 *													"href":"javascript:;"
	 *												}
	 *											}
	 *										}
	 *									}
	 *                               ]
	 * @return {[type]}              []
	 */
	function repeatCreateNode(parentNode , data){
		for(var eleName in data){
			// if(typeof data.eleName === Array){
			// 	data.eleName.forEach(function(item){
			// 		var
			// 			ele = document.createElement('"'+eleName+'"'),
			// 			textNode = document.createTextNode('"'+item+'"');
			// 		ele.appendChild(textNode);
			// 		parentNode.appendChild(ele); 
			// 	})
			// }
			// else if(typeof data.eleName === Object){
			// 	var
			// 		parentEle = document.createElement('"'+eleName+'"'),
			// 	repeatCreateNode(parentEle , data.eleName); 
			// }
			// else if(typeof data.eleName === Number || typeof data.eleName === String){
			// 	var
			// 		childEle = document.createElement('"'+eleName+'"'),
			// 		textNode = document.createTextNode('"'+data.eleName+'"');
			// 	childEle.appendChild(textNode);
			// }
			if(data.eleName.noneChild){
				var
					ele = document.createElement('"'+eleName+'"'),

			}
		}
	}
	
	/**
	 * [createCal 根据年月日生成对应日历]
	 * @param  {[number]} currentYear  [指定年份]
	 * @param  {[number]} currentMonth [指定月份]
	 * @param  {[number]} currentDate  [指定日期]
	 * @return {[type]}              [description]
	 */
	function createCalBody(currentYear , currentMonth , currentDate){
		var
			week = countWeek(currentYear , currentMonth , 1),
			dateHtml = '<td>'+
							'<span>'+
								'<a href="javascript:;">1</a>'+
								'<label>立春</label>'+
								'<strong>二十七</strong>'+
						    '</span>'+
					    '</td>',
	}
	
	/**
	 * [countWeek 根据年月日计算星期]
	 * @param  {[number]} year  [年]
	 * @param  {[number]} month [月]
	 * @param  {[number]} date  [日]
	 * @return {[number]} week  [取值0,1,2...6依次代表星期一至星期日]
	 */
	function countWeek(year , month , date){
		var
			week;
		if(year<1752 || (year<1752 && month<9) || (year==1752 && month==9 && date<3) ){
			week = (date + 2*month + Math.floor(3*(month+1)/5) + year + Math.floor(year/4) + 5) % 7;
		}else{
			week = (date + 2*month + Math.floor(3*(month+1)/5) + year + Math.floor(year/4) - Math.floor(year/100) + Math.floor(year/400)) % 7
		}	
		return week;
	}

	//判断闰年
	function isLeapYear(year){
		if(year%4 == 0 && year%100 != 0 || year%400 == 0){
			return true;
		}else{
			return false;
		}
	}
};


kCal({
	currentDate:5,
	currentMonth:4,
	currentYear:2016
});