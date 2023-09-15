//assign variables
let password;
let userpassword;
//get the password from the user
password = prompt("enter a password");
//have the user login with the password they just created
//if its wrong then loop and try again, once the correct password is entered
//display the access granted message
do{
    userpassword = prompt("Enter the password again");

    if(userpassword !== password){
        alert("Password does not match. Please try again")
        
    }
}while(password !== userpassword);
//display message
console.log("Access granted!");