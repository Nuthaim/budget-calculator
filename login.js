function login(){
    let customer={
        phnnumb:phn.value,
        password:pswd.value,


    }
    if(customer.phnnumb in localStorage){
    
        let details= JSON.parse(localStorage.getItem(customer.phnnumb))
        if(customer.password==details.password){
            let p=details.phonenumber
            let u=details.username
             localStorage.setItem("phonenumbere",p)
             localStorage.setItem("usernamee",u)
             window.location="./user.html"
             alert("login successful")
           


        
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("not valid phone number")

    }

}



