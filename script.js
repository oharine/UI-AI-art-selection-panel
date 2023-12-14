function generateArt() {
    const aura = document.getElementById('aura').value;
    const theme = document.getElementById('theme').value;
    const artStyle = document.getElementById('artStyle').value;
    const subject = document.getElementById('subject').value;

    const imageName = `${artStyle}\\${theme}\\${subject}\\${aura}*.png`;

    // You need to implement logic to find the image based on the generated name
    // For simplicity, let's assume you have a function getMatchingImage that returns the image path
    const imagePath = getMatchingImage(imageName);

    const generatedArt = document.getElementById('generatedArt');
    generatedArt.src = imagePath;

    // Show the art container and the popup
    document.getElementById('artContainer').classList.remove('hidden');
    document.getElementById('popup').style.display = 'block';
}

function chooseOtherCombination() {
    // Hide the art container and the popup
    document.getElementById('artContainer').classList.add('hidden');
    document.getElementById('popup').style.display = 'none';
}

function showOnSecondMonitor() {
    // You need to implement logic to duplicate the image to the second monitor
    // For simplicity, let's assume you have a function duplicateToSecondMonitor
    duplicateToSecondMonitor();

    // Reset for the next art generation
    chooseOtherCombination();
}
