"use strict"

function post_req (url, data, cb) {

    try {
        data = JSON.stringify(data);
    } catch (error) {
        console.error("JSON.stringify error:", error);
        return;
    }

    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onerror = function (err) {
        console.error("error:", err);
    };

    xhr.onload = cb;
    xhr.send(data);
}

function get_req (url, data, cb) {

    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.open("GET", url + (data ? "/" + data : ""), true);

    xhr.onerror = function (err) {
        console.error("error:", err);
    };

    xhr.onload = cb;
    xhr.send(null);
}
