"use strict"

function draw () {
    
    for (var i = struct.layers_order.length; i--;) {

        var layer = struct.layers[struct.layers_order[i]];

        if (!layer)
            continue;

        if (layer.background_color) {
            ctx.fillStyle = layer.background_color;
            ctx.fillRect(layer.x * W, layer.y * H, layer.w * W, layer.h * H);
        }

        for (var ii = 0; ii < layer.items.length; ii++) {
            ctx.drawImage(layer.items[ii].sprite, layer.items[ii].x * W, layer.items[ii].y * H);
        }
        
    }
    
    visible_ctx.drawImage(buffer_canvas, 0, 0);
}
