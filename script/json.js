var user = [{
  'name':'jafn',
  'sex':'female',
  'city':'city',
  'phone':'phone',
  'email':'dhf@dfda.com',
  'password':'password',
  'level':'level',
  'lastTimeLogin':'lastTimeLogin',
  'ipAddress':'ipAddress',
  'songList':['list1Name','list2Name'],
  'laterPlay':['songName1','songName2'],
  'musicStation':['station1','station2'],
  'storage':['storage1','storage2'],
  'skinSet':'skinSet',
  'nightModel':'false'
}],

songList = [{
  'name':'华语速爆新歌',
  'cover':'http://p1.music.126.net/4gZNU13YQeFvYQfxmgSeyg==/109951163249663052.jpg?param=140y140',
  'type':'1'
},{
  'name':'品味经典',
  'cover':'http://p1.music.126.net/ClwfuCI5lihsf5_64PLKsw==/109951163239478424.jpg?param=140y140',
  'type':'1'
},{
  'name':'时光里的赶路人',
  'cover':'http://p1.music.126.net/HudUZ96U8W5b5PVkUVHC5A==/109951163261029048.jpg?param=140y140',
  'type':'1'
},{
  'name':'乡村风情',
  'cover':'http://p1.music.126.net/Xckni3r-WW5bPHj3IZqquA==/3263350514308277.jpg?param=140y140',
  'type':'1'
},{
  'name':'澳洲爵士天后',
  'cover':'http://p1.music.126.net/mI_7p-bHBG7swsa97kSPNg==/6058309069142344.jpg?param=140y140',
  'type':'1'
},{
  'name':'英文歌曲精选',
  'cover':'http://p1.music.126.net/qNnaotqswSSIaxPHTpdmBA==/18770862511115632.jpg?param=140y140',
  'type':'1'
},{
  'name':'R&B柔情男嗓',
  'cover':'http://p1.music.126.net/zhWA4EYQAwxevrsPEiGqYQ==/19152393044246275.jpg?param=140y140',
  'type':'1'
},{
  'name':'新歌推荐',
  'cover':'http://p1.music.126.net/zhWA4EYQAwxevrsPEiGqYQ==/19152393044246275.jpg?param=140y140',
  'type':'2'},{
    'name':'你打不过我吧',
    'cover':'http://p1.music.126.net/zhWA4EYQAwxevrsPEiGqYQ==/19152393044246275.jpg?param=140y140',
    'type':'2'
  },{
    'name':'歌谣',
    'cover':'http://p1.music.126.net/zhWA4EYQAwxevrsPEiGqYQ==/19152393044246275.jpg?param=140y140',
    'type':'2'
  },{
    'name':'第五人格',
    'cover':'http://p1.music.126.net/zhWA4EYQAwxevrsPEiGqYQ==/19152393044246275.jpg?param=140y140',
    'type':'2'
  },{
    'name':'唐人街探案2插',
    'cover':'http://p1.music.126.net/qNnaotqswSSIaxPHTpdmBA==/18770862511115632.jpg?param=140y140',
    'type':'2'
  }],
songs = [{
  'name':'songName',
  'url':'',
  'cover':'url',
  'singer':['singerName','singerSex','ablum','ages'],
  'pubTime':'2018-2-21',
  'lyricser':'name',
  'composer':'name',
  'ablum':'ablumName'
}],

videos = [{
  'name':'songName',
  'url':'url',
  'pubTime':'2018-2-21',
  'type':'1'
}];
function getSongList(songlist,type) {
  var temsonglist = [];
  for (var i = 0; i < songlist.length ; i++){
    if(songlist[i].type == type){
      temsonglist.push(songlist[i]);
    }
  }
  return temsonglist;
}
