let direction = 1
let posX = 0
let posY = 0
let change = 20;
/*
1. right
2. down
3. up
4. left
*/
const box = document.getElementById('box')
function move() {
    if(direction == 1) {
        if(posX < 380) {
            posX = posX + change;
            box.style.left = posX+"px";
        }
        else {
            direction = 2;
            console.log("Wall hit!");
        }
    }
    else if(direction == 2) {
        if(posY < 380) {
            posY = posY + change;
            box.style.top = posY+"px";
        }
        else {
            direction = 3;
            console.log("Wall hit!");
        }
    }
    else if(direction == 3) {
        if(posX > 0) {
            posX = posX - change;
            box.style.left = posX+"px";
        }
        else {
            direction = 4;
            console.log("Wall hit!");
        }
    }
    else if(direction == 4) {
        if(posY > 0) {
            posY = posY - change;
            box.style.top = posY+"px";
        }
        else {
            direction = 1;
            console.log("Wall hit!");
        }
    }
}

function increment() {
    if (change < 40) {
        change = change + 10;
    }
}

function decrement() {
    if (change > 10) {
        change = change - 10;
    }
}