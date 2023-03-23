/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bug_1_01", "./Beetle/costumes/bug_1_01.png", {
        x: 186,
        y: 208
      }),
      new Costume("bug_1_02", "./Beetle/costumes/bug_1_02.png", {
        x: 186,
        y: 208
      }),
      new Costume("bug_1_03", "./Beetle/costumes/bug_1_03.png", {
        x: 186,
        y: 208
      }),
      new Costume("bug_1_04", "./Beetle/costumes/bug_1_04.png", {
        x: 186,
        y: 208
      }),
      new Costume("bug_1_05", "./Beetle/costumes/bug_1_05.png", {
        x: 186,
        y: 208
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Beetle/sounds/Chomp.wav"),
      new Sound("Boing", "./Beetle/sounds/Boing.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(204, 0);
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x -= 4;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 4;
      }
      if (this.touching(this.sprites["Maze"].andClones())) {
        yield* this.startSound("Boing");
        this.goto(204, 0);
      }
      if (this.touching(this.sprites["Apple"].andClones())) {
        yield* this.startSound("Chomp");
        this.goto(204, 0);
        this.stage.vars.level++;
        this.stage.vars.clearLevel = 1;
        if (this.compare(this.stage.vars.level, 3) > 0) {
          this.stage.vars.level = 3;
          this.broadcast("You Win");
        } else {
          this.broadcast("Level up");
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
  }
}
