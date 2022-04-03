class Buttons {
    constructor() {
        this.buttonPause = loadImage()
        this.buttonStart = loadImage()
        this.buttonSeason1 = loadImage()
        this.buttonSeason2 = loadImage()
        this.buttonSeason3 = loadImage()
        this.inUse = false;
    }
    showfromButtons() {
        if (!this.inUse) {
            image(this.buttonStart)
        } else {
            image(this.buttonPause)
        }
    }


}