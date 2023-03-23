/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Maze extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Maze/costumes/1.svg", {
        x: 33.60000000000002,
        y: 33.599999389648445
      }),
      new Costume("2", "./Maze/costumes/2.svg", {
        x: 66.37500000000003,
        y: 66.37499938964847
      }),
      new Costume("3", "./Maze/costumes/3.svg", {
        x: 101.24999999999997,
        y: 101.24999999999999
      })
    ];

    this.sounds = [new Sound("pop", "./Maze/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Level up" },
        this.whenIReceiveLevelUp
      )
    ];

    this.vars.newdirection = 0;
    this.vars.newspeed = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.level = 1;
    this.broadcast("Level up");
  }

  *startAsClone() {
    this.vars.newdirection = this.random(1, 2);
    this.vars.newspeed = this.random(1, 2);
    while (true) {
      if (this.toNumber(this.vars.newdirection) === 1) {
        this.direction += this.toNumber(this.vars.newspeed);
      } else {
        this.direction -= this.toNumber(this.vars.newspeed);
      }
      if (this.toNumber(this.stage.vars.clearLevel) === 1) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenIReceiveLevelUp() {
    this.stage.vars.clearLevel = 0;
    this.stage.vars.costume = 0;
    this.goto(0, 0);
    this.visible = true;
    for (let i = 0; i < this.toNumber(this.stage.vars.level); i++) {
      this.stage.vars.costume++;
      this.costume = this.stage.vars.costume;
      this.createClone();
      yield;
    }
    this.visible = false;
  }
}
