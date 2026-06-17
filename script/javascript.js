// Function to toggle High Contrast Mode for users with visual impairments
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

// Function to increase or decrease text sizes dynamically
let currentFontSize = 100; // represented as a percentage (%)

function changeFontSize(action) {
    const rootElement = document.documentElement;
    
    if (action === 'increase' && currentFontSize < 140) {
        currentFontSize += 10;
    } else if (action === 'decrease' && currentFontSize > 80) {
        currentFontSize -= 10;
    }
    
    rootElement.style.fontSize = currentFontSize + '%';
}
