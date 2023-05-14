//function for errorMessage with toastify
const errorMessageToastifyShipping = (message) =>{
    Toastify({
        text: message,
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
            background: "red",
            color: "white",
        },
    }).showToast()
}

if (window.location.href.includes("shop-shakers.html")){
    //render the calculate shipping button
const calculateShippingBtn = document.getElementById("calculateShippingBtn");

//add event listener to the calculate shipping button
calculateShippingBtn.addEventListener("click", async function() {
    //get the postal code input element and its value
    const postalCodeInput = document.getElementById("postalCodeInput");
    const postalCode = postalCodeInput.value;

    //get the country select element and its value
    const countrySelect = document.getElementById("countrySelect");
    const country = countrySelect.value;

    let shippingCost = 0; 

    try {
        //check the selected country
        if (country === "denmark") {
            //fetch postal code data from the API
            const response = await fetch(`https://api.zippopotam.us/DK/${postalCode}`);
            if (!response.ok) {
                throw new Error("Invalid postal code for Denmark.");
            }
            const data = await response.json();

            //check if the postal code is valid for Denmark
            if (data.places && data.places.length > 0) {
                shippingCost = 0; 
            } else {
                throw new Error("Invalid postal code for Denmark.");
            }
        } else if (country === "europe") {
            shippingCost = 50; 
        } else {
            shippingCost = 100; 
        }

        // Display the shipping cost
        const shippingCostElement = document.getElementById("shippingCost");
        shippingCostElement.textContent = `DKK ${shippingCost}`;
    } catch (error) {
        //reset the shippingCost
        shippingCost = ""; 

        //show the error message only if the country is Denmark and the code doesn't exist in the API
        if (country === "denmark") {
            errorMessageToastifyShipping(error.message);
        }
    } finally {
        //update the shipping cost in case of error
        const shippingCostElement = document.getElementById("shippingCost");
        shippingCostElement.textContent = shippingCost === "" ? "" : `DKK ${shippingCost}`;
    }
});
}else if(window.location.href.includes("shop-whey-protein.html")){
    //render the calculate shipping button
const calculateShippingBtn2 = document.getElementById("calculateShippingBtn2");

//add event listener to the calculate shipping button
calculateShippingBtn2.addEventListener("click", async function() {
    //get the postal code input element and its value
    const postalCodeInput = document.getElementById("postalCodeInput");
    const postalCode = postalCodeInput.value;

    //get the country select element and its value
    const countrySelect = document.getElementById("countrySelect");
    const country = countrySelect.value;

    let shippingCost = 0; 

    try {
        //check the selected country
        if (country === "denmark") {
            //fetch postal code data from the API
            const response = await fetch(`https://api.zippopotam.us/DK/${postalCode}`);
            if (!response.ok) {
                throw new Error("Invalid postal code for Denmark.");
            }
            const data = await response.json();

            //check if the postal code is valid for Denmark
            if (data.places && data.places.length > 0) {
                shippingCost = 0; 
            } else {
                throw new Error("Invalid postal code for Denmark.");
            }
        } else if (country === "europe") {
            shippingCost = 50; 
        } else {
            shippingCost = 100; 
        }

        // Display the shipping cost
        const shippingCostElement = document.getElementById("shippingCost");
        shippingCostElement.textContent = `DKK ${shippingCost}`;
    } catch (error) {
        //reset the shippingCost
        shippingCost = ""; 

        //show the error message only if the country is Denmark and the code doesn't exist in the API
        if (country === "denmark") {
            errorMessageToastifyShipping(error.message);
        }
    } finally {
        //update the shipping cost in case of error
        const shippingCostElement = document.getElementById("shippingCost");
        shippingCostElement.textContent = shippingCost === "" ? "" : `DKK ${shippingCost}`;
    }
});
}else if(window.location.href.includes("shop-bmi-scales.html")){
    //render the calculate shipping button
const calculateShippingBtn3 = document.getElementById("calculateShippingBtn3");

//add event listener to the calculate shipping button
calculateShippingBtn3.addEventListener("click", async function() {
    //get the postal code input element and its value
    const postalCodeInput = document.getElementById("postalCodeInput");
    const postalCode = postalCodeInput.value;

    //get the country select element and its value
    const countrySelect = document.getElementById("countrySelect");
    const country = countrySelect.value;

    let shippingCost = 0; 

    try {
        //check the selected country
        if (country === "denmark") {
            //fetch postal code data from the API
            const response = await fetch(`https://api.zippopotam.us/DK/${postalCode}`);
            if (!response.ok) {
                throw new Error("Invalid postal code for Denmark.");
            }
            const data = await response.json();

            //check if the postal code is valid for Denmark
            if (data.places && data.places.length > 0) {
                shippingCost = 0; 
            } else {
                throw new Error("Invalid postal code for Denmark.");
            }
        } else if (country === "europe") {
            shippingCost = 50; 
        } else {
            shippingCost = 100; 
        }

        // Display the shipping cost
        const shippingCostElement = document.getElementById("shippingCost");
        shippingCostElement.textContent = `DKK ${shippingCost}`;
    } catch (error) {
        //reset the shippingCost
        shippingCost = ""; 

        //show the error message only if the country is Denmark and the code doesn't exist in the API
        if (country === "denmark") {
            errorMessageToastifyShipping(error.message);
        }
    } finally {
        //update the shipping cost in case of error
        const shippingCostElement = document.getElementById("shippingCost");
        shippingCostElement.textContent = shippingCost === "" ? "" : `DKK ${shippingCost}`;
    }
});
}


