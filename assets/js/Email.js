// Initialize EmailJS with your user ID
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
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
    alert('Message sent successfully');
    document.getElementById('contact-form').reset();
  }, function(error) {
    alert('Failed to send message');
  });
});
