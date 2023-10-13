// Function to handle form submission when the contact form is submitted
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Form validation
    // Send form data to the server
    // Display success message or handle errors
}

// Function to toggle the responsive menu on mobile screens
function toggleMenu() {
    const menu = document.querySelector('.responsive-menu ul');
    menu.classList.toggle('show-menu');
}

// Function for smooth scrolling to section when a navigation link is clicked
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    // Submit the form if all validations pass
    return true;
}

// Add a class to sections for fade-in animation when they become visible
function addAnimationClass() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('show');
        }
    });
}

// Check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// JavaScript functions to show and hide the pop-up
function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
    }
    document.body.style.overflow = "hidden";
}

function closePopup() {
    var popups = document.querySelectorAll('.popup');
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
    document.body.style.overflow = "auto";
}
