<?php
require_once '../config/mailConfig.php';

class ContactController {
    public function sendMail($request) {
        $name = $request['name'] ?? null;
        $email = $request['email'] ?? null;
        $message = $request['message'] ?? null;

        if (!$name || !$email || !$message) {
            return json_encode(['success' => false, 'message' => 'Todos los campos son obligatorios.']);
        }

        $userTemplate = file_get_contents('../templates/userConfirmation.html');
        $adminTemplate = file_get_contents('../templates/adminNotification.html');

        $userEmailContent = str_replace('{{name}}', $name, $userTemplate);
        $adminEmailContent = str_replace(['{{name}}', '{{email}}', '{{message}}'], [$name, $email, $message], $adminTemplate);

        // Send email to user
        mail($email, 'Confirmación de contacto', $userEmailContent, "Content-Type: text/html; charset=UTF-8");

        // Send email to admin
        mail(getenv('ADMIN_EMAIL'), 'Nuevo mensaje de contacto', $adminEmailContent, "Content-Type: text/html; charset=UTF-8");

        return json_encode(['success' => true, 'message' => 'Correo enviado con éxito.']);
    }
}
?>