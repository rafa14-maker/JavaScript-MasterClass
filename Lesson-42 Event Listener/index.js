var myvar = document.querySelector("#para");

myvar.addEventListener("mouseover",function () {
    myvar.classList.add("popo");
});

myvar.addEventListener("mouseout",function () {
    myvar.classList.remove("popo");
});

