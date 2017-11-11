$('#beginSection,#gameSection').hide();


var userNick = window.localStorage.getItem("nickname");

if (!userNick) {

    BootstrapDialog.show({
        title: 'Create Profile',
        closable: false,
        message: $('<input class="form-control" type="text" id="nickname" placeholder="Enter your nickname"></input>'),
        buttons: [{
            label: 'Submit',
            cssClass: 'btn-primary',
            hotkey: 13,
            action: function () {
                window.localStorage.setItem("nickname", $('#nickname').val());
                this.close();
            }
        }]
    });
}
else {

    $('#beginSection').show();
    $('#welcome').text('Welcome ' + userNick);


}
