class Bar {
    constructor({ type }) {
        this.type = type;
        this.x = 657;
        this.x2 = 1346;

        if (type === "song") {
            this.y = 1029;

        }
        if (type === "volume") {
            this.y2 = 908 + 25;
        }
        this.ballX = this.x2;
        this.ballY = this.y2;
        this.volume = 0.5;



    }
    show(time, duration) {
        fill(255, 255, 255)
        rect(this.x, this.y, 697, 10)




        if (this.type === "song") {
            const mapDuration = map(time, 0, duration, 0, 697);
            noStroke();
            fill(108, 108, 108)
            rect(657, 1029, mapDuration, 10);
            text(this.formatTime(time), 400, 500, )
            text(this.formatTime(duration), 500, 600)

        }
        if (this.type === "volume") {
            fill(255);
            ellipse(this.ballX, this.ballY, 12)
        }
    }

    mouseDragged(song) {
        const bonderies = {
            x1: this.x,
            x2: this.x + 697,
            y1: this.y - 2,
            y2: this.y + 10 + 2

        }
        const inRange = mouseX > bonderies.x1 && mouseX < bonderies.x2 && mouseY > bonderies.y1 && mouseY < bonderies.y2;
        if (inRange) {
            if (this.type === "volume") {
                this.volume = map(mouseX, bonderies.x1, bonderies.x2, 0, 100) / 100;
                song.volume(this.volume);
                this.bolaX = mouseX;
            } else if (this.type === "song") {
                const head = map(mouseX, bonderies.x1, bonderies.x2, 0, song.duration())
                song.time(head)
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