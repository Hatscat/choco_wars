"use strict"

function login () {

    console.log("login");

    var team_name = prompt("Choose a great team name:", storage.data.team_name);
    var team_pwd = prompt("Choose a secret password:", storage.data.team_pwd);
    
    if (!team_name || !team_pwd) {
        console.warn("incorrect input");
        return;
    }

    storage.data.team_name = team_name;
    storage.data.team_pwd = team_pwd;

    get_req(config.api_url + "/loginToken", "?teamName=" + team_name + "&pwd=" + team_pwd, function (data) {
        console.log("logged!", data);
        storage.data.token = data;
        swap(struct.layers_order, 0, 1);
    });
}
