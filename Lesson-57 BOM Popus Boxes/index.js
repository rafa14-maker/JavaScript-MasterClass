alert("call me daddy");

function check(){
    var ch = confirm("Are you ok");
    if(ch){
        console.log("lets do this");
    }else{
        console.log("cry more");
    }

    let text = prompt("what is your name ? : ");
    let name ;

    if(text == null || text == "")name = 'No input';
    else name = text;

    let h1 = document.createElement('h1');
    let textnode = document.createTextNode(text);
    h1.appendChild(textnode);
    document.body.append(h1);
}


check();

