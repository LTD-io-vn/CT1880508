document
	.querySelectorAll("input[name='checkout_shipping']")
	.forEach(function(radio) {
		radio.addEventListener("change", function() {
			updateCheckoutTotal();
		});
	});

renderCheckoutPage();