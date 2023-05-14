//function for errorMessage with toastify
const errorMessageToastifyNewsletter = (message) =>{
    Toastify({
        text: message,
        duration: 4000,
        gravity: "top",
        position: "right",
        style: {
            background: "red",
        }
    }).showToast();
}

//function for successful message with Sweet Alert
const successfulMessage = (message) => {
    Swal.fire({
        title:"Hurraaaa!",
        text: message,
        icon: "success",
    })
}

//connect with DOM
const suscribeButton = document.getElementById("suscribeButton");

suscribeButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    const inputName = document.getElementById("inputName").value;
    const inputEmail = document.getElementById("inputEmail").value;

    if (inputName !== "" && inputEmail !== "") {
        successfulMessage("You have been successfully added to our newsletter!");
    } else {
        errorMessageToastifyNewsletter("You must insert your personal details.");
    }
});