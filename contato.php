<?php
include "header.php";
?>

<div class="container">
    <div class="row">
        <div class="col-6">
            <h1>Fale conosco</h1>
            <div class="">
                <form action="formulario">
                    <label for="nome">Digite seu nome:</label>
                    <input type="text" name="nome" id="nome">
                    <label for="email">Digite seu email:</label>
                    <input type="email" name="email" id="email">
                    <input type="submit" value="Enviar">
                </form>
            </div>
        </div>
        <?php
        include "footer.php";
        ?>