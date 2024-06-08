<?php
// Conexão ao banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "nome_do_banco";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta para obter os jogadores
$sql = "SELECT nome, numero, posicao, imagem, categoria FROM jogadores";
$result = $conn->query($sql);

$jogadores = array();

if ($result->num_rows > 0) {
    // Output de cada linha da consulta
    while ($row = $result->fetch_assoc()) {
        $jogadores[] = $row;
    }
} else {
    echo "0 resultados";
}
$conn->close();

// Configura o cabeçalho para JSON
header('Content-Type: application/json');
echo json_encode($jogadores);
?>