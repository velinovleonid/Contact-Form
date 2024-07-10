const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Add validation logic here
    // For example:
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Send the form data to your server or email service
    // For example:
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Message sent successfully!');
});