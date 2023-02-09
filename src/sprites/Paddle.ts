import { Vector } from "../types";

export class Paddle {
  private paddleImage = new Image();
  private moveLeft = false;
  private moveRight = false;

  constructor(
    private readonly paddleWidth: number,
    private readonly paddleHeight: number,
    private readonly position: Vector,
    private speed: number,
    image: string
  ) {
    this.paddleImage.src = image;
    this.speed = speed;
    this.paddleWidth = paddleWidth;
    this.paddleHeight = paddleHeight;
    this.position = position;

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  get width() {
    return this.paddleWidth;
  }
  get height() {
    return this.paddleHeight;
  }
  get pos() {
    return this.position;
  }
  get image() {
    return this.paddleImage;
  }

  get isMovingLeft() {
    return this.moveLeft;
  }
  get isMovingRight() {
    return this.moveRight;
  }

  movePaddle() {
    if (this.moveLeft) this.position.x -= this.speed;
    if (this.moveRight) this.position.x += this.speed;
  }

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.code === "ArrowLeft") this.moveLeft = false;
    if (e.key === "ArrowRight" || e.code === "ArrowRight")
      this.moveRight = false;
  };

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.code === "ArrowLeft") this.moveLeft = true;
    if (e.key === "ArrowRight" || e.code === "ArrowRight")
      this.moveRight = true;
  };
}
