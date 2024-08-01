var rule={
    title:'唐人街影视',
    //host:'https://www.tangrenjie.one',
    host:'https://www.trjvod.com',
	// url:'/index.php/vod/show/id/fyclass/page/fypage.html',
	url:'/index.php/vod/show/id/fyfilter.html',
    filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: {
"1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"101"},{"n":"喜劇片","v":"102"},{"n":"愛情片","v":"103"},{"n":"科幻片","v":"104"},{"n":"劇情片","v":"105"},{"n":"懸疑片","v":"106"},{"n":"驚悚片","v":"107"},{"n":"恐怖片","v":"108"},{"n":"犯罪片","v":"109"},{"n":"冒險片","v":"111"},{"n":"奇幻片","v":"112"},{"n":"災難片","v":"113"},{"n":"戰爭片","v":"114"},{"n":"動畫電影片","v":"115"},{"n":"歌舞片","v":"116"},{"n":"網路電影片","v":"117"},{"n":"同性片","v":"118"},{"n":"經典片","v":"121"}]},
{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"台灣","v":"/area/中国台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韩国","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],

"2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":""},{"n":"國產劇","v":"201"},{"n":"香港劇","v":"202"},{"n":"台灣劇","v":"203"},{"n":"韓國劇","v":"204"},{"n":"日本劇","v":"205"},{"n":"歐美劇","v":"206"},{"n":"泰國劇","v":"207"},{"n":"新馬劇","v":"209"},{"n":"其它劇","v":"210"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"台灣","v":"/area/中国台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韩国","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],	

"3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":""},{"n":"國產動漫","v":"301"},{"n":"日韓動漫","v":"302"},{"n":"韓國動漫","v":"303"},{"n":"港台動漫","v":"304"},{"n":"歐美動漫","v":"306"},{"n":"其它動漫","v":"310"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"台灣","v":"/area/中国台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韩国","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],

"4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":""},{"n":"大陸綜藝","v":"401"},{"n":"日韓綜藝","v":"402"},{"n":"韓國綜藝","v":"403"},{"n":"港台綜藝","v":"404"},{"n":"歐美綜藝","v":"406"},{"n":"新馬綜藝","v":"407"},{"n":"其它綜藝","v":"410"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"台灣","v":"/area/中国台湾"},{"n":"歐美","v":"/area/欧美"},{"n":"韩国","v":"/area/韓國"},{"n":"日本","v":"/area/日本"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1900-1989","v":"/year/1900-1989"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"最新","v":"/by/time"},{"n":"最熱","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],

"11":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":""},{"n":"古裝短劇","v":"1101"},{"n":"復仇短劇","v":"1103"},{"n":"強者短劇","v":"1104"},{"n":"甜寵短劇","v":"1102"},{"n":"神豪短劇","v":"1110"},{"n":"穿越短劇","v":"1105"},{"n":"虐戀短劇","v":"1107"},{"n":"逆襲短劇","v":"1106"},{"n":"重生短劇","v":"1108"}]}]
		},
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'},
        11:{cateId:'11'}
    },
    searchUrl:'/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.top_nav&&ul li:gt(0):lt(25);a&&Text;a&&href;.*/(.*?).html',
    class_name:'電影&電視劇&動漫&綜藝&短劇',
    class_url:'1&2&3&4&11',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    //二级:{"title":"h2&&Text;.content_detail.content_min.fl .data_style&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(0)&&Text;.content_detail.content_min.fl li:eq(2)&&Text;.content_detail.content_min.fl li:eq(3)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".content_playlist:eq(#id) li"},
    // 二级:{"title":"h2&&Text;.text-muted:eq(-1)&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl&&ul&&li:eq(3)&&Text;.content_detail.content_min.fl&&ul&&li:eq(0)&&Text;.content_detail.content_min.fl&&ul&&li:eq(1)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".play_list_box:eq(#id)&&.content_playlist li"},
    二级:{
    	"title":"h2&&Text;.data:eq(2)&&Text",
    	"img":".content_thumb .vodlist_thumb&&data-original",
    	"desc":";;;.data:eq(0)&&Text;.data:eq(1)&&Text",
    	"content":".content&&Text",
    	"tabs":"#NumTab a",
    	"lists":".play_list_box:eq(#id) .playlist_full li"
	},
    搜索:'body .searchlist_item;a&&title;.vodlist_thumb&&data-original;.pic_text.text_right&&Text;a&&href;.vodlist_sub&&Text',
}
