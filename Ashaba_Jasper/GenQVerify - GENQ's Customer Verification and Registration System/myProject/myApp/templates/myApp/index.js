// Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
//I am having trouble with form validation in python, so just in case:

app.post('/register', (req, res) => {
  // Get form data from request body
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const dateOfBirth = req.body.dateOfBirth;
  const address = req.body.address;
  const gender = req.body.gender;

  // Validate form data
  let errors = [];

  // Validate first name
  if (!validator.isAlpha(firstName)) {
    errors.push('First name must contain only alphabetic characters.');
  }
  if (!validator.isLength(firstName, { min: 2, max: 255 })) {
    errors.push('First name must be between 2 and 255 characters long.');
  }

  // Validate last name
  if (!validator.isAlpha(lastName)) {
    errors.push('Last name must contain only alphabetic characters.');
  }
  if (!validator.isLength(lastName, { min: 2, max: 255 })) {
    errors.push('Last name must be between 2 and 255 characters long.');
  }

  // Validate email
  if (!validator.isEmail(email)) {
    errors.push('Please enter a valid email address.');
  }

  // Validate password
  if (!validator.isLength(password, { min: 8 })) {
    errors.push('Password must be at least 8 characters long.');
  }

  // Validate date of birth
  if (!validator.isDate(dateOfBirth, { format: 'YY/MM/DD' })) {
    errors.push('Please enter a valid date of birth in the format YY/MM/DD.');
  } else {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    if (new Date(dateOfBirth) > eighteenYearsAgo) {
      errors.push('You must be at least 18 years old to register.');
    }
  }

  // Validate address
  if (!validator.isLength(address, { min: 2, max: 255 })) {
    errors.push('Address must be between 2 and 255 characters long.');
  }

  // Validate gender
  if (gender === '-- Select Gender --') {
    errors.push('Please select a gender.');
  }

  if (errors.length > 0) {
    // If there are errors, render the form with the errors
    res.render('index', { errors: errors });
  } else {
    // If there are no errors, save the user to the database and redirect to the success page
    // Save user to database here...
    res.redirect('/success');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
