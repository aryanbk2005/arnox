document.addEventListener('DOMContentLoaded', function() {
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const windowHeight = window.innerHeight;

    function checkTimelineVisibility() {
        timelineEvents.forEach(event => {
            // Get the position of the event relative to the viewport
            const eventTop = event.getBoundingClientRect().top;
            
            // Check if the event is within 80% of the viewport height
            // This is the trigger point for the scroll animation
            if (eventTop < windowHeight * 0.8) {
                // Determine if it's a left or right event and apply the correct class
                if (event.classList.contains('event-right')) {
                    event.classList.add('visible-right');
                } else if (event.classList.contains('event-left')) {
                    event.classList.add('visible-left');
                }
            } else {
                // This 'else' is important for a nice initial state
            }
        });
    }

    // Run the check function immediately on load
    checkTimelineVisibility();

    // Run the check function whenever the user scrolls
    window.addEventListener('scroll', checkTimelineVisibility);
});