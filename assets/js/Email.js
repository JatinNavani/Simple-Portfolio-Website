// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Use the EmailJS send function
  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      name: name,
      email: email,
      message: message
    }
  )
  .then(function(response) {
    showPopup('Message sent successfully');
    document.getElementById('contact-form').reset();
  }, function(error) {
    showPopup('Failed to send message. Please try again.');
  });
});

// Function to show the popup
function showPopup(message) {
  var modal = document.getElementById('popup-modal');
  var popupMessage = document.getElementById('popup-message');
  var closeButton = document.getElementById('close-button');

  popupMessage.textContent = message;
  modal.style.display = 'block';

  // Close modal on clicking the close button
  closeButton.onclick = function() {
    modal.style.display = 'none';
  };

  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
