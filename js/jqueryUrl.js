$(() => {
    $('#ajax-loading').hide();
    $('.priceButton').on('click', function () {
        let value      =   $(this).attr('value');
        $('#ajax-loading').show();
        $.ajax({
            url: "/js/json/url.json",
            method: "post",
            dataType: "json",
        }).done(function (data) {
            let urlValue = data[value];
            $.ajax({
                url: urlValue,
                method: "get",
                dataType: "json",
            }).done(function (valueAjax) {
                let StockValueHtml = "<h4>La valeur " + value + " est $" + valueAjax.c + "</h4> ";
                $('#StockValue').hide().html(StockValueHtml).fadeIn('fast');
                $('#ajax-loading').hide();
            }).fail(function (){
                console.log("ERROR AJAX AFFICHAGE VALUE");
                console.log(data);
            })
        });

    });
    $('#addStockForm').on('submit', function (e){
        $('#ajax-loading').show();
        e.preventDefault();
        $.ajax({
            url: "php/newStock.php",
            method: "post",
            dataType: "json",
            data: $(this).serialize(),
        }).done(function (data){
            newUrl = "https://finnhub.io/api/v1/quote?symbol=" + data.symbol  +"&token=c1ksus237fktsl8cmv3g";
            console.log(newUrl);
            $.ajax({
                url : newUrl,
                method: "get",
                dataType : "json",
            }).done(function (valueAjax) {
                if (valueAjax.c == 0){
                    $('#errorStock').html('<p style="color: red">Erreur dans le symbole de l\'action !</p>').fadeIn('fast');
                    $('#ajax-loading').hide();
                    return false;
                }
                else {
                    $('#errorStock').html('');
                    $('#ajax-loading').hide();
                    $('#StockChooseDiv').append('<button value="'+ data.name +'" type="button" class="btn btn-primary priceButton">'+ data.name +'</button>');
                }
            }).fail(function (){
                console.log("ERROR AJAX TEST URL NEW STOCK");
            })
        }).fail(function (){
            console.log('ERROR AJAX SUBMIT NEW STOCK');
        })
        return false;
    });
})
