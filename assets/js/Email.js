const userID = window.env.REACT_APP_EMAILJS_USER_ID;
const serviceID = window.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = window.env.REACT_APP_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS with your user ID from the dynamically injected config.js
emailjs.init(userID);

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs
    .send(serviceID, templateID, {
      name: name,
      email: email,
      message: message,
    })
    .then(
      function (response) {
        alert('Message sent successfully');
        document.getElementById('contact-form').reset();
      },
      function (error) {
        alert('Failed to send message');
      }
    );
});
