//my function
function changeText(){
    var txt = document.getElementById('learn');
    var click = document.getElementById('btn');
    if (txt.innerHTML === "I am currently learning HTML and CSS." && click.innerHTML ==="Update Me" ){
        txt.innerHTML= 'I am currently learning Javascript.';
        click.innerHTML = 'Updated'
    } else{
        txt.innerHTML = 'I am currently learning HTML and CSS.';
        click.innerHTML = 'Update Me'
    }
}
