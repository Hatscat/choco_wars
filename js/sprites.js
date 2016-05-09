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

function combine_sprites (base_canvas, back_canvas, front_canvas, x, y) {
    var ctx = base_canvas.getContext('2d');
    ctx.drawImage(back_canvas, 0, 0);
    ctx.drawImage(front_canvas, x, y);
}

// ---------------- //

function button_sprite (canvas, w, h, color, text) {
    canvas = canvas || document.createElement("canvas");
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

function label_sprite (canvas, w, h, text_color, text, text_align, font, font_size, do_stroke) {
    canvas = canvas || document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    var ctx = get_2d_ctx(canvas, text_align, font, font_size);
    ctx.fillStyle = text_color;
    ctx.fillText(text, (text_align & config.ALIGN_H) ? w * 0.5 : 0, (text_align & config.ALIGN_V) ? h * 0.5 : 0);

    if (do_stroke) {
        ctx.strokeStyle = "#000";
        ctx.strokeRect(0, 0, w - ctx.lineWidth, h - ctx.lineWidth);
    }

    return canvas;
}

function slider_bg_sprite (canvas, w, h, margin_w, back_color, slide_color) {
    canvas = canvas || document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    var ctx = get_2d_ctx(canvas);
    ctx.fillStyle = back_color || "#ccc";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = slide_color || "#444";
    ctx.fillRect(margin_w, h * 0.4, w - (margin_w * 2), h * 0.2);

    return canvas;
}

function slider_cursor_sprite (canvas, w, h, color) {
    canvas = canvas || document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    var ctx = get_2d_ctx(canvas);
    ctx.fillStyle = color || "#111";
    ctx.fillRect(0, 0, w, h);

    return canvas;
}

