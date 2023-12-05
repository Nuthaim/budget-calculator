// let p=JSON.parse(localStorage.getItem('phonenumbere'))

// let searching=JSON.parse(localStorage.getItem(p))
// let u=searching.username

// htmldataa= `<h1 >welcome:${u}</h1>`

// head1.innerHTML+=htmldataa


    
// function deposit(){
//     const incomee=document.getElementById("inc").value
//     const food=document.getElementById("food").value
//     const transp=document.getElementById("trans").value
//     const  loan=document.getElementById("loan").value 
//     const  household =document.getElementById("household").value 
//     const  shopping=document.getElementById("shopping").value 
//     const  utility=document.getElementById("util").value 


//     let expense=food+transp+loan+household+shopping+utility

//     let savings=incomee-expense

//     if(incomee==""||food==""||transp==""||loan==""||household==""||shopping==""||utility==""){
//         alert("enter all values")

//     }

//     else{
       
//         document.getElementById("para").innerHTML = '<div class="text-light ps-5" style="font-weight: 500;">expense: $' + expense + '</div>';

//         document.getElementById("para1").innerHTML = '<div class="text-light ps-5" style="font-weight: 500;">savings: $' + savings + '</div>';


         

//     }



// }



// // Retrieve phone number from local storage
// let phoneNumber = JSON.parse(localStorage.getItem('phonenumbere'));

// // Retrieve user information based on the phone number
// let userData = JSON.parse(localStorage.getItem(phoneNumber));

// // Get the username from user data
// let username = userData.username;

// // Display a welcome message
// let welcomeMessage = `<h1>Welcome ${username}</h1>`;
// head1.innerHTML += welcomeMessage;

// // Function to handle deposit calculations
// function deposit() {
//     // Retrieve input values
//     const income = parseFloat(document.getElementById("inc").value) || 0;
//     const food = parseFloat(document.getElementById("food").value) || 0;
//     const transp = parseFloat(document.getElementById("trans").value) || 0;
//     const loan = parseFloat(document.getElementById("loan").value) || 0;
//     const household = parseFloat(document.getElementById("household").value) || 0;
//     const shopping = parseFloat(document.getElementById("shopping").value) || 0;
//     const utility = parseFloat(document.getElementById("util").value) || 0;

//     // Calculate expenses and savings
//     let expense = food + transp + loan + household + shopping + utility;
//     let savings = income - expense;

//     // Validate input
//     if (isNaN(income) || isNaN(expense)) {
//         alert("Enter valid numerical values for income and expenses.");
//     } else {
//         // Update HTML with calculated values
//         document.getElementById("para").innerHTML = `<div class="text-light ps-5" style="font-weight: 500;">Expense: $${expense}</div>`;
//         document.getElementById("para1").innerHTML = `<div class="text-light ps-5" style="font-weight: 500;">Savings: $${savings}</div>`;
//     }
// }




let phoneNumber = JSON.parse(localStorage.getItem('phonenumbere'));

// Retrieve user information based on the phone number
let userData = JSON.parse(localStorage.getItem(phoneNumber));

// Get the username from user data
let username = userData.username;

// Display a welcome message
let welcomeMessage = `<h1>Welcome ${username}</h1>`;
head1.innerHTML += welcomeMessage;




    function deposit() {


     
        const income = parseFloat(document.getElementById("inc").value) || 0;
        const food = parseFloat(document.getElementById("food").value) || 0;
        const transp = parseFloat(document.getElementById("trans").value) || 0;
        const loan = parseFloat(document.getElementById("loan").value) || 0;
        const household = parseFloat(document.getElementById("household").value) || 0;
        const shopping = parseFloat(document.getElementById("shopping").value) || 0;
        const utility = parseFloat(document.getElementById("util").value) || 0;

        let expense = food + transp + loan + household + shopping + utility;
        let savings = income - expense;
        let debth=expense-income
        if(expense<income){

            if (isNaN(income) || isNaN(expense)) {
                alert("Enter valid numerical values for income and expenses.");
            } else {
                document.getElementById("para3").innerHTML = ""
                document.getElementById("para2").innerHTML = ""


                document.getElementById("para").innerHTML = `<div class="text-light ps-5" style="font-weight: 500;">Expense: $${expense}</div>`;
                document.getElementById("para1").innerHTML = `<div class="text-light ps-5" style="font-weight: 500;">Savings: $${savings}</div>`;
            }


        }

        else  {
            document.getElementById("para").innerHTML = ""
            document.getElementById("para1").innerHTML = ""

            document.getElementById("para2").innerHTML = `<div class="text-light ps-5" style="font-weight: 500;">dept: $${debth}</div>`;
            document.getElementById("para3").innerHTML = ""



            

        }

        if(expense==income){
            document.getElementById("para").innerHTML = ""
            document.getElementById("para1").innerHTML = ""

            document.getElementById("para2").innerHTML = ""

            document.getElementById("para3").innerHTML = `<div class="text-light ps-5" style="font-weight: 500;">  INCOME=EXPENSE: NO SAVINGS</div>`;


        }
       





        

       

        document.frmee.reset()
    }





