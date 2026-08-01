function renderCartPage() {
	const tbody = document.querySelector(".cart-content tbody");
	const items = getCartItems();

	tbody.innerHTML = "";

	if (items.length === 0) {
		tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:50px 0;">Giỏ hàng của bạn đang trống.</td></tr>`;
		return;
	}

	items.forEach(item => {
		tbody.innerHTML += `
			<tr>
				<td class="td-remove">
					<button class="remove-btn" onclick="removeItem('${item.id}')">
						<i class="fa-solid fa-x"></i>
					</button>
				</td>

				<td class="td-img">
					<img src="${item.image}" width="80">
				</td>

				<td class="td-name">
					<p>${item.origin} - ${item.name}</p>
				</td>

				<td class="td-price">${toStringPrice(item.price)}</td>

				<td class="td-quantity">
					<div class="quantity-group">
						<button class="qty-btn" onclick="changeQuantity('${item.id}', -1)">
							<i class="fa-solid fa-minus"></i>
						</button>

						<input type="number" min="1" max="100" value="${item.amount}" onchange="inputQuantity('${item.id}', this.value)">

						<button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">
							<i class="fa-solid fa-plus"></i>
						</button>
					</div>
				</td>

				<td class="td-total">${toStringPrice(item.price * item.amount)}</td>
			</tr>
		`;
	});
}

function removeItem(id) {
	removeFromCart(id);
	renderCartPage();
}

function changeQuantity(id, delta) {
	let amount = Number(localStorage.getItem(id));

	amount += delta;

	if (amount <= 0) {
		removeFromCart(id);
	} else if (amount <= 100) {
		localStorage.setItem(id, amount);
	}

	renderCartPage();
}

function inputQuantity(id, value) {
	value = Number(value);

	if (value < 1) {
		value = 1;
	}

	if (value > 100) {
		value = 100;
	}

	localStorage.setItem(id, value);

	renderCartPage();
}

function clearAllCart() {
	if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
		clearCart();
		renderCartPage();
	}
}

renderCartPage();