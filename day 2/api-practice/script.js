const button = document.getElementById("loadBtn");
const userDiv = document.getElementById("user");

button.addEventListener("click", async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    userDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Email: ${data.email}</p>
        <p>City: ${data.address.city}</p>
    `;
});