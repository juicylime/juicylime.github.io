window.onload = function () {
    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.bottom >= 0 &&
            rect.top <= window.innerHeight
        );
    }

    // Get a NodeList of elements with the same class name
    var elements = document.querySelectorAll('.feature_hero'); 

    // Array to keep track of the visibility status of each element
    var visibilityStatus = [];

    // Check visibility status for each element
    elements.forEach(function (element, index) {
        visibilityStatus[index] = false; // Initialize as not in viewport

        // Function to handle visibility changes
        function handleVisibility() {
            var isVisible = isElementInViewport(element);

            // Log when an item enters or exits the viewport
            if (isVisible && !visibilityStatus[index]) {
                element.classList.add('in-viewport');
                visibilityStatus[index] = true;
            } else if (!isVisible && visibilityStatus[index]) {
                element.classList.remove('in-viewport');
                visibilityStatus[index] = false;
            }
        }

        // Attach an event listener to the window's scroll and resize events
        window.addEventListener('scroll', handleVisibility);
        window.addEventListener('resize', handleVisibility);

        // Initial check when the page loads
        handleVisibility();
    });

};