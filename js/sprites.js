"use strict"

function get_2d_ctx (canvas) {
    var ctx = canvas.getContext("2d");
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    if (window.min_size)
        ctx.font = (config.font_size * min_size) + "px " + config.font;
    return ctx;
}

function button_sprite (w, h, color, text) {

}
