# Project Title: Contact Form PHP Migration

## Overview
This project is a PHP implementation of a contact form that allows users to send messages to the admin. Upon submission, users receive a confirmation email, and the admin is notified of the new message.

## Project Structure
```
backend-php
├── config
│   └── mailConfig.php
├── controllers
│   └── contactController.php
├── middleware
│   └── validationMiddleware.php
├── routes
│   └── contactRoutes.php
├── templates
│   ├── adminNotification.html
│   └── userConfirmation.html
└── README.md
```

## Requirements
- PHP 7.0 or higher
- A web server (e.g., Apache, Nginx)
- Composer (for managing dependencies, if using libraries like PHPMailer)

## Setup Instructions
1. **Clone the Repository**
   Clone this repository to your local machine or server.

2. **Install Dependencies**
   If using PHPMailer or any other library, run:
   ```
   composer install
   ```

3. **Configure Mail Settings**
   Update the `config/mailConfig.php` file with your mail server settings.

4. **Set Up the Web Server**
   Ensure your web server is configured to serve the PHP files. You may need to set up a virtual host or point your document root to the `backend-php` directory.

5. **Access the Contact Form**
   Navigate to the appropriate URL to access the contact form. Ensure that the form submits to the route defined in `routes/contactRoutes.php`.

## Usage
- Users can fill out the contact form with their name, email, and message.
- Upon submission, they will receive a confirmation email.
- The admin will receive a notification email with the details of the contact message.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.