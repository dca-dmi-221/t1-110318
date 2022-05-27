let img = [];
let songs = [];
let allSongs = 1;
let start;



for (let i = 0; i < allSongs; i++) {
    songs.push(new Tracks({ name: 'Apparat Goodbye', duration: 201, direction: 'Music/Goodbye.mp3' }));
    songs.push(new Tracks({ name: ' Goodbye', duration: 225, direction: 'alo' }));

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


    for (let i = 0; i < songs.length; i++) {
        start = loadSound(songs[0].getDirection())
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

    console.log(songs)
    start.loop()

    showBigScreen()
}

function draw() {
    //background(0);


    for (let i = 0; i < songs.length; i++) {
        let s = songs[i];
        fill(255)
        textSize(20)

        text(songs[0].getName(), 890, 500)
        s.show();
    }
}



function mousePressed() {

}