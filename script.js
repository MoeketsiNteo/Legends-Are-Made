
/*-------------------APPLICATION FORM----------------------------*/

//Select the application form and the review sections
const applicationForm = document.getElementById("application-form");
const applicationReview = document.getElementById("application-review");
const applicationConfirmation = document.getElementById("application-confirmation");

if (applicationForm) {

    //Get the buttons used to review the application
    const editButton = document.getElementById("edit-details");
    const confirmButton = document.getElementById("confirm-details");
    const newApplicationButton = document.getElementById("new-application");

    //Display the entered details when the form is submitted
    applicationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        //Check that all required information is valid
        if (!applicationForm.checkValidity()) {
            applicationForm.reportValidity();
            return;
        }

        //Display the applicant's information in the review section
        document.getElementById("review-name").textContent =
            document.getElementById("competitor-name").value.trim();

        document.getElementById("review-email").textContent =
            document.getElementById("email").value.trim();

        document.getElementById("review-phone").textContent =
            document.getElementById("contact-number").value.trim();

        document.getElementById("review-studio").textContent =
            document.getElementById("dance-studio").value.trim() || "Not provided";

        document.getElementById("review-category").textContent =
            document.getElementById("category").value;

        document.getElementById("review-age").textContent =
            document.getElementById("age-group").value;

        document.getElementById("review-message").textContent =
            document.getElementById("message").value.trim() || "No additional information";

        // Show the review section and hide the form
        applicationForm.hidden = true;
        applicationReview.hidden = false;
        applicationConfirmation.hidden = true;

        //Move the user's focus to the review section
        applicationReview.focus();
    });


    //Return to the form when the user wants to edit their details
    editButton.addEventListener("click", function () {
        applicationReview.hidden = true;
        applicationForm.hidden = false;

        // The original form values remain unchanged
        document.getElementById("competitor-name").focus();
    });


    //Confirm the details entered by the applicant
    confirmButton.addEventListener("click", function () {
        applicationReview.hidden = true;
        applicationConfirmation.hidden = false;

        applicationConfirmation.focus();
    });


    //Allow the user to start a new application
    newApplicationButton.addEventListener("click", function () {
        applicationForm.reset();

        applicationConfirmation.hidden = true;
        applicationReview.hidden = true;
        applicationForm.hidden = false;

        document.getElementById("competitor-name").focus();
    });
}



/*------------------CONTACT FORM--------------------------------------*/

//Select the contact form
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const contactFeedback = document.getElementById("contact-feedback");

    //Check the enquiry form when the user submits it
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        //Check that the form fields are valid
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();

            contactFeedback.textContent =
                "Please complete all required fields correctly.";

            contactFeedback.className = "form-feedback form-error";
            return;
        }

        //Explain that the enquiry has not actually been sent
        contactFeedback.textContent =
            "Thank you! Your enquiry was sent successfully";

        contactFeedback.className = "form-feedback form-success";

       //Clear the form fields
       contactForm.reset();
    });
}



/*-----------------GALLERY LIGHTBOX--------------------------------------*/

//Select all gallery images
const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    //Create the lightbox
    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Enlarged gallery image");

    lightbox.innerHTML = `
        <button type="button" class="lightbox-close"
                aria-label="Close enlarged image">&times;</button>
        <img src="" alt="">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");

    // Open the selected image
    function openImage(image) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("show");
        closeButton.focus();
    }

    //Close the lightbox
    function closeImage() {
        lightbox.classList.remove("show");
    }

    galleryImages.forEach(function (image) {

        //Allow users to select an image
        image.style.cursor = "pointer";
        image.setAttribute("tabindex", "0");
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", "Enlarge " + image.alt);

        image.addEventListener("click", function () {
            openImage(image);
        });

        //Allow the image to open using the keyboard
        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openImage(image);
            }
        });
    });

    //Close the image using the close button
    closeButton.addEventListener("click", closeImage);

    //Close the image when the dark background is clicked
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeImage();
        }
    });

    //Close the image using Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && lightbox.classList.contains("show")) {
            closeImage();
        }
    });
}
