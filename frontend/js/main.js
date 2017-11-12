var globalUrl = "https://nodeknockoutogu.herokuapp.com/";

$('#beginSection,#gameSection,#gameLoaderSection').hide();

var userStr = window.localStorage.getItem("trendsuser");
var userObj = JSON.parse(userStr);
var userNick;
var currentMatch;

if (userObj) {
    userNick = userObj["name"];
}

function dosmth(id) {

    $(id).removeClass('btn-default').addClass('btn-primary');

    //winner
}

function renderLeaderboard() {

    $.get(globalUrl + "users/getLeaderboard", function (data) {

        $leaders = $("#leaders");
        $leaders.html(null);

        $.each(data, function (index, value) {

            var $tr = $('<tr><td>' + (index + 1) + '</td><td>' + value.name + '</td><td>' + value.point + '</td></tr>');
            $leaders.append($tr);
        });
    });
}


function authOk() {
    $('#welcome').text('Welcome ' + userNick);
    $('#beginSection').show();
    renderLeaderboard();
}

function call4Robot(){


}

function getChoices() {

    $.get(globalUrl + "words", function (data) {

        $choices = $("#choices");
        $choices.html(null);

        $.each(data, function (index, value) {

            var $buttons = $('<input/>').attr({
                    type: 'button',
                    id: 'btn' + i,
                    name: 'btn' + i,
                    value: quest[i],
                    onclick: 'dosmth(' + 'btn' + i + ');'
                })
                .addClass('btn').addClass('btn-default').addClass('btn-sm').addClass('little-space');
            var $div = $('<div></div>').append($buttons);

            $choices.append($div);
        });
    });
}


$('#fightBtn').click(function () {

    //todo match fight
    $('#beginSection').hide();
    $('#gameLoaderSection').show();

    $.post(globalUrl + "matches", {"userId": userObj._id}, function (data) {

        currentMatch = data;

    }, "json");

});


if (!userNick) {

    var dialog = BootstrapDialog.show({
        title: 'Create Profile',
        closable: false,
        message: $('<form><h3>Write your nickname</h3><input required class="form-control" type="text" id="nickname" placeholder="Nickname"/><h3>Choose your character</h3><div style="margin-top:24px;"><label><input type="radio" value="p1" name="player"/>  <img src="img/p1left.gif"></label><label><input type="radio" value="p2"  name="player"/><img src="img/p2left.gif"></label></div></form>'),
        buttons: [{
            label: 'Submit',
            cssClass: 'btn-primary',
            hotkey: 13,
            action: function () {

                userNick = $('#nickname').val();
                selectedImage = $('input[name=player]:checked').val();

                if (userNick && selectedImage) {

                    $.post(globalUrl + "users", {
                        "name": userNick,
                        "avatar": selectedImage
                    }, function (data) {

                        userObj = data;
                        localStorage.setItem('trendsuser', JSON.stringify(data));
                        authOk();
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
    authOk();
}


