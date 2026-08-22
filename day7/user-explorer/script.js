const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

loadBtn.addEventListener("click", loadUsers);

async function loadUsers() {

    status.innerHTML = "Loading users...";
    usersDiv.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        status.innerHTML = `Loaded ${users.length} users`;

        users.forEach(user => {

            const card = document.createElement("div");

            card.className = "user-card";

            card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;

            usersDiv.appendChild(card);

        });

    } catch (error) {

        status.innerHTML = "Something went wrong!";

        usersDiv.innerHTML = `
            <p>${error.message}</p>
        `;
    }
}