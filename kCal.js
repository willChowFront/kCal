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
		currentDate = config.currentDate ? config.currentDate : new Date().getDate(),
		currentMonth = config.currentMonth ? config.currentMonth : new Date().getMonth(),
		currentYear = config.currentYear ? config.currentYear : new Date().getYear(); 
	
	/**
	 * [createStaticCal 生成万年历静态部分html]
	 * @param  {[number]} currentYear  [指定年份]
	 * @param  {[number]} currentMonth [指定月份]
	 * @return {[type]}              [description]
	 */
	function createStaticCal(currentYear,currentMonth){

	}
	/**
	 * [repeatCreateNode 重复生成多个节点]
	 * @param  {[number]} nums [需要生成的节点子数量]
	 * @param  {[string]} childNode [需要生成的子节点]
	 * @return {[string]} nodeList [生成的子节点列表]
	 */
	function repeatCreateNode(nums , childNode){
		for()
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