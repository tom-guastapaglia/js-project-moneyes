<?php
/**
 * Inclure les fichiers du squelette de la page
 *
 */

include 'php/header.php'; //header
include  'php/menu.php'; //menu
?>
</body>
<h1>Bienvenue sur Moneyes</h1><br>
<div class="container">
    <div class="row">
        <div class="col">
            <h3>Choisissez une valeur : </h3><br>
            <button value="APPLE" id="buttonPrice" type="button" class="btn btn-primary priceButton">APPLE</button>
            <button value="MICROSOFT" id="buttonPrice" type="button" class="btn btn-primary priceButton">MICROSOFT</button>
        </div>
        <div id="StockValue" class="col"></div>
    </div>
</div>
</html>
