var player1 = Math.floor((Math.random()*3));
var player2 = Math.floor((Math.random()*3));
// if(player1==player2)
// alert(player1);
//0-->stone 1-->paper 2-->scissor
var path1 = "./images/";
var path2 ="./images/";
document.querySelector(".player1").setAttribute("src",path1+(player1+1)+".png");
document.querySelector(".player2").setAttribute("src",path2+(player2+1)+".png");
console.log(player1,player2);
if(player1==player2)
document.querySelector('h2').innerText="It's a Draw Replay";
else if(player1==0)
{
    if(player2==2){
    document.querySelector('h2').innerText="Player 1 has won the game.";
    }
    else
    document.querySelector('h2').innerText="Player 2 has won the game";
}
else if(player1==1)
{
    if(player2==0)
    document.querySelector('h2').innerText="Player 1 has won the game";
    else
    document.querySelector('h2').innerText="Player 2 has won the game";
}
else{
    if(player2==1)
    document.querySelector('h2').innerText="Player 1 has won the game";
    else
    document.querySelector('h2').innerText="Player 2 has won the game";
}
function reload(){location.reload();}