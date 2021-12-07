function check_info() { //Validation function for email and password fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (username == "" || password == "") {
        alert("Please fill in all fields")
        return true;

    } else if (!email_val.test(username)) {
        alert('Invalid email format please enter valid email id')
        return false;

    } else if (document.getElementById("password").value.length > 11) {
        alert("Password maximum length is 11")
        return false;

    } else if (document.getElementById("password").value.length < 6) {
        alert("Password minimum length is 6")
        return false;

    } else {
        alert("Your account has been acepted... Redirecting to order!");
        window.open("page_order.html")
    }
}

function Val_info() { //Validation function for order.
    var option = document.getElementById('option').value;
    var voucher = document.getElementById('voucher').value;

    if (option == "SUPERSIZE 17€") {
        alert("Attention! We would like to warn you that this SUPERSIZE size can be shared by up to 4 people!")
    }
    if (voucher == "MEXTEXGOOD") {
        alert("Congratulations, your 13.5% discount voucher has been successfully accepted!")
    }
    alert("Thank you very much for choosing JUAN! Your order is on its way!")
}

function Super() {
    var option = document.getElementById('option').value;

    if (option == "SUPERSIZE 17€") {
        alert("Attention! We would like to warn you that this SUPERSIZE size can be shared by up to 4 people!")
    }
}