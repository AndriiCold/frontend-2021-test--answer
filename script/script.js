const pandemicStartMap = "XX0XX10010X000X010X0"
const myArr = Array.from(String(pandemicStartMap), Number);

//Pandemic start

let PandemicStart = document.getElementById("PandemicStart");
let corona = null;
for (var i=0; i <myArr.length; i++) {
    if(isNaN(myArr[i])){
        corona = document.createElement("div");
        PandemicStart.before(corona);
        corona.classList.add("ocean");
    }
    else if (myArr[i] ===0){
        corona = document.createElement("div");
        PandemicStart.before(corona);
        corona.classList.add("uninfected");
    }
    else if (myArr[i]>0){
        corona = document.createElement("div");
        PandemicStart.before(corona);
        corona.classList.add("infected");
    }
}

//Pandemic end

for (var n = 0; n < myArr.length; n++) {
    if (!isNaN(myArr[n])) {
        if (myArr[n] > 0) {
            for (m = n; m >= 0; m--) {
                if (isNaN(myArr[m])) {
                    break
                }
                else for (d = m; d < myArr.length; d++) {
                    if (!isNaN(myArr[d])) {
                        myArr.fill(1, start = d, end = d + 1);
                    }
                    else if (isNaN(myArr[d])) {
                        break
                    }
                }
            }
        }
    }
}

let PandemicEnd = document.getElementById("PandemicEnd");

for (var g=0; g <myArr.length; g++) {
    if(isNaN(myArr[g])){
        corona = document.createElement("div");
        PandemicEnd.before(corona);
        corona.classList.add("ocean");
    }
    else if (myArr[g] ===0){
        corona = document.createElement("div");
        PandemicEnd.before(corona);
        corona.classList.add("uninfected");
    }
    else if (myArr[g]>0){
        corona = document.createElement("div");
        PandemicEnd.before(corona);
        corona.classList.add("infected");
    }
}

//Total

let totalSum = myArr.filter(i => i >= 0);
total.innerHTML += " " + totalSum.length;

//Infected

let infectedSum = myArr.filter(i => i > 0);
infected.innerHTML += " " + infectedSum.length;

//Percentage

let percentageSum = (infectedSum.length / totalSum.length) * 100;
percentage.innerHTML += "  " + percentageSum + '%';
