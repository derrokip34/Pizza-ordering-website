function Toppings(topping, price) {
    this.topping = topping
    this.price = price
}

$(document).ready(function(){
    $("#confirm").click(function(){
        var pizzaSize = parseInt($("#size option:selected").val())
        var pizzaCrust = parseInt($("#crust option:selected").val())
        var pizzaTopping = parseInt($("#topping option:selected").val())
        var pizzaAmount= parseInt($("#amount").val())
        var total = (pizzaSize + pizzaCrust + pizzaTopping) * pizzaAmount
        var newTotal = total + 250
        
        if(pizzaSize === 0 || pizzaCrust === 0 || pizzaTopping === 0) {
            alert("Please choose the size,crust,topping and number of pizzas")
        } else {
            $("#order").append("<li>Your order: " + pizzaAmount + "pizza(s)" + "Total Price: " + total + "</li>")
        }
    })
    $("#confirm-delivery").click(function() {
        var delivery = ($("#delivery option:selected").val())

        if(delivery === "yes") {
            var address = prompt("Please enter delivery address in this order(street name-town name-county name")

            alert("Your pizza(s) will be delivered to " + address)
        } else{
            alert("Your pizza(s) will be ready in 30 mins")
        }
    })
})