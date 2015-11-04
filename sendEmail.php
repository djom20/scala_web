<?php
	/**
	 * Description of sendEmail
	 *
	 * @author Ing. Jonathan Olier
	 */

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "BCC: djom202@gmail.com\r\n";

	$table = "
		<table>
			<tr>
				<td>Nombre:</td><td>".$_POST['name']."</td>
			</tr>
			<tr>
				<td>Telefono:</td><td>".$_POST['phone']."</td>
			</tr>
			<tr>
				<td>Cuidad:</td><td>".$_POST['city']."</td>
			</tr>
			<tr>
				<td>Email:</td><td>".$_POST['email']."</td>
			</tr>
			<tr>
				<td>Detalle:</td><td>".$_POST['details']."</td>
			</tr>
		</table>
	";

	mail($_POST['email'], "Send by Scala D' Mare Page", $table, $headers);
?>