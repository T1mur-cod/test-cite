<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);

 
  if (!empty($data['user_name']) && !empty($data['age']) && !empty($data['competence'])) {
    print_r($data); // Выводим массив в консоль или обрабатываем данные как нужно
    return true;
  } else {
    $error = array('error' => 'Заполните все поля формы');
    echo json_encode($error);
    return false;
  }
}

?>
