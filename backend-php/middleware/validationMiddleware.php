<?php
// filepath: backend-php/middleware/validationMiddleware.php

function validateContactForm($request) {
    $name = isset($request['name']) ? trim($request['name']) : null;
    $email = isset($request['email']) ? trim($request['email']) : null;
    $message = isset($request['message']) ? trim($request['message']) : null;

    if (empty($name) || empty($email) || empty($message)) {
        return [
            'success' => false,
            'message' => 'Todos los campos son obligatorios.'
        ];
    }

    return ['success' => true];
}
?>