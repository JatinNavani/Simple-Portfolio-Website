// contact.js

// Initialize EmailJS with your user ID
emailjs.init('Your Public API Key');


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Use the EmailJS send function
  emailjs.send('Service ID', 'Template ID', {
    name: name,
    email: email,
    message: message
  })
  .then(function(response) {
    alert('Message sent successfully');
    // Clear the form fields after successful submission
    document.getElementById('contact-form').reset();
  }, function(error) {
    alert('Failed to send message: ');
  });
});
