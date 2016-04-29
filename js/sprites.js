"use strict"

function get_2d_ctx (canvas, text_align, font, font_size) {
    var ctx = canvas.getContext("2d");
    ctx.textAlign = (text_align & config.ALIGN_H) ? "center" : "left";
    ctx.textBaseline = (text_align & config.ALIGN_V) ? "middle" : "top";
    ctx.lineWidth = 1;
    if (window.W)
        ctx.font = ((font_size || config.font_size) * W) + "px " + (font || config.font);
    return ctx;
}

function button_sprite (w, h, color, text) {
    var canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    var ctx = get_2d_ctx(canvas, config.ALIGN_H | config.ALIGN_V);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#000";
    ctx.fillText(text, w * 0.5, h * 0.5);
    ctx.strokeStyle = "#888";
    ctx.strokeRect(0, 0, w - ctx.lineWidth, h - ctx.lineWidth);

    return canvas;
}

function label_sprite (w, h, text_color, text, text_align, font, font_size) {
    var canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    var ctx = get_2d_ctx(canvas, text_align, font, font_size);
    ctx.fillStyle = text_color;
    ctx.fillText(text, w * 0.5, h * 0.5);

    return canvas;
}

