window.addEventListener("load",function (e) {
 console.log("load");   
})

window.addEventListener("unload",function (e) {
    console.log("unload");   
   })

   window.addEventListener("scroll",function (e) {
    console.log("scroll");   
   })

   window.addEventListener("resize",function () {
      const height = window.outerHeight;
      const width = window.outerWidth;
      console.log('width : ${width} ');  
   })