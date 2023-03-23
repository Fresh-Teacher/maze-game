import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Maze from "./Maze/Maze.js";
import Apple from "./Apple/Apple.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Beetle from "./Beetle/Beetle.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Maze: new Maze({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Apple: new Apple({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 2
  }),
  Sprite1: new Sprite1({
    x: 204,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Beetle: new Beetle({
    x: 188,
    y: 0,
    direction: -0.249877392612035,
    costumeNumber: 3,
    size: 8,
    visible: true,
    layerOrder: 4
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
