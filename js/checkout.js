
const luzonData = {
    "regions": [
        {
            "name": "Ilocos Region",
            "cities": ["Laoag", "Vigan", "Candon", "San Fernando"]
        },
        {
            "name": "Cagayan Valley",
            "cities": ["Tuguegarao", "Cauayan", "Santiago", "Ilagan"]
        },
        {
            "name": "Central Luzon",
            "cities": ["Angeles", "Balanga", "Cabanatuan", "Gapan", "Malolos", "Olongapo", "San Fernando", "Tarlac"]
        },
        {
            "name": "CALABARZON",
            "cities": ["Antipolo", "Bacoor", "Batangas City", "Cavite City", "Lipa", "Lucena", "San Pablo", "Tanauan", "Tagaytay", "Trece Martires"]
        },
        {
            "name": "MIMAROPA",
            "cities": ["Calapan", "Puerto Princesa", "San Jose"]
        },
        {
            "name": "Bicol Region",
            "cities": ["Legazpi", "Ligao", "Masbate City", "Naga", "Sorsogon City", "Iriga"]
        },
        {
            "name": "Cordillera Administrative Region",
            "cities": ["Baguio", "Tabuk"]
        },
        {
            "name": "National Capital Region",
            "cities": ["Caloocan", "Las Piñas", "Makati", "Malabon", "Mandaluyong", "Manila", "Marikina", "Muntinlupa", "Navotas", "Parañaque", "Pasay", "Pasig", "Quezon City", "San Juan", "Taguig", "Valenzuela"]
        }
    ]
};

window.onload = function() {
  const regionSelect = document.getElementById("region");
  luzonData.regions.forEach(region => {
      const option = document.createElement("option");
      option.value = region.name;
      option.text = region.name;
      regionSelect.add(option);
  });
};

// Populate cities based on selected region
function populateCityDropdown() {
  const citySelect = document.getElementById("city");
  const regionSelect = document.getElementById("region");
  const selectedRegion = regionSelect.value;

  // Clear previous cities
  citySelect.innerHTML = '<option value="">Select City...</option>';

  // Find cities for the selected region
  const regionData = luzonData.regions.find(region => region.name === selectedRegion);
  if (regionData) {
      regionData.cities.forEach(city => {
          const option = document.createElement("option");
          option.value = city;
          option.text = city;
          citySelect.add(option);
      });
  }
}

// Get the span element, buttons, and price elements
const quantitySpan = document.getElementById('quantity');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');

// Define the unit price (for example, ₱2,900,000)
const unitPrice = 2900000;

// Function to update the subtotal and total
function updatePrice() {
  const currentQuantity = parseInt(quantitySpan.textContent);
  const newSubtotal = currentQuantity * unitPrice;
  subtotalElement.textContent = '₱' + newSubtotal.toLocaleString();
  totalElement.textContent = '₱' + newSubtotal.toLocaleString();
}

// Add event listener for the decrease button
decreaseButton.addEventListener('click', function() {
  let currentQuantity = parseInt(quantitySpan.textContent);
  if (currentQuantity > 1) { // Prevent going below 1
    quantitySpan.textContent = currentQuantity - 1;
    updatePrice(); // Update price when quantity changes
  }
});

// Add event listener for the increase button
increaseButton.addEventListener('click', function() {
  let currentQuantity = parseInt(quantitySpan.textContent);
  quantitySpan.textContent = currentQuantity + 1;
  updatePrice(); // Update price when quantity changes
});

// Initialize price on page load
updatePrice();

document.addEventListener('DOMContentLoaded', () => {
    const quantity = localStorage.getItem('quantity');
    const total = localStorage.getItem('total');

    if (quantity && total) {
        document.getElementById('quantity').textContent = quantity;
        document.getElementById('total').textContent = total;
    }
});


