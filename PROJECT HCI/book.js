const nextButton = document.querySelector('.next');
const timeInput = document.getElementById("timeInput");

function sendEmailAndNavigateToNextPage(nextPage) {
    const bodyMessage = `Time: ${timeInput.value}<br> Date: ${dateInput.value}<br>`;

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

nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Determine the next page based on the current page
    let nextPage;
    if (window.location.pathname.includes("Japanbook.html")) {
        nextPage = "Japanbook2.html";
    } else if (window.location.pathname.includes("apanbook2.html")) {
        nextPage = "Japanbook3.html";
    } else {
        nextPage = "ordercomplete.html";
    }
    sendEmailAndNavigateToNextPage(nextPage);
});
