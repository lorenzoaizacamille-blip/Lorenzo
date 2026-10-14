
/* =========================
   BLUEWAVE WEBSITE SCRIPT
========================= */

// Select website elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

let toastTimer;

// Show a popup message
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

// Mobile navigation menu
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

        document.querySelectorAll(".nav-link").forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Get Started button
document.getElementById("getStarted").addEventListener("click", function () {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Welcome to BlueWave! Explore our features.");
});

// Explore Website button
document.getElementById("exploreButton").addEventListener("click", function () {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
});

// Quick-access dashboard buttons
document.querySelectorAll(".quick-item").forEach(function (button) {
    button.addEventListener("click", function () {
        showToast(button.dataset.message);
    });
});

// Contact button
document.getElementById("contactButton").addEventListener("click", function () {
    showToast("Thank you for your interest in BlueWave!");
});

// Display current year automatically
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Highlight navigation links when sections are clicked or reached
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                document.querySelectorAll(".nav-link").forEach(function (link) {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + entry.target.id
                    );
                });
            }
        });
    }, {
        rootMargin: "-25% 0px -60% 0px"
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });
}
