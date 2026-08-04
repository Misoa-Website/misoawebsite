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
// Fade-in animation
const sections = document.querySelectorAll("section");

if (window.innerWidth > 768) {

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
        section.style.transition = "all .8s ease";

        observer.observe(section);

    });

} else {

    sections.forEach(section => {

        section.style.opacity = "1";
        section.style.transform = "none";

    });

}

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
const orderNowBtn = document.getElementById("orderNow");
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
        if (checkoutBtn) checkoutBtn.href = "#";
        if (orderNowBtn) orderNowBtn.href = "#";
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

    const whatsappURL =
`https://wa.me/919650920534?text=${message}`;

checkoutBtn.href = whatsappURL;
if (checkoutBtn) {
    checkoutBtn.href = whatsappURL;
}

if(orderNowBtn){
    orderNowBtn.href = whatsappURL;
}

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

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

});
/* ==========================
   MOBILE HAMBURGER MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".nav-links");

if (menuToggle && mobileMenu) {

    // Open / Close Menu
    menuToggle.addEventListener("click", function (e) {

        e.stopPropagation();

        mobileMenu.classList.toggle("active");

        // Change icon
        const icon = menuToggle.querySelector("i");

        if (mobileMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    // Close after clicking a menu item
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {

        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {

            mobileMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}