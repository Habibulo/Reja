document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#create-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const inputField = document.querySelector("#create-field");
        const plan = inputField.value.trim();
        if (plan) {
            axios.post("/create-item", { plan: plan })
                .then(response => {
                    console.log(response.data);
                    inputField.value = ''; 
                    inputField.focus();
                    // location.reload();
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    });

    document.querySelectorAll(".delete-me").forEach(button => {
        button.addEventListener("click", () => {
            const itemId = button.getAttribute("data-id");
            if (confirm("Are you sure you want to delete this item?")) {
                axios.delete("/delete-item", { data: { id: itemId } })
                    .then(response => {
                        console.log(response.data);
                        button.parentElement.parentElement.remove();
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            }
        });
    });

    document.querySelectorAll(".edit-me").forEach(button => {
        button.addEventListener("click", () => {
            const itemId = button.getAttribute("data-id");
            const newPlan = prompt("Enter your new plan:");
            if (newPlan) {
                axios.post("/update-item", { id: itemId, plan: newPlan })
                    .then(response => {
                        console.log(response.data);
                        button.parentElement.parentElement.querySelector(".item-text").textContent = newPlan;
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            }
        });
    });

    document.querySelector("#delete-all").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete all items?")) {
            axios.delete("/delete-all-items")
                .then(response => {
                    console.log(response.data);
                    // location.reload();
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    });
});
