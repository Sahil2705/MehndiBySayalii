document.addEventListener("DOMContentLoaded", () => {
    const paths = document.querySelectorAll("#mehndi-design path, #mehndi-design circle");
    paths.forEach((path, index) => {
        path.style.animation = `draw 3s ease-out forwards ${index * 0.2}s`;
    });
});
