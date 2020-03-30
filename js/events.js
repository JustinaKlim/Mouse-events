let btn = document.getElementById('btn');

btn.addEventListener('click', buttonClicked);
function buttonClicked (event){
    document.getElementById('btn').style="background-color: red; color: white; width: 150px";
}


let btn1 = document.querySelector('.bt');

btn1.addEventListener('mouseover', buttonMouseOver);
function buttonMouseOver (event) {
    document.querySelector('.bt').style="background-color: orange";
}


let btn2 = document.querySelector('.bt2');

btn2.addEventListener('mousedown', mouseDown);
function mouseDown (event) {
    document.querySelector('.bt2').style="background-color: red";
}

btn2.addEventListener('mouseup', mouseUp);
function mouseUp (event) {
    document.querySelector('.bt2').style="background-color: yellow";
}