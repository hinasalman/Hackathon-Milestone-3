document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeDisplay = document.getElementById('Resume-Display');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission
        // Collect form data
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('Experience').value;
        var skills = document.getElementById('skills').value;
        // Generate resume content
        var resumeHTML = "\n            <h2>".concat(fullName, "'s Resume</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display resume
        resumeDisplay.innerHTML = resumeHTML;
    });
});
