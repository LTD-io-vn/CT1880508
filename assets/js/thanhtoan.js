/*  KHỞI TẠO TRANG THANH TOÁN */

window.onload = function () {

    renderCheckoutPage();

};


/*  HIỂN THỊ ĐƠN HÀNG*/

function renderCheckoutPage() {

    const tbody = document.getElementById("checkout-items");

    if (!tbody) return;

    const items = getCartItems();

    tbody.innerHTML = "";

    let subtotal = 0;

    if (items.length === 0) {

        tbody.innerHTML = `
        <tr>
            <td colspan="2" style="text-align:center;padding:30px">
                Không có sản phẩm trong giỏ hàng.
            </td>
        </tr>
        `;

        document.querySelector(".subtotal-row td:last-child").innerHTML =
            `0 <sup>đ</sup>`;

        document.querySelector(".total-row td:last-child").innerHTML =
            `0 <sup>đ</sup>`;

        return;
    }

    items.forEach(item => {

        subtotal += item.price * item.amount;

        tbody.innerHTML += `
        <tr>

            <td>
                ${item.origin}
                -
                ${item.name}
                <strong> × ${item.amount} </strong>
            </td>

            <td>
                ${(item.price * item.amount).toLocaleString("vi-VN")}
                <sup>đ</sup>
            </td>

        </tr>
        `;

    });

    document.querySelector(".subtotal-row td:last-child").innerHTML =
        `${subtotal.toLocaleString("vi-VN")} <sup>đ</sup>`;

    updateCheckoutTotal();

}


/*   CẬP NHẬT TỔNG TIỀN*/

function updateCheckoutTotal() {

    let subtotal = 0;

    const items = getCartItems();

    items.forEach(item => {

        subtotal += item.price * item.amount;

    });

    let shipping = 40000;

    const shippingRadio =
        document.querySelectorAll("input[name='checkout_shipping']");

    if (shippingRadio.length > 1 && shippingRadio[1].checked) {
        shipping = 0;
    }

    document.querySelector(".total-row td:last-child").innerHTML =
        `${(subtotal + shipping).toLocaleString("vi-VN")} <sup>đ</sup>`;

}


/*  ĐẶT HÀNG*/

function placeOrder() {

    const items = getCartItems();

    if (items.length === 0) {

        alert("Giỏ hàng đang trống.");
        return;

    }


    clearCart();

     window.location.href = "dathangthanhcong.html";

}


/*  THAY ĐỔI PHƯƠNG THỨC GIAO HÀNG*/

document
    .querySelectorAll("input[name='checkout_shipping']")
    .forEach(radio => {

        radio.addEventListener("change", () => {

            updateCheckoutTotal();

        });

    });
