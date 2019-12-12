$(document).ready(function(){
    $("#confirm").click(function(){
        var pizzaSize = parseInt($("#size option:selected").val())
        var pizzaCrust = parseInt($("#crust option:selected").val())
        var pizzaTopping = parseInt($("#topping option:selected").val())
        var pizzaAmount= parseInt($("#amount").val())
        var total = (pizzaSize + pizzaCrust + pizzaTopping) * pizzaAmount
        var newTotal = total + 200
        var delivery = ($("#delivery option:selected").val())
        
        if(pizzaSize === 0 || pizzaCrust === 0 || pizzaTopping === 0 || pizzaAmount < 1) {
            alert("Please choose the size,crust,topping and number of pizzas")
        } else if(delivery === "yes") {
            var deliveryAdress = prompt("Please enter delivery address in this order(street name-town name-county name")
            alert("You have ordered " + pizzaAmount + " pizza(s). Total price is " + newTotal + ". Your pizza will be delivered to " + deliveryAdress)
        }
    })
})