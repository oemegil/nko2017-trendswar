$('#beginSection,#gameSection,#gameLoaderSection').hide();

var userStr = window.localStorage.getItem("trendsuser");
var userObj = JSON.parse(userStr);
var userNick;
var currentMatch;

if(userObj) {
    userNick = userObj[name];
}

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

    $.post( "https://nodeknockoutogu.herokuapp.com/matches",  {"userId": userObj._id} , function( data ) {

        currentMatch = data;

    }, "json");

});


if (!userNick) {

    var dialog = BootstrapDialog.show({
        title: 'Create Profile',
        closable: false,
        message: $('<form><h3>Write your nickname</h3><input required class="form-control" type="text" id="nickname" placeholder="Nickname"/><h3>Choose your character</h3><div style="margin-top:24px;"><label><input type="radio" name="player"/>  <img src="img/p1left.gif"></label><label><input type="radio" name="player"/><img src="img/p2left.gif"></label></div></form>'),
        buttons: [{
            label: 'Submit',
            cssClass: 'btn-primary',
            hotkey: 13,
            action: function () {

                userNick = $('#nickname').val();

                if (userNick) {

                    $.post( "https://nodeknockoutogu.herokuapp.com/users",  {"name": userNick} , function( data ) {

                        userObj = data;
                        localStorage.setItem('trendsuser', JSON.stringify(data));
                        $('#welcome').text('Welcome ' + userNick);
                        $('#beginSection').show();
                        dialog.close();

                    }, "json");

                } else {
                    alert('Enter nickname');
                }
            }
        }]
    });
}
else {

    $('#welcome').text('Welcome ' + userNick);
    $('#beginSection').show();

}


