class Bar {
    constructor({ type }) {
        this.type = type;
        this.x = 657;
        this.x2 = 1440;
        this.x3 = 1346;

        if (type === "Song") {
            this.y = 1029;

        }
        if (type === "Volume") {
            this.y = 1029 + 8;
        }
        this.ballX = 1440;
        this.ballY = 901 + 8;
        this.volume = 0.5;



    }
    showBar(time, duration) {




        if (this.type === "Song") {
            const mapDuration = map(time, 0, duration, 0, 697);
            noStroke();
            fill(108, 108, 108)
            rect(657, 1029, mapDuration, 10, 5);
            fill(255)
            text(this.formatTime(time), 544, 1022)
            text(this.formatTime(duration), 1414, 1022)

        }
        if (this.type === "Volume") {
            fill(255);
            ellipse(this.ballX, this.ballY, 20)
        }
    }

    mouseDragged(song) {
        const bonderies = {
            x1: this.x,
            x2: this.x + 697,
            x1B: this.x3,
            x2B: this.x3 + 208,
            y1B: 901,
            y2B: 901 + 8,
            y1: this.y - 2,
            y2: this.y + 10 + 2

        }
        const inRange = mouseX > bonderies.x1 && mouseX < bonderies.x2 && mouseY > bonderies.y1 && mouseY < bonderies.y2;
        if (inRange) {
            if (this.type === "Song") {
                const head = map(mouseX, bonderies.x1, bonderies.x2, 0, song.duration())
                song.time(head)
            }
        }

        const inrangeVol = mouseX > bonderies.x1B && mouseX < bonderies.x2B && mouseY > bonderies.y1B && mouseY < bonderies.y2B;
        if (inrangeVol) {
            if (this.type === "Volume") {
                this.volume = map(mouseX, bonderies.x1B, bonderies.x2B, 0, 100) / 100;
                song.volume(this.volume);
                this.ballX = mouseX;
            }
        }
    }
    getVolume() {
        return this.volume
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time / (minutes + 1));
        const perfectSeconds = seconds < 10 ? "0" + seconds.toString() : seconds
        return (minutes + ":" + perfectSeconds);
    }





}