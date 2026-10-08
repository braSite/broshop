document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-list');

    const products = [
        {
            id: 1,
            name: "---",
            price: 49.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjEK28_z24FDHHM0UUr6ms42eoCF3covvcpV9wKJre2dJXNgQ1iobJ6g&s=10",
            productLink: "pg/---",
            description: "---."
        },
        {
            id: 2,
            name: "Produto 2",
            price: 89.90,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfjztZnSTuznD5-hgzSXPh1TymomC1hw3YrdUQlqcTQ&s=10",
            productLink: "pg/produto2.html",
            description: "Descrição curta e atrativa do produto."
        },
        {
            id: 3,
            name: "Produto 3",
            price: 129.90,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPOMNA9GInYhWbhg4uPaMlIerkyuO4vvO14zhGUcW7j_lxkJcxZJkAKM&s=10",
            productLink: "pg/produto3.html",
            description: "Descrição curta e atrativa do produto."
        }
    ];

    function renderProducts(productsData) {
        if (!productContainer) return;

        productsData.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('pbox');

            productDiv.innerHTML = `
                <a href="${product.productLink}">
                    <img src="${product.imageUrl}" alt="${product.name}">
                </a>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="preco">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <a href="${product.productLink}" class="btn-comprar">Comprar</a>
            `;

            productContainer.appendChild(productDiv);
        });
    }

    renderProducts(products);
});