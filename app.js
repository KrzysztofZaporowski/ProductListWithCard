async function fetchProducts() {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const itemsSection = document.querySelector(".items");

addEventListener("DOMContentLoaded", async () => {
  const products = await fetchProducts();
  console.log(products);

  products.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item-card");
    itemElement.innerHTML = `
        <img src="${item.image.desktop}" alt="${item.name}" class="item-image">
        <h3>${item.name}</h3>
        <span class="item-price">$${item.price}</span>
        <span class="item-category">${item.category}</span>
    `;
    itemsSection.appendChild(itemElement);
  });
});
