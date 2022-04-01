class Tracks {
    constructor({ name, duration, direction }) {
        this.name = name;
        this.duration = duration;

        this.direction = direction;

    }
    show() {

    }

    getName() {
        return this.name
    }

    setName(songName) {
        this.name = songName;
    }

    getDuration() {
        return this.duration
    }

    setDuration(newDuration) {
        this.duration = newDuration;
    }

    getMinutes() {
        return this.minutes
    }

    setMinutes(newMinutes) {
        this.minutes = newMinutes
    }
    getDirection() {
        return this.direction
    }


}