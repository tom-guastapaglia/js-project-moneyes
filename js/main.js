(function () {
    "use strict";
    const CSS_BOARD = {
        "text-align": "center",
        "margin": "10px"
    };
    const CSS_CELL = {
        "outline": "solid 1px red",
        "display": "inline-block",
        "width": "20px",
        "height": "20px",
    };

    class Cell {
        constructor() {
            this.$content = $("<div />").css(CSS_CELL).append("&nbsp;");
        }
        display() {
            return this.$content;
        }
    }
    class Board {
        constructor (a_width, a_height) {
            this.width  = a_width;
            this.height = a_height;

            /**
             * +------+------+------+------+------+------+------+------+
             * | Cell | Cell | Cell | Cell | Cell | Cell | Cell | Cell |
             * +------+------+------+------+------+------+------+------+
             * | Cell | Cell | Cell | Cell | Cell | Cell | Cell | Cell |
             * +------+------+------+------+------+------+------+------+
             * | Cell | Cell | Cell | Cell | Cell | Cell | Cell | Cell |
             * +------+------+------+------+------+------+------+------+
             * | Cell | Cell | Cell | Cell | Cell | Cell | Cell | Cell |
             * +------+------+------+------+------+------+------+------+
             */
            this.tab = [];
            for (let y=0; y<this.height; y++) {
                let line = [];
                for (let x=0; x<this.width; x++) {
                    line.push(new Cell());
                }
                this.tab.push(line);
            }

            console.log("this.tab=", this.tab);
            this.$content = $("<div />").css(CSS_BOARD);
        }
        display() {
            let $result = $("<div />").css(CSS_BOARD);
            for (let y=0; y<this.height; y++) {
                let $line = $("<div />").css({});
                for (let x=0; x<this.width; x++) {
                    let cell = this.tab[y][x];
                    $line.append(cell.display());
                }
                $result.append($line);
            }
            return $result;
        }
    }

    // $(document).ready(function () { });
    // $(function () { });
    let createBoard = (width, height) => {
        let board = new Board(width, height);
        return board.display();
    };

    $(() => {
        // // DOM ready!
        // // selector = $("xx yy")
        // let $message = $("#message");
        // for (let i = 0; i <500; i++) {
        //     // let $board = $("<div></div>");
        //     let $board = $("<div />")
        //         .append("I'm some text!")
        //         .css({
        //             "display": "inline-block",
        //             "float": "left",
        //             "background-color": "grey"
        //         });
        //
        //     $("body").append($board);
        // }

        $("body").append(createBoard(10, 15));
    });
})(); 