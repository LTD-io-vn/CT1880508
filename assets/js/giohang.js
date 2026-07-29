/* KHỞI TẠO TRANG GIỎ HÀNG*/

document.addEventListener("DOMContentLoaded", () => {

    renderCartPage();

    // Nút xóa toàn bộ giỏ hàng
    const clearCartBtn = document.getElementById("btn-clear-cart");

    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", () => {

            if (confirm("Bạn có chắc chắn muốn làm sạch giỏ hàng không?")) {

                clearCart();
                renderCartPage();

            }

        });
    }

    // Nút tiến hành thanh toán
    const checkoutBtn = document.getElementById("btn-checkout");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {

            const items = getCartItems();

            if (items.length === 0) {
                alert("Giỏ hàng của bạn đang trống, vui lòng thêm sản phẩm trước khi thanh toán!");
                return;
            }

            let total = items.reduce(
                (sum, item) => sum + (item.price * item.amount),
                0
            );

            const formattedTotal =
                total.toLocaleString("vi-VN") + " đ";

            alert(
                `Thanh toán thành công!\nTổng giá trị đơn hàng: ${formattedTotal}\nCảm ơn bạn đã ủng hộ cửa hàng.`
            );

            clearCart();
            renderCartPage();

        });
    }

});


/* XÓA MỘT SẢN PHẨM */

function handleRemoveItem(id) {

    if (confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?")) {

        removeFromCart(id);
        renderCartPage();

    }

}


/* HIỂN THỊ GIỎ HÀNG*/

function renderCartPage() {

    const tbody =
        document.querySelector(".cart-content-left tbody");

    if (!tbody) return;

    const subtotalElement =
        document.querySelector(".summary-row .price-text");

    const totalElement =
        document.querySelector(".total-row .price-text");

    const cartCount =
        document.querySelector(".cart-count");

    const items = getCartItems();

    tbody.innerHTML = "";

    // Giỏ hàng trống
    if (items.length === 0) {

        tbody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align:center;padding:50px 0;">
                Giỏ hàng của bạn đang trống.
            </td>
        </tr>
        `;

        subtotalElement.innerHTML = `0 <sup>đ</sup>`;
        totalElement.innerHTML = `0 <sup>đ</sup>`;

        if (cartCount) {
            cartCount.textContent = 0;
        }

        return;

    }

    let subtotal = 0;
    let totalAmount = 0;

    items.forEach(item => {

        subtotal += item.price * item.amount;
        totalAmount += item.amount;

        tbody.innerHTML += `
        <tr>

            <td class="td-remove">
                <button
                    class="remove-btn"
                    onclick="removeItem('${item.id}')">
                    ×
                </button>
            </td>

            <td class="td-img">
                <img src="${item.image}" width="80">
            </td>

            <td class="td-name">
                <p>${item.origin} - ${item.name}</p>
            </td>

            <td class="td-price">
                ${item.price.toLocaleString("vi-VN")}
                <sup>đ</sup>
            </td>

            <td class="td-quantity">

                <div class="quantity-group">

                    <button
                        class="qty-btn"
                        onclick="changeQuantity('${item.id}', -1)">
                        -
                    </button>

                    <input
                        type="number"
                        min="1"
                        max="100"
                        value="${item.amount}"
                        onchange="inputQuantity('${item.id}', this.value)">

                    <button
                        class="qty-btn"
                        onclick="changeQuantity('${item.id}', 1)">
                        +
                    </button>

                </div>

            </td>

            <td class="td-total">
                ${(item.price * item.amount).toLocaleString("vi-VN")}
                <sup>đ</sup>
            </td>

        </tr>
        `;

    });

    let shipping = 40000;

    const freeShipping =
        document.querySelectorAll("input[name='shipping_method']");

    if (freeShipping[1].checked) {
        shipping = 0;
    }

    subtotalElement.innerHTML =
        `${subtotal.toLocaleString("vi-VN")} <sup>đ</sup>`;

    totalElement.innerHTML =
        `${(subtotal + shipping).toLocaleString("vi-VN")} <sup>đ</sup>`;

    if (cartCount) {
        cartCount.textContent = totalAmount;
    }

}


/* XÓA SẢN PHẨM THEO ID*/

function removeItem(id) {

    removeFromCart(id);

    renderCartPage();

}


/* ==THAY ĐỔI SỐ LƯỢNG=== */

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


/* CẬP NHẬT PHÍ VẬN CHUYỂN */

function updateCartShipping() {

    let subtotal = 0;

    const items = getCartItems();

    items.forEach(item => {
        subtotal += item.price * item.amount;
    });

    const shipping = Number(
        document.querySelector(
            "input[name='shipping_method']:checked"
        ).value
    );

    document.querySelector(".subtotal-price").innerHTML =
        `${subtotal.toLocaleString("vi-VN")} <sup>đ</sup>`;

    document.querySelector(".total-price").innerHTML =
        `${(subtotal + shipping).toLocaleString("vi-VN")} <sup>đ</sup>`;

}


document
    .querySelectorAll("input[name='shipping_method']")
    .forEach(radio => {

        radio.addEventListener("change", function () {
            updateCartShipping();
        });

    });


/* Xóa all*/

function clearAllCart() {

    if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {

        clearCart();

        renderCartPage();

        updateCartShipping();

    }

}
