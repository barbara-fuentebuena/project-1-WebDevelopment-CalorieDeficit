
        //show the error message only if the country is Denmark and the code doesn't exist in the API
        if (country === "denmark") {
            errorMessageToastifyShipping(error.message);
        }
    } finally {
        //update the shipping cost in case of error
        const shippingCostElement = document.getElementById("shippingCost");
        shippingCostElement.textContent = shippingCost === "" ? "" : `$${shippingCost}`;
    }
});