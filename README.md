# Legends Are Made Dance Series Website

## Student Information

**Student Name:** Moeketsi Nteo  
**Student Number:** st10539789

## Project Overview

Legends Are Made Dance Series is a dance and entertainment competition that provides performers with an opportunity to showcase their talents. The organisation offers different performance categories, including Latin, Ballroom, Freestyle, Singing/Vocals and Performance Cheer.

The purpose of this project is to develop a professional website that provides a central platform for competition information, competitor applications, event photographs and contact information.

The website was developed using HTML5, CSS3 and JavaScript. HTML provides the structure of the website, CSS is used for styling and responsive layouts, and JavaScript adds interactive functionality (Mozilla, n.d.-a; Mozilla, n.d.-b; Mozilla, n.d.-c).

## Website Goals and Objectives

- Create a professional online presence for Legends Are Made Dance Series.
- Make competition information easier to access.
- Provide competitors with a simple online application process.
- Showcase competition photographs and event highlights.
- Provide clear contact and social media information.
- Create a responsive website for desktop, tablet and mobile devices.
- Use consistent colours, typography and layouts throughout the website.
- Improve user interaction through JavaScript functionality.

## Key Features and Functionality

- **Home** – Organisation overview, mission, vision and competition categories.
- **Competitions** – Competition information, categories, rules and an Apply Now option.
- **Apply** – Multi-step application form that allows competitors to enter their details, review their information, edit their application and confirm it.
- **Gallery** – Competition photographs and event highlights displayed using a lightbox effect.
- **Contact** – Contact details, social media links and an enquiry form with validation and feedback.
- **Responsive Design** – The website adapts to different screen sizes.
- **Mobile Navigation** – A hamburger menu is used on tablet and mobile screen sizes.
- **Category Hover Effects** – Additional information appears when hovering over competition categories.
- **Active Navigation** – The current page is highlighted in the navigation menu.
- **Font Awesome Icons** – Icons are used for contact and social media information.
- **Form Validation** – JavaScript checks that required application and enquiry fields are completed correctly.
- **Application Review** – Competitors can review the information they entered before confirming their application.
- **Edit Application** – Competitors can return to the application form to correct their details.
- **Application Confirmation** – A confirmation screen is displayed after the competitor confirms the application.
- **Contact Form Feedback** – Feedback messages inform users whether the enquiry details have passed validation.
- **Form Reset** – The contact form fields are cleared after valid details have been checked.
- **Lightbox Gallery** – Visitors can view gallery photographs in an enlarged display.
- **Consistent Visual Design** – A black, white and red colour scheme is used throughout the website.

## Website Pages

The website consists of five main pages:

- Home
- Competitions
- Apply
- Gallery
- Contact

## Design

The website uses a black, white and red colour scheme to create a strong and modern visual identity suitable for the dance competition theme.

CSS was used to style the navigation, headings, buttons, competition category cards, forms, gallery, contact section and page layouts. CSS Flexbox and responsive media queries help organise the content and adjust the layouts for different screen sizes (Mozilla, n.d.-b; W3Schools, n.d.-b).

The competition category cards include hover effects that display additional information about each category. The website also uses consistent navigation and footer layouts across its pages.

## JavaScript Functionality

JavaScript was added to make the website more interactive, particularly the Apply and Contact pages. The JavaScript code is contained in `script.js`. JavaScript event listeners and form validation methods are used to respond to user interactions and check form information (Mozilla, n.d.-c; Mozilla, n.d.-d; Mozilla, n.d.-e).

### Apply Page

The Apply page was improved by introducing a multi-step application process instead of displaying the entire process on a single screen.

The process includes:

- **Application Form:** Competitors enter their personal and competition details.
- **Validation:** JavaScript checks whether the required fields have been completed correctly.
- **Review Screen:** The entered information is displayed so competitors can check their details.
- **Edit Option:** Competitors can return to the form and make corrections before confirming.
- **Confirmation Screen:** A confirmation screen is displayed after the competitor confirms the application.
- **New Application:** The form can be used again to start another application.

The application process also supports different registration types, including individual, couple and studio/group applications. Competitors can add or remove competitor details where applicable.

This makes the application process easier to follow and gives competitors an opportunity to check their information before confirmation.

### Apply Page Flowchart

The following flowchart illustrates the application process and its main decision points.

*Note: The flowchart represents the website's front-end application process. The confirmation screen does not, by itself, mean that the application has been submitted to a server or stored in a database.*

### Contact Page

JavaScript was also added to the Contact page to improve form validation and user feedback.

- Checks that the required fields are completed correctly.
- Validates the email address using HTML form validation.
- Checks the minimum and maximum character limits for applicable fields.
- Displays a validation message when the details are incomplete or invalid.
- Displays feedback after the details pass validation.
- Clears the form fields after valid details have been checked.

The contact form currently provides front-end validation and feedback. An email or server-side submission service is not connected, so the enquiry is not automatically sent.

## Gallery and Lightbox

The Gallery page displays photographs and event highlights from Legends Are Made Dance Series.

A lightbox effect was implemented to allow visitors to view photographs in an enlarged display. The Elementor tutorial was consulted to understand how to implement lightbox functionality (Elementor, n.d.).

## Home Page Content Structure

The Home page introduces the organisation and provides an overview of its purpose and competition categories.

