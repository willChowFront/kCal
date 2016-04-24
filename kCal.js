/*-----------------------------------------------------
* @Description:     万年历组件
* @Version:         1.0.0
* @author:          willChow(zhaokaikangwill@foxmail.com) 
* @name:			赵凯康
* @tele				15694303159
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
			/**
			 * [termInfo 公历1900-2100的节气信息表]
			 * @type {Array}
			 */
			termInfo:[	'9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f',
				'97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
				'97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa',
				'97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f',	'97bd0b06bdb0722c965ce1cfcc920f',
				'b027097bd097c36b0b6fc9274c91aa','9778397bd19801ec9210c965cc920e','97b6b97bd19801ec95f8c965cc920f',
				'97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd197c36c9210c9274c91aa',
				'97b6b97bd19801ec95f8c965cc920e','97bd09801d98082c95f8e1cfcc920f',	'97bd097bd097c36b0b6fc9210c8dc2',
				'9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bcf97c3598082c95f8e1cfcc920f',
				'97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e',
				'97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
				'97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f',	'97bd097bd097c35b0b6fc920fb0722',
				'9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f',
				'97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
				'97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
				'97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f',	'97bd097bd07f595b0b6fc920fb0722',
				'9778397bd097c36b0b6fc9210c8dc2','9778397bd19801ec9210c9274c920e','97b6b97bd19801ec95f8c965cc920f',
				'97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
				'97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2',
				'9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bd07f1487f595b0b0bc920fb0722',
				'7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
				'97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',	'9778397bd097c36b0b6fc9274c91aa',
				'97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
				'9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722',
				'7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
				'97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b6fc920fb0722',	'9778397bd097c36b0b6fc9274c91aa',
				'97b6b97bd19801ec9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
				'9778397bd097c36b0b6fc9210c91aa','97b6b97bd197c36c9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722',
				'7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
				'97b6b7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722',	'7f0e397bd097c36b0b6fc9210c8dc2',
				'9778397bd097c36b0b70c9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
				'7f0e397bd097c35b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
				'7f0e27f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',	'9778397bd097c36b0b6fc9274c91aa',
				'97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
				'9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
				'7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
				'7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',	'9778397bd097c36b0b6fc9274c91aa',
				'97b6b7f0e47f531b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
				'9778397bd097c36b0b6fc9210c91aa','97b6b7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
				'7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','977837f0e37f149b0723b0787b0721',
				'7f07e7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c35b0b6fc9210c8dc2',
				'977837f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
				'7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
				'7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd',
				'7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
				'977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
				'7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
				'7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',	'977837f0e37f14998082b0787b06bd',
				'7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
				'977837f0e37f14998082b0723b06bd','7f07e7f0e37f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
				'7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721',
				'7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f595b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5',
				'7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f531b0b0bb0b6fb0722',
				'7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
				'7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd',
				'7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35',
				'7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',	'7f0e27f1487f531b0b0bb0b6fb0722',
				'7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721',
				'7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd',
				'7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35',
				'7ec967f0e37f14998082b0723b06bd','7f07e7f0e37f14998083b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
				'7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14898082b0723b02d5','7f07e7f0e37f14998082b0787b0721',
				'7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66aa89801e9808297c35',	'665f67f0e37f14898082b0723b02d5',
				'7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722',	'7f0e36665b66a449801e9808297c35',
				'665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
				'7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b072297c35',	'7ec967f0e37f14998082b0787b06bd',
				'7f07e7f0e47f531b0723b0b6fb0721','7f0e26665b66a449801e9808297c35',	'665f67f0e37f1489801eb072297c35',
				'7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',	'7f0e27f1487f531b0b0bb0b6fb0722'],
				/**
				 * [chineseTerm 节气中文名称速查表]
				 * @type {Array}
				 */
				chineseTerm : ["\u5c0f\u5bd2","\u5927\u5bd2","\u7acb\u6625","\u96e8\u6c34","\u60ca\u86f0","\u6625\u5206","\u6e05\u660e","\u8c37\u96e8","\u7acb\u590f","\u5c0f\u6ee1","\u8292\u79cd","\u590f\u81f3","\u5c0f\u6691","\u5927\u6691","\u7acb\u79cb","\u5904\u6691","\u767d\u9732","\u79cb\u5206","\u5bd2\u9732","\u971c\u964d","\u7acb\u51ac","\u5c0f\u96ea","\u5927\u96ea","\u51ac\u81f3"],
				/**
				 * [chineseLunarDate 农历日期速查表]
				 * @type {Array}
				 */
				chineseLunarDate : ["\u521d\u4e00","\u521d\u4e8c","\u521d\u4e09","\u521d\u56db","\u521d\u4e94","\u521d\u516d","\u521d\u4e03","\u521d\u516b","\u521d\u4e5d","\u521d\u5341","\u5341 \u4e00","\u5341\u4e8c","\u5341\u4e09","\u5341\u56db","\u5341\u4e94","\u5341\u516d","\u5341\u4e03","\u5341\u516b","\u5341\u4e5d","\u5eff\u5341","\u5eff\u4e00","\u5eff\u4e8c","\u5eff\u4e09","\u5eff\u56db","\u5eff\u4e94","\u5eff\u516d","\u5eff\u4e03","\u5eff\u516b","\u5eff\u4e5d","\u5eff\u5341","\u5345"],
				chineseWeekName : ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],
			     /**
			      * [Gan 天干地支之天干速查表 "甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
			      * @type {Array}
			      */
				gan:["\u7532","\u4e59","\u4e19","\u4e01","\u620a","\u5df1","\u5e9a","\u8f9b","\u58ec","\u7678"],
			     /**
			      * [Zhi 天干地支之地支速查表 "子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
			      * @type {Array}
			      */
				zhi:["\u5b50","\u4e11","\u5bc5","\u536f","\u8fb0","\u5df3","\u5348","\u672a","\u7533","\u9149","\u620c","\u4ea5"],
				/**
				 * [Zodiac 生肖速查表 "鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
				 * @type {Array}
				 */
				zodiac:["\u9f20","\u725b","\u864e","\u5154","\u9f99","\u86c7","\u9a6c","\u7f8a","\u7334","\u9e21","\u72d7","\u732a"],
				/**
				 * [chineseMonthName 中文月份速查表]
				 * @type {Array}
				 */
				chineseMonthName:["\u6b63","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u51ac","\u814a"],
				/**
				 * [solarHoliday 阳历节假日]
				 * @type {Object}
				 */
				solarHoliday : {
					"11" :"元旦","214":"情人节","38":"妇女节","312": "植树节","315": "消费者权益日","41": "愚人节","51": "劳动节","54": "青年节",
    				"512":" 护士节", "61": "儿童节","71": "建党节","81":" 建军节","910": "教师节","928":" 孔子诞辰","101": "国庆节",
					"106":" 老人节","1024":"联合国日","1224": "平安夜","1225":"圣诞节"
				}
		},
		now = new Date(),//当日日期
		calId = config.calId ? config.calId : -1,
		currentDate = config.currentDate ? config.currentDate : new Date().getDate(),
		currentMonth = config.currentMonth ? config.currentMonth : new Date().getMonth()+1,
		currentYear = config.currentYear ? config.currentYear : new Date().getFullYear(),
		cssUrl = config.cssUrl ? config.cssUrl : -1,
		goodBadUrl = config.goodBadUrl ? config.goodBadUrl : -1;

	if(calId === -1){
		console.log('ERROR:万年历id未传入');
		return -1;
	}
	if(cssUrl === -1){
		console.log('ERROR:css样式url未指定');
		return -1;
	}
	if(goodBadUrl === -1){
		console.log('ERROR:获取宜忌事列表ajax请求地址未指定');
		return -1;
	}

	/**
	 * [createCalHead 生成万年历头部html]
	 * @return {[type]}              [description]
	 */
	function createCalHead(currentYear,currentMonth) {
		var
			textNode,aEle,spanEle,lsInfo,optionEle,selectWrapDiv,
			headDiv = document.createElement('div'),
			wrapEle = document.getElementById(calId),
			yearSelectEle = document.createElement('select'),
			bodyDiv = document.createElement('div'),
			monthSelectEle = document.createElement('select');
		
		wrapEle.innerHTML = '';
		if(!(wrapEle.className.indexOf('k-cal-wrap')>0)){
			wrapEle.className = wrapEle.className + ' k-cal-wrap';//方便为万年历添加样式。
		}
		headDiv.className = 'cal-head';
		bodyDiv.id = 'J_calBody';
		bodyDiv.className = 'cal-body';

		aEle = document.createElement('a');
		aEle.href = "javascript:;";
		aEle.className = 'prev-year';
		aEle.id = 'J_prevYear';
		headDiv.appendChild(aEle);
		for(var i=1901; i<=2100; i++){
			optionEle = document.createElement('option');
			textNode = document.createTextNode(''+i+'年');
			optionEle.appendChild(textNode);
			optionEle.value = i;
			yearSelectEle.appendChild(optionEle);
			if(i === currentYear){
				optionEle.selected = true;
			}
		}
		yearSelectEle.className = 'cal-year';
		yearSelectEle.id = 'J_calYear';
		selectWrapDiv = document.createElement('div');
		selectWrapDiv.className = 'year-select-wrap';
		selectWrapDiv.appendChild(yearSelectEle);
		headDiv.appendChild(selectWrapDiv);
		aEle = document.createElement('a');
		aEle.href = "javascript:;";
		aEle.className = 'prev-year';
		aEle.id = 'J_prevYear';
		aEle.className = 'next-year';
		aEle.id = 'J_nextYear';
		headDiv.appendChild(aEle);

		aEle = document.createElement('a');
		aEle.href = "javascript:;";
		aEle.className = 'prev-year';
		aEle.id = 'J_prevYear';
		aEle.className = 'prev-month';
		aEle.id = 'J_prevMonth';
		headDiv.appendChild(aEle);
		for(i=1; i<=12; i++){
			optionEle = document.createElement('option');
			textNode = document.createTextNode(''+i+'月');
			optionEle.appendChild(textNode);
			optionEle.value = i;
			monthSelectEle.appendChild(optionEle);
			if(i === currentMonth){
				optionEle.selected = true;
			}
		}
		monthSelectEle.className = 'cal-month';
		monthSelectEle.id = 'J_calMonth';
		selectWrapDiv = document.createElement('div');
		selectWrapDiv.className = 'month-select-wrap';
		selectWrapDiv.appendChild(monthSelectEle);
		headDiv.appendChild(selectWrapDiv);
		aEle = document.createElement('a');
		aEle.href = "javascript:;";
		aEle.className = 'prev-year';
		aEle.id = 'J_prevYear';
		aEle.className = 'next-month';
		aEle.id = 'J_nextMonth';
		headDiv.appendChild(aEle);
		
		wrapEle.appendChild(headDiv);
		wrapEle.appendChild(bodyDiv);	
	}
	/**
	 * [createCalBody 生成万年历日期主体部分]
	 * @param  {[string]} calId        [万年历的父元素id]
	 * @param  {[number]} currentYear  [指定年份]
	 * @param  {[number]} currentMonth [指定月份]
	 * @return {[type]}              [description]
	 */
	function createCalBody(calId,currentYear,currentMonth){
		if(currentYear===2100 && currentMonth===12){
			alert('暂不支持2100-12的日历查询');
			window.location.reload();
		}else{
			var
				liEle,textNode,aEle,spanEle,lsInfo,optionEle,
				lsList = getL2SInfo(currentYear,currentMonth),
				wrapEle = document.getElementById(calId),
				bodyDiv = document.getElementById('J_calBody'),
				ulEle = document.createElement('ul'),
				detailDiv = document.createElement('div');
			detailDiv.id = 'J_dateDetail';
			detailDiv.className = 'date-detail';
			
			while(bodyDiv.hasChildNodes()){
				bodyDiv.removeChild(bodyDiv.firstChild);
			}

			for(i=0; i<7; i++){
				liEle = document.createElement('li');
				liEle.className = 'week-name';
				textNode = document.createTextNode(lunarInfo.chineseWeekName[i]);
				liEle.appendChild(textNode);
				ulEle.appendChild(liEle);
			}
			
			for(i=0; i<lsList.length; i++){
				lsInfo = lsList[i];
				liEle = document.createElement('li');
				
				aEle = document.createElement('a');
				textNode = document.createTextNode(lsInfo.sDay);
				aEle.setAttribute('year', lsInfo.sYear);
				aEle.setAttribute('month', lsInfo.sMon);
				aEle.appendChild(textNode);
				aEle.href = "javascript:;";

				spanEle = document.createElement('span');
				if(!lsInfo.term){
					textNode = document.createTextNode(lsInfo.lDay);
				}else{
					textNode = document.createTextNode(lsInfo.term);
					spanEle.className = 'term';
				}
				if(lsInfo.solarHol){
					textNode = document.createTextNode(lsInfo.solarHol);
					spanEle.className = 'solar-holiday';
				}
				spanEle.appendChild(textNode);
				
				liEle.appendChild(aEle);
				liEle.appendChild(spanEle);
				liEle.className = 'cal-date';
				if(lsInfo.isToday){
					liEle.className = liEle.className + ' today';
				}
				if(lsInfo.notCurrentMonth){
					liEle.className = liEle.className + ' not-current-month';
				}
				ulEle.appendChild(liEle);
			}

			bodyDiv.appendChild(ulEle);
			if(! document.getElementById('J_dateDetail')){
				wrapEle.appendChild(detailDiv);
			}
			
		}
	}
	/**
	 * [createCalDetail 生成指定日期阴历&阳历详细信息html]
	 * @return {[type]} [description]
	 */
	function createCalDetail(calId, currentYear, currentMonth, currentDate){
		var
			pEle,textNode,
			week = new Date(currentYear, currentMonth-1, currentDate).getDay(),
			lunarYMD = solarToLunar(currentYear, currentMonth, currentDate),
			spanEle = document.createElement('span'),
			strontEle = document.createElement('strong'),
			wrapEle = document.getElementById(calId),
			goodBadDiv = document.createElement('div'),//宜忌事项表
			detailDiv = document.getElementById('J_dateDetail');
	
		while(detailDiv.hasChildNodes()){
			detailDiv.removeChild(detailDiv.firstChild);
		}

		if(week === 0){
			textNode = document.createTextNode(''+currentYear+'-'+currentMonth+'-'+currentDate+' '+lunarInfo.chineseWeekName[6]);
		}else{
			textNode = document.createTextNode(''+currentYear+'-'+currentMonth+'-'+currentDate+' '+lunarInfo.chineseWeekName[week-1]);
		}
		spanEle.appendChild(textNode);
		detailDiv.appendChild(spanEle);

		textNode = document.createTextNode(currentDate);
		strontEle.appendChild(textNode);
		detailDiv.appendChild(strontEle);

		textNode = document.createTextNode('农历' + lunarInfo.chineseMonthName[lunarYMD.lMonth-1] + '月' + lunarInfo.chineseLunarDate[lunarYMD.lDay-1]);
		pEle = document.createElement('p');
		pEle.appendChild(textNode);
		detailDiv.appendChild(pEle);

		textNode = document.createTextNode(lunarYMD.gzYear + '年' + lunarYMD.gzMonth + '月' + lunarYMD.gzDay + '日');
		pEle = document.createElement('p');
		pEle.appendChild(textNode);
		detailDiv.appendChild(pEle);

		if(lunarInfo.solarHoliday[currentMonth+''+currentDate]){
			textNode = document.createTextNode(lunarInfo.solarHoliday[currentMonth+''+currentDate]);
			pEle = document.createElement('p');
			pEle.appendChild(textNode);
			detailDiv.appendChild(pEle);
		}

		textNode = document.createTextNode(lunarYMD.zodiac+'年');
		pEle = document.createElement('p');
		pEle.appendChild(textNode);
		detailDiv.appendChild(pEle);

		goodBadDiv.id = 'J_goodBad';
		goodBadDiv.className = 'good-bad';
		detailDiv.appendChild(goodBadDiv);

		getCanDolist(goodBadUrl, currentYear, currentMonth, currentDate);
	}
	
	/**
	 * [getCanDolist 获取宜忌事列表]
	 * @param  {[type]} url          [获取jsoN的地址]
	 * @param  {[type]} currentYear  [description]
	 * @param  {[type]} currentMonth [description]
	 * @param  {[type]} currentDate  [description]
	 * @return {[type]}              [description]
	 */
	function getCanDolist(url,currentYear,currentMonth,currentDate){
		var
			goodBad,
			param = {currentYear:currentYear,currentDate:currentDate,currentMonth:currentMonth},
			goodBadDiv = document.getElementById('J_goodBad'),
			olEle, textNode, liEle, 
			xhr = new XMLHttpRequest();

		for(var pName in param){
			url = addUrlParams(url,pName,param[pName]);
		}

		xhr.open('get',url,true);
		xhr.send(null);
		console.log(param);
		xhr.onload = function(){
			if(xhr.readyState == 4){
				if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
					goodBad = JSON.parse(xhr.responseText);
					
					olEle = document.createElement('ol');
					olEle.className = 'good-list';
					liEle = document.createElement('li');
					textNode = document.createTextNode('宜');
					liEle.appendChild(textNode);
					olEle.appendChild(liEle);
					goodBad.good.forEach(function(item){
						liEle = document.createElement('li');
						textNode = document.createTextNode(''+item+'');
						liEle.appendChild(textNode);
						olEle.appendChild(liEle);
					});
					goodBadDiv.appendChild(olEle);

					olEle = document.createElement('ol');
					olEle.className = 'bad-list';
					liEle = document.createElement('li');
					textNode = document.createTextNode('忌');
					liEle.appendChild(textNode);
					olEle.appendChild(liEle);
					goodBad.bad.forEach(function(item){
						liEle = document.createElement('li');
						textNode = document.createTextNode(''+item+'');
						liEle.appendChild(textNode);
						olEle.appendChild(liEle);
					});
					goodBadDiv.appendChild(olEle);
				}	
			}
		};
	}
	/**
	 * [addUrlParams 向url地址添加参数]
	 * @param {[type]} url   [description]
	 * @param {[type]} name  [参数名]
	 * @param {[type]} value [参数值]
	 * return  添加参数后的url
	 */
	function addUrlParams(url,name,value){
		url += url.indexOf('?') === -1 ? '?' : '&';
		url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
		return url;
	}
	/**
	 * [eventHandler 添加事件处理]
	 * @return {[type]} [description]
	 */
	function eventHandler() {
		var
			prevYearBtn = document.getElementById('J_prevYear'),
			nextYearBtn = document.getElementById('J_nextYear'),
			prevMonthBtn = document.getElementById('J_prevMonth'),
			nextMonthBtn = document.getElementById('J_nextMonth'),
			yearSelect = document.getElementById('J_calYear'),
			monthSelect = document.getElementById('J_calMonth'),
			calBody = document.getElementById('J_calBody');

		prevYearBtn.addEventListener('click',function(ev){
			var
				currentYear = parseInt(yearSelect.value,10),
				currentMonth = parseInt(monthSelect.value,10);
			if(currentYear > 1900){
				console.log(yearSelect.childNodes[currentYear-1900-1]);
				yearSelect.childNodes[currentYear-1900-2].selected = true;
				createCalBody(calId, currentYear-1, currentMonth);
			}
		},false);

		nextYearBtn.addEventListener('click', function(ev){
			var
				currentYear = parseInt(yearSelect.value,10),
				currentMonth = parseInt(monthSelect.value,10);
			if(currentYear != 2100){
				yearSelect.childNodes[currentYear-1900].selected = true;
				createCalBody(calId, currentYear+1, currentMonth);
			}
		}, false);

		prevMonthBtn.addEventListener('click', function(ev){
			var
				currentYear = parseInt(yearSelect.value,10),
				currentMonth = parseInt(monthSelect.value,10);
			
			if(currentMonth === 1){
				if(currentYear>1901){
					yearSelect.childNodes[currentYear-1900-2].selected = true;
					monthSelect.childNodes[11].selected = true;
					createCalBody(calId, currentYear-1, 12);
				}
				
			}else{
				monthSelect.childNodes[currentMonth-2].selected = true;
				createCalBody(calId, currentYear, currentMonth-1);
			}
		}, false);

		nextMonthBtn.addEventListener('click', function(ev){
			var
				currentYear = parseInt(yearSelect.value,10),
				currentMonth = parseInt(monthSelect.value,10);
			
			if(currentMonth === 12){	
				yearSelect.childNodes[currentYear-1900].selected = true;
				monthSelect.childNodes[0].selected = true;
				createCalBody(calId, currentYear+1, 12);
			}else{
				monthSelect.childNodes[currentMonth].selected = true;
				createCalBody(calId, currentYear, currentMonth+1);
			}
		}, false);

		yearSelect.addEventListener('change', function(ev){
			var
				currentYear = parseInt(yearSelect.value,10),
				currentMonth = parseInt(monthSelect.value,10);
			createCalBody(calId, currentYear, currentMonth);
		}, false);

		monthSelect.addEventListener('change', function(ev){
			var
				currentYear = parseInt(yearSelect.value,10),
				currentMonth = parseInt(monthSelect.value,10);
			createCalBody(calId, currentYear, currentMonth);
		}, false);

		calBody.addEventListener('click', function(ev){
			var
				choosedDate,choosedMonth,choosedYear,//用户点击的日期
				currentYear = parseInt(yearSelect.value,10),
				currentMonth = parseInt(monthSelect.value,10);//当前显示的年份与月份
			
			if(ev.target.nodeName.toLowerCase() === 'span'){
				choosedDate = ev.target.previousSibling.firstChild.nodeValue;
				choosedMonth = ev.target.previousSibling.getAttribute('month');
				choosedYear = ev.target.previousSibling.getAttribute('year');
			}
			if(ev.target.nodeName.toLowerCase() === 'a'){
				choosedDate = ev.target.firstChild.nodeValue;
				choosedMonth = ev.target.getAttribute('month');
				choosedYear = ev.target.getAttribute('year');
			}
			
			choosedDate = parseInt(choosedDate , 10);
			choosedMonth = parseInt(choosedMonth , 10);
			choosedYear = parseInt(choosedYear , 10);
			if(choosedMonth || choosedDate){
				if(choosedYear === 1900 && choosedMonth===12 && choosedDate === 31){
					//为保证可用性不允许查询1901-01-01之前的日历
					createCalDetail(calId,currentYear, currentMonth,choosedDate);
				}else{
					if(choosedMonth !== currentMonth){
						createCalHead(choosedYear, choosedMonth);
						createCalBody(calId, choosedYear, choosedMonth);
						createCalDetail(calId, choosedYear, choosedMonth, choosedDate);
						eventHandler();
					}else{
						createCalDetail(calId,currentYear, currentMonth,choosedDate);
					}
				}
			}		
		}, false);
	}
	/**
	 * [lsList 返回显示万年历主体日期列表所需的阳历，阴历信息 ]
	 * @param  {[Integer]} year  [阳历年]
	 * @param  {[Integer]} month [阳历月]
	 * @return {[type]}       [description]
	 */
	function getL2SInfo(year,month){
		var
			lsList = new Array(42),
			prevMonLastDate,//参数指定月份上一月份的最后日期（阳历）
			prevMonDays, nextMonDays,//日期列表所需显示阳历上一月份与下一月份的天数
			week = new Date(year , month-1).getDay(),
			isLeap = isLeapYear(year),
			monDay = [31,28,31,30,31,30,31,31,30,31,30,31],//阳历平年每月的天数
			leapMonDay = [31,29,31,30,31,30,31,31,30,31,30,31],//阳历闰年每月的天数
			thisMonDays = isLeap ? leapMonDay[month-1] : monDay[month-1],//该月的天数
			lunarYMD,//对应阳历日期的阴历日期对象
			prevMonTermDays , nextMonTermDays,//阳历上一月份，下一月份的节气日期
			thisMonTermDays = getTermDate(year,month);//指定月份的节气日期
		
		prevMonDays = (week===0) ? 6 : week-1;
		
		if(month === 1){
			prevMonLastDate = monDay[11];
			prevMonTermDays = getTermDate(year-1 , 12);
		}else{
			prevMonLastDate =  isLeap ? leapMonDay[month-2] : monDay[month-2];
			prevMonTermDays = getTermDate(year,month-1);
		}
		if(month === 12){
			nextMonDays = 42 - prevMonDays - monDay[0];
			nextMonTermDays = getTermDate(year+1 , 1);
		}else{
			nextMonDays = 42 - prevMonDays - (isLeap ? leapMonDay[month-1] : monDay[month-1]);
			nextMonTermDays = getTermDate(year,month+1);
		}
		
		//填充阳历日期信息
		for(var i=1 , j=1 ,k=1; i<=42; i++){
			var 
				solarHol,
				lsInfo = {};
			if(i <= prevMonDays){
				if(month === 1){
					lsInfo.sMon = 12;
					lsInfo.sYear = year-1;
				}else{
					lsInfo.sMon = month-1;
					lsInfo.sYear = year;
				}
				lsInfo.sDay = prevMonLastDate - prevMonDays + i;
				lsInfo.notCurrentMonth = true;
				if(lsInfo.sDay === prevMonTermDays[1]){
					lsInfo.term = lunarInfo.chineseTerm[2*lsInfo.sMon-1];
				}
				if(lsInfo.sDay===now.getDate() && lsInfo.sMon===now.getMonth()+1 && lsInfo.sYear===now.getFullYear()){
					lsInfo.isToday = true;
				}
				solarHol = lsInfo.sMon+''+lsInfo.sDay;
				if(lunarInfo.solarHoliday[solarHol]){
					lsInfo.solarHol = lunarInfo.solarHoliday[solarHol];
				}
			}else{
				if(i > thisMonDays+prevMonDays && j<=nextMonDays){
					if(month === 12){
						lsInfo.sMon = 1;
						lsInfo.sYear = year+1;
					}else{
						lsInfo.sMon = month+1;
						lsInfo.sYear = year;
					}
					lsInfo.sDay = j;
					if(j === nextMonTermDays[0]){
						lsInfo.term = lunarInfo.chineseTerm[2*lsInfo.sMon-2];
					}
					if(j === nextMonTermDays[1]){
						lsInfo.term = lunarInfo.chineseTerm[2*lsInfo.sMon-1];
					}
					if(lsInfo.sDay===now.getDate() && lsInfo.sMon===now.getMonth()+1 && lsInfo.sYear===now.getFullYear()){
						lsInfo.isToday = true;
					}
					lsInfo.notCurrentMonth = true;

					solarHol = lsInfo.sMon+''+lsInfo.sDay;
					if(lunarInfo.solarHoliday[solarHol]){
						lsInfo.solarHol = lunarInfo.solarHoliday[solarHol];
					}

					j ++;
				}else{
					lsInfo.sMon = month;
					lsInfo.sDay = k;
					lsInfo.sYear = year;
					if(k === thisMonTermDays[0]){
						lsInfo.term = lunarInfo.chineseTerm[2*month-2];
					}
					if(k === thisMonTermDays[1]){
						lsInfo.term = lunarInfo.chineseTerm[2*month-1];
					}
					if(lsInfo.sDay===now.getDate() && lsInfo.sMon===now.getMonth()+1 && lsInfo.sYear===now.getFullYear()){
						lsInfo.isToday = true;
					}
					
					solarHol = lsInfo.sMon+''+lsInfo.sDay;
					if(lunarInfo.solarHoliday[solarHol]){
						lsInfo.solarHol = lunarInfo.solarHoliday[solarHol];
					}

					k++;
				}
			}
			lsList[i-1] = lsInfo;
		}

		//填充阴历日期信息
		for(i=0; i<42; i++){
			lunarYMD = solarToLunar(lsList[i].sYear, lsList[i].sMon, lsList[i].sDay);
			lsList[i].lYear = lunarYMD.lYear;
			lsList[i].lMon = lunarYMD.lMonth;
			lsList[i].lDay = lunarInfo.chineseLunarDate[lunarYMD.lDay-1];
		}
		// console.log(lsList);
		return lsList;
	}
	/**
	 * [getCss 获取日历样式表]
	 * @param  {[string]} url [样式地址]
	 * @return {[type]}     [description]
	 */
	function getCss(url){
		var
			link = document.createElement('link'),
			head = document.getElementsByTagName('head')[0];
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = url;
		head.appendChild(link);
	}
	/**
	 * [solarToLunar 根据阳历日期获取相应阴历日期]
	 * @param  {[Integer]} year  [阳历年]
	 * @param  {[Integer]} month [阳历月]
	 * @param  {[Integer]} day   [阳历日]
	 * @return {[Object]}       [阴历年 ,阴历月,阴历日的名值对]
	 */
	function solarToLunar(year,month,day){
		var
			gzYear, gzMonth, gzDay,zodiac,
			firstTermThisMon,//指定月的第一个节气日期
			fourthTerm,//立春
			offsetMon,//指定月的第一天与1990/1/1相差天数
			lYear,lMonth,lDay,//阴历年、月、日
			lLeapMonth,//阴历闰的月份
			temp,
			isAfterLeap = false,
			offset = (Date.UTC(year,month-1,day) - Date.UTC(1900,0,31)) / 86400000;
		
		for(var i=1900; i<2101&&offset>0; i++){
			temp = lunarDay(i);
			offset -= temp;
		}
		if(offset<0){
			offset += temp;
			i --;
		}
		
		lYear = i;
		lLeapMonth = lunarInfo.leapInfo[lYear-1900] & 0xf;

		for(i=1; i<13 && offset>0; i++){
			if(i === lLeapMonth && !isAfterLeap){
				temp = leapMonth(lYear).leapDays;
				i --;
				isAfterLeap = true;
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
		
		fourthTerm = getTermDate(year, 2)[1];
		if(month-1<2 && day<fourthTerm){
			gzYear = getGanZhi(year-5);
		}else{
			gzYear = getGanZhi(year-4);
		}

		firstTermThisMon = getTermDate(year,month)[0];
		if(day >= firstTermThisMon){
			gzMonth = getGanZhi((year-1900)*12+month+12);
		}else{
			gzMonth = getGanZhi((year-1900)*12+month+11);
		}

		offsetMon = Date.UTC(year, month-1, 1)/86400000+25567+10;
		gzDay = getGanZhi(offsetMon+day-1);
		zodiac = lunarInfo.zodiac[(year-4)%12];
		return {
			lYear : lYear,
			lMonth : lMonth,
			lDay : lDay,
			isAfterLeap : isAfterLeap,
			gzYear : gzYear,
			gzMonth : gzMonth,
			gzDay : gzDay,
			zodiac : zodiac
		};
	}
	
	/**
	 * [getTermDate 获取该年指定月份的节气日期（阳历）]
	 * @param  {[Integer]} year  [阳历年]
	 * @param  {[Integer]} month [阳历月]
	 * @return {[Array]}       [包含节气日期的数组]
	 */
	function getTermDate(year,month){
		
		var 
			termString = lunarInfo.termInfo[year-1900],
			termList = [
				parseInt('0x'+termString.substr(0,5),16).toString(),
				parseInt('0x'+termString.substr(5,5),16).toString(),
				parseInt('0x'+termString.substr(10,5),16).toString(),
				parseInt('0x'+termString.substr(15,5),16).toString(),
				parseInt('0x'+termString.substr(20,5),16).toString(),
				parseInt('0x'+termString.substr(25,5),16).toString()
			],
			termDay= [
				termList[0].substr(0,1),
				termList[0].substr(1,2),
				termList[0].substr(3,1),
				termList[0].substr(4,2),
				
				termList[1].substr(0,1),
				termList[1].substr(1,2),
				termList[1].substr(3,1),
				termList[1].substr(4,2),
				
				termList[2].substr(0,1),
				termList[2].substr(1,2),
				termList[2].substr(3,1),
				termList[2].substr(4,2),
				
				termList[3].substr(0,1),
				termList[3].substr(1,2),
				termList[3].substr(3,1),
				termList[3].substr(4,2),
				
				termList[4].substr(0,1),
				termList[4].substr(1,2),
				termList[4].substr(3,1),
				termList[4].substr(4,2),
				
				termList[5].substr(0,1),
				termList[5].substr(1,2),
				termList[5].substr(3,1),
				termList[5].substr(4,2),
			];
		return [parseInt(termDay[month*2-2],10) , parseInt(termDay[month*2-1],10)];
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
				leapDays : lunarInfo.leapInfo[year-1900] & 0xf0000 ? 30 : 29
			};
		}else{
			return {
				leapMonth : 0,
				leapDays : 0
			};
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
	 * [getGanZhi 获取天干地支（年月日）]
	 * @param  {[Integer]} offset [相对于甲子的偏移量]
	 * @return {[string]}      [天干地支的汉字表示]
	 */
	function getGanZhi(offset){
		return lunarInfo.gan[offset%10]+lunarInfo.zhi[offset%12];
	}

	/**
	 * [init ]
	 * @return {[type]}              [description]
	 */
	(function init(){
		createCalHead(currentYear,currentMonth);
		createCalBody(calId,currentYear,currentMonth);
		createCalDetail(calId,now.getFullYear(),now.getMonth()+1, now.getDate());
		getCss(cssUrl);
		eventHandler();
	})();

};


