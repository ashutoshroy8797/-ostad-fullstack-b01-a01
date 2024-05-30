function displayMsg() {
    var text = document.getElementById("basic-sign-up-button");
    text.style.display = "block";
}
function displayText() {
    var text = document.getElementById("pro-sign-up-button");
    text.style.display = "block";
}


const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num"),
price = document.querySelector(".price"),
room = document.querySelector(".room"),
add = document.querySelector(".add"),
subtract = document.querySelector(".subtract"),
proNum = document.querySelector(".proNum"),
proRoom = document.querySelector(".proRoom"),
proPrice = document.querySelector(".proPrice");

let a = 1;
let prices = 199;
plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ?   a : a;
    num.innerText = a;
    room.innerText = a;
    price.innerText = prices * a;
});

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
    }
    a = (a < 10) ?   a : a;
    num.innerText = a;
    room.innerText = a;
    price.innerText = prices * a;
});


let p = 1;
let proPrices = 249;
add.addEventListener("click", ()=>{
    p++;
    p = (p < 10) ?   p : p;
    proNum.innerText = p;
    proRoom.innerText = p;
    proPrice.innerText = proPrices * p;
});

subtract.addEventListener("click", ()=>{
    if(p > 1){
        p--;
    }
    p = (p < 10) ?   p : p;
    proNum.innerText = p;
    proRoom.innerText = p;
    proPrice.innerText = proPrices * p;
});

