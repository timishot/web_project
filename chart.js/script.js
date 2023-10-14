// Add JavaScript for interactivity (optional)
const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
    bar.addEventListener('click', () => {
        // You can add interactivity here, e.g., show data when a bar is clicked
        alert(`Bar ${index + 1} clicked`);
    });
});