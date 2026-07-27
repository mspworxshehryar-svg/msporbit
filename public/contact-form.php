<?php
// Contact form handler for MSP Orbit.
// Runs on Namecheap Stellar (PHP-enabled shared hosting) since the rest of
// the site is a static Next.js export with no Node server available.

header("Content-Type: application/json");

$to = "support@msporbit.com";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

function clean_field($value) {
    $value = trim((string) $value);
    // Strip characters that could be used for email header injection.
    return preg_replace("/[\r\n]+/", " ", $value);
}

$name = clean_field($_POST["name"] ?? "");
$email = clean_field($_POST["email"] ?? "");
$phone = clean_field($_POST["phone"] ?? "");
$company = clean_field($_POST["company"] ?? "");
$message = trim((string) ($_POST["message"] ?? ""));

// Honeypot: bots fill every field, real users never see this one.
if (!empty($_POST["company_website"])) {
    echo json_encode(["success" => true]);
    exit;
}

if ($name === "" || $email === "" || $message === "") {
    http_response_code(422);
    echo json_encode(["error" => "Name, email, and message are required."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["error" => "Please provide a valid email address."]);
    exit;
}

$subject = "New contact form submission from " . $name;

$body = "You have a new message from the MSP Orbit contact form.\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Company: {$company}\n\n";
$body .= "Message:\n{$message}\n";

$headers = [];
$headers[] = "From: MSP Orbit Website <no-reply@msporbit.com>";
$headers[] = "Reply-To: " . $name . " <" . $email . ">";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send message. Please email us directly."]);
}
