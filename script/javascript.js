document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HIGH CONTRAST MODE TOGGLE
    const contrastBtn = document.getElementById("btn-contrast");
    
    if (contrastBtn) {
        contrastBtn.addEventListener("click", () => {
            // Check if high contrast mode is already active
            if (document.body.style.backgroundColor === "black") {
                // TURN IT OFF: Clear inline styles to restore your original neon theme
                document.body.style.backgroundColor = "";
                document.body.style.color = "";
                
                // Reset all links and logos back to their default CSS colors
                document.querySelectorAll("a, .logo span").forEach(el => {
                    el.style.color = "";
                });
            } else {
                // TURN IT ON: Force an absolute high-contrast black and white look
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                
                // Force navigation items and neon text to vibrant high-visibility yellow
                document.querySelectorAll("a, .logo span").forEach(el => {
                    el.style.color = "#ffff00";
                });
            }
        });
    }

    // 2. TEXT SCALING LOGIC (A+ / A-)
    let currentScale = 100; // Start at baseline 100% size
    
    const upBtn = document.getElementById("btn-text-up");
    const downBtn = document.getElementById("btn-text-down");

    if (upBtn) {
        upBtn.addEventListener("click", () => {
            if (currentScale < 140) { // Enforce an upper scaling ceiling
                currentScale += 10;
                document.body.style.fontSize = currentScale + "%";
            }
        });
    }

    if (downBtn) {
        downBtn.addEventListener("click", () => {
            if (currentScale > 80) { // Enforce a lower scaling floor
                currentScale -= 10;
                document.body.style.fontSize = currentScale + "%";
            }
        });
    }
});
