const button = document.getElementById("createBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {

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
        <h2>User Created</h2>
        <p>ID: ${data.id}</p>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
    `;
});