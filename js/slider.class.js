"use strict"

function Slider (layer, id, x, y, w, h, margin_w, min, max, back_color, slide_color, cursor_color) {

    this.layer = layer;
    this.id = id;
    this.x = x;
    this.inner_x = x + margin_w;
    this.y = y;
    this.w = w;
    this.inner_w = w - (margin_w * 2);
    this.cursor_w = 0.02;
    this.h = h;
    this.margin_w = margin_w;
    this.cursor_x = 0;
    this.min = min;
    this.max = max;
    this.value = min;
    this.cursor_color = cursor_color;
    this.back_color = back_color;
    this.slide_color = slide_color;
    this.box = null;
    this.sprite_cursor = null;
    this.sprite_back = null;
    this.sprite = null;
    this.is_input = false;

    this.on_resize();

    mouse.on_down_cbs[mouse.on_down_cbs.length] = this.on_down.bind(this);
    mouse.on_move_cbs[mouse.on_move_cbs.length] = this.on_move.bind(this);
    mouse.on_up_cbs[mouse.on_up_cbs.length] = this.on_up.bind(this);
    on_resize_cbs[on_resize_cbs.length] = this.on_resize.bind(this);
    gvalues[this.id] = 0;
}

Slider.prototype.is_active = function () {
    return struct.layers_order[0] == this.layer;
};

Slider.prototype.is_targeted = function () {
    return this.is_active() && is_point_inside_box(mouse, this.box);
};

Slider.prototype.on_down = function () {
    if (!this.is_targeted())
        return;
    this.is_input = true;
    this.on_move();
};

Slider.prototype.on_move = function () {
    if (!this.is_input)
        return;
    this.cursor_x = Math.min(this.box.w, Math.max(0, mouse.x - this.box.x));
    this.update_full_sprite();
    this.value = lerp(this.min, this.max, this.cursor_x / this.box.w);
    gvalues[this.id] = Math.round(this.value);
};

Slider.prototype.on_up = function () {
    this.is_input = false;
};

Slider.prototype.on_resize = function () {
    this.box = { x: this.inner_x * W, y: this.y * H, w: this.inner_w * W, h: this.h * H };
    this.sprite_back = slider_bg_sprite(this.sprite_back, this.w * W, this.box.h, this.margin_w * W, this.back_color, this.slide_color);
    this.sprite_cursor = slider_cursor_sprite(this.sprite_cursor, this.cursor_w * W, this.box.h, this.cursor_color);
    this.sprite = this.sprite_back.cloneNode();
    this.update_full_sprite();
};

Slider.prototype.update_full_sprite = function () {
    combine_sprites(this.sprite, this.sprite_back, this.sprite_cursor, this.cursor_x + (this.margin_w * W) - (this.cursor_w * W * 0.5), 0);
};

