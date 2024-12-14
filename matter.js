const matterContainer = document.querySelector("#matter-container");
const THICCNESS = 400;

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: matterContainer,
  engine: engine,
  options: {
    width: matterContainer.clientWidth,
    height: matterContainer.clientHeight,
    background: "transparent",
    wireframes: false,
    showAngleIndicator: false
  }
});

/*** Create balls ***/

// array of colors
const colors = ['#2E3440', '#F2921D', '#F27127', '#D95323', '#8C322A'];

// array of spawn positions
const positions = [
  matterContainer.clientWidth * 0.1, // Left
  matterContainer.clientWidth * 0.3, // Left-Center
  matterContainer.clientWidth / 2,   // Center
  matterContainer.clientWidth * 0.7, // Right-Center
  matterContainer.clientWidth * 0.9  // Right
];

// Calculate number of balls
let ballSize = 50;
let containerArea = matterContainer.clientWidth * matterContainer.clientHeight;
let ballArea = Math.PI * Math.pow(ballSize, 2);
let numberOfBalls = Math.floor(containerArea / ballArea * 0.5); // Adjust the divisor to control density

// Adjust ball size if number of balls exceeds 50
if (numberOfBalls > 50) {
  ballSize = Math.sqrt(containerArea / (Math.PI * 50 * 0.75));
  ballSize = Math.max(ballSize, 50); // Ensure ball size does not go below 50
  numberOfBalls = Math.floor(containerArea / (Math.PI * Math.pow(ballSize, 2)) * 0.75);
}

let delay = ballSize; // Reduced delay

for (let i = 0; i < numberOfBalls; i++) {
  ((index) => {
    setTimeout(() => {
      // Random number between -20 and +20
      let random = Math.floor(Math.random() * 60) - 30;
      // Random color from the array
      let color = colors[Math.floor(Math.random() * colors.length)];
      // Randomly select a spawn position
      let xPos = positions[Math.floor(Math.random() * positions.length)] + random;
      let circle = Bodies.circle(xPos, -250, ballSize, {
        /*
        friction: 0.1,
        frictionAir: 0.00001,
        restitution: 0.8,
         */
        friction: 0.5, // Höhere Bodenreibung
        frictionAir: 0.02, // Höhere Luftreibung
        restitution: 0.5, // Weniger Bouncen
        render: {
          fillStyle: color
        }
      });
      Composite.add(engine.world, circle);
    }, index * delay);
  })(i);
}

/*** Create Hexagons ***/
/*

// render balls
let numberOfBalls = 15;
let ballSize = matterContainer.clientWidth / 10;
let delay = ballSize*2;

for (let i = 0; i < numberOfBalls; i++) {
  ((index) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 60) - 30;
      let hexagon = Bodies.polygon(
          matterContainer.clientWidth / 2 + random, // x position
          10,                                      // y position
          6,                                       // 6 sides for a hexagon
          ballSize,                                // radius
          {
            friction: 0.1,
            frictionAir: 0.00001,
            restitution: 0.8,
          }
      );
      Composite.add(engine.world, hexagon);
    }, index * delay);
  })(i);
}
 */


var ground = Bodies.rectangle(
  matterContainer.clientWidth / 2,
  matterContainer.clientHeight + THICCNESS / 2,
  27184,
  THICCNESS,
  { isStatic: true }
);

let leftWall = Bodies.rectangle(
  0 - THICCNESS / 2,
  matterContainer.clientHeight / 2,
  THICCNESS,
  matterContainer.clientHeight * 5,
  {
    isStatic: true
  }
);

let rightWall = Bodies.rectangle(
  matterContainer.clientWidth + THICCNESS / 2,
  matterContainer.clientHeight / 2,
  THICCNESS,
  matterContainer.clientHeight * 5,
  { isStatic: true }
);

// add all of the bodies to the world
Composite.add(engine.world, [ground, leftWall, rightWall]);

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false
    }
  }
});

Composite.add(engine.world, mouseConstraint);

// allow scroll through the canvas
mouseConstraint.mouse.element.removeEventListener(
  "mousewheel",
  mouseConstraint.mouse.mousewheel
);
mouseConstraint.mouse.element.removeEventListener(
  "DOMMouseScroll",
  mouseConstraint.mouse.mousewheel
);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function handleResize(matterContainer) {
  // set canvas size to new values
  render.canvas.width = matterContainer.clientWidth;
  render.canvas.height = matterContainer.clientHeight;

  // reposition ground
  Matter.Body.setPosition(
    ground,
    Matter.Vector.create(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + THICCNESS / 2
    )
  );

  // reposition right wall
  Matter.Body.setPosition(
    rightWall,
    Matter.Vector.create(
      matterContainer.clientWidth + THICCNESS / 2,
      matterContainer.clientHeight / 2
    )
  );
}

window.addEventListener("resize", () => handleResize(matterContainer));