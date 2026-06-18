document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HIGH CONTRAST MODE TOGGLE
    const contrastBtn = document.getElementById("btn-contrast");
    
    if (contrastBtn) {
        contrastBtn.addEventListener("click", () => {
            
            if (document.body.style.backgroundColor === "black") {
               
                document.body.style.backgroundColor = "";
                document.body.style.color = "";
                
               
                document.querySelectorAll("a, .logo span").forEach(el => {
                    el.style.color = "";
                });
            } else {
               
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                
              
                document.querySelectorAll("a, .logo span").forEach(el => {
                    el.style.color = "#ffff00";
                });
            }
        });
    }

    // 2. TEXT SCALING LOGIC (A+ / A-)
    let currentScale = 100; 
    
    const upBtn = document.getElementById("btn-text-up");
    const downBtn = document.getElementById("btn-text-down");

    if (upBtn) {
        upBtn.addEventListener("click", () => {
            if (currentScale < 140) {
                currentScale += 10;
                document.body.style.fontSize = currentScale + "%";
            }
        });
    }

    if (downBtn) {
        downBtn.addEventListener("click", () => {
            if (currentScale > 80) {
                currentScale -= 10;
                document.body.style.fontSize = currentScale + "%";
            }
        });
    }
});
