const block = document.getElementById("block");
const button = document.getElementById("button");

let isAnimating = false;
let isExtended = false;

button.onclick = function() {
    if (isAnimating) return;

    isAnimating = true;

    let i = isExtended ? 0 : -40;
    let target = isExtended ? -40 : 0;

    function animate() {
        if ((isExtended && i > target) || (!isExtended && i < target)) {
            block.style.left = `${i}vw`;
            i += isExtended ? -1.5 : 1.5;

            requestAnimationFrame(animate);
        } else {
            block.style.left = `${target}vw`;
            isAnimating = false;
            isExtended = !isExtended;
        }
    }

    animate();
};
