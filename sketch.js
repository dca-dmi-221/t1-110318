let img = [];
let screen1;
let screen2;
let screen3;
//let songsSeason1 = [];
//let songsSeason2 = [];
//let songsSeason3 = [];
//let allSongs = 1;
let seasons;
let start;

const season1Soundtrack = [{
        name: 'Apparat Goodbye',
        duration: 201,
        artist: "Soap&Skin",
        direction: 'Music/Goodbye.mp3'
    },
    {
        name: ' Industry',
        duration: 225,
        artist: "Mire Kay",
        direction: 'Music/Enter One.mp3'


    }
];

const season2Soundtrack = [{
        name: "Keep the Streets Empty For Me",
        duration: 341,
        artist: "Fever kay",
        direction: 'Music/Industry.mp3'
    },
    {
        name: "Me and the Devil",
        duration: 187,
        artist: "Soap&Skin",
        direction: 'Music/Keep the Streets Empty For Me.mp3'
    }
];



/*
for (let i = 0; i < allSongs; i++) {
    songsSeason1.push(new Tracks({ name: 'Apparat Goodbye', duration: 201, artist: "Soap&Skin", direction: 'Music/Goodbye.mp3' }));
    songsSeason1.push(new Tracks({ name: ' Industry', duration: 225, artist: "Mire Kay", direction: 'Music/Enter One.mp3' }));
    songsSeason1.push(new Tracks({ name: "Keep the Streets Empty For Me", duration: 341, artist: "Fever kay", direction: 'Music/Industry.mp3' }))
    songsSeason1.push(new Tracks({ name: "Me and the Devil", duration: 187, artist: "Soap&Skin", direction: 'Music/Keep the Streets Empty For Me.mp3' }))
    songsSeason1.push(new Tracks({ name: "Enter One", duration: 341, artist: "Sol Seppy", direction: 'Music/Me and the Devil.mp3' }))
        /* songs.push(new Tracks({ name: "Keep the Streets Empty For Me", duration: 341, artist: "Fever kay", direction: '' }))
    songs.push(new Tracks({ name: "Keep the Streets Empty For Me", duration: 341, artist: "Fever kay", direction: '' }))
    songs.push(new Tracks({ name: "Keep the Streets Empty For Me", duration: 341, artist: "Fever kay", direction: '' }))
    songs.push(new Tracks({ name: "Keep the Streets Empty For Me", duration: 341, artist: "Fever kay", direction: '' }))


}
*/

function preload() {
    img[0] = loadImage('Dark Screens/pantallaOne.png')
    img[1] = loadImage('Dark Screens/pantallaTwo.png')
    img[2] = loadImage('Dark Screens/pantallaThree.png')
    img[3] = loadImage('Dark Screens/pantallaFour.png')
    img[4] = loadImage('Dark Screens/start.png')
    img[5] = loadImage('Dark Screens/pause.png')
    img[6] = loadImage('Dark Screens/next.png')
    img[7] = loadImage('Dark Screens/back.png')
    img[8] = loadImage('Dark Screens/home.png')
    img[9] = loadImage('Dark Screens/library.png')
    img[10] = loadImage('Dark Screens/liked.png')

    /*
        for (let i = 0; i < songsSeason1.length; i++) {
            start = createAudio(songsSeason1[1].getDirection())

        }
    */






}


function showBigScreen() {
    image(img[0], 0, 0)
    image(img[4], 960, 880)
    image(img[6], 1100, 895)
    image(img[7], 860, 895)
    image(img[8], 60, 200)
    image(img[9], 60, 300)
    image(img[10], 60, 400)
}






function setup() {
    createCanvas(1920, 1080);
    seasons = 1;
    screen1 = new Bigscreens({
        darkscreens: 'Dark Screens/pantallaOne.png',
        start: 'Dark Screens/start.png',
        pause: 'Dark Screens/pause.png',
        songs: season1Soundtrack
    })
    screen2 = new Bigscreens({
        darkscreens: 'Dark Screens/pantallaTwo.png',
        start: 'Dark Screens/start.png',
        pause: 'Dark Screens/pause.png',
        songs: season2Soundtrack
    })

    /* screen3 = new Bigscreens({
        darkscreens: 'Dark Screens/pantallaThree.png',
        start: 'Dark Screens/start.png',
        pause: 'Dark Screens/pause.png',

    })
*/
    console.log(season1Soundtrack)
    console.log(season2Soundtrack)
        //  start.loop()

    //showBigScreen()
}

function draw() {
    background(0);
    switch (seasons) {
        case 1:
            screen1.show();
            break;
        case 2:
            screen2.show();
            break;
        case 3:
            screen3.show();
            break;

    }
    fill("salmon")
    text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);






}





function mousePressed() {

    if (dist(mouseX, mouseY, 100, 500) < 50) {

        seasons = 1;
        screen2.stopMusic()
        screen3.stopMusic()


    }

    if (dist(mouseX, mouseY, 100, 620) < 50) {
        seasons = 2;
        screen1.stopMusic()
        screen3.stopMusic()

    }
    if (dist(mouseX, mouseY, 100, 730) < 50) {
        seasons = 3;
        screen1.stopMusic()
        screen2.stopMusic()
    }

    switch (seasons) {
        case 1:
            screen1.mouseClicked()
            break;
        case 2:
            screen2.mouseClicked()
            break;
            /* case 3:
            screen3.mouseClicked()
            break;
*/

    }






}

