$(() => {
    $('.priceButton').click(function (e) {
        let $value      =   $(this).attr('value');
        let urlTab      =   {
            "APPLE"         :   "https://finnhub.io/api/v1/quote?symbol=AAPL&token=c1ksus237fktsl8cmv3g",
            "MICROSOFT"     :   "https://finnhub.io/api/v1/quote?symbol=MSFT&token=c1ksus237fktsl8cmv3g",
        }
        e.preventDefault();
        $.ajax({
            url: urlTab[$value],
            type: "GET",
            dataType: "json",
            success: function (data) {
                //alert(" AAPL =  $" + data.c);
                let StockValueHtml = "<h4>La valeur "+ $value +" est $" + data.c + "</h4> ";
                $('#StockValue').hide().html(StockValueHtml).fadeIn('fast');
            }
        });
    })
})
