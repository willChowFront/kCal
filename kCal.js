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
		/**
		 * [lunarInfo 保存用于查询的阴历信息]
		 * @type {Object}
		 */
		lunarInfo = {
			/**
			 * [leapInfo 阴历1900-2100的闰月，大小月信息表]
			 * @type {Array}
			 */
			leapInfo:[0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
			0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
			0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
			0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
			0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
			0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
			0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
			0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,
			0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
			0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
			0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
			0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
			0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
			0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
			0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
			0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50, 0x06b20,0x1a6c4,0x0aae0,
			0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,
			0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,
			0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,
			0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,
			0x0d520],
		},
		calId = config.calId ? config.calId : 0,
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
	 * [lsList 返回显示万年历主体日期列表所需的阳历，阴历信息]
	 * @param  {[Integer]} year  [阳历年]
	 * @param  {[Integer]} month [阳历月]
	 * @return {[type]}       [description]
	 */
	function getL2SInfo(year,month){
		var
			lsInfo = {},
			lsList = new Array(42),
			prevMonLastDate,//参数指定月份上一月份的最后日期（阳历）
			prevMonDays, nextMonDays,//日期列表所需显示阳历上一月份与下一月份的天数
			week = new Date(year , month-1).getDay() + 1,//1,2..7分别指向星期一，二....日
			isLeap = isLeapYear(year),
			monDay = [31,28,31,30,31,30,31,31,30,31,30,31],//阳历平年每月的天数
			leapMonDay = [31,29,31,30,31,30,31,31,30,31,30,31],//阳历闰年每月的天数
			
			lunarYMD = solarToLunar(year, month, 1),//对应阳历日期的阴历日期对象
			lDay = lunarYMD.lDay,
			lMonth = lunarYMD.lMonth,
			lYear = lunarYMD.lYear,
			lLeapMonth = leapMonth(year).leapMonth,
			lLeapDays = leapMonth(year).leapDays,
			lPrevMonLastDate,//阴历上一月份的最后日期
			lbeginDate,//万年历上阴历显示的第一天

		prevMonDays = week-1;
		prevMonLastDate =  isLeap ? leapMonDay[month-2] : monDay[month-2];
		nextMonDays = 42 - prevMonDays - isLeap ? leapMonDay[month-1] : monDay[month-1];
		//填充阳历日期信息
		for(var i=1 , j=1; i<=42; i++){
			if(i <= prevMonDays){
				if(month === 1){
					lsInfo.sMon = 12;
					lsInfo.sYear = year-1;
				}else{
					lsInfo.sMon = month-1;
					lsInfo.sYear = year;
				}
				lsInfo.sDay = prevMonLastDate - prevMonDays + i;
			}
			else if(i > isLeap ? leapMonDay[month-1] : monDay[month-1] && j<=nextMonDays){
				if(month === 12){
					lsInfo.sMon = 1;
					lsInfo.sYear = year+1;
				}else{
					lsInfo.sMon = month+1;
					lsInfo.sYear = year;
				}
				lsInfo.sDay = j;
				j ++;
			}else{
				lsInfo.sMon = month;
				lsInfo.sDay = i;
			}
			lsList[i-1] = lsInfo;
		}
		//填充阴历日期信息
		for(i=1; i<=42; i++){
			if(lDay > prevMonDays){
				lsList[i-1].lDay = lDay-prevMonDays+i;
				lsList[i-1].lMonth = lMonth;
				lsList[i-1].lYear = lYear;
			}
		}
	}

	/**x
	 * [solarToLunar 根据阳历日期获取相应阴历日期]
	 * @param  {[Integer]} year  [阳历年]
	 * @param  {[Integer]} month [阳历月]
	 * @param  {[Integer]} day   [阳历日]
	 * @return {[Object]}       [阴历年 ,阴历月,阴历日的名值对]
	 */
	function solarToLunar(year,month,day){
		var
			lYear,lMonth,lDay,//阴历年、月、日
			lLeapMonth,//阴历闰的月份
			temp,
			offset = (Date.UTC(year,month-1,day) - Date.UTC(1900,0,31)) / 86400000;
		
		for(var i=1900; i<2101&&offset>0; i++){
			temp = lunarDay(i);
			offset -= temp;
		}
		if(offset<0){
			offset += temp;
			i --;
		}
		console.log(offset);
		lYear = i;
		lLeapMonth = lunarInfo.leapInfo[lYear-1900] & 0xf;

		for(i=1; i<13 && offset>0; i++){
			if(i === lLeapMonth){
				temp = leapMonth(lYear).leapDays;
				i --;
			}else{
				temp = isBigMon(lYear , i) ? 30 : 29;
			}
			offset -= temp;
		}
		if(offset < 0){
			offset += temp;
			i --;
		}

		lMonth = i;
		lDay = offset + 1;

		return {
			lYear : lYear,
			lMonth : lMonth,
			lDay : lDay
		};
	}
	
	/**
	 * [lunarDay 返回该年份的阴历一整年的天数]
	 * @param  {[Integer]} year [年份]
	 * @return {[Integer]}      [天数]
	 */
	function lunarDay(year){
		var 
			i , sum = 348;
		for(i=0x8000; i>0x8; i>>=1){
			sum += i&lunarInfo.leapInfo[year-1900] ? 1: 0;
		}
		return sum + leapMonth(year).leapDays;
	}

	/**
	 * [lunarMonth 判断阴历月份是否为大月]
	 * @param  {[Integer]} year      [年份]
	 * @param  {[Integer]} month     [月份]
	 * @return {[BooLean]} isBigMon  [true为大月，false为小月]
	 */
	function isBigMon(year , month){
		var
			isBigMon = false,
			temp = 0x8000,
			i = 1;
		do{
			isBigMon = lunarInfo.leapInfo[year-1900] & temp;
			temp >>= 1;
			i ++;
		}while(i <= month);

		return isBigMon;
	}

	/**
	 * [leapMonth 返回该年阴历闰月的天数及月份]
	 * @param  {[Integer]} year [年份]
	 * @return {[Object]}      [属性leapMonth表示闰几月，为0时表示不闰，leapDays闰月天数]
	 */
	function leapMonth(year){
		var
			isLeap = lunarInfo.leapInfo[year-1900] & 0xf ? true : false;
		if(isLeap){
			return {
				leapMonth : isLeap,
				leapDays : lunarInfo.leapInfo[year-1900] & 0xf0000 ? 30 : 29;
			}
		}else{
			return {
				leapMonth : 0,
				leapDays : 0
			}
		}
	}
	/**
	 * [isLeapYear 判断闰年]
	 * @param  {Integer}  year [description]
	 * @return {Boolean}      [true为闰年，false为平年]
	 */
	function isLeapYear(year){
		if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
			return true;
		}else{
			return false;
		}
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
			// if(data.eleName.noneChild){
			// 	var
			// 		ele = document.createElement('"'+eleName+'"'),

			// }
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
		// var
		// 	week = countWeek(currentYear , currentMonth , 1),
		// 	dateHtml = '<td>'+
		// 					'<span>'+
		// 						'<a href="javascript:;">1</a>'+
		// 						'<label>立春</label>'+
		// 						'<strong>二十七</strong>'+
		// 				    '</span>'+
		// 			    '</td>',
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
			week = (date + 2*month + Math.floor(3*(month+1)/5) + year + Math.floor(year/4) - Math.floor(year/100) + Math.floor(year/400)) % 7;
		}	
		return week;
	}



};


kCal({
	currentDate:5,
	currentMonth:4,
	currentYear:2016
});

