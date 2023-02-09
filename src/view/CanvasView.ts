import { Brick } from "../sprites/Brick";
import { Paddle } from "../sprites/Paddle";
import { Ball } from "../sprites/Ball";

export class CanvasView {
  canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
    this.scoreDisplay = document.querySelector("#score");
    this.start = document.querySelector("#start");
    this.info = document.querySelector("#info");
  }
  clear() {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  initStartButton(startFunction: (view: CanvasView) => void) {
    this.start?.addEventListener("click", () => startFunction(this));
  }

  drawScore(score: number) {
    if (this.scoreDisplay) {
      this.scoreDisplay.innerHTML = score.toString();
    }
  }

  drawInfo(text: string) {
    if (this.info) {
      this.info.innerHTML = text;
    }
  }

  drawSprite(brick: Brick | Paddle | Ball) {
    if (!brick) return;

    this.ctx?.drawImage(
      brick.image,
      brick.pos.x,
      brick.pos.y,
      brick.width,
      brick.height
    );
  }

  drawBricks(bricks: Brick[]) {
    bricks.forEach((brick) => this.drawSprite(brick));
  }
}
