$('#beginSection,#gameSection,#gameLoaderSection').hide();
var userNick = window.localStorage.getItem("nickname");


function dosmth(id) {

   $(id).removeClass('btn-default').addClass('btn-primary');

   //winner


}

function getChoices() {


    var quest = ["node", "react", "vue", "angular", "python", "javascript", "java", "csharp", "mongo", "express"];


    for (i = 0; i < 10; i++) {

        var $buttons = $('<input/>').attr({
                type: 'button',
                id: 'btn' + i,
                name: 'btn' + i,
                value: quest[i],
                onclick: 'dosmth(' + 'btn' + i + ');'
            })
            .addClass('btn').addClass('btn-default').addClass('btn-sm').addClass('little-space');
        var $div = $('<div></div>').append($buttons);
        $("#choices").append($div);
    }

}


$('#fightBtn').click(function () {

    //todo match fight
    $('#beginSection').hide();
    $('#gameLoaderSection').show();

    setTimeout(function () {

        $('#gameLoaderSection').hide();
        $('#gameSection').show();

        //get choices
        getChoices();


    }, 2000);

});


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


