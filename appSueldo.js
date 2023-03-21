let acumSalarioA =[];
let acumSalarioB =[];

function porcentajeAumento (){
    let valorA =document.getElementById("inputValue");
    let valorB = document.getElementById("inputNewValue");
    const elementoA = Number(valorA.value);
    const elementoB = Number(valorB.value);
    let elementoA12=elementoA*12;
    let elementoB12=elementoB*12;
    acumSalarioA.push(elementoA12);
    acumSalarioB.push(elementoB12);
    const porcent = porcentaje(elementoA,elementoB);
    const PorcentajeA = document.getElementById("valueUp");
    PorcentajeA.innerText = "El aumento es "+porcent+"%";
};
function primas(){
    let oldPrima = document.getElementById("inputValue");
    let newPrima = document.getElementById("inputNewValue");
    const OldPrima = Number(oldPrima.value);
    const NewPrima = Number(newPrima.value);
    acumSalarioA.push(OldPrima);
    acumSalarioB.push(NewPrima);
    const OldPrimaSem = Number(oldPrima.value)/2;
    const NewPrimaSem = Number(newPrima.value)/2;
    const prima = document.getElementById("prima");
    const Newprima = document.getElementById("newPrima");
    const primaSem = document.getElementById("primaSem");
    const NewprimaSem = document.getElementById("newPrimaSem");
    prima.innerText="La anterior prima anual es "+ OldPrima;
    Newprima.innerText = "La nueva prima anual es " + NewPrima;
    primaSem.innerText="La anterior prima semestral es "+ OldPrimaSem;
    NewprimaSem.innerText = "La nueva prima semestral es " + NewPrimaSem;
};

function cesantias(){
    let cesantias = document.getElementById("inputValue");
    let newCesantias = document.getElementById("inputNewValue");
    const OldCesantias = Number(cesantias.value);
    const Newcesantias = Number(newCesantias.value);
    acumSalarioA.push(OldCesantias);
    acumSalarioB.push(Newcesantias);
    const Cesantias = document.getElementById("cesantias");
    const NewCesantias = document.getElementById("newCesantias");
    Cesantias.innerText="Elvalor anterior de cesantias es "+ OldCesantias;
    NewCesantias.innerText = "El nuevo valor de cesantias es " + Newcesantias;
};

function interesesCesantias (){
    let valorA =document.getElementById("inputValue");
    let valorB = document.getElementById("inputNewValue");
    const elementoA = Number(valorA.value);
    const elementoB = Number(valorB.value);
    const interesesA = interesesCesant(elementoA);
    const interesesB = interesesCesant(elementoB);
    acumSalarioA.push(interesesA);
    acumSalarioB.push(interesesB);
    const interesA = document.getElementById("interesesCesan");
    const interesB = document.getElementById("newInteresesCesan");
    interesA.innerText = "El interes de las cesantias es "+interesesA;
    interesB.innerText = "El interes de las cesantias es "+interesesB;
};

function totalA(){
    console.log(acumSalarioA);
    let sumaTotalA = reducir(acumSalarioA);
    const sumatoriaA = document.getElementById("sumatoriaA");
    sumatoriaA.innerText= "la suma anual es "+sumaTotalA;
}

function totalB(){
    sumaTotalB = reducir(acumSalarioB);
    console.log(acumSalarioB);
    const sumatoriaB = document.getElementById("sumatoriaB");
    sumatoriaB.innerText= "la suma anual es "+sumaTotalB;
}

function reducir(a){
    let sumaTotal = a.reduce(sumatoria);
    return sumaTotal
}

function porcentaje (A,B){
    const porcentaje = ((B-A)/A)*100;
    console.log(porcentaje);
    return porcentaje;
}

function interesesCesant (i){
    let intereses = (i*12)/100;
    return intereses;
}

function sumatoria(j,k){
    return j+k;
}