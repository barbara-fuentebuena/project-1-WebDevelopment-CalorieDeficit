//render calculate button to calculate the IBM
const calculateButton = document.getElementById("calculateButton");

//clear previous messages:
    //result message:
    let message = document.getElementById("resultTotal")
    message.innerHTML = ""
    resetButton.className = "noDisplay"

//action when the calculate button is clicked
calculateButton.addEventListener("click", ()=>{
    
    //get values - DOM
    let emailUser = document.getElementById("emailUser").value
    let gender = document.querySelector("#genderInput").value
    const age = parseInt(document.getElementById("ageInput").value)
    const height = parseInt(document.getElementById("heightInput").value)
    const weight = parseInt(document.getElementById("weightInput").value)
    let activityLevel = document.querySelector("#activityLevelInput").value

    //initialize isValid to true
    let isValid = true; 

    //function for errorMessage with toastify
    const errorMessageToastify = (message) =>{
        Toastify({
            text: message,
            duration: 4000,
            gravity: "top",
            position: "right",
            style: {
                background: "red",
            }
        }).showToast()
    }

    //rules for values
    if((isNaN(age)) || ((age < 0)) || (age == null)){
        isValid = false;
        errorMessageToastify("You must insert a positive number for age.")
    }else if(age < 18){
        isValid = false;
        errorMessageToastify("You must to be over 18 years old to access to the calculator.")
    }else if((isNaN(weight)) || (weight < 0) || (weight == null)){
        isValid = false;
        errorMessageToastify("You must insert a positive number for weight.")
    }else if((isNaN(height)) || (height < 0) || (height == null)){
        isValid = false;
        errorMessageToastify("You must insert a positive number for height.")
    }else if(emailUser == "" || emailUser.includes("@" && ".") == false){
        isValid = false;
        errorMessageToastify("You must insert a valid email.")  
    }else if(gender == "none" || activityLevel == "none"){
        isValid = false;
        errorMessageToastify("Make sure you select your gender and activity level.")
    }

    //if there are no errors in the inputs:
    if (isValid) {
        //choose gender value
        if(gender == "female"){
            gender = -161
        }else if(gender == "male"){
            gender = 5
        }else if(gender == "other"){
            gender = -80
        }
        //choose activity value
        if(activityLevel == "1"){
            activityLevel = 500
        }else if(activityLevel == "2"){
            activityLevel = 300
        }else if(activityLevel == "3"){
            activityLevel = 150
        }else if(activityLevel == "4"){
            activityLevel = 0
        }

        //calculator
        let result = parseInt(((10 * weight) + (6.65 * height) - (5 * age) + gender)+activityLevel)
        //show result
        let message = document.getElementById("resultCal")
        message.innerHTML = `
        <h2>Your TBM is ${result} calories per day</h2>
        <h4>It means that you should consume ${result} calories as maximum per day if you want to lose weight.</h4>
        <p>*Consult with a doctor if you are elegible for a calorie deficit programm.</p>
        `
        message.className = "resultMessage"
        //show reset button to reset the calculator
        let resetButton = document.getElementById("resetButton")
        resetButton.innerHTML = `RESET ↺`
        resetButton.className = "resetButton"
        resetButton.addEventListener("click", ()=>{
            const reset = () =>{
                document.getElementById("emailUser").value = ""
                document.querySelector("#genderInput").value = "none"
                document.getElementById("ageInput").value = ""
                document.getElementById("heightInput").value = ""
                document.getElementById("weightInput").value = ""
                document.querySelector("#activityLevelInput").value = "none"
                message.innerHTML = "Your TBM is ---"
                resetButton.innerHTML = ``
                resetButton.className = "noDisplay"
            }
            reset()
        })
        
        //clear input values after calculation
        document.getElementById("emailUser").value = ""
        document.querySelector("#genderInput").value = "none"
        document.getElementById("ageInput").value = ""
        document.getElementById("heightInput").value = ""
        document.getElementById("weightInput").value = ""
        document.querySelector("#activityLevelInput").value = "none"

        //create new user object
        class User{
            constructor(emailUser, gender, age, height, weight, activityLevel){
                this.emailUser = emailUser;
                this.gender = gender;
                this.age = age;
                this.height = height;
                this.weight = weight;
                this.activityLevel = activityLevel
            }
        }
        const newUser = new User (emailUser, gender, age, height, weight, activityLevel)

        //add user object to usersArray
        usersArray.push(newUser)

        //save usersArray to localStorage
        localStorage.setItem("usersArray", JSON.stringify(usersArray))
    }
})

//get usersArray from localStorage 
const usersArray = JSON.parse(localStorage.getItem("usersArray")) || []