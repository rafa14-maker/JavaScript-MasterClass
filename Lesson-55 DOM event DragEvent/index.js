const div = document.querySelector('div');
const p = document.querySelector('p');


p.addEventListener('dragstart',function (e) {
    e.dataTransfer.setData("text" , e.target.id);
    console.log('dragiing');
});

div.addEventListener('dragover',function(e) {
    e.preventDefault();
});

div.addEventListener('drop',function (e) {
    let id = e.dataTransfer.getData("text"); 
    console.log(id);
    div.appendChild(document.querySelector('#'+id));
});