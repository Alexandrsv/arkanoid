import { Vector } from "../types";

export class Brick {
  private brickImage = new Image();

  constructor(
    private readonly brickWidth: number,
    private readonly brickHeight: number,
    private readonly position: Vector,
    private brickEnergy: number,
    image: string
  ) {
    this.brickImage.src = image;
    this.brickEnergy = brickEnergy;
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.position = position;
  }

  get width() {
    return this.brickWidth;
  }

  get height() {
    return this.brickHeight;
  }

  get pos() {
    return this.position;
  }

  get energy() {
    return this.brickEnergy;
  }

  get image() {
    return this.brickImage;
  }

  set energy(energy: number) {
    this.brickEnergy = energy;
  }
}
