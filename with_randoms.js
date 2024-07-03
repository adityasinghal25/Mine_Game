let a = Math.floor(Math.random()*36);
let b = Math.floor(Math.random()*36);
let c = Math.floor(Math.random()*36);
let d = Math.floor(Math.random()*36);
let e = Math.floor(Math.random()*36);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
let x = 0;
function show(i){
    //alert(i);
    if(t[i].value==a || t[i].value==b || t[i].value==c || t[i].value==d || t[i].value==e){
        for (var j=0;j<36;j++){
            t[j].style.background = "red";
            t[j].style.color = "red";
        }
    m.innerHTML = "Game Over!! -- You cliked on a MINE";
    }
    else {
        x++;
        t[i].style.background = "green";
        t[i].style.color = "green";
        h.innerHTML = "Your Score : "+(x);
        // alert(hey);
    }
}
function re(){
    for (var j=0;j<36;j++){
        t[j].style.background = "whitesmoke";
        t[j].style.color = "whitesmoke"
        x=0;
        h.innerHTML = "Your Score : "+(x);
    }
    m.innerHTML = "";
}