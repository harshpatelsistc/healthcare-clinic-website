// Scroll Animation
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// BMI Calculation
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const bmi = weight / (height * height);

    const bmiResult = document.getElementById('bmi-result');
    bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});
// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // EmailJS configuration
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!'); // Success message
        document.getElementById('contact-form').reset(); // Clear the form
    }, function(error) {
        alert('Failed to send message, please try again later.'); // Error message
    });
});

