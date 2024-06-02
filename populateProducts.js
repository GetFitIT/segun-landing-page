document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
        .then(response => response.json())
        .then(data => populateProducts(data))
        .catch(error => console.error('Error fetching products:', error));
});

function populateProducts(products) {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'group relative';

        const whatsappMessage = encodeURIComponent(`I'm messaging about ${product.name}`);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=2347048522079&text=${whatsappMessage}`;

        productDiv.innerHTML = `
            <a href="${whatsappUrl}" target="_blank" class="block">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src="https://m.getfit.ng/contents/products/images/${product.image}.webp" alt="${product.name}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${product.name}
                        </h3>
                        <!-- <p class="mt-1 text-sm text-gray-500">${product.color}</p> -->
                    </div>
                    <p class="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
            </a>
        `;

        productGrid.appendChild(productDiv);
    });
}
