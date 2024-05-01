// Define variables to store input values
let bookingDetails = {};
let userDetails = {};
let paymentDetails = {};

// Function to capture booking details from Japanbook.html
function captureBookingDetails() {
    bookingDetails.date = document.getElementById("dateInput").value;
    bookingDetails.time = document.getElementById("timeInput").value;
    bookingDetails.adultQuantity = document.querySelector('.quantity-adult').value;
    bookingDetails.childQuantity = document.querySelector('.quantity-child').value;
    bookingDetails.infantQuantity = document.querySelector('.quantity-infant').value;
}

// Function to capture user details from Japanbook2.html
function captureUserDetails() {
    userDetails.firstName = document.getElementById("firstname").value;
    userDetails.surname = document.getElementById("surname").value;
    userDetails.telephone = document.getElementById("telephone").value;
    userDetails.email = document.getElementById("email").value;
}

// Function to capture payment details from Japanbook3.html
function capturePaymentDetails() {
    let selectedPaymentMethod = document.querySelector('input[name="payment"]:checked').value;
    paymentDetails.paymentMethod = selectedPaymentMethod;
    // Additional code to capture credit card details if payment method is credit card
    // paymentDetails.cardNumber = document.getElementById("card-number").value;
    // paymentDetails.expirationDate = document.getElementById("expiration-date").value;
    // paymentDetails.securityCode = document.getElementById("security-code").value;
}

// Function to send email with captured details
function sendEmailWithDetails() {
    // Compose email body with captured details
    const bodyMessage = `Booking Details:
        Date: ${bookingDetails.date}
        Time: ${bookingDetails.time}
        Adult Tickets: ${bookingDetails.adultQuantity}
        Child Tickets: ${bookingDetails.childQuantity}
        Infant Tickets: ${bookingDetails.infantQuantity}
        
        User Details:
        Name: ${userDetails.firstName} ${userDetails.surname}
        Telephone: ${userDetails.telephone}
        Email: ${userDetails.email}
        
        Payment Details:
        Payment Method: ${paymentDetails.paymentMethod}`;
    
    // Use Email.send() to send the email with the composed bodyMessage
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tourpackage.wanderlust@gmail.com",
        Password : "4A9A7C1809558F4A01C60764CAEF6A023E80",
        To : 'tourpackage.wanderlust@gmail.com',
        From : "tourpackage.wanderlust@gmail.com",
        Subject : "TourPackage of WanderLust",
        Body : bodyMessage
    }).then(
        message => {
            alert("Details have been saved. Click OK to continue.");
            window.location.href = nextPage;
        }
    );
}

// Event listener to capture details when the "Next" button is clicked
document.querySelector('.next').addEventListener("click", () => {
    let nextPage;
    if (window.location.pathname.includes("Japanbook.html")) {
        captureBookingDetails();
        nextPage = "Japanbook2.html";
    } else if (window.location.pathname.includes("Japanbook2.html")) {
        captureUserDetails();
        nextPage = "Japanbook3.html";
    } else if (window.location.pathname.includes("Japanbook3.html")) {
        capturePaymentDetails();
        nextPage = "success.html"; // Example: Navigate to a success page after the third step
    }
    sendEmailWithDetails(nextPage);
});
