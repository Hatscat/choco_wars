"use strict"

function get_structure () {

    return {

        layers: {
            home: {
                background_color: "#eee",
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                sub_title: "Pognon = Fric",
                items: [
                    new Label("home", "Choco Wars", 0, 0.1, 1, 0.3, "#800", config.ALIGN_H | config.ALIGN_V, config.title_font, config.title_font_size),
                    new Label("home", "Pognon = Fric", 0, 0.4, 1, 0.1, "#444", config.ALIGN_H | config.ALIGN_V, config.title_font),
                    new Label("home", "Fric = Pognon", 0, 0.5, 1, 0.1, "#888", config.ALIGN_H | config.ALIGN_V),
                    new Button("home", 0.1, 0.7, 0.8, 0.2, "#fff", "#ccc", "PLAY", login)
                ]
            }

        },
        layers_order: ["home", "strategy", "board", "performances", "map", "district"] 

    };
}
