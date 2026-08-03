// ==============================
// MISOA Premium Website
// script.js
// ==============================

// Navbar shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Active navigation link
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Logo scroll to top
const logo = document.querySelector(".logo");

logo.style.cursor = "pointer";

logo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Button hover effect
const buttons = document.querySelectorAll(".hero-btn, .buy, .order-btn, .contact-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Console message
console.log("🌶️ Welcome to MISOA Premium Chilli Oils");
// ===============================
// MISOA Shopping Cart
// ===============================

let cart = [];

const addToCartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout");

addToCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        cart.push(product);

        updateCart();

    });

});

function updateCart(){

    // Update cart count
    cartCount.textContent = cart.length;

    if(cart.length === 0){

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        return;
    }

    let html = "";
    let message = "Hi MISOA,%0A%0AI want to order:%0A";
    let total = 0;

    cart.forEach((item,index)=>{

        html += `
            <p>${index+1}. ${item.name} - ₹${item.price}</p>
        `;

        message += `${index+1}. ${item.name} - ₹${item.price}%0A`;

        total += item.price;

    });

    html += `<hr><h3>Total : ₹${total}</h3>`;

    cartItems.innerHTML = html;

    message += `%0ATotal: ₹${total}`;

    checkoutBtn.href =
    `https://wa.me/919650920534?text=${message}`;

}
const cartBtn = document.getElementById("cartBtn");
const cartSection = document.getElementById("cart");

if (cartBtn && cartSection) {
    cartBtn.addEventListener("click", function () {
        cartSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

if(menuToggle && mobileNav){

    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

    });

}