let distance;
let age;
let price;
let finalprice;


const button = document.getElementById("test");

button.addEventListener("click", function(){
    distance = document.getElementById("km").value;
    console.log("Distanza:", distance)
    age = document.getElementById("age").value;
    console.log("Età:", age)
    price = 0.21 * distance;
    finalprice;

    let under = price * 0.2
    let over = price * 0.4

    if(age < 18){
        finalprice = price - under;
        document.getElementById("discount").innerHTML = "Applicato sconto under 18 " + "( -" + under.toFixed(2) + "€ )"
    }
    else if(age >= 65){
        finalprice = price - over;
        document.getElementById("discount").innerHTML = "Applicato sconto over 65" + "( -" + over.toFixed(2) + "€ )"
    }
    else{
        finalprice = price;
    }

    document.getElementById("ticketprice").innerHTML = finalprice.toFixed(2) + "€";
})



