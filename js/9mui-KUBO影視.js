// 篩選頁功能關閉中
muban.海螺3.二級.title = '.hl-dc-title&&Text;li.hl-col-xs-12:eq(6)--em&&Text';
muban.海螺3.二級.desc = 'li.hl-col-xs-12:eq(1)&&Text;;;li.hl-col-xs-12:eq(2)--em&&Text;li.hl-col-xs-12:eq(3)--em&&Text';
var rule = {
	title:'KUBO影視[飛]',
	模板:'海螺3',
	host:'https://123kubo.tv',
	// url:'/type/fyclass-fypage.html',
	// url:'/show/fyclass/page/fypage.html',
	url:'/show/fyfilter.html',
	filterable:1,//是否啟用分類篩選,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: {
	 	"1":[
		{"key":"area","name":"地區","value":[{"n":"全部","v":"1"},{"n":"大陸","v":"/area/大陸"},{"n":"中國大陸","v":"/area/中國大陸"},{"n":"韓國","v":"/area/韓國"},{"n":"香港","v":"/area/中國香港"},{"n":"美國","v":"/area/美國"},{"n":"臺灣","v":"/area/中國臺灣"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},
		{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},
		{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},
		{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},
		{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],

	 	"2":[
		{"key":"area","name":"地區","value":[{"n":"全部","v":"2"},{"n":"大陸","v":"/area/大陸"},{"n":"中國大陸","v":"/area/中國大陸"},{"n":"韓國","v":"/area/韓國"},{"n":"香港","v":"/area/中國香港"},{"n":"美國","v":"/area/美國"},{"n":"臺灣","v":"/area/中國臺灣"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰國"},{"n":"英國","v":"/area/英國"},{"n":"新加坡","v":"/area/新加坡"},{"n":"其他","v":"/area/其他"}]},
		{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},
		{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"其它","v":"/lang/其它"}]},
		{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},
		{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		
	 	"3":[
		{"key":"area","name":"地區","value":[{"n":"全部","v":"3"},{"n":"大陸","v":"/area/大陸"},{"n":"中國大陸","v":"/area/中國大陸"},{"n":"韓國","v":"/area/韓國"},{"n":"香港","v":"/area/中國香港"},{"n":"美國","v":"/area/美國"},{"n":"臺灣","v":"/area/中國臺灣"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},
		{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},
		{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"其它","v":"/lang/其它"}]},
		{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},
		{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		
	 	"4":[
		{"key":"area","name":"地區","value":[{"n":"全部","v":"4"},{"n":"大陸","v":"/area/大陸"},{"n":"中國大陸","v":"/area/中國大陸"},{"n":"韓國","v":"/area/韓國"},{"n":"香港","v":"/area/中國香港"},{"n":"美國","v":"/area/美國"},{"n":"臺灣","v":"/area/中國臺灣"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},
		{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},
		{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"其它","v":"/lang/其它"}]},
		{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},
		{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]
	},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
	searchUrl:'/search/page/fypage/wd/**.html',
	class_parse: 'li.hl-type-child a;a&&Text;a&&href;(\\d+).html',
	cate_exclude:'專題',
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = url
		} else {
			input
		}
	`,
}