document.addEventListener("DOMContentLoaded", function() {
    const identificationInput = document.getElementById("identification");
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");

    let isAuthenticated = false;

    loginButton.addEventListener("click", function() {
        const identificationValue = identificationInput.value;

        // Simulate authentication check
        if (identificationValue.trim() !== "") {
            isAuthenticated = true;
            alert("Login successful!");
            updateUI();
        } else {
            alert("Please enter a valid identification card.");
        }
    });

    logoutButton.addEventListener("click", function() {
        isAuthenticated = false;
        updateUI();
    });

    function updateUI() {
        if (isAuthenticated) {
            identificationInput.disabled = true;
            loginButton.disabled = true;
            logoutButton.disabled = false;
        } else {
            identificationInput.disabled = false;
            loginButton.disabled = false;
            logoutButton.disabled = true;
        }
    }
});
