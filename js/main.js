"use strict"

onload = main;

function main () {
    window.buffer_canvas = visible_canvas.cloneNode();
    window.visible_ctx = get_2d_ctx(visible_canvas);
    window.buffer_ctx = get_2d_ctx(buffer_canvas);

    window.time = 0;

    window.mouse = {
        x: 0,
        y: 0,
        is_down: false,
        on_down_cb: [],
        on_up_cb: [],
        on_move_cb: []
    };

    init_events();
    on_resize();
    loop(time);
}

function loop (t) {
    window.deltatime = t - time;
    time = t;

    update();
    draw();
    requestAnimationFrame(loop);
}