function mouseDragged() {
    screen1.mouseDragged()
    screen2.mouseDragged()
        //  screen3.mouseDragged()
}

/*
function playTrack() {

    start.play()
}



function pauseTrack() {
    start.pause()
}

function stopTrack() {
    start.stop()
}

function getAudio() {
    return start;
}

function setVolume(newVolume) {
    start.volume(newVolume)
}

*/


class Bigscreens {
    constructor({ darkscreens, start, pause, songs }) {
        this.darkscreens = darkscreens;
        this.start = start;
        this.pause = pause;
        this.songs = songs;
        this.mySongs = [];
        this.homeButton = loadImage('Dark Screens/home.png');
        this.library = loadImage('Dark Screens/library.png')
        this.liked = loadImage('Dark Screens/liked.png')
        this.buttonSeason1 = loadImage('Dark Screens/Soundrack1.png')
        this.buttonSeason2 = loadImage('Dark Screens/Soundrack2.png')
        this.buttonSeason3 = loadImage('Dark Screens/Soundrack3.png')
        this.buttonNext = loadImage('Dark Screens/next.png')
        this.buttonBack = loadImage('Dark Screens/back.png')

        this.paintScreen = loadImage(darkscreens);
        this.buttonProducer = new Buttons({
            x: 960,
            y: 880,
            buttonPause: pause,
            buttonStart: start
        })

        this.songs.forEach((item) => {
            const newMusic = new Tracks({
                name: item.name,
                artist: item.artist,
                direction: item.direction,
                x: 300,
                y: 160
            })
            newMusic.setVolume(0.5);
            newMusic.getAudio().onended(() => this.changeMusic());
            this.mySongs.push(newMusic)
        });

        this.choosedSong = this.mySongs[0];
        this.inUse = false;





        this.barVolume = new Bar({
            type: "Volume"
        })

        this.barSong = new Bar({
            type: "Song"
        })



    }
    show() {
        image(this.paintScreen, 0, 0)
        image(this.homeButton, 60, 200)
        image(this.library, 60, 300)
        image(this.liked, 60, 400)
        image(this.buttonSeason1, 60, 500)
        image(this.buttonSeason2, 60, 600)
        image(this.buttonSeason3, 60, 700)
        image(this.buttonNext, 1118, 899)
        image(this.buttonBack, 888, 899)




        this.mySongs.forEach((song) => { song.show() })

        fill(255);
        textSize(15)
        text(this.choosedSong.getName() + "" + `-` + "" + this.choosedSong.getArtist(), 890, 600)

        this.buttonProducer.showB();
        this.barSong.showBar(this.choosedSong.getAudio().time(), this.choosedSong.getAudio().duration());
        this.barVolume.showBar();

    }
    mouseClicked() {
        if (dist(mouseX, mouseY, this.buttonProducer.getX(), this.buttonProducer.getY()) < 60) {
            if (!this.inUse) {
                this.choosedSong.playTrack()
            } else {
                this.choosedSong.pauseTrack();

            }
            if (dist(mouseX, mouseY, 1131, 912) < 10) {
                this.changeMusic()

            }
            if (dist(mouseX, mouseY, 888, 912) < 10) {
                this.changePreviousMusic()

            }







            this.inUse = !this.inUse;
            this.buttonProducer.setInuse(this.inUse)
            this.mySongs.forEach((song) => {
                song.show();

                if (dist(mouseX, mouseY, song.getX(), song.getY()) < 60) {
                    this.choosedSong = song;
                    this.choosedSong.setVolume(this.barVolume.getVolume());
                    this.choosedSong.stopTrack()
                    this.inUse = false;
                    this.buttonProducer.setInuse(this.inUse);
                }


            })
        }
    }

    mouseDragged() {
        this.barSong.mouseDragged(this.choosedSong.getAudio())
        this.barVolume.mouseDragged(this.choosedSong.getAudio())
    }



    stopMusic() {
        this.choosedSong.stopTrack()
        this.inUse = false;
        this.buttonProducer.setInuse(this.inUse)
    }

    changeMusic() {
        this.choosedSong.stopTrack();

        const songPlaying = this.mySongs.indexOf(this.choosedSong)
        if (this.mySongs.length - 1 === songPlaying) {
            this.choosedSong = this.mySongs[0];
        } else {
            this.choosedSong = this.mySongs[songPlaying + 1];
        }
        if (this.inUse) {
            this.choosedSong.playTrack()
        }
    }
    changePreviousMusic() {
        stopTrack()
        const songPlaying = this.mySongs.indexOf(this.choosedSong)
        if (songPlaying === 0) {
            this.choosedSong = this.mySongs[this.mySongs.length - 1];
        } else {
            this.choosedSong = this.mySongs[songPlaying - 1];
        }
        if (this.inUse) {
            playTrack()
        }
    }
}



class Buttons {
    constructor({ x, y, buttonPause, buttonStart }) {
        this.x = x;
        this.y = y;
        this.buttonPause = loadImage(buttonPause)
        this.buttonStart = loadImage(buttonStart)

        this.inUse = false;
    }


    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }

    setInuse(value) {
        this.inUse = value;
    }


    showB() {
        if (!this.inUse) {
            image(this.buttonStart, 976, 884)
        } else {
            image(this.buttonPause, 976, 884)
        }
    }


}