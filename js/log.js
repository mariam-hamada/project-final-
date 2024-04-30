function Validateform() {
    var age = document.getElementById("age").value;
    if (age === "0" ) {
        alert("select your age");
        return false;
    } else if (age === "1" ) {
        alert("This website might not be suitable for you!\nThanks for visiting us.");
        return false;
    } else if (age === "2") {
        alert("We recommend you to visit the Kids Section!\nThanks for visiting us.");
    } else if (age === "3") {
        alert("We recommend you to visit the Advanced Section!\nThanks for visiting us.");
    }
    window.location.href = "main page.html";
    return false; 
}

function showPopup(type) {
    if (type === 'contact') {
        alert('Please contact us at ASTRO.egy@gmail.com');
    }
}
