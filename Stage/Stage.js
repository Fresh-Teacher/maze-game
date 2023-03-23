/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Light", "./Stage/costumes/Light.svg", { x: 240, y: 180 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.level = 2;
    this.vars.costume = 2;
    this.vars.clearLevel = 0;

    this.watchers.level = new Watcher({
      label: "Level",
      style: "normal",
      visible: true,
      value: () => this.vars.level,
      x: 245,
      y: 175
    });
  }
}
