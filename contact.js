document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', event => {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      !name ? (alert('Please enter your name.'), document.getElementById('name').focus()) :
      !validateEmail(email) ? (alert('Please enter a valid email address.'), document.getElementById('email').focus()) :
      !message ? (alert('Please enter your message.'), document.getElementById('message').focus()) :
      (console.log('Name:', name), console.log('Email:', email), console.log('Message:', message), form.reset());
  });

  const validateEmail = email => /\S+@\S+\.\S+/.test(email);
});