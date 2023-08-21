let screen = document.getElementById('screen');
let resolutionButton = document.getElementById('change-resolution-button');
let screenResolution = 16;

resolutionButton.addEventListener('click', changeResolution);

function loadScreen() {
    for (i = 0; i < screenResolution; i++) {
        let pixelRow = document.createElement('div');
        pixelRow.setAttribute('id', `pixelRow${i}`);
        pixelRow.setAttribute('class', `pixelRow`);
        screen.appendChild(pixelRow);
    }

    let pixelRows = document.querySelectorAll('.pixelRow');
    let rowNumber = 0;

    //creates x pixels in each pixelRow
    pixelRows.forEach( (element) => {
        for (i = 0; i < screenResolution; i++) {
            let pixel = document.createElement("div");
            pixel.setAttribute('id', `${rowNumber}-${i}`);
            pixel.setAttribute('class', 'pixel');
            element.appendChild(pixel);
        }
        rowNumber++;
    });

    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach( (pixel) => pixel.addEventListener('mouseover', () => {
    pixel.setAttribute('style', 'background-color: black;');
    }));
}

loadScreen();

function clearScreen() {
    let screen = document.querySelector('.screen');
    let pixelRows = document.querySelectorAll('.pixelRow');
    pixelRows.forEach( (pixelRow) => screen.removeChild(pixelRow))
}

function changeResolution() {
    let screenResolutionInput = prompt('Please enter a screen resolution between 1 & 100');
    while (screenResolutionInput > 100 || screenResolutionInput < 1 ) {
        let screenResolutionInput = prompt('Please enter a valid integer between 1 & 100');
    }
    screenResolution = screenResolutionInput;
    console.log(screenResolution);
    clearScreen();
    loadScreen();
}