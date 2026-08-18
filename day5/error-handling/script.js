const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");

const status = document.getElementById("status");
const result = document.getElementById("result");


// Successful API
successBtn.addEventListener("click", async () => {

    status.innerHTML = "Loading...";
    result.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        status.innerHTML = "Success!";

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>Email: ${data.email}</p>
        `;

    } catch (error) {

        status.innerHTML = "Error occurred!";

        result.innerHTML = `
            <p>${error.message}</p>
        `;
    }
});


// Failed API
errorBtn.addEventListener("click", async () => {

    status.innerHTML = "Loading...";
    result.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/wrong-url"
        );

        if (!response.ok) {
            throw new Error(
                `API request failed. Status: ${response.status}`
            );
        }

        const data = await response.json();

        status.innerHTML = "Success!";

        result.innerHTML = `
            <p>${data.name}</p>
        `;

    } catch (error) {

        status.innerHTML = "Something went wrong!";

        result.innerHTML = `
            <p>${error.message}</p>
        `;
    }
});