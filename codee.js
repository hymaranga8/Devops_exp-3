const form = document.getElementById("Registration form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const Name = document.getElementById("Name").value;

    const Email = document.getElementById("Email").value;

    const selectedEvent = document.getElementById("Event").value;

    alert("Thank you! " + Name + " you have registered for the " 
        + selectedEvent + " in configuration sent to: " + Email);
});
