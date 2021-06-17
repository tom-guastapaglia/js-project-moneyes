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
        <div id="StockChooseDiv" class="col">
            <h3>Choisissez une valeur : </h3><br>
            <button value="APPLE" type="button" class="btn btn-primary priceButton">APPLE</button>
            <button value="MICROSOFT" type="button" class="btn btn-primary priceButton">MICROSOFT</button>
        </div>
        <div id="StockValue" class="col"></div>
        <div class="col">
            <form id="addStockForm" method="get">
                <h3>Ajouter une nouvelle action</h3>
                <label for="stockName">Nom de l'action</label>
                <input type="text" id="stockName" name="stockName" required><br>
                <label for="stockSymbol">Symbole de l'action</label>
                <input type="text" id="stockSymbol" name="stockSymbol" required>
                <button id="AddStock" type="submit" class="btn btn-primary">Ajouter la valeur</button>
                <img id="ajax-loading" src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" style="max-height:30px;" alt="Loading" />
                <div id="errorStock"></div>
            </form>
        </div>
    </div>
</div>
</html>
