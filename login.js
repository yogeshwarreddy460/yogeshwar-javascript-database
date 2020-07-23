var attempt = 3; //The no of false attemts

function validate() {
    var emailid = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(emailid=="" || password =="" )
        alert("Email-id or Password cannot be empty!")
    else if (emailid == "admin@gmail.com" && password == "Admin@123") {
        window.location = "success.html"; // Redirecting to other page.
        return false;
    } 
    else {
        attempt--; // attempt decrementing by one.
        alert("You have left " + attempt + " attempt;");
        
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
