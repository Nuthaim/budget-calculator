
function register(){

let customer={
    phonenumber:phn.value,
    password:pswd.value,
    cpassword:cpswd.value,
    username:usr.value
}

if(customer.phonenumber==""||customer.password==""||customer.cpassword==""||customer.username==""){
    alert("invalid input")
}
else {
    if(customer.phonenumber in localStorage){
        alert("user already exist")
    }
    else{

        if(customer.password===customer.cpassword){
            alert("registered successfully")
            localStorage.setItem(customer.phonenumber,JSON.stringify(customer))
            window.location="./login.html"


        }
        else{
            alert("password mismatch")
        }


    
    }
}

}