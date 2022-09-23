<?php
include "header.php";
?>

<div class="container">
    <div class="row">
        <div class="col-4">
            <h1>Fale conosco</h1>
            <div class="">
                <form action="" class="formulario" id="formCadastro">
                    <div>
                        <label for="name">Digite seu nome:</label>
                        <input type="text" name="name" id="name">
                    </div>
                    <div>
                        <label for="email">Digite seu email:</label>
                        <input type="email" name="email" id="email" required>
                    </div>
                    <div>
                        <label for="fieldCpf">Digite seu CPF:</label>
                        <input type="number" name="cpf" id="cpf" required>
                    </div>
                    <input type="submit" value="Enviar">
                </form>

            </div>
        </div>
    </div>
</div>

<?php
include "footer.php";
?>