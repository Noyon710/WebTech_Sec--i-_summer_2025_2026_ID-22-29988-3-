var price = document.getElementById("price");

var quantity = document.getElementById("quantity");

var amount = document.getElementById("amount");

var message = document.getElementById("message");

var cartButton = document.getElementById("cartBtn");

quantity.addEventListener("input", calculateAmount);

function calculateAmount()
{
    var productPrice = Number(price.value);

    var productQuantity = Number(quantity.value);

    if(productQuantity > 0)
    {
            var total = productPrice * productQuantity;

            amount.value = total;

            message.innerHTML = "";

            cartButton.style.display = "block";
        }
    else
    {
        amount.value = 0;

        message.innerHTML = "Quantity must be greater than 0";

        cartButton.style.display = "none";
    }
}