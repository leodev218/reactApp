<?php


session_start();


$clientId = $_GET['clientId'];
$filter = $_GET['filter'];
$value = $_GET['value'];
$param = $_GET['param'];


$url = "https://dev-kairosGateway.lugma.tech/kairosGateway/apiCore/v1/putExtClient/fL2jz91ptFMA3UwVkBbu/6WclAmsaP9H7SR2WmpDbl1OL9";


// Definir los datos a enviar en la solicitud POST
$data = array(
    'filter' => $filter,
    'value' => $value,
    'param' => $param

);


// Convertir los datos a formato JSON
$json_data = json_encode($data);


// Inicializar la sesión cURL
$curl = curl_init();


// Configurar las opciones de la sesión cURL
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);


// Ejecutar la solicitud y obtener la respuesta
$response1 = curl_exec($curl);


// Cerrar la sesión cURL
curl_close($curl);


//$response1 = trim($response1); // Eliminar espacios en blanco alrededor de la respuesta
$array = explode("|", $response1);
$response12 = $array[0];
$message = $array[1];
//echo $_SESSION['key'];


$response1 = trim($response12); // Eliminar espacios en blanco alrededor de la respuesta


if (strtolower($response1) === "true") { // Convertir la respuesta a minúsculas antes de comparar

    $_SESSION["respuesta"] = $response1;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response1;

    // header ('Location: ../room.php?roomId='.$roomId);
}


if (strtolower($response1) != "true") { // Convertir la respuesta a minúsculas antes de comparar


    $_SESSION["respuesta"] = $response1;
    $_SESSION["mensaje"] = $message;
    $_SESSION["error"] = $response1;



    //header ('Location: ../room.php?roomId='.$roomId);
}
