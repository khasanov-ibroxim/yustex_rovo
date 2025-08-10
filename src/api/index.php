<?php

function response($body, int $status = 200)
{
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($body);
  http_response_code($status);
  exit();
}

try {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_URL, 'https://api.telegram.org/bot6825177493:AAFXIHuKxFz2v_WVGV8yyTzjhLn4pWtqhlE/sendMessage');
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);
  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  $email = $_POST['user_phone'];
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt(
    $ch,
    CURLOPT_POSTFIELDS,
    json_encode([
      "chat_id" => "240122844",
      "text" => '
Имя: ' . $data["name"] . '
Номер телефона: ' . $data["phone"] . '
Email: ' . $data["email"] . '

Сообщение: ' . $data["message"]
    ])
  );
  curl_setopt($ch, CURLOPT_HEADER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
  curl_exec($ch);
  curl_close($ch);
  response('');
} catch (Exception $e) {
  response([
    'message' => "could not be sent. Error: {$e->getMessage()}"
  ], 500);
}