"use strict"

onload = main;

function main () {
    window.buffer_canvas = visible_canvas.cloneNode();
    window.visible_ctx = get_2d_ctx(visible_canvas);
    window.buffer_ctx = get_2d_ctx(buffer_canvas);
    window.time = 0;
    window.on_resize_cbs = [];
    on_resize();
    window.mouse = {
        x: 0,
        y: 0,
        is_down: false,
        on_down_cbs: [],
        on_up_cbs: [],
        on_move_cbs: []
    };
    window.struct = get_structure();

    init_events();
    loop(time);
}

function loop (t) {
    window.deltatime = t - time;
    time = t;

    update();
    draw();
    requestAnimationFrame(loop);
}

