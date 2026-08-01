let filterToggleState = false;

const filterToggle = document.getElementById("product-filter-toggle");
const filterContainer = document.getElementById("product-filter");

filterToggle.addEventListener("click", function () {
	filterToggleState = !filterToggleState;

	if (filterToggleState) {
		filterToggle.classList.add("active");
		filterContainer.style.removeProperty("display");
	} else {
		filterToggle.classList.remove("active");
		filterContainer.style.display = "none";
	}
});

const urlParams = new URLSearchParams(location.search);
const searchText = (urlParams.get("search") || "").toLowerCase();
const filterTypes = urlParams.getAll("filter");
const filterSort = urlParams.get("sort") || "type";

const typeFilter = document.getElementById("type-filter");
const productContainer = document.getElementById("product-list");

document.getElementById("search-box").value = searchText;
document.getElementById("filter-sort").value = filterSort;

const entries = Object.entries(productData);

if (filterSort != "type") {
	entries.sort((a, b) => {
		if (filterSort == "price-up") {
			return a[1].price - b[1].price;
		}

		if (filterSort == "price-down") {
			return b[1].price - a[1].price;
		}

		return a[1].name.localeCompare(b[1].name);
	});
}

for (const [id, data] of entries) {
	const typeIncluded = !urlParams.has("filter") || filterTypes.includes(data.type);

	if (!document.getElementById(data.type)) {
		const div = document.createElement("div");
		div.innerHTML = `<input type="checkbox" id="${data.type}" name="filter" value="${data.type}" checked /><label for="${data.type}">${data.type}</label>`;
		typeFilter.appendChild(div);
		document.getElementById(data.type).checked = typeIncluded;
	}

	if (typeIncluded) {
		if (!searchText || data.name.toLowerCase().includes(searchText) || data.origin.toLowerCase().includes(searchText)) {
			const div = document.createElement("div");
			div.innerHTML = `<img src="${data.image}"><h4>${data.name}</h4><p>${data.origin}</p><h5>${toStringPrice(data.price)}</h5>`;
			div.onclick = () => displayProductDetails(id);
			productContainer.appendChild(div);
		}
	}
}

document.getElementById("product-info-add-to-cart").addEventListener("click", function() {
	addToCart(selectedProductId, Number(document.getElementById("product-info-amount").value));
});