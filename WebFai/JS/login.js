function CheckDate() {
            const validValues = ["14/11/2004" ,"14112004" ];

            const value = document.getElementById("input").value.trim();

            // if (value === "14/11/2004") { 
            //     // ถ้าตรง ให้ไปอีกหน้า
            //     window.location.href = "hbd.html";
            if (validValues.includes(value)) { 
                // ถ้าตรง ให้ไปอีกหน้า
                window.location.href = "html/happy birthday.html";
            } else {
                alert("Your answer is incorrect. Please try again!");
            }
        }
