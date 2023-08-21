let screen = document.getElementById('screen');

for (i = 0; i < 16; i++) {
    let pixelRow = document.createElement('div');
    pixelRow.setAttribute('id', `pixelRow${i}`);
    pixelRow.setAttribute('class', `pixelRow`);
    screen.appendChild(pixelRow);
}

let pixelRows = document.querySelectorAll('.pixelRow')
let rowNumber = 0;

//creates x pixels in each pixelRow
pixelRows.forEach( (element) => {
    for (i = 0; i < 16; i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute('id', `${rowNumber}-${i}`)
        pixel.setAttribute('class', 'pixel')
        element.appendChild(pixel);
    }
    rowNumber++;
});
