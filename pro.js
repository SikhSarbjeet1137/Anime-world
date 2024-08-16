// Initialize the cart
let cart = [];

// Add to Cart function
function addToCart(price, productName, productImage) {
    const product = { name: productName, price: price, image: productImage };
    cart.push(product);
    updateCart();
}

// Buy Now function
function buyNow(price, productName, productImage) {
    cart = [{ name: productName, price: price, image: productImage }];
    updateCart();
    redirectToPayment();
}

// Update Cart Display
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const payNowButton = document.getElementById('paynow-btn');

    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((product) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name}</span>
            <span>$${product.price}</span>
        `;
        cartItemsElement.appendChild(cartItemElement);
        total += product.price;
    });

    cartTotalElement.textContent = `Total: $${total}`;

    if (cart.length > 0) {
        payNowButton.style.display = 'block';
    } else {
        payNowButton.style.display = 'none';
    }
}

// Redirect to Payment
function redirectToPayment() {
    const paymentPage = 'payment.html';
    sessionStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = paymentPage;
}

// Image Slider Auto-transition
let currentSlide = 0;
const slides = document.getElementById('slides');

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.children.length) {
        currentSlide = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const width = slides.children[0].clientWidth;
    slides.style.transform = `translateX(${-currentSlide * width}px)`;
}

// Set interval for automatic slide transition
setInterval(nextSlide, 4000);
