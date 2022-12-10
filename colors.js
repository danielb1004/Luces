let activef = false;
let activest = false;

function Mycolor(color) {
    element = document.getElementById("color").style.backgroundColor = color;
}

function festive() {
    if (activef) {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    var minisegundos = fechaHora.getMilliseconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("reloj").innerHTML = horas + ':' + minutos + ':' + segundos + ':' + minisegundos;

    clock =  document.getElementById("reloj").innerText
    style = document.getElementById("reloj").style.display = "none";
    minisegundos = clock.slice(9, 12);
    // a cada minisegundo le definimos un color
    if (minisegundos > 000 && minisegundos < 100) {
        Mycolor("red");
    }
    if (minisegundos > 100 && minisegundos < 200) {
        Mycolor("orange");
    }
    if (minisegundos > 200 && minisegundos < 300) {
        Mycolor("yellow");
    }
    if (minisegundos > 300 && minisegundos < 400) {
        Mycolor("green");
    }
    if (minisegundos > 400 && minisegundos < 500) {
        Mycolor("blue");
    }
    if (minisegundos > 500 && minisegundos < 600) {
        Mycolor("indigo");
    }
    if (minisegundos > 600 && minisegundos < 700) {
        Mycolor("violet");
    }
    if (minisegundos > 700 && minisegundos < 800) {
        Mycolor("pink");
    }
    if (minisegundos > 800 && minisegundos < 900) {
        Mycolor("black");
    }
    if (minisegundos > 900 && minisegundos < 1000) {
        Mycolor("white");
    }
} 
}

function strobo() {
    if (activest) {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    var minisegundos = fechaHora.getMilliseconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("reloj").innerHTML = horas + ':' + minutos + ':' + segundos + ':' + minisegundos;   
    clock =  document.getElementById("reloj").innerText
    style = document.getElementById("reloj").style.display = "none";
    minisegundos = clock.slice(9, 10);   
    // definimos si es par o impar
    if (minisegundos % 2 == 0) {
        Mycolor("black");
    }
    if (minisegundos % 2 != 0) {
        Mycolor("white");
    }
    }
}



function change() {
    const xhr = new XMLHttpRequest();
    place = document.getElementById("selector").value
    xhr.open("GET", "http://192.168.0.101:5000/place/"+place);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        console.log(data);
        Mycolor("black");
        // comprobamos que venga R en el json
        if (data["R"]) {
        // mandamos las ordenes
        if (data["R"] == "strobo") {
            activef = false;
            activest = true;
            setInterval(strobo, 1);
        } else{
            activest = false;
        if (data["R"] == "festive") {
            activef = true;
            setInterval(festive, 1);
        } else{
            activef = false;
            Mycolor(data["R"]);
        } 
    }   

    }
    

    } else {
        console.log(`Error: ${xhr.status}`);
    }
    };    
    
}



window.onload = function() {
    // setInterval(change, 100);
    
    
    // on();
    // setInterval(festive, 100);
  }
  
