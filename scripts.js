document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown button and content
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownLinks = dropdownContent.querySelectorAll('a');

    // Toggle the display of dropdown content on button click
    dropbtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up to the body
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Add active class to the clicked link and remove it from others
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdownLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });
});
