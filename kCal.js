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
		currentDate = config.currentDate ? config.currentDate : new Date().getDate(),
		currentMonth = config.currentMonth ? config.currentMonth : new Date().getMonth(),
		currentYear = config.currentYear ? config.currentYear : new Date().getYear(); 

	function createCal(currentYear , currentMonth , currentDate){
		
	}

	// 根据日期计算星期, 返回的值0,1,2...6依次代表星期一至星期日
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


kCal({});