<?php
// filepath: backend-php/routes/contactRoutes.php

require_once '../controllers/contactController.php';
require_once '../middleware/validationMiddleware.php';

$router = new Router();

$router->post('/contact', function() {
    validateContactForm();

    $contactController = new ContactController();
    $contactController->sendMail();
});

class Router {
    private $routes = [];

    public function post($path, $callback) {
        $this->routes[$path] = $callback;
    }

    public function dispatch($requestPath) {
        if (array_key_exists($requestPath, $this->routes)) {
            call_user_func($this->routes[$requestPath]);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Route not found']);
        }
    }
}

// Assuming you have a way to get the current request path
$requestPath = $_SERVER['REQUEST_URI'];
$router->dispatch($requestPath);
?>