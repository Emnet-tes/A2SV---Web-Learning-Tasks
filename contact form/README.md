# Contact Form

This is a React-based Contact Form project using `react-hook-form` for form handling and validation, and `flowbite-react` for UI components.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Emnet-tes/A2SV---Web-Learning-Tasks.git
   cd contact-form

2. **install dependancies**
   npm install
3. **start the development server:**
   npm start

## Dependenceies
    react-hook-form: For form handling and validation.
    flowbite-react: For UI components.
    @hookform/devtools: For debugging the form.
    react-icons: For icons used in the Success modal.

## Features
1. **Form Validation:**
    ### Required Fields: 

    All form fields (name, email, and message) are required. The form will display an error message if any of these fields are left empty.

    ### Email Format Validation: 
    The email field includes validation to ensure that the entered email address is in a valid format. If the format is incorrect, an error message will be displayed.
2. **Form Submission:**

    ### Submission Status: 
    The form displays a success modal when the form is submitted successfully. The modal includes a success message and an OK button to close the modal.
    ### Disabled Submit Button: 
    The submit button is disabled until all fields are valid and there are no errors.
1. **Reset Form:**

    ### Reset Button:
    A reset button is provided to clear all form fields and reset the form state.
    ### Auto Reset After Submission:
    The form automatically resets after a successful submission.

## Usage
### ContactForm Component
The ContactForm component includes fields for name, email, and message. It handles form submission and validation using react-hook-form.
### success Component
The Success component displays a modal with a success message.
