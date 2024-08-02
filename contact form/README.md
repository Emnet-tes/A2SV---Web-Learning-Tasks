# Contact Form

This is a React-based Contact Form project using `react-hook-form` for form handling and validation, and `flowbite-react` for UI components.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Emnet-tes/A2SV---Web-Learning-Tasks.git
   cd contact-form

2. **install dependancies**
     ```bash
    npm install
3. **start the development server:**
     ```bash
        npm start

## Dependenceies
    react-hook-form: For form handling and validation.
    flowbite-react: For UI components.
    @hookform/devtools: For debugging the form.
    react-icons: For icons used in the Success modal.

## Features

### Form Validation:

- **Required Fields:**
    All form fields (name, email, and message) are required. The form will display an error message if any of these fields are left empty.
    ![Required Fields](./public/images/required%20form.png)

- **Email Format Validation:**
    The email field includes validation to ensure that the entered email address is in a valid format. If the format is incorrect, an error message will be displayed.
     ![Required Fields](./public/images/valid%20email%20format.png)
### Form Submission:

- **Submission Status:**
    The form displays a success modal when the form is submitted successfully. The modal includes a success message and an OK button to close the modal.
     ![Required Fields](./public/images/submission%20status.png)
- **Disabled Submit Button:**
    The submit button is disabled until all fields are valid and there are no errors.
### Reset Form:
- **Reset Button:**
    A reset button is provided to clear all form fields and reset the form state.
     ![Required Fields](./public/images//reset%20button.png)
- **Auto Reset After Submission:**
    The form automatically resets after a successful submission.

## Usage
### ContactForm Component
The ContactForm component includes fields for name, email, and message. It handles form submission and validation using react-hook-form.
### success Component
The Success component displays a modal with a success message.
