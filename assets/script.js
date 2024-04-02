// Menu items data
const menuItems = [
    { name: "Chocolate", price: "$2.50" },
    { name: "Strawberry", price: "$2.50" },
    { name: "Vanilla", price: "$2.00" },
    { name: "Mint Chocolate Chip", price: "$3.00" },
    { name: "Cookies and Cream", price: "$3.00" },
    { name: "Rocky Road", price: "$3.50" }
];

// Function to display menu items
function displayMenu() {
    const menuItemsDiv = document.getElementById("menuItems");
    menuItemsDiv.innerHTML = "";
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        //menuItem.innerHTML = <h3>${item.name}</h3><p>${item.price}</p>;
        menuItemsDiv.appendChild(menuItem);
    });
}

// Event listeners
document.getElementById("viewMenuBtn").addEventListener("click", () => {
    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("menuSection").classList.remove("hidden");
    document.getElementById("aboutSection").classList.add("hidden");
    document.getElementById("contactSection").classList.add("hidden");
    displayMenu();
});

document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("menuSection").classList.remove("hidden");
    document.getElementById("aboutSection").classList.add("hidden");
    document.getElementById("contactSection").classList.add("hidden");
    displayMenu();
});

document.getElementById("aboutBtn").addEventListener("click", () => {
    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("menuSection").classList.add("hidden");
    document.getElementById("aboutSection").classList.remove("hidden");
    document.getElementById("contactSection").classList.add("hidden");
});

document.getElementById("contactBtn").addEventListener("click", () => {
    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("menuSection").classList.add("hidden");
    document.getElementById("aboutSection").classList.add("hidden");
    document.getElementById("contactSection").classList.remove("hidden");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // Process the form data (e.g., send it to a server or display it)
    //console.log(Name: ${name}, Email: ${email}, Message: ${message});
    alert("Message sent successfully!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});

// Select elements
const flavorsContainer = document.querySelector('.flavors');
const flavorModal = document.querySelector('.flavor-modal');
const closeModalBtn = document.querySelector('.close-modal');

// Sample flavor data
const flavors = [
    { name: 'Chocolate', image: 'c:\Users\Jojo\Desktop\WhatsApp Image 2024-03-25 at 1.37.52 PM.jpeg', description: 'A classic favorite made with rich cocoa.' },
    { name: 'Strawberry', image: 'c:\Users\Jojo\Desktop\WhatsApp Image 2024-03-25 at 1.37.52 PM (1).jpeg', description: 'Delightful blend of fresh strawberries.' },
    // Add more flavors as needed
];

// Function to display flavors
function displayFlavors() {
    flavorsContainer.innerHTML = '';
    flavors.forEach((flavor, index) => {
        const flavorElement = document.createElement('div');
        flavorElement.classList.add('flavor');
        flavorElement.innerHTML = `
            <img src="${flavor.image}" alt="${flavor.name}">
            <h3>${flavor.name}</h3>
            <p>${flavor.description}</p>
            <button class="btn" onclick="openModal(${index})">Details</button>
        `;
        flavorsContainer.appendChild(flavorElement);
    });
}

// Function to open flavor modal
function openModal(index) {
    const selectedFlavor = flavors[index];
    flavorModal.innerHTML = `
        <img src="${selectedFlavor.image}" alt="${selectedFlavor.name}">
        <h3>${selectedFlavor.name}</h3>
        <p>${selectedFlavor.description}</p>
        <button class="btn" onclick="closeModal()">Close</button>
    `;
    flavorModal.style.display = 'block';
}

// Function to close flavor modal
function closeModal() {
    flavorModal.style.display = 'none';
}

// Display flavors when the page loads
window.addEventListener('load', displayFlavors);