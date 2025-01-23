
<!-- Start Instant Booking Widget-->
<script>
(function() {
    // Function to add an element to the page
    const addElement = (tag, attributes, parent = document.body) => {
        const element = document.createElement(tag);
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        parent.appendChild(element);
        return element;
    };

    // Create the "Book Now" button with a link
    const bookNowButton = addElement("a", {
        href: "https://hotelchichogaholidayinn.pripgo.com", // Replace with your booking link
        target: "_blank",  // Opens the link in a new tab
        class: "book-now-btn"
    });

    // Set the text inside the button
    bookNowButton.innerText = "Book Now"; // This is the button text

    // Apply the provided styles
    bookNowButton.style.position = "fixed";
    bookNowButton.style.left = "36px";
    bookNowButton.style.bottom = "19px";
    bookNowButton.style.backgroundColor = "rgb(255, 99, 71)"; // Tomato color
    bookNowButton.style.color = "white";
    bookNowButton.style.textDecoration = "none"; // Remove underline
    bookNowButton.style.fontSize = "18px";
    bookNowButton.style.cursor = "pointer";
    bookNowButton.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 6px";
    bookNowButton.style.transition = "background-color 0.3s";
    
    // Apply the transform and other styles for vertical text
    bookNowButton.style.transform = "rotate(-90deg)";
    bookNowButton.style.transformOrigin = "left bottom";
    bookNowButton.style.whiteSpace = "nowrap";
    bookNowButton.style.width = "114px";
    bookNowButton.style.height = "36px";
    bookNowButton.style.textAlign = "center";
    bookNowButton.style.zIndex = "99999";

    // Hover effect for the button
    bookNowButton.addEventListener("mouseover", function() {
        bookNowButton.style.backgroundColor = "#ff4500"; // Darker tomato
    });

    bookNowButton.addEventListener("mouseout", function() {
        bookNowButton.style.backgroundColor = "rgb(255, 99, 71)"; // Back to the original color
    });
})();
</script>
<!-- End Instant Booking Widget-->
