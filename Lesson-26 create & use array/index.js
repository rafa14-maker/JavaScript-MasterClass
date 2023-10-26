var sz = parseInt(prompt("Enter array size : "));

var ary = new Array(sz);

for(var i=0;i<sz;i++)
{
    ary[i] = (prompt("Enter array element"));
}

for(var i=0;i<sz;i++)
{
    document.write(ary[i] + "<br>");
}