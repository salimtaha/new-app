var count = 0;
function startTimer(){
    setInterval (function(){
        count++;
        document.getElementById("timer").innerHTML = count;
    } , 1000)
}