The About section is part of the Home page rather than a separate page. It introduces Legends Are Made Dance Series, followed by the organisation's mission and vision and an overview of the available competition categories.

The following diagram shows how the main content sections are organised on the Home page.

```mermaid
flowchart TD
    A[Home Page] --> B[Hero Section]
    B --> C[Organisation Overview]
    C --> D[Mission and Vision]
    D --> E[Competition Categories]
    E --> F[Latin]
    E --> G[Ballroom]
    E --> H[Freestyle]
    E --> I[Singing and Vocals]
    E --> J[Performance Cheer]
```

This is a content structure diagram rather than a process flowchart because it shows the organisation of the page content.

## Responsive Design

The website was developed to be responsive across different screen sizes and devices. The layout, navigation, images, forms and content adjust to provide a consistent user experience on desktop, tablet and mobile devices. Responsive CSS techniques and media queries were used to achieve this (Mozilla, n.d.-b).

### Desktop

The following screenshots show all website pages on a desktop/laptop screen.

#### Home

![Home Page - Desktop](website_evidence_screenshots/desktop-home.png)

#### Competitions

![Competitions Page - Desktop](website_evidence_screenshots/desktop-competitions.png)

#### Apply

![Apply Page - Desktop](website_evidence_screenshots/desktop-apply.png)

#### Gallery

![Gallery Page - Desktop](website_evidence_screenshots/desktop-gallery.png)

#### Contact

![Contact Page - Desktop](website_evidence_screenshots/desktop-contact.png)

### Tablet

The following screenshots show all website pages on a tablet device.

#### Home

![Home Page - Tablet](website_evidence_screenshots/tablet-home.png)

#### Competitions

![Competitions Page - Tablet](website_evidence_screenshots/tablet-competitions.png)

#### Apply

![Apply Page - Tablet](website_evidence_screenshots/tablet-apply.png)

#### Gallery

![Gallery Page - Tablet](website_evidence_screenshots/tablet-gallery.png)

#### Contact

![Contact Page - Tablet](website_evidence_screenshots/tablet-contact.png)

### Mobile

The following screenshots show all website pages on a mobile device.

#### Home

![Home Page - Mobile](website_evidence_screenshots/mobile-home.png)

#### Competitions

![Competitions Page - Mobile](website_evidence_screenshots/mobile-competitions.png)

#### Apply

![Apply Page - Mobile](website_evidence_screenshots/mobile-apply.png)

#### Gallery

![Gallery Page - Mobile](website_evidence_screenshots/mobile-gallery.png)

#### Contact

![Contact Page - Mobile](website_evidence_screenshots/mobile-contact.png)

## Timeline and Milestones

| Stage | Milestone |
|---|---|
| Part 1 | Organisation selection, proposal, research, requirements and sitemap |
| Part 2 | Wireframes, visual design and website development using HTML and CSS |
| Part 3 | JavaScript functionality, form validation, testing, improvements, finalisation and deployment |

The overall project is expected to take approximately **6–8 weeks**.

## Project Status

The website has been developed using HTML5, CSS3 and JavaScript. The current implementation includes responsive layouts, navigation, category hover effects, an interactive application process, a gallery lightbox, form validation and user feedback.

The Apply page includes a review and confirmation process, while the Contact page provides front-end validation. The website has also been tested across desktop, tablet and mobile screen sizes.

The application and contact forms currently provide front-end functionality. They do not submit information to a server or store it in a database.

## Changelog

### Part 2 – Feedback Improvements

- Added a reference list to address the lecturer's feedback that references were missing.
- Retained the existing responsive layout, consistent colour palette and typography across the website.
- Maintained the use of CSS Flexbox, hover transitions, form focus states and responsive media queries.

### Part 3 – Development Updates

- Added JavaScript functionality to the Apply page.
- Introduced conditional application sections for individual, couple and studio/group registrations.
- Added competitor management functionality for studio/group applications.
- Added application form validation.
- Introduced an application review screen, edit option and confirmation screen.
- Improved the Contact page with required-field validation and user feedback messages.
- Added an enquiry type selection and character limits to the contact form.
- Implemented a lightbox effect on the Gallery page.
- Organised project evidence screenshots into the `website_evidence_screenshots` folder.
- Updated README screenshot paths to reflect the new folder structure.
- Continued testing the website's functionality and responsiveness across desktop, tablet and mobile screen sizes.

## References20

Elementor (n.d.) *How to Add a Dynamic Lightbox to Your WordPress Website* [YouTube video]. Available at: https://youtu.be/80NLEjV2UNE (Accessed: 10 October  2026).

Mozilla (n.d.-a) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 4 September 2026).

Mozilla (n.d.-b) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 7 October 2026).

Mozilla (n.d.-c) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 25 October 2026).

Mozilla (n.d.-d) *HTMLFormElement: checkValidity() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity (Accessed: 20 October 2026).

Mozilla (n.d.-e) *HTMLFormElement: reportValidity() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity (Accessed:20 October 2026).

W3Schools (n.d.-a) *HTML Tutorial*. Available at: https://www.w3schools.com/html/ (Accessed: 5 September 2026).

W3Schools (n.d.-b) *CSS Tutorial*. Available at: https://www.w3schools.com/css/ (Accessed: 7 October 2026).

W3Schools (n.d.-c) *JavaScript Tutorial*. Available at: https://www.w3schools.com/js/ (Accessed:27 October 2026).
