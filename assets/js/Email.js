// Initialize EmailJS with your user ID
emailjs.init('Ylhn27qHL-46IEbKc');

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !message) {
    Swal.fire({
      icon: 'warning',
      title: 'All fields are required!',
      text: 'Please fill in all the fields before submitting.',
    });
    return;
  }

  // Display loading popup
  Swal.fire({
    title: 'Sending...',
    text: 'Please wait while your message is being sent.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading(); // Show loading spinner
    },
  });

  // Use the EmailJS send function
  emailjs
    .send(
      'service_2ifzdte',
      'template_d9exdoe',
      {
        name: name,
        email: email,
        message: message,
      }
    )
    .then(
      function (response) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
          showConfirmButton: true,
        });
        document.getElementById('contact-form').reset(); // Reset form
      },
      function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send',
          text: 'Something went wrong. Please try again later.',
        });
      }
    );
});