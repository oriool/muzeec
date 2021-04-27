export default class Key {
    constructor(key, gameWidth, gameHeight) {
        this.width = 50;
        this.height = 50;
        this.key = key;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 700,
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) {
            return;
        }

        this.position.x += 0.03 * deltaTime;
    }
}