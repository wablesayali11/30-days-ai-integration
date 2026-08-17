const result = document.getElementById("result");

const API_URL = "https://jsonplaceholder.typicode.com/users/1";


// GET
document.getElementById("getBtn").addEventListener("click", async () => {

    const response = await fetch(API_URL);

    const data = await response.json();

    result.innerHTML = `
        <h2>GET Response</h2>
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
    `;
});


// POST
document.getElementById("postBtn").addEventListener("click", async () => {

    const newUser = {
        name: "Sayali",
        email: "sayali@example.com"
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newUser)
        }
    );

    const data = await response.json();

    result.innerHTML = `
        <h2>POST Response</h2>
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
    `;
});


// PATCH
document.getElementById("updateBtn").addEventListener("click", async () => {

    const updatedUser = {
        name: "Sayali Updated"
    };

    const response = await fetch(API_URL, {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(updatedUser)
    });

    const data = await response.json();

    result.innerHTML = `
        <h2>PATCH Response</h2>
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
    `;
});


// DELETE
document.getElementById("deleteBtn").addEventListener("click", async () => {

    const response = await fetch(API_URL, {
        method: "DELETE"
    });

    if (response.ok) {
        result.innerHTML = `
            <h2>DELETE Response</h2>
            <p>User deleted successfully!</p>
        `;
    }
});