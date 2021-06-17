$(() => {
    $.ajax({
        url :   'php/isConnected.php',
        method: "post",
        dataType: "json",
    }).done(function (data){
        if (data){
            console.log(data);
            $('body').fadeIn('slow');
        }
        else {
            let loginformHTML = () => {
                let HTMLForm =  '<h1>Merci de vous connecter</h1>' +
                    '<div class="login-form">\n' +
                    '    <form id=\'loginForm\' method="post">\n' +
                    '        <h2 class="text-center">Se connecter</h2>       \n' +
                    '        <div class="form-group">\n' +
                    '            <input type="text" class="form-control" name=\'username\' placeholder=\'Nom\' required="required">\n' +
                    '        </div>\n' +
                    '        <div class="form-group">\n' +
                    '            <input type="password" class="form-control" name=\'password\' placeholder=\'Mot de passe\' required="required">\n' +
                    '        </div>\n' +
                    '        <div class="form-group">\n' +
                    '            <div id="errorLogin"></div>\n' +
                    '            <button type="submit" class="btn btn-primary btn-block">Connection</button>\n' +
                    '        </div>\n' +
                    '    </form>\n' +
                    '</div>';
                return HTMLForm;
            } //Display Login Form
            console.log(data);
            $('body').hide().html(loginformHTML()).fadeIn('slow');
            $('#loginForm').on('submit', function () {
                $.ajax({
                    url: "php/login.php",
                    method: "post",
                    dataType: "json",
                    data: $(this).serialize(),
                }).done(function (data) {
                    console.log(data);
                    if (data.connected){
                        $('#loginForm').fadeOut();
                        window.location.reload(true);
                    } else {
                        $('#errorLogin').hide().html('<p style="color: red">Mot de passe incorrect ou compte inconnu !</p>').fadeIn('fast');
                    }
                }).fail(function () {
                    $('body').html("ERROR AJAX");
                });
                return false;
            });
        }
    }).fail(function () {
        $('body').html("ERROR AJAX ISCONNECTED");
    });
})