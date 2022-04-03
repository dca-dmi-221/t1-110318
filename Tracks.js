class Tracks {
    constructor({ name, duration, direction, artist }) {
        this.name = name;
        this.duration = duration;
        this.artist = artist;

        this.direction = direction;
        // this.aux = createAudio(direction);

    }
    show() {

    }

    playTrack() {
        this.aux.play()
    }

    pauseTrack() {
        this.aux.pause()
    }
    stopTrack() {
        this.aux.stop()
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
    getArtist() {
        return this.artist
    }

    getAux() {
        return this.aux
    }

}