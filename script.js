
/*----------------------APPLICATION FORM----------------------*/

//Get the application form elements
const applicationForm = document.getElementById("application-form");
const applicationReview = document.getElementById("application-review");
const applicationConfirmation = document.getElementById("application-confirmation");

// Only run this code on the application page
if (applicationForm) {

    //Get the review fields
    const reviewName = document.getElementById("review-name");
    const reviewEmail = document.getElementById("review-email");
    const reviewPhone = document.getElementById("review-phone");
    const reviewStudio = document.getElementById("review-studio");
    const reviewCategory = document.getElementById("review-category");
    const reviewAge = document.getElementById("review-age");
    const reviewMessage = document.getElementById("review-message");

    //Get the application buttons
    const editApplication = document.getElementById("edit-details");
    const confirmApplication = document.getElementById("confirm-details");
    const newApplication = document.getElementById("new-application");

    //Display the information when the form is submitted
    applicationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        //Get the information entered by the applicant
        const formData = new FormData(applicationForm);

        // Display the information in the review section
        reviewName.textContent = formData.get("competitor-name");
        reviewEmail.textContent = formData.get("email");
        reviewPhone.textContent = formData.get("contact-number");
        reviewStudio.textContent = formData.get("dance-studio") || "Not provided";
        reviewCategory.textContent = formData.get("category");
        reviewAge.textContent = formData.get("age-group");
        reviewMessage.textContent = formData.get("message") || "None";

        //Hide the form and show the review section
        applicationForm.hidden = true;
        applicationReview.hidden = false;

        applicationReview.focus();
    });

    //Allow the applicant to edit their details
    if (editApplication) {
        editApplication.addEventListener("click", function () {

            applicationForm.hidden = false;
            applicationReview.hidden = true;

            applicationForm.querySelector("input").focus();
        });
    }

    //Confirm the application details
    if (confirmApplication) {
        confirmApplication.addEventListener("click", function () {

            applicationReview.hidden = true;
            applicationConfirmation.hidden = false;

            applicationConfirmation.focus();
        });
    }

    //Allow the applicant to start a new application
    if (newApplication) {
        newApplication.addEventListener("click", function () {

            applicationForm.reset();

            applicationForm.hidden = false;
            applicationReview.hidden = true;
            applicationConfirmation.hidden = true;
        });
    }
}

/*-----------------CONTACT FORM--------------------------------*/

//Get the contact form and feedback message
const contactForm = document.getElementById("contact-form");
const contactFeedback = document.getElementById("contact-feedback");

//Only run this code on the contact page
if (contactForm) {

    //Check the form when the visitor submits it
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        //Check that all required fields are completed
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        //Display a feedback message
        contactFeedback.textContent =
            "Thank you for contacting Legends Are Made Dance Series! Your enquiry has been successfully submitted.";

        contactFeedback.className = "form-feedback form-success";

        //Clear all the form fields
        contactForm.reset();
    });
}



/*-----------------COMPETITION SEARCH AND FILTER----------------------*/

//Get the competition elements
const categoryList = document.getElementById("category-list");
const searchCategory = document.getElementById("search-category");
const filterCategory = document.getElementById("filter-category");
const sortCategory = document.getElementById("sort-category");
const noCategories = document.getElementById("no-categories");

//Store the competition categories
const competitionCategories = [
    {
        id: "latin",
        name: "Latin",
        type: "dance",
        description: "Latin dance focuses on rhythm, technique, musicality and expression. Participants showcase their abilities through energetic movements, coordinated footwork and individual performance styles. This category encourages dancers to demonstrate confidence, creativity and a strong connection with the music."
    },

    {
        id: "ballroom",
        name: "Ballroom",
        type: "dance",
        description: "Ballroom dance highlights elegance, posture, control and partnership. Participants demonstrate their technique, timing and coordination through graceful movements and structured routines. This category celebrates precision, musical interpretation and the connection between dance partners."
    },

    {
        id: "freestyle",
        name: "Freestyle",
        type: "dance",
        description: "Freestyle gives participants the opportunity to express their individuality through movement. Dancers can showcase their creativity, personal style and energy through choreography and musical interpretation. This category encourages originality, confidence and freedom of expression."
    },

    {
        id: "singing-vocals",
        name: "Singing / Vocals",
        type: "other",
        description: "The Singing and Vocals category gives participants an opportunity to showcase their vocal ability and musical expression. Performers can demonstrate their confidence, stage presence and ability to connect with an audience through their choice of song and performance."
    },

    {
        id: "performing-cheer",
        name: "Performing Cheer",
        type: "other",
        description: "Performing Cheer combines teamwork, coordination, energy and performance skills. Participants demonstrate their abilities through synchronised movements, creative routines and group performances. This category highlights confidence, cooperation and the ability to work together on stage."
    }
];

//Only run this code on the competitions page
if (categoryList && searchCategory && filterCategory && sortCategory && noCategories) {

    //Display the categories on the page
    function displayCategories() {

        //Get the search text and selected filter
        const searchText = searchCategory.value.toLowerCase().trim();
        const selectedType = filterCategory.value;
        const selectedSort = sortCategory.value;

        //Find categories that match the search and filter
        let filteredCategories = competitionCategories.filter(function (category) {

            const matchesSearch =
                category.name.toLowerCase().includes(searchText) ||
                category.description.toLowerCase().includes(searchText);

            const matchesType =
                selectedType === "all" || category.type === selectedType;

            return matchesSearch && matchesType;
        });

        //Sort the matching categories
        if (selectedSort === "az") {
            filteredCategories.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

        } else if (selectedSort === "za") {
            filteredCategories.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            });
        }

        //Clear the previous results
        categoryList.replaceChildren();

        //Show a message if no categories match
        noCategories.hidden = filteredCategories.length > 0;

        //Create and display each category
        filteredCategories.forEach(function (category) {

            const categoryItem = document.createElement("div");
            const heading = document.createElement("h3");
            const description = document.createElement("p");

            //Give each category its own ID
            categoryItem.id = category.id;

            // Add the category styling
            categoryItem.className = "event-item";

            //Add the category information
            heading.textContent = category.name;
            description.textContent = category.description;

            // Place the heading and description inside the category
            categoryItem.appendChild(heading);
            categoryItem.appendChild(description);

            //Add the category to the page
            categoryList.appendChild(categoryItem);
        });
    }

    //Update results when the visitor searches
    searchCategory.addEventListener("input", displayCategories);

    //Update results when the visitor changes the filter
    filterCategory.addEventListener("change", displayCategories);

    //Update results when the visitor changes the sorting
    sortCategory.addEventListener("change", displayCategories);

    //Display all categories when the page first loads
    displayCategories();
}

/*-----------------GALLERY IMAGE LIGHTBOX----------------------*/

// Get the lightbox elements
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

// Get all gallery images
const galleryImages = document.querySelectorAll(".gallery-grid .gallery-item img");

// Only run this code if the gallery elements exist
if (lightbox && lightboxImage && closeLightbox && galleryImages.length > 0) {

    // Open the image when clicked
    galleryImages.forEach(function(image) {

        image.addEventListener("click", function() {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.style.display = "flex";

        });

    });

    // Close the image using the close button
    closeLightbox.addEventListener("click", function() {

        lightbox.style.display = "none";

    });

    // Close the image when clicking outside it
    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

    // Close the image when pressing Escape
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }

    });

}
