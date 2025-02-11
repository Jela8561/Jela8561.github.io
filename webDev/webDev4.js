document.addEventListener("DOMContentLoaded", () => {
    const lightswitch = document.getElementById("svgswitch");
    const bodybg = document.body;

    function flipSwitch() {
        lightswitch.classList.toggle("switch-off");
        bodybg.classList.toggle("lightsoff");
    }

    // Ensure the function is available globally for inline `onclick` event
    window.flipSwitch = flipSwitch;
});
