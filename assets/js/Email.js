// Initialize EmailJS with your user ID
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !message) {
    toastr.warning('Please fill in all the fields before submitting.');
    return;
  }

  // Display loading popup (Toastr does not support loading spinners)
  toastr.info('Sending... Please wait while your message is being sent.');

  // Use the EmailJS send function
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        name: name,
        email: email,
        message: message,
      }
    )
    .then(
      function (response) {
        toastr.success('Your message has been sent successfully!');
        document.getElementById('contact-form').reset(); // Reset form
      },
      function (error) {
        toastr.error('Something went wrong. Please try again later.');
      }
    );
});