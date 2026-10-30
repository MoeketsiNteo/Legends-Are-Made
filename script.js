/*-----------------APPLICATION FORM----------------------*/

//Get the application form elements
const applicationForm = document.getElementById("application-form");
const applicationReview = document.getElementById("application-review");
const applicationConfirmation = document.getElementById("application-confirmation");

//Check if the application form exists on the page
if (applicationForm) {

    //Validate the application form before showing the review
    applicationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!applicationForm.checkValidity()) {
            applicationForm.reportValidity();
            return;
        }

        //Get the information entered by the applicant
        const formData = new FormData(applicationForm);
        let reviewDetails = "";

        //Display the applicant's information for review
        formData.forEach(function (value, key) {
            reviewDetails += `
                <p>
                    <strong>${key}:</strong>
                    ${value}
                </p>
            `;
        });

        if (applicationReview) {
            applicationReview.innerHTML = reviewDetails;
            applicationReview.hidden = false;
        }

        //Hide the application form while the details are being reviewed
        applicationForm.hidden = true;
    });

    //Allow the applicant to edit their application
    const editApplication = document.getElementById("edit-application");

    if (editApplication) {
        editApplication.addEventListener("click", function () {
            applicationForm.hidden = false;

            if (applicationReview) {
                applicationReview.hidden = true;
            }

            if (applicationConfirmation) {
                applicationConfirmation.hidden = true;
            }
        });
    }

    //Confirm the application
    const confirmApplication = document.getElementById("confirm-application");

    if (confirmApplication) {
        confirmApplication.addEventListener("click", function () {
            if (applicationReview) {
                applicationReview.hidden = true;
            }

            if (applicationConfirmation) {
                applicationConfirmation.hidden = false;
            }
        });
    }

    //Allow the applicant to start a new application
    const newApplication = document.getElementById("new-application");

    if (newApplication) {
        newApplication.addEventListener("click", function () {
            applicationForm.reset();
            applicationForm.hidden = false;

            if (applicationReview) {
                applicationReview.hidden = true;
            }

            if (applicationConfirmation) {
                applicationConfirmation.hidden = true;
            }
        });
    }
}


/*-----------------CONTACT FORM----------------------*/

//Get the contact form
const contactForm = document.getElementById("contact-form");

//Check if the contact form exists on the page
if (contactForm) {

    //Check the contact form when it is submitted
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        //Check that all required fields are completed
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        //Show a message to the visitor
        //This form currently does not send information to a server
        alert("Thank you! Your form has been checked. Your enquiry has not been sent yet.");
    });
}


/*-----------------GALLERY LIGHTBOX----------------------*/

// Get all gallery images
const galleryImages = document.querySelectorAll(".gallery img");

//Only create the lightbox if gallery images exist
if (galleryImages.length > 0) {

    //Create the lightbox elements
    const lightbox = document.createElement("div");
    const lightboxImage = document.createElement("img");
    const closeButton = document.createElement("button");

    //Add classes and text to the elements
    lightbox.className = "lightbox";
    closeButton.className = "lightbox-close";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Close image");

    //Add the elements to the page
    lightbox.appendChild(closeButton);
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    //Open an image when it is clicked
    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
        });
    });

    //Close the lightbox using the close button
    closeButton.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    //Close the lightbox when the visitor clicks outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    //Close the lightbox by pressing Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }
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