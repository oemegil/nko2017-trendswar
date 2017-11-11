$('#beginSection,#gameSection').hide();


var userNick = window.localStorage.getItem("nickname");

if (!userNick) {

    var dialog = BootstrapDialog.show({
        title: 'Create Profile',
        closable: false,
        message: $('<input class="form-control" type="text" id="nickname" placeholder="Enter your nickname"></input>'),
        buttons: [{
            label: 'Submit',
            cssClass: 'btn-primary',
            hotkey: 13,
            action: function () {
                userNick = $('#nickname').val();
                window.localStorage.setItem("nickname", userNick);
                $('#welcome').text('Welcome ' + userNick);
                $('#beginSection').show();
                dialog.close();
            }
        }]
    });
}
else {

    $('#welcome').text('Welcome ' + userNick);
    $('#beginSection').show();


}
