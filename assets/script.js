/*----------------------APPLICATION FORM----------------------*/

//Get the application form elements
const applicationForm = document.getElementById("application-form");
const applicationReview = document.getElementById("application-review");
const applicationConfirmation = document.getElementById("application-confirmation");

//Only run this code on the application page
if (applicationForm) {

    const registrationType = document.getElementById("registration-type");

    const individualSection = document.getElementById("individual-section");
    const coupleSection = document.getElementById("couple-section");
    const studioSection = document.getElementById("studio-section");

    const competitorList = document.getElementById("competitor-list");
    const addCompetitorButton = document.getElementById("add-competitor");

    const reviewDetails = document.getElementById("review-details");
    const editApplication = document.getElementById("edit-details");
    const confirmApplication = document.getElementById("confirm-details");
    const newApplication = document.getElementById("new-application");


    /*----------------------REGISTRATION TYPE----------------------*/

    // Show the section selected by the applicant
    function showRegistrationSection() {

        const selectedType = registrationType.value;

        individualSection.hidden = selectedType !== "Individual";
        coupleSection.hidden = selectedType !== "Couple";
        studioSection.hidden = selectedType !== "Studio / Group";

        // Enable only the fields in the selected section
        individualSection.querySelectorAll("input, select").forEach(function(field) {
            field.disabled = selectedType !== "Individual";
        });

        coupleSection.querySelectorAll("input, select").forEach(function(field) {
            field.disabled = selectedType !== "Couple";
        });

        studioSection.querySelectorAll("input, select, button").forEach(function(field) {
            field.disabled = selectedType !== "Studio / Group";
        });

        // Clear category validation messages when changing sections
        clearCategoryErrors();
    }

    registrationType.addEventListener("change", showRegistrationSection);

    // Set the correct section when the page loads
    showRegistrationSection();


    /*----------------------STUDIO COMPETITORS----------------------*/

    // Update competitor numbers
    function updateCompetitorNumbers() {

        const competitors = competitorList.querySelectorAll(".competitor-entry");

        competitors.forEach(function(competitor, index) {

            competitor.querySelector("h4").textContent =
                "Competitor " + (index + 1);

        });
    }

    // Add another competitor
    addCompetitorButton.addEventListener("click", function() {

        const firstCompetitor = competitorList.querySelector(".competitor-entry");

        const newCompetitor = firstCompetitor.cloneNode(true);

        // Clear all copied information
        newCompetitor.querySelectorAll("input").forEach(function(field) {

            if (field.type === "checkbox") {
                field.checked = false;
            } else {
                field.value = "";
            }

            field.disabled = false;
            field.setCustomValidity("");
        });

        newCompetitor.querySelectorAll("select").forEach(function(field) {
            field.selectedIndex = 0;
            field.disabled = false;
        });

        // Create a remove button
        const removeButton = document.createElement("button");

        removeButton.type = "button";
        removeButton.className = "edit-button remove-competitor";
        removeButton.textContent = "REMOVE COMPETITOR";

        newCompetitor.appendChild(removeButton);

        competitorList.appendChild(newCompetitor);

        updateCompetitorNumbers();

        newCompetitor.querySelector('input[type="text"]').focus();
    });


    // Remove a competitor when the button is clicked
    competitorList.addEventListener("click", function(event) {

        if (event.target.classList.contains("remove-competitor")) {

            const competitors = competitorList.querySelectorAll(".competitor-entry");

            // Always keep at least one competitor
            if (competitors.length > 1) {

                event.target.closest(".competitor-entry").remove();

                updateCompetitorNumbers();
            }
        }
    });


    /*----------------------CATEGORY VALIDATION----------------------*/

    // Clear category error messages
    function clearCategoryErrors() {

        applicationForm.querySelectorAll(
            '.category-selection input[type="checkbox"]'
        ).forEach(function(checkbox) {

            checkbox.setCustomValidity("");
        });
    }


    // Check that at least one category is selected
    function validateCategories() {

        clearCategoryErrors();

        let categoryGroups = [];

        if (registrationType.value === "Individual") {

            categoryGroups.push(
                individualSection.querySelectorAll(
                    'input[name="individual-categories"]'
                )
            );

        } else if (registrationType.value === "Couple") {

            categoryGroups.push(
                coupleSection.querySelectorAll(
                    'input[name="couple-categories"]'
                )
            );

        } else if (registrationType.value === "Studio / Group") {

            const competitors = competitorList.querySelectorAll(".competitor-entry");

            competitors.forEach(function(competitor) {

                categoryGroups.push(
                    competitor.querySelectorAll(
                        'input[name="group-competitor-categories"]'
                    )
                );
            });
        }

        let valid = true;

        categoryGroups.forEach(function(group) {

            const selected = Array.from(group).some(function(checkbox) {
                return checkbox.checked;
            });

            if (!selected && group.length > 0) {

                group[0].setCustomValidity(
                    "Please select at least one competition category."
                );

                valid = false;
            }
        });

        return valid;
    }


    // Clear category errors when a category is selected
    applicationForm.addEventListener("change", function(event) {

        if (event.target.type === "checkbox") {
            validateCategories();
        }
    });


    /*----------------------APPLICATION REVIEW----------------------*/

    // Add information to the review section
    function addReviewItem(title, value, parent) {

        const row = document.createElement("div");
        const heading = document.createElement("dt");
        const information = document.createElement("dd");

        heading.textContent = title;
        information.textContent = value || "Not provided";

        row.appendChild(heading);
        row.appendChild(information);

        parent.appendChild(row);
    }


    //Get selected competition categories
    function getSelectedCategories(section, fieldName) {

        const selected = section.querySelectorAll(
            'input[name="' + fieldName + '"]:checked'
        );

        return Array.from(selected).map(function(checkbox) {
            return checkbox.value;
        }).join(", ") || "None selected";
    }


    //Display a heading in the review
    function addReviewHeading(text) {

        const heading = document.createElement("h3");

        heading.textContent = text;

        reviewDetails.appendChild(heading);
    }


    //Display the applicant's information
    function displayApplicationReview() {

        //Clear only the previous review, not the form
        reviewDetails.replaceChildren();

        const selectedType = registrationType.value;

        addReviewHeading("REGISTRATION TYPE");
        addReviewItem("Registration Type", selectedType, reviewDetails);


        //INDIVIDUAL REGISTRATION
        if (selectedType === "Individual") {

            addReviewHeading("COMPETITOR DETAILS");

            addReviewItem(
                "Full Name",
                document.getElementById("individual-name").value,
                reviewDetails
            );

            addReviewItem(
                "Email Address",
                document.getElementById("individual-email").value,
                reviewDetails
            );

            addReviewItem(
                "Contact Number",
                document.getElementById("individual-phone").value,
                reviewDetails
            );

            addReviewItem(
                "Dance Studio",
                document.getElementById("individual-studio").value,
                reviewDetails
            );

            addReviewItem(
                "Age Group",
                document.getElementById("individual-age").value,
                reviewDetails
            );

            addReviewItem(
                "Competition Categories",
                getSelectedCategories(individualSection, "individual-categories"),
                reviewDetails
            );
        }


        //COUPLE REGISTRATION
        else if (selectedType === "Couple") {

            for (let i = 1; i <= 2; i++) {

                const partner = i === 1 ? "one" : "two";

                addReviewHeading("PARTNER " + i);

                addReviewItem(
                    "Full Name",
                    document.getElementById("partner-" + partner + "-name").value,
                    reviewDetails
                );

                addReviewItem(
                    "Email Address",
                    document.getElementById("partner-" + partner + "-email").value,
                    reviewDetails
                );

                addReviewItem(
                    "Contact Number",
                    document.getElementById("partner-" + partner + "-phone").value,
                    reviewDetails
                );

                addReviewItem(
                    "Age Group",
                    document.getElementById("partner-" + partner + "-age").value,
                    reviewDetails
                );
            }

            addReviewHeading("SHARED COMPETITION CATEGORIES");

            addReviewItem(
                "Categories",
                getSelectedCategories(coupleSection, "couple-categories"),
                reviewDetails
            );
        }


        //STUDIO / GROUP REGISTRATION
        else if (selectedType === "Studio / Group") {

            addReviewHeading("STUDIO DETAILS");

            addReviewItem(
                "Studio Name",
                document.getElementById("studio-name").value,
                reviewDetails
            );

            addReviewItem(
                "Representative",
                document.getElementById("representative-name").value,
                reviewDetails
            );

            addReviewItem(
                "Email Address",
                document.getElementById("representative-email").value,
                reviewDetails
            );

            addReviewItem(
                "Contact Number",
                document.getElementById("representative-phone").value,
                reviewDetails
            );

            addReviewHeading("COMPETITOR DETAILS");

            const competitors = competitorList.querySelectorAll(".competitor-entry");

            competitors.forEach(function(competitor, index) {

                addReviewHeading("COMPETITOR " + (index + 1));

                addReviewItem(
                    "Full Name",
                    competitor.querySelector('[name="group-competitor-name"]').value,
                    reviewDetails
                );

                addReviewItem(
                    "Email Address",
                    competitor.querySelector('[name="group-competitor-email"]').value,
                    reviewDetails
                );

                addReviewItem(
                    "Contact Number",
                    competitor.querySelector('[name="group-competitor-phone"]').value,
                    reviewDetails
                );

                addReviewItem(
                    "Age Group",
                    competitor.querySelector('[name="group-competitor-age"]').value,
                    reviewDetails
                );

                addReviewItem(
                    "Competition Categories",
                    getSelectedCategories(
                        competitor,
                        "group-competitor-categories"
                    ),
                    reviewDetails
                );
            });
        }


        //Additional information
        addReviewHeading("ADDITIONAL INFORMATION");

        addReviewItem(
            "Message",
            document.getElementById("message").value || "None",
            reviewDetails
        );
    }


    /*-------------------------REVIEW BUTTON----------------------*/

    applicationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        //Check that a registration type has been selected
        if (!registrationType.value) {
            registrationType.reportValidity();
            return;
        }

        //Check that a category has been selected
        if (!validateCategories()) {
            applicationForm.reportValidity();
            return;
        }

        //Check all other required fields
        if (!applicationForm.checkValidity()) {
            applicationForm.reportValidity();
            return;
        }

        //Display the review without resetting the form
        displayApplicationReview();

        applicationForm.hidden = true;
        applicationReview.hidden = false;

        applicationReview.focus();
    });


    /*----------------------EDIT DETAILS----------------------*/

    editApplication.addEventListener("click", function() {

        //Return to the form with the original information intact
        applicationReview.hidden = true;
        applicationForm.hidden = false;

        registrationType.focus();
    });


    /*----------------------------CONFIRM DETAILS----------------------*/

    confirmApplication.addEventListener("click", function() {

        applicationReview.hidden = true;
        applicationConfirmation.hidden = false;

        applicationConfirmation.focus();
    });


    /*----------------------NEW APPLICATION--------------------------*/

    newApplication.addEventListener("click", function() {

        //Reset the form when starting a completely new application
        applicationForm.reset();

        //Remove extra competitors
        const competitors = competitorList.querySelectorAll(".competitor-entry");

        competitors.forEach(function(competitor, index) {

            if (index > 0) {
                competitor.remove();
            }
        });

        //Remove any remove button from the first competitor
        const removeButton = competitorList.querySelector(".remove-competitor");

        if (removeButton) {
            removeButton.remove();
        }

        //Clear review and validation messages
        reviewDetails.replaceChildren();
        clearCategoryErrors();

        //Show the form again
        applicationForm.hidden = false;
        applicationReview.hidden = true;
        applicationConfirmation.hidden = true;

        //Reset the registration sections
        showRegistrationSection();

        registrationType.focus();

        updateCompetitorNumbers();
    });

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

        //Check that all required fields are completed correctly
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        //Display a validation success message
        contactFeedback.textContent =
            "Thank you! Your enquiry details have been validated successfully.";

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
