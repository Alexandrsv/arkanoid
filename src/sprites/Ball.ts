import { Vector } from "../types";

export class Ball {
  private ballImage = new Image();
  speed: Vector;
  constructor(
    private readonly ballSize: number,
    private readonly position: Vector,
    speed: number,
    image: string
  ) {
    this.ballImage.src = image;
    this.speed = {
      x: speed,
      y: -speed,
    };
    this.ballSize = ballSize;
    this.position = position;
  }

  get width() {
    return this.ballSize;
  }
  get height() {
    return this.ballSize;
  }

  get pos(): Vector {
    return this.position;
  }
  get image(): HTMLImageElement {
    return this.ballImage;
  }

  changeYDirection() {
    this.speed.y = -this.speed.y;
  }

  changeXDirection() {
    this.speed.x = -this.speed.x;
  }

  moveBall() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}
