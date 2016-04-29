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
                items: [
                    new Label("home", "Choco Wars", 0, 0.1, 1, 0.3, "#800", config.ALIGN_H | config.ALIGN_V, config.title_font, config.title_font_size),
                    new Label("home", "Pognon = Fric", 0, 0.4, 1, 0.1, "#444", config.ALIGN_H | config.ALIGN_V, config.title_font),
                    new Label("home", "Fric = Pognon", 0, 0.5, 1, 0.1, "#888", config.ALIGN_H | config.ALIGN_V),
                    new Button("home", 0.1, 0.7, 0.8, 0.2, "#fff", "#ccc", "PLAY", login)
                ]
            },
            strategy: {
                background_color: config.bg_colors.strategy[0],
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                items: [
                    new Label("strategy", "Strategy", 0, 0, 0.334, 0.15, "#000", config.ALIGN_H | config.ALIGN_V),
                    new Button("strategy", 0.333, 0, 0.333, 0.15, config.bg_colors.board[1], config.bg_colors.board[1], "Board", goto_board),
                    new Button("strategy", 0.666, 0, 0.333, 0.15, config.bg_colors.performances[1], config.bg_colors.performances[0], "Performances", goto_perfs),
                ]
            },
            board: {
                background_color: config.bg_colors.board[0],
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                items: [
                    new Button("board", 0, 0, 0.333, 0.15, config.bg_colors.strategy[1], config.bg_colors.strategy[0], "Strategy", goto_strategy),
                    new Label("board", "Board", 0.333, 0, 0.334, 0.15, "#000", config.ALIGN_H | config.ALIGN_V),
                    new Button("board", 0.666, 0, 0.333, 0.15, config.bg_colors.performances[1], config.bg_colors.performances[0], "Performances", goto_perfs),
                ]
            },
            performances: {
                background_color: config.bg_colors.performances[0],
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                items: [
                    new Button("performances", 0, 0, 0.333, 0.15, config.bg_colors.strategy[1], config.bg_colors.strategy[0], "Strategy", goto_strategy),
                    new Button("performances", 0.333, 0, 0.333, 0.15, config.bg_colors.board[1], config.bg_colors.board[1], "Board", goto_board),
                    new Label("performances", "Performances", 0.666, 0, 0.334, 0.15, "#000", config.ALIGN_H | config.ALIGN_V),
                ]
            }
        },

        layers_order: ["home", "strategy", "board", "performances", "map", "district", "error"] 

    };
}
