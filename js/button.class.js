"use strict"

function Button (layer, x, y, w, h, up_color, down_color, text, click_cb) {

    this.layer = layer;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.up_color = up_color;
    this.down_color = down_color;
    this.text = text;
    this.click_cb = click_cb;
    this.box = null;
    this.sprite_up = null;
    this.sprite_down = null;

    this.on_resize();
    this.sprite = this.sprite_up;

    mouse.on_down_cbs[mouse.on_down_cbs.length] = this.on_down.bind(this);
    mouse.on_up_cbs[mouse.on_up_cbs.length] = this.on_up.bind(this);
    on_resize_cbs[on_resize_cbs.length] = this.on_resize.bind(this);
}

Button.prototype.is_active = function () {
    return struct.layers_order[0] == this.layer;
};

Button.prototype.is_targeted = function () {
    return this.is_active() && is_point_inside_box(mouse, this.box);
};

Button.prototype.on_down = function () {
    if (!this.is_targeted())
        return;
    this.sprite = this.sprite_down;
};

Button.prototype.on_up = function () {
    this.sprite = this.sprite_up;
    if (!this.is_targeted())
        return;
    this.click_cb();
};

Button.prototype.on_resize = function () {
    this.box = { x: this.x * W, y: this.y * H, w: this.w * W, h: this.h * H };
    this.sprite = this.sprite_up = button_sprite(this.box.w, this.box.h, this.up_color, this.text);
    this.sprite_down = button_sprite(this.box.w, this.box.h, this.down_color, this.text);
};

