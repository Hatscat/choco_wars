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
    this.box = { x: x * W, y: y * H, w: w * W, h: h * H };
    // this.sprite_up
    // this.sprite_down

    mouse.on_up_cbs[mouse.on_up_cbs.length] = this.on_click;
    on_resize_cbs[on_resize_cbs.length] = this.on_resize;
    this.on_resize();
}

Button.prototype.on_click = function () {
    
    console.log(struct.layers_order, this.layer)
    if (struct.layers_order[0] == this.layer ){// && is_point_inside_box(mouse, this.box)) {

        console.log('button click');
        this.click_cb();
    }
};

Button.prototype.on_resize = function () {

    console.log("button resize");

    this.box = { x: this.x * W, y: this.y * H, w: this.w * W, h: this.h * H };
};



