class Tracks {
    constructor({ name, duration, direction, artist, x, y }) {
        this.name = name;
        this.duration = duration;
        this.artist = artist;
        this.direction = direction;
        this.audio = createAudio(direction)
        this.x = x;
        this.y = y;


    }
    show() {
        /*fill(255)
        textSize(15)
        text(songsSeason1[0].getName() + "" + `-` + "" + songsSeason1[0].getArtist(), 890, 600)
    */
    }


    playTrack() {
        this.audio.play()
    }

    pauseTrack() {
        this.audio.pause()
    }
    stopTrack() {
        this.audio.stop()
    }
    setVolume(newVolume) {
        this.audio.volume(newVolume)

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
    getAudio() {
        return this.audio
    }


}