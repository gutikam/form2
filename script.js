document.getElementById("formulario").addEventListener("submit", event => {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let number = document.getElementById("number").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name && validateEmail(email) && number) {
        alert("Formulario enviado");
        document.getElementById("formulario").reset();
    } else {
        alert("Complete los espacios en blanco");
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}