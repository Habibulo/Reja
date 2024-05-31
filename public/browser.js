document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("#create-field");
    const itemList = document.querySelector("#item-list");

    document.querySelector("#create-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const plan = inputField.value.trim();
        if (plan) {
            axios.post("/create-item", { plan: plan })
                .then(response => {
                    console.log(response.data);
                    const newItem = document.createElement("li");
                    newItem.style.marginBottom = "4px";
                    newItem.className = "list-group-item list-group-item-info align-items-center d-flex justify-content-between";
                    newItem.innerHTML = `
                        <span class="item-text">${response.data.plan}</span>
                        <div>
                            <button data-id="${response.data.id}" class="edit-me btn btn-secondary" style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">Edit</button>
                            <button data-id="${response.data.id}" class="delete-me btn btn-danger" style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">Delete</button>
                        </div>`;
                    itemList.appendChild(newItem);
                    inputField.value = '';
                    inputField.focus();
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    });

    itemList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-me")) {
            deleteItem(e);
        } else if (e.target.classList.contains("edit-me")) {
            editItem(e);
        }
    });

    const deleteItem = (e) => {
        const button = e.target;
        const itemId = button.getAttribute("data-id");
        if (confirm("Are you sure you want to delete this item?")) {
            axios.delete("/delete-item", { data: { id: itemId } })
                .then(response => {
                    console.log(response.data);
                    button.closest('li').remove();
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    };

    const editItem = (e) => {
        const button = e.target;
        const itemId = button.getAttribute("data-id");
        const itemText = button.closest('li').querySelector(".item-text");
        const currentPlan = itemText.textContent;
        const newPlan = prompt("Enter your new plan:", currentPlan);
        if (newPlan && newPlan !== currentPlan) {
            axios.put("/update-item", { id: itemId, plan: newPlan })
                .then(response => {
                    console.log(response.data);
                    itemText.textContent = newPlan;
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    };

    document.querySelector("#delete-all").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete all items?")) {
            axios.delete("/delete-all-items")
                .then(response => {
                    console.log(response.data);
                    itemList.innerHTML = '';
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    });
});
