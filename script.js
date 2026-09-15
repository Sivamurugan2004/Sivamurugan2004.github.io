/* =========================================================
   PORTFOLIO JAVASCRIPT
   Clean production version
   ========================================================= */


/* =========================================================
   1. WAIT FOR HTML TO LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Run all portfolio JavaScript after the HTML is completely loaded.
    initializeNavigation();
    initializeBackToTop();
    initializeArtifactButtons();
    initializeScrollEffects();

});


/* =========================================================
   2. SMOOTH NAVIGATION
   ========================================================= */

function initializeNavigation() {

    // Select only navigation links inside the navbar.
    const navLinks = document.querySelectorAll(".navbar nav a");

    // Add click event to every navigation link.
    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            // Get the destination from href.
            const targetId = link.getAttribute("href");

            // Ignore invalid or empty links.
            if (!targetId || targetId === "#") {
                return;
            }

            // Find the section using the ID.
            const targetSection = document.querySelector(targetId);

            // If the section exists, scroll smoothly to it.
            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

}


/* =========================================================
   3. ACTIVE NAVIGATION LINK
   ========================================================= */

function initializeScrollEffects() {

    // Get all portfolio sections.
    const sections = document.querySelectorAll("section[id]");

    // Get all navbar links.
    const navLinks = document.querySelectorAll(".navbar nav a");

    // IntersectionObserver watches which section is currently visible.
    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                // Continue only when the section is visible.
                if (entry.isIntersecting) {

                    // Get the ID of the visible section.
                    const sectionId = entry.target.id;

                    // Remove active class from all navigation links.
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                    });

                    // Find the navigation link for the current section.
                    const activeLink = document.querySelector(
                        `.navbar nav a[href="#${sectionId}"]`
                    );

                    // Highlight the current navigation link.
                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },
        {
            // Section becomes active when approximately 45% is visible.
            threshold: 0.45
        }
    );

    // Start observing every section.
    sections.forEach(section => {
        observer.observe(section);
    });

}


/* =========================================================
   4. BACK TO TOP
   ========================================================= */

function initializeBackToTop() {

    // Find the Back to Top link.
    const backToTop = document.querySelector(".back-to-top");

    // Stop if the element does not exist.
    if (!backToTop) {
        return;
    }

    // Add click event.
    backToTop.addEventListener("click", event => {

        // Prevent normal jump to the top.
        event.preventDefault();

        // Scroll smoothly to the Home section.
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   5. TESTING ARTIFACT BUTTONS
   ========================================================= */

function initializeArtifactButtons() {

    // Select all artifact buttons.
    const artifactButtons = document.querySelectorAll(".artifact-btn");

    // Add click event to every artifact button.
    artifactButtons.forEach(button => {

        button.addEventListener("click", event => {

            // Get the current link destination.
            const href = button.getAttribute("href");

            // If the button still contains "#",
            // it means the real artifact file has not been connected yet.
            if (!href || href === "#") {

                event.preventDefault();

                alert(
                    "This testing artifact will be available soon."
                );

            }

        });

    });

}


/* =========================================================
   6. PREVENT EMPTY EXTERNAL LINKS FROM OPENING
   ========================================================= */

function initializeExternalLinks() {

    // Find LinkedIn and GitHub links.
    const externalLinks = document.querySelectorAll(
        '.contact-item a[target="_blank"]'
    );

    externalLinks.forEach(link => {

        link.addEventListener("click", event => {

            // Get the link destination.
            const href = link.getAttribute("href");

            // Prevent opening placeholder "#".
            if (!href || href === "#") {

                event.preventDefault();

                alert(
                    "This profile link will be available soon."
                );

            }

        });

    });

}


/* =========================================================
   7. INITIALIZE EXTERNAL LINK HANDLING
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Start LinkedIn/GitHub placeholder handling.
    initializeExternalLinks();

});