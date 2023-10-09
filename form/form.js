function submitForm() {
    // Get values from form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const genderOther = document.getElementById('other').checked;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Validate the form fields (add your validation logic here)
    if (!isValid(firstName) || !isValid(lastName) || !isValidDate(dob) || !isValid(country) || !isValidProfession(profession) || !isValidEmail(email) || !isValidMobile(mobile)) {
        alert('Please fill in all fields with valid data.');
        return false; // Prevent the form from submitting
    }

    // Display values in the popup
    const popup = document.getElementById('popup');
    popup.innerHTML = `
        <h2>Survey Form Submission</h2>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Country: ${country}</p>
        <p>Gender: ${genderMale ? 'Male' : ''} ${genderFemale ? 'Female' : ''} ${genderOther ? 'Other' : ''}</p>
        <p>Profession: ${profession}</p>
        <p>Email: ${email}</p>
        <p>Mobile Number: ${mobile}</p>
        <button onclick="closePopup()">Close</button>
    `;

    // Show the popup
    popup.style.display = 'block';
}

function isValid(value) {
    return value.trim() !== ''; // Basic validation: Check if the value is not empty
}

function isValidDate(value) {
    // Add date validation logic here (e.g., check date format)
    return isValid(value); // Placeholder validation
}

function isValidProfession(value) {
    // Add profession validation logic here
    return isValid(value); // Placeholder validation
}

function isValidEmail(value) {
    // Add email validation logic here (e.g., use regular expressions)
    return isValid(value); // Placeholder validation
}

function isValidMobile(value) {
    // Add mobile validation logic here (e.g., check for valid phone number format)
    return isValid(value); // Placeholder validation
}

function resetForm() {
    // Reset all form fields
    document.getElementById('surveyForm').reset();
    // Clear the popup
    document.getElementById('popup').innerHTML = '';
}

function closePopup() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
}
