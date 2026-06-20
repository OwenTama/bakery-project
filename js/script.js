// ==========================================
// FEATURE 1: DARK / LIGHT MODE TOGGLE
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // 1. Create the toggle button dynamically
    const toggleBtn = document.createElement("button");
    toggleBtn.innerHTML = "🌙 Dark Mode";
    toggleBtn.className = "btn btn-outline-light btn-sm ms-3";
    toggleBtn.id = "theme-toggle";

    // 2. Find the navigation bar container and stick the button in it
    const navContainer = document.querySelector(".navbar .container");
    if (navContainer) {
        navContainer.appendChild(toggleBtn);
    }

    // 3. Listen for a click on the button
    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
        
        // Tweak text color on cards if they exist on the page
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.classList.toggle("bg-secondary");
            card.classList.toggle("text-white");
        });

        // Change button text based on the mode
        if (document.body.classList.contains("bg-dark")) {
            toggleBtn.innerHTML = "☀️ Light Mode";
        } else {
            toggleBtn.innerHTML = "🌙 Dark Mode";
        }
    });
});


// ==========================================
// FEATURE 2: CONTACT FORM VALIDATION
// ==========================================
function validateContactForm(event) {
    // Stop the page from refreshing automatically
    event.preventDefault(); 

    // Grab the inputs from the form
    const nameField = document.getElementById("clientName");
    const emailField = document.getElementById("clientEmail");
    const messageField = document.getElementById("clientMessage");

    // Simple validation checks
    if (!nameField.value.trim() || !emailField.value.trim() || !messageField.value.trim()) {
        alert("Oops! Please fill out all fields before sending.");
        return false;
    }

    if (!emailField.value.includes("@")) {
        alert("Please enter a valid email address containing an @ symbol.");
        return false;
    }

    // Success message if everything passes
    alert(`Thank you, ${nameField.value.trim()}! Your message has been sent successfully.`);
    
    // Clear the form fields
    document.getElementById("bakeryForm").reset();
    return true;
}