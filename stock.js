// script.js

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-list'); // This will be the div in your HTML

    // Define your product data
    const products = [
        {
            id: 1,
            name: "Camiseta Estilosa",
            price: 49.99,
            imageUrl: "images/camiseta.jpg", // Make sure this path is correct
            productLink: "pg/camiseta.html",
            description: "Uma camiseta confortável e moderna para o dia a dia."
        }
        // Add more products here as needed
    ];

    // Function to render products
    function renderProducts(productsData) {
        if (!productContainer) {
            console.error("Product container with ID 'product-list' not found.");
            return;
        }

        productsData.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('box'); // Using your existing 'box' class for general styling

            productDiv.innerHTML = `
                <a href="${product.productLink}" class="img-produto-link">
                    <img src="${product.imageUrl}" alt="${product.name}" class="img-produto">
                </a>
                <div class="pbox">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <div class="preco">
                        <p>R$ ${product.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    // Call the function to render products when the DOM is ready
    renderProducts(products);
});