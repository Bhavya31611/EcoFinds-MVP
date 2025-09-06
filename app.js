document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "feed.html";

  alert("Login submitted! (Connect to backend later)");
});

document.getElementById("addProductForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Product added! (Store in backend later)");
});
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const price = params.get("price");

document.querySelector("h2").textContent = title;
document.querySelector("p.price").textContent = `₹${price}`;
onclick="viewProduct('Vintage Jacket', 'Clothing', 799, 'A stylish second-hand denim jacket.', 'images/vintage-jacket.jpg')"