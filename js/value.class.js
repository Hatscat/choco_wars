"use strict"

function Value (layer, id, x, y, w, h, text_color, text_align, font, font_size) {

    this.layer = layer;
    this.id = id;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text_color = text_color;
    this.text_align = text_align;
    this.font = font;
    this.font_size = font_size;
    this.sprite = null;

    this.on_resize();
    on_update_cbs[on_update_cbs.length] = this.on_resize.bind(this);
}

Value.prototype.is_active = function () {
    return struct.layers_order[0] == this.layer;
};

Value.prototype.on_resize = function () {
    this.sprite = label_sprite(this.sprite, this.w * W, this.h * H, this.text_color, window.gvalues && gvalues[this.id] + "", this.text_align, this.font, this.font_size, true);
};

