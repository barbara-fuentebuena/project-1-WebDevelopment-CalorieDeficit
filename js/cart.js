//function for errorMessage with toastify
const errorMessageToastify = (message) =>{
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

//Create new product
class Product {
    constructor(id, name, price, type, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.img = img;
        this.quantity = 1;
    }
}

//Products available a the moment
const shakerPink = new Product(1, "Shaker", 50, "Pink", "../img/shakers.png");
const shakerBlue = new Product(2, "Shaker", 50, "Blue", "../img/shakers.png");
const shakerGreen = new Product(3, "Shaker", 50, "Green", "../img/shakers.png");
const shakerYellow = new Product(4, "Shaker", 50, "Yellow", "../img/shakers.png");
const wheyProteinVanilla = new Product(10, "Whey Protein", 250, "Vanilla", "../img/whey-protein-banner.jpeg");
const wheyProteinChocolate = new Product(11, "Whey Protein", 250, "Chocolate", "../img/whey-protein-banner.jpeg");
const wheyProteinStrawberry = new Product(12, "Whey Protein", 250, "Strawberry", "../img/whey-protein-banner.jpeg");
const bmiScaleWhite = new Product(20, "BMI Scale", 1500, "White", "../img/scales-banner.jpeg");
const bmiScaleBlack = new Product(21, "BMI Scale", 1500, "Black", "../img/scales-banner.jpeg");

let selectProduct = "";
//array of product in the cart
let cartItems = [];

document.addEventListener("DOMContentLoaded", function() {
    const colorSelect = document.getElementById("colorShaker");
    const flavourSelect = document.getElementById("flavourWheyProtein")
    const colorBMISelect = document.getElementById("colorBMIScale")
    const addToCartBtn = document.getElementById("addToCartBtn");
    const cartContainer = document.getElementById("cartContainer");

    if (window.location.href.includes("shop-shakers.html")){
        //event to select color for shakers and assign ID
    colorSelect.addEventListener("change", function() {
        const selectedColor = colorSelect.value;
        if (selectedColor === "1") {
        selectProduct = shakerPink;
        selectProduct.id = 1;
        } else if (selectedColor === "2") {
        selectProduct = shakerBlue;
        selectProduct.id = 2;
        } else if (selectedColor === "3") {
        selectProduct = shakerGreen;
        selectProduct.id = 3;
        } else if (selectedColor === "4") {
        selectProduct = shakerYellow;
        selectProduct.id = 4;
        } else if (selectedColor === "none"){
            selectProduct = new Product();
        }
    });
    } else if (window.location.href.includes("shop-whey-protein.html")){
        //event to select flavour for whey protein and assign ID
    flavourSelect.addEventListener("change", function() {
        const selectedFlavour = flavourSelect.value;
        if (selectedFlavour === "5") {
        selectProduct = wheyProteinVanilla;
        selectProduct.id = 10;
        } else if (selectedFlavour === "6") {
        selectProduct = wheyProteinChocolate;
        selectProduct.id = 11;
        } else if (selectedFlavour === "7") {
        selectProduct = wheyProteinStrawberry;
        selectProduct.id = 12;
        } else if (selectedFlavour === "none"){
            selectProduct = new Product();
        }
    });
    } else if (window.location.href.includes("shop-bmi-scales.html")){
        //event to select color for the BMI Scale and assign ID
    colorBMISelect.addEventListener("change", function() {
        const selectedColor = colorBMISelect.value;
        if (selectedColor === "8") {
            selectProduct = bmiScaleWhite;
            selectProduct.id = 20;
            } else if (selectedColor === "9") {
            selectProduct = bmiScaleBlack;
            selectProduct.id = 21;
            } else if (selectedColor === "none"){
                selectProduct = new Product();
            }
        })
    }
    //create event to the button "ADD TO CART"
    addToCartBtn.addEventListener("click", function() {
        if(!selectProduct || !selectProduct.id){
            errorMessageToastify("You must select a product.")
        }else{
            addToCart(selectProduct);
            updateCart();
        }
    });
    //function to add products to the cart
    function addToCart(product) {
        cartItems = localStorage.getItem("cartItems");
        cartItems = cartItems ? JSON.parse(cartItems) : [];

        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
        existingItem.quantity += 1;
        }else {
        cartItems.push(product);
        }
        
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    //function to show the updated cart
    let itemPrice = 0;
    let totalPrice = 0;
    //function to show the updated cart
    function updateCart() {
        cartItems = localStorage.getItem("cartItems");
        cartItems = cartItems ? JSON.parse(cartItems) : [];

        cartContainer.innerHTML = "";

        let itemPrice = 0;
        let totalPrice = 0;

        if (cartItems.length === 0) {
            cartContainer.innerHTML = `<h6 id="noItems">No items in cart.</h6>`;
            //total price when the cat is empty
            totalPrice = 0; 
        } else {
            cartItems.forEach(item => {
                if (item && item.name) {
                    const cartItem = document.createElement("div");
                    cartItem.classList.add("cart-item");
                    cartItem.innerHTML = `
                        <div class="item-info">
                            <div class="item-info-main">
                                <img src="${item.img}" class="imgCart">
                                <li class="item-details">
                                <h5 class="item-name">${item.name} - ${item.type}</h5>
                                <h6 class="item-price">DKK ${item.price}</h6>
                                <h6 class="item-quantity">Quantity: ${item.quantity}</h6>
                                </li>
                            </div>
                            <button class="remove-item" data-id="${item.id}"> X </button>
                        </div>`;
                //update total amount $$
                itemPrice = item.price * item.quantity;
                totalPrice += itemPrice;
                cartContainer.appendChild(cartItem);
            }
        });
    }
    //show total amount $$ of the cart
    const totalElement = document.createElement("p");
    totalElement.classList.add("cart-total");
    totalElement.textContent = "Total: DKK " + totalPrice;
    cartContainer.appendChild(totalElement);

    //event to button to remove product from the cart
    const removeButtons = document.getElementsByClassName("remove-item");
    [...removeButtons].forEach(button => {
        button.addEventListener("click", function() {
            const itemId = parseInt(button.dataset.id);
            removeItem(itemId);
            updateCart();
        });
    });
}

    //call to updateCart function
    updateCart();
    //checkout function
    const checkOut = document.getElementById("checkOut")
    checkOut.addEventListener("click", ()=>{
        if(cartItems.length === 0){
            Swal.fire({
                title: "Your cart is empty.",
                icon: "error",
            })
        }else{
            Swal.fire({
                title: "Purchase succesfull",
                text: `You will receive your order soon!`,
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                clearCart();
            }})
        }
    })
    //function to remove items from the cart
    function removeItem(itemId) {
        cartItems = localStorage.getItem("cartItems");
        cartItems = cartItems ? JSON.parse(cartItems) : [];

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === itemId) {
                if (cartItems[i].quantity > 1) {
                    cartItems[i].quantity -= 1;
                } else {
                    cartItems.splice(i, 1);
                }
                break;
            }
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateCart();
    }

    //function to empty the cart
    function clearCart() {
    localStorage.removeItem("cartItems");
    updateCart();
    }
});

