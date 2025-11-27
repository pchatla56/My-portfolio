// Contact Form JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevents page refresh

        // Collect form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Success alert
        alert("Thank you, " + name + "! Your message has been received.");
        
        // Clear form after submission
        form.reset();
    });
});
