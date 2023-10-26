
function maxhigh(playerinfo){
    var pk = playerinfo[0][1];
    var idx = 0;
    for(var i=0;i<playerinfo.length;i++){
        if(pk < playerinfo[i][1])
        {
            pk = playerinfo[i][1];
            idx = i;
        }
    }
    return idx;
}

var playerinfo = [['fahim',20],['rafayet',50],['Hossain',30]];

var mx = maxhigh(playerinfo);

console.log(mx);

document.write("Name : "+playerinfo[mx][0]+", Score :"+playerinfo[mx][1]);

