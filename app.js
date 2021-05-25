// Setting time interval
setInterval(checkBackground,200);

function checkBackground(){
    generateRandomColor();
    changeBackgroundColor();
    changeBackgroundText();
}

// Generating random color
function generateRandomColor();{
return '#'+Math.floor(Math.random() * 16777215).toString(16);
}


// Changing background color
function changeBackgroundColor(){
    const colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor=generateRandomColor();
}

// Changing background text
function changeBackgroundColorText()