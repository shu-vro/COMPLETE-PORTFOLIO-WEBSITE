const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

let groundHeight = 100;

class Star {
    constructor(x, y, color, radius, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.velocity = velocity;

        this.friction = 0.64;
        this.gravity = 1;
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);
        ctx.shadowColor = "#e3eaef";
        ctx.shadowBlur = Math.random() * 20;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
    update() {
        if (
            this.x + this.velocity.x + this.radius > canvas.width ||
            this.x - this.radius < 0
        ) {
            this.velocity.x = -this.velocity.x * this.friction;
        }

        if (
            this.y + this.velocity.y + this.radius >=
            canvas.height - groundHeight
        ) {
            this.velocity.y = -this.velocity.y * this.friction;
            this.velocity.x *= this.friction;
            this.radius -= 3;

            for (let i = 0; i < 6; i++) {
                miniStars.push(
                    new Explosion(
                        this.x,
                        this.y + this.radius,
                        Math.random() * 2.5 + 0.5,
                        "white",
                        {
                            x: (Math.random() - 0.5) * 40,
                            y: Math.random() * 40,
                        }
                    )
                );
            }
        } else {
            this.velocity.y += this.gravity;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }
}

class Explosion {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.friction = 0.75;
        this.gravity = 1;
        this.life = 100;
        this.opacity = 1;
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);
        ctx.shadowColor = "#e3eaef";
        ctx.shadowBlur = Math.random() * 20;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    update() {
        if (
            this.x + this.velocity.x + this.radius > canvas.width ||
            this.x - this.radius < 0
        ) {
            this.velocity.x = -this.velocity.x * this.friction;
        }

        if (
            this.y + this.velocity.y + this.radius >=
            canvas.height - groundHeight
        ) {
            this.velocity.y = -this.velocity.y * this.friction;
            this.velocity.x *= this.friction;
        } else {
            this.velocity.y += this.gravity;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
        this.life--;
        this.opacity -= 1 / this.life;
    }
}

function mountains(mountain_num, height, color) {
    let width = canvas.width / mountain_num;
    for (let i = 0; i < mountain_num; i++) {
        ctx.beginPath();
        ctx.moveTo(i * width, canvas.height); // Bottom left
        ctx.lineTo(i * width + width + 325, canvas.height); // bottom right
        ctx.lineTo(i * width + width / 2, canvas.height - height); // Bottom left
        ctx.lineTo(i * width - 325, canvas.height); // Bottom left
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

let stars = [];
let miniStars = [];
let bgStars = [];
function init() {
    stars = [];
    for (let i = 0; i < 100; i++) {
        bgStars.push(
            new Star(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                "white",
                Math.random() * 2.5 + 0.5,
                {
                    x: 0,
                    y: 0,
                }
            )
        );
    }
}

let generateTime = 0;
let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "#171e26");
gradient.addColorStop(1, "#3f586b");
let elapsedTime = Math.random() * 100 + 75;
function animate() {
    requestAnimationFrame(animate);
    generateTime++;
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    bgStars.forEach((bgStar) => {
        bgStar.draw();
    });

    mountains(1, canvas.height - 50, "#384551");
    mountains(2, canvas.height - 100, "#2B3843");
    mountains(3, canvas.height - 300, "#26333E");
    ctx.fillStyle = "#182028";
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
    if (generateTime % 100 == 0) {
        let radius = Math.random() * 5 + 10;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = -500;
        let color = "white";
        let velocity = {
            x: (Math.random() - 0.5) * 20,
            y: 3,
        };
        generateTime = Math.round(Math.random() * 100 + 100);
        stars.push(new Star(x, y, color, radius, velocity));
    }
    stars.forEach((star) => {
        star.update();
        if (star.radius <= 0) {
            stars.splice(star, 1);
        }
    });

    miniStars.forEach((miniStar) => {
        miniStar.update();
        if (miniStar.life <= 0) {
            miniStars.splice(miniStar, 1);
        }
    });
}
init();
animate();

window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
});
