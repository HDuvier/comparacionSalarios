//se crean dos arrays para almacenar los valores acumulados mas adelante
let acumSalarioA =[];
let acumSalarioB =[];

//en esta funcion se calcula el porcentaje de aumento salarial comparandolo con el actual
function porcentajeAumento (){
    let valorA =document.getElementById("inputValue");
    let valorB = document.getElementById("inputNewValue");
    const elementoA = Number(valorA.value);
    const elementoB = Number(valorB.value);
//en estas lineas se calcula el valor anual de salario para agregarlo a cada salario
    let elementoA12=elementoA*12;
    let elementoB12=elementoB*12;
    acumSalarioA.push(elementoA12);
    acumSalarioB.push(elementoB12);
//aca usamos la funcion porcentaje y la colocamos dentro del documento html
    const porcent = porcentaje(elementoA,elementoB);
    const PorcentajeA = document.getElementById("valueUp");
    PorcentajeA.innerText = "El aumento es "+porcent+"%";
};

//en esta funcion definimos el valor de la prima anual y semestral 
function primas(){
    let oldPrima = document.getElementById("inputValue");
    let newPrima = document.getElementById("inputNewValue");
    const OldPrima = Number(oldPrima.value);
    const NewPrima = Number(newPrima.value);
//en estas lineas agregamos el valor de la prima anual a cada array
    acumSalarioA.push(OldPrima);
    acumSalarioB.push(NewPrima);
//en estas lineas calculamos el valor de la prima semestral e imprimimos los valores en el html
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

//esta funcion define el valor de las cesantias anuales
function cesantias(){
    let cesantias = document.getElementById("inputValue");
    let newCesantias = document.getElementById("inputNewValue");
    const OldCesantias = Number(cesantias.value);
    const Newcesantias = Number(newCesantias.value);
//en estas lineas agregamos el valor de las cesantias a cada array
    acumSalarioA.push(OldCesantias);
    acumSalarioB.push(Newcesantias);
//de aca en adelante imprimimos el valor anual de las cesantias en el html
    const Cesantias = document.getElementById("cesantias");
    const NewCesantias = document.getElementById("newCesantias");
    Cesantias.innerText="Elvalor anterior de cesantias es "+ OldCesantias;
    NewCesantias.innerText = "El nuevo valor de cesantias es " + Newcesantias;
};

//en esta funcion calculamos el valor de los intereses de las cesantias
function interesesCesantias (){
    let valorA =document.getElementById("inputValue");
    let valorB = document.getElementById("inputNewValue");
    const elementoA = Number(valorA.value);
    const elementoB = Number(valorB.value);
//en estas lineas usamos la funcion interessesCesant para calcular el valor de cada caso
    const interesesA = interesesCesant(elementoA);
    const interesesB = interesesCesant(elementoB);
//en estas lineas agregamos el valor de las cesantias a cada array
    acumSalarioA.push(interesesA);
    acumSalarioB.push(interesesB);
//aca procedemos a imprimir cada valor en el html
    const interesA = document.getElementById("interesesCesan");
    const interesB = document.getElementById("newInteresesCesan");
    interesA.innerText = "El interes de las cesantias es "+interesesA;
    interesB.innerText = "El interes de las cesantias es "+interesesB;
};

//en esta funcion hacemos la sumatoria total de los valores devengados por el trabajador en el año con el salario A
function totalA(){
    let sumaTotalA = reducir(acumSalarioA);
    const sumatoriaA = document.getElementById("sumatoriaA");
    sumatoriaA.innerText= "la suma anual es "+sumaTotalA;
}

//en esta funcion hacemos la sumatoria total de los valores devengados por el trabajador en el año con el salario B
function totalB(){
    sumaTotalB = reducir(acumSalarioB);
    const sumatoriaB = document.getElementById("sumatoriaB");
    sumatoriaB.innerText= "la suma anual es "+sumaTotalB;
}

//funcion para reducir un array sumando todos sus elementos
function reducir(a){
    let sumaTotal = a.reduce(sumatoria);
    return sumaTotal
}

//funcion para calcular la relacion porcentual de 2 valores
function porcentaje (A,B){
    const porcentaje = ((B-A)/A)*100;
    console.log(porcentaje);
    return porcentaje;
}

//funcion para calcular el 12% de un valor i
function interesesCesant (i){
    let intereses = (i*12)/100;
    return intereses;
}

//funcion para realizar una sumatoria de elementos
function sumatoria(j,k){
    return j+k;
}