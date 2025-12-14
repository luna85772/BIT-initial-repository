document.addEventListener("DOMContentLoaded", ()=>{

    console.log("DOM listo!")

    const mainSection = document.getElementById("main-section")
    console.log("section principal:", mainSection);

    const paramsName = document.getElementsByName("para-name")
    console.log("paramsName:", paramsName);

    const allButtons = document.getElementsByTagName("button")
    console.log("allButtons:", allButtons)
    
    const jsOnclickBtn = document.getElementById("js-onclick-btn")
    jsOnclickBtn.onclick = ()=> {
        alert("hiciste click en el boton click JS onclick")
        console.log("se hizo click sobre el boton JS onclick")
    }

    const promptBtn = document.getElementById("prompt-btn")
    promptBtn.onclick = ()=>{
        const nombreUsuario = prompt("Por favor ingrese su nombre")

        if (nombreUsuario) {
            alert("hola " + nombreUsuario + "!")
    }       else {
            alert("hola, desconocido ")
    } 

    } 

    //condicionales

    


    /* 
    for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
    }

    for (let index = 0; index < 10;  index++) {
        
    }

    let n = 0

    while (n < 10) {
        n++;
    }

    do {
        n++; 
    }   while (n < 100);

    

    function sumar(a, b) {
        return a + b;
    }

    console.log(sumar(3, 5)); 

    let persona = {
    nombre: "Carlos",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
    };

    persona.saludar();

    let numeros = [1, 2, 3, 4, 5];
    let conjunto = new Set([1, 2, 3, 3, 4, 5]);

    console.log(numeros); // [1, 2, 3, 4, 5]
    console.log(conjunto); // Set { 1, 2, 3, 4, 5 }

    let numero = 2

    if (numero % 2 === 0) {
        console.log ("El número es par.")
    }
    else {
        console.log("El número es impar.")
    }*/
        
})

