//receipt function 
function getReceipt() {
var text1="<h3>You Ordered:</h3>";      //variable for text that will summarize what you have ordered
var runningTotal=0;     //total cost variable
var sizeTotal=0;        //variable for size of order
var sizeArray=document.getElementsByClassName("size");      //varaible that tracks selected pizza size
for (var i = 0; i<sizeArray.length;i++) {       //loop that iterates through each HTML square element
    if (sizeArray[i].checked) { // if the checkbox  is ticked then  
        var selectedSize=sizeArray[i].value;     //variable for selected size
        text1=text1+selectedSize+"<br>";        //displays your order
    }
}//assigns the price to each pizza
if (selectedSize==="Personal Pizza") {
sizeTotal=6;
}
if (selectedSize==="Small Pizza") {
    sizeTotal=8;
}
if (selectedSize==="Medium Pizza") {
    sizeTotal=10;
}
if (selectedSize==="Large Pizza") {
    sizeTotal=14;
}
if (selectedSize==="Extra Large Pizza") {
    sizeTotal=16;
}
if (selectedSize==="XXL Pizza") {
    sizeTotal=20;
}
//writes the total for the order
runningTotal=sizeTotal;
console.log(selectedSize+ " =$"+sizeTotal+".00");
console.log("size text1: "+text1);
console.log("subtotal: $"+runningTotal+".00");
getTopping(runningTotal,text1);
};
//function to add toppings and to display what topping you selected in 
function getTopping(runningTotal,text1) {
    var toppingTotal=0;
    var selectedTopping=[];
    var toppingArray=document.getElementsByClassName("toppings");//gets a topping information from vegetable and meat sections
    for (var j=0;j<toppingArray.length;j++) {//loop that iterates through each HTML square element
        if (toppingArray[j].checked) { //looks up selected toppins
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1=text1+toppingArray[j].value+"<br>";  //displays the toppings

        }
    }
    var toppingCount = selectedTopping.length;//variable to keep track of how many toppings you have
    if (toppingCount>1) {//if there is more then one topping 
        toppingTotal=(toppingCount-1);//first one is free
    } else {// if you select no toppings
    toppingTotal=0;
    }//the rest puts topping and cost  information in to console log.
    runningTotal=(runningTotal+toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free toopping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$" +runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};


