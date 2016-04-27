"use strict"

function Label (layer, text, x, y, w, h, text_color, text_align, font, font_size) {

    this.layer = layer;
    this.text = text;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text_color = text_color;
    this.text_align = text_align;
    this.font = font;
    this.font_size = font_size;
    this.sprite = null;

    this.on_resize(true);
    on_resize_cbs[on_resize_cbs.length] = this.on_resize.bind(this);
}

Label.prototype.is_active = function () {
    return struct.layers_order[0] == this.layer;
};

Label.prototype.on_resize = function (force) {
    if (!force && !this.is_active())
        return;
    this.sprite = label_sprite(this.w * W, this.h * H, this.text_color, this.text, this.text_align, this.font, this.font_size);
};

