#kCal
##万年历组件
###万年历初始时右侧显示当日信息
###在页面中引入kCal.js，并调用kCal(config)函数即可,config为参数对象，如下所示

`
	kCal({

		currentDate:15,

		currentMonth:5,

		currentYear:2016,

		cssUrl : 'calendar.css',

		calId : 'J_calWrap',

		goodBadUrl : 'http://willchowfront.github.io/kCal/goodBad.json'
});
`
####currentDate ，currentMonth, currentYear表示指定日历显示的年月日，可选，无将默认为当日
####cssUrl 万年历样式的地址,必需项
####goodBadUrl 获取宜忌事列表的ajax请求地址，参数形式为{currentYear=2016&currentMonth=5&currentDate=15},代表指定年月日的宜忌事项，必需项