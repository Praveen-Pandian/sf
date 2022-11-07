const line = document.getElementById("timeline")
let cnt = 99;

setInterval(()=>{
    line.style.setProperty("--color",`linear-gradient(
        to top,
        white 0%,
        white ${--cnt}%,
        #3AA346 ${cnt}%,
        #3AA346 100%
    )`);
},150);
