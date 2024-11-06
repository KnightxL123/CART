// Select elements
const shoppingBagIcon = document.getElementById('shopping-bag-icon');
const cartPanel = document.getElementById('cart-panel');
const closeCartPanelButton = document.getElementById('close-cart-panel');

// Function to open the cart panel
function openCart() {
    cartPanel.classList.add('active');
}

// Function to close the cart panel
function closeCart() {
    cartPanel.classList.remove('active');
}

// Event listeners
shoppingBagIcon.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    openCart();
});

closeCartPanelButton.addEventListener('click', closeCart);

// Get references to the elements
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const quantityElement = document.getElementById('quantity');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
let quantity = parseInt(quantityElement.textContent);
const pricePerItem = 2900000; // Example price for each item

// Update the total amount when the quantity changes
function updateTotal() {
    const totalPrice = quantity * pricePerItem;
    totalElement.textContent = `₱${totalPrice.toLocaleString()}`; // Format the total price
    subtotalElement.textContent = `₱${totalPrice.toLocaleString()}`; // Update the subtotal as well
}

// Increase and decrease the quantity
increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
    saveToLocalStorage();
});

decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotal();
        saveToLocalStorage();
    }
});

// Save data to local storage
function saveToLocalStorage() {
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('total', totalElement.textContent);
}

// Initialize total when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const storedQuantity = localStorage.getItem('quantity');
    if (storedQuantity) {
        quantity = parseInt(storedQuantity);
        quantityElement.textContent = quantity;
        updateTotal();
    } else {
        updateTotal();
    }
});