document.addEventListener("DOMContentLoaded", function() {
    const userResponsesForm = document.getElementById("userResponses");

    userResponsesForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect user responses from the form
        const response1 = document.getElementById("response1").value;
        const response2 = document.getElementById("response2").value;

        // You can now process or save the responses to a database or perform any necessary actions
        // For now, let's just display the responses
        alert(`Your responses:\n\nQuestion 1: ${response1}\nQuestion 2: ${response2}`);
    });
});
