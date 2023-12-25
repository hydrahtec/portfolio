<?php
  //Variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['mensagem'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Mensagem: ".$mensagem."\n"."Este e-mail foi enviado em ".$data_envio." ás ".$hora_envio;
  
  //Emails para quem será enviado o formulário
  $destino = "hydrahtec@gmail.com";
  $assunto = "Contato pelo Site";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=UTF-8\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=https://hydrahtec.com/portfolio/contato.html'>";
?>