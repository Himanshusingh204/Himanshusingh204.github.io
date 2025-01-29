var filter = document.querySelector("#turbulence"); // Select the SVG filter
var frame = 0; // Corrected variable name
var rad = Math.PI / 180;

function freqAnimation() {
    var bfx = 0.005;
    var bfy = 0.005;
    frame += 0.5; // Corrected variable name

    bfx += 0.0025 * Math.cos(frame * rad);
    bfy += 0.0025 * Math.sin(frame * rad);

    var bf = bfx.toString() + ' ' + bfy.toString(); // Use bfy for the second value
    filter.setAttribute('baseFrequency', bf); // Corrected setAttribute syntax

    window.requestAnimationFrame(freqAnimation); // Recursively call animation
}

window.requestAnimationFrame(freqAnimation);
