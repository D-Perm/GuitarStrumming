const strummingImages = document.getElementById("strummingImages");
const button = document.getElementById("button");
const strum4 = document.getElementById("strum4");
const strum8 = document.getElementById("strum8");
const strum16 = document.getElementById("strum16");
button.onclick = function() {
if (strum4.checked) {
    strummingImages.innerHTML = "";
    let strummingPattern = ``;
        for(let i = 1; i <=4; i++){
            const result = Math.floor(Math.random() * 2) + 1;
            strummingPattern += (result === 1) ? `<img src="Strum1.png">` : `<img src="Strum2.png">`;
    }
    strummingPattern += `<img src="Strum3.png" style="width: 4px;">`;
    strummingImages.innerHTML += strummingPattern;
} 
else if (strum8.checked) {
    strummingImages.innerHTML = "";
    let strummingPattern = ``;
    for  (let x = 1; x <= 2; x++){
        for(let i = 1; i <=4; i++){
            const result = Math.floor(Math.random() * 2) + 1;
            strummingPattern += (result === 1) ? `<img src="Strum1.png">` : `<img src="Strum2.png">`; 
        }
    strummingPattern += `<img src="Strum3.png" style="width: 4px;">`;
    }
strummingImages.innerHTML += strummingPattern;
} 
else if (strum16.checked) {
strummingImages.innerHTML = "";
let strummingPattern = ``;
for  (let x = 1; x <= 4; x++){
    for(let i = 1; i <=4; i++){
        const result = Math.floor(Math.random() * 2) + 1;
        strummingPattern += (result === 1) ? `<img src="Strum1.png">` : `<img src="Strum2.png">`; 
    }
strummingPattern += `<img src="Strum3.png" style="width: 4px;">`;
}
strummingImages.innerHTML += strummingPattern;
} 
else {
    alert("Please select a strumming pattern!");
}
}
