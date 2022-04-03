let img = [];
let screen1;
let screen2;
let screen3;
let songsSeason1 = [];
let songsSeason2 = [];
let songsSeason3 = [];
let allSongs = 1;
let seasons;
let start;



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
*/

}


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


    for (let i = 0; i < songsSeason1.length; i++) {
        start = createAudio(songsSeason1[1].getDirection())

    }







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
        song: songsSeason1
    })
    screen2 = new Bigscreens({
        darkscreens: 'Dark Screens/pantallaTwo.png',
        start: 'Dark Screens/start.png',
        pause: 'Dark Screens/pause.png',
        song: songsSeason2
    })
    screen3 = new Bigscreens({
        darkscreens: 'Dark Screens/pantallaThree.png',
        start: 'Dark Screens/start.png',
        pause: 'Dark Screens/pause.png',
        song: songsSeason3
    })

    console.log(songsSeason1)
    start.loop()

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




    fill(255)
    textSize(15)
    text(songsSeason1[0].getName() + "" + `-` + "" + songsSeason1[0].getArtist(), 890, 600)


}





function mousePressed() {
    if (dist(mouseX, mouseY, 100, 500) < 50) {

        seasons = 1;
    }
    if (dist(mouseX, mouseY, 100, 620) < 50) {
        seasons = 2;
    }
    if (dist(mouseX, mouseY, 100, 730) < 50) {
        seasons = 3;
    }
}


function playTrack() {

}




class Bigscreens {
    constructor({ darkscreens, start, pause, song }) {
        this.darkscreens = darkscreens;
        this.start = start;
        this.pause = pause;
        this.song = song;
        this.homeButton = loadImage('Dark Screens/home.png');
        this.library = loadImage('Dark Screens/library.png')
        this.liked = loadImage('Dark Screens/liked.png')
        this.buttonSeason1 = loadImage('Dark Screens/Soundrack1.png')
        this.buttonSeason2 = loadImage('Dark Screens/Soundrack2.png')
        this.buttonSeason3 = loadImage('Dark Screens/Soundrack3.png')

        this.paintScreen = loadImage(darkscreens);
    }
    show() {
        image(this.paintScreen, 0, 0)
        image(this.homeButton, 60, 200)
        image(this.library, 60, 300)
        image(this.liked, 60, 400)
        image(this.buttonSeason1, 60, 500)
        image(this.buttonSeason2, 60, 600)
        image(this.buttonSeason3, 60, 700)

    }
}