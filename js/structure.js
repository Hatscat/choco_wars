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
                    /** hearder */
                    new Label("strategy", "Strategy", 0, 0, 0.334, 0.15, "#000", config.ALIGN_H | config.ALIGN_V),
                    new Button("strategy", 1/3, 0, 1/3, 0.15, config.bg_colors.board[1], config.bg_colors.board[1], "Board", goto_board),
                    new Button("strategy", 2/3, 0, 1/3, 0.15, config.bg_colors.performances[1], config.bg_colors.performances[0], "Performances", goto_perfs),
                    /* ******** */
                    new Label("strategy", "Prod. Quality", 1/20, 0.2, 1, 0.1, "#711", config.ALIGN_V),
                    new Slider("strategy", config.VAR_ID.PROD, 7/20, 0.2, 9/20, 0.1, 0.01, 0, 100, "#ebb"),
                    new Value("strategy", config.VAR_ID.PROD, 16/20, 0.2, 4/20, 0.1, "#711", config.ALIGN_H | config.ALIGN_V),
                    
                    new Label("strategy", "Unit Price", 1/20, 0.325, 1, 0.1, "#741", config.ALIGN_V),
                    new Slider("strategy", config.VAR_ID.PRICE, 7/20, 0.325, 9/20, 0.1, 0.01, 0, 100, "#eca"),
                    new Value("strategy", config.VAR_ID.PRICE, 16/20, 0.325, 4/20, 0.1, "#741", config.ALIGN_H | config.ALIGN_V),

                    new Label("strategy", "Promotion", 1/20, 0.45, 1, 0.1, "#166", config.ALIGN_V),
                    new Slider("strategy", config.VAR_ID.PROMO, 7/20, 0.45, 9/20, 0.1, 0.01, 0, 100, "#aee"),
                    new Value("strategy", config.VAR_ID.PROMO, 16/20, 0.45, 4/20, 0.1, "#166", config.ALIGN_H | config.ALIGN_V),

                    new Label("strategy", "Place", 1/20, 0.575, 1, 0.1, "#417", config.ALIGN_V),
                    new Button("strategy", 7/20, 0.575, 9/20, 0.1, "#cae", "#b9d", "map", console.log),
                    new Value("strategy", config.VAR_ID.PLACE, 16/20, 0.575, 4/20, 0.1, "#417", config.ALIGN_H | config.ALIGN_V),

                    new Label("strategy", "Finances", 1/20, 0.7, 1, 0.1, "#111", config.ALIGN_V),
                    new Value("strategy", config.VAR_ID.FIN_DETAILS, 7/20, 0.7, 9/20, 0.1, "#111", config.ALIGN_H | config.ALIGN_V),
                    new Value("strategy", config.VAR_ID.FIN_PREV, 16/20, 0.7, 4/20, 0.1, "#111", config.ALIGN_H | config.ALIGN_V),

                    new Button("strategy", 0.15, 0.85, 0.7, 0.125, "#eff", "#cdd", "Submit", console.log)
                ]
            },
            board: {
                background_color: config.bg_colors.board[0],
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                items: [
                    /** hearder */
                    new Button("board", 0, 0, 1/3, 0.15, config.bg_colors.strategy[1], config.bg_colors.strategy[0], "Strategy", goto_strategy),
                    new Label("board", "Board", 1/3, 0, 0.334, 0.15, "#000", config.ALIGN_H | config.ALIGN_V),
                    new Button("board", 2/3, 0, 1/3, 0.15, config.bg_colors.performances[1], config.bg_colors.performances[0], "Performances", goto_perfs),
                    /* ******** */
                ]
            },
            performances: {
                background_color: config.bg_colors.performances[0],
                x: 0,
                y: 0,
                w: 1,
                h: 1,
                items: [
                    /** hearder */
                    new Button("performances", 0, 0, 1/3, 0.15, config.bg_colors.strategy[1], config.bg_colors.strategy[0], "Strategy", goto_strategy),
                    new Button("performances", 1/3, 0, 1/3, 0.15, config.bg_colors.board[1], config.bg_colors.board[1], "Board", goto_board),
                    new Label("performances", "Performances", 2/3, 0, 0.334, 0.15, "#000", config.ALIGN_H | config.ALIGN_V),
                    /* ******** */
                ]
            }
        },

        layers_order: ["home", "strategy", "board", "performances", "map", "district", "error"] 

    };
}
