"use strict"

function get_structure () {

    return {

        layers: {
            home: {
                background_color: "#eaa",
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                title: "Choco Wars",
                sub_title: "Pognon = Fric",
                inputs: [
                    new Button("home", 0.1, 0.7, 0.8, 0.2, "#eee", "#fff", "PLAY", login)
                ]
            }

        },
        layers_order: ["home", "strategy", "board", "performances", "map", "district"] 

    };
}
