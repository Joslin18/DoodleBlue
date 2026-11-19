document.addEventListener("DOMContentLoaded", () => {

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    const colors = [
        "#fff3cd",
        "#d4edda",
        "#d1ecf1",
        "#f8d7da",
        "#e2e3e5",
        "#fde2e4",
        "#e7c6ff"
    ];

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            const randomColor =
                colors[Math.floor(Math.random() * colors.length)];

            card.style.backgroundColor = randomColor;
            card.style.transform = "translateY(-10px) scale(1.03)";
            card.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
            card.style.transition = "all 0.4s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "#ffffff";
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        });

        card.addEventListener("click", () => {
            card.style.border = "3px solid #ff9800";
        });

        card.addEventListener("dblclick", () => {
            alert("You selected: " + card.querySelector("p").innerText);
        });

    });

    const images = document.querySelectorAll(".card img");

    images.forEach(img => {

        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "0.4s";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });

    });

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "0.3s";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });

    });

    const title = document.getElementById("welcomeTitle");

    if (title) {

        title.addEventListener("mouseover", () => {
            title.style.color = "#ff9800";
        });

        title.addEventListener("mouseout", () => {
            title.style.color = "#ffffff";
        });

    }

    const footer = document.querySelector("footer");

    if (footer) {

        footer.addEventListener("mouseenter", () => {
            footer.style.backgroundColor = "#111";
            footer.style.transition = "0.4s";
        });

        footer.addEventListener("mouseleave", () => {
            footer.style.backgroundColor = "#222";
        });

    }

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const department = document.getElementById("department").value.trim();
            const event = document.getElementById("event").value;

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                department === "" ||
                event === ""
            ) {
                alert("Please fill all required fields!");
                return;
            }

            alert(
                "Registration Successful!\n\n" +
                "Name: " + name +
                "\nEvent: " + event
            );

            registerForm.reset();

        });

    }

    const scheduleRows = document.querySelectorAll("table tr");

    scheduleRows.forEach(row => {

        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#fff3cd";
            row.style.transition = "0.3s";
        });

        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "";
        });

    });

    const greeting = document.getElementById("greeting");

    if (greeting) {
        const today = new Date();
        const hour = today.getHours();

        let message = "";

        if (hour < 12) {
            message = "Good Morning! Welcome to Campus Events.";
        } else if (hour < 18) {
            message = "Good Afternoon! Explore Today's Events.";
        } else {
            message = "Good Evening! Check Upcoming Events.";
        }

        greeting.textContent = message;
    }

});