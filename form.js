
//Challenge 1 FIZZBUZZ

//for ( var x = 1; x <= 20; x++) {

   //if (x % 3 == 0 && x % 5 == 0) {
       //console.log(x + "FIZZBUZZ!!! 3D EXTREEEEMMMEEE!!!!");
    //}
    //if (x % 3 == 0) {
       //console.log("FIZZ");
    //}
    //if (x % 5 == 0) {
        //console.log("BUZZ");
    //} 
    
    //else {
        //console.log(x);
   // }
//


var year = document.getElementById("year"),
    make = document.getElementById("make"),
    model = document.getElementById("model"),
    vin = document.getElementById("vin"),
    enter = document.getElementById("enter"),
    clear = document.getElementById("clear"),
    output = document.getElementById("car-list"),
    nextid = 0,
    CarList =[];

var NewVehicle = function NewVehicle(year, make, model,vin) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.vin = vin;
    this.id = nextid++;



}


var renderCar = function renderCar (){
    output.innerHTML = "";

    for(i = 0; i < CarList.length; i++){
        var curCar = carList[i];
        output.innerHTML += i + ": " + curCar + "<br>";
    }
};

var clearInputs = function clearInputs(){
    year.value = "";
    make.value = "";
    model.value = "";
    vin.value = "";
}

enter.addEventListener("click", function(){

    var newCar = new Car(year.value, make.value, model.value, vin.value);

    carList.push(newCar);

    clearInputs();
    renderCar();

})

clear.addEventListener("click", function(){
    carList = [];
    clearInputs();
    renderCar();
})