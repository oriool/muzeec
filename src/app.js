import Key from '/src/key.js';

// Audio
const song = document.querySelector('#song');

// Game
let canvas = document.querySelector('#gameScreen');
let ctx = canvas.getContext('2d'); // Context. The context is used to draw things in the screen

const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;

ctx.clearRect(0, 0, 800, 600); // When we draw or move elements in real time within the canvas, the ones that were ther before don't disappear. To prevent this, we use this function betwwen every frame.


let key = new Key('a', GAME_WIDTH, GAME_HEIGHT);
key.draw(ctx);