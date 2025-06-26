<script setup>
import { onMounted, ref } from 'vue';
import Matter from 'matter-js';

const matterContainer = ref(null);
const canvas = ref(null);
const THICCNESS = 400;

// module aliases
const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Vector = Matter.Vector;
const Body = Matter.Body;

let engine;
let render;
let runner;
let ground;
let leftWall;
let rightWall;

onMounted(() => {
  // Wait for DOM to be fully loaded
  setupMatter();
  window.addEventListener("resize", handleResize);
});

function setupMatter() {
  if (!matterContainer.value) return;

  // create an engine
  engine = Engine.create();

  // create a renderer
  render = Render.create({
    canvas: canvas.value,
    engine: engine,
    options: {
      width: matterContainer.value.clientWidth,
      height: matterContainer.value.clientHeight,
      background: "transparent",
      wireframes: false,
      showAngleIndicator: false
    }
  });

  createBalls();
  createWalls();
  setupMouseInteraction();

  // run the renderer
  Render.run(render);

  // create runner
  runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);
}

function createBalls() {
  // array of colors
  const colors = ['#2E3440', '#F2921D', '#F27127', '#D95323', '#8C322A'];

  // array of spawn positions
  const positions = [
    matterContainer.value.clientWidth * 0.1, // Left
    matterContainer.value.clientWidth * 0.3, // Left-Center
    matterContainer.value.clientWidth / 2,   // Center
    matterContainer.value.clientWidth * 0.7, // Right-Center
    matterContainer.value.clientWidth * 0.9  // Right
  ];

  // Dynamic calculation
  const minBallSize = 40;
  const maxBallSize = 160;
  const minBalls = 8;
  const maxBalls = 45;

  const containerArea = matterContainer.value.clientWidth * matterContainer.value.clientHeight;
  const targetFill = containerArea * 0.66; // 2/3 of the section

  // Start with a reasonable ball size
  let ballSize = 60;
  let ballArea = Math.PI * Math.pow(ballSize, 2);

  // Estimate number of balls to fill target area
  let numberOfBalls = Math.floor(targetFill / ballArea);

  // Clamp number of balls
  numberOfBalls = Math.max(minBalls, Math.min(numberOfBalls, maxBalls));

  // Recalculate ball size to better fit the target fill with the clamped number
  ballSize = Math.sqrt(targetFill / (numberOfBalls * Math.PI));
  ballSize = Math.max(minBallSize, Math.min(ballSize, maxBallSize));

  // Final number of balls based on adjusted size
  numberOfBalls = Math.floor(targetFill / (Math.PI * Math.pow(ballSize, 2)));
  numberOfBalls = Math.max(minBalls, Math.min(numberOfBalls, maxBalls));

  let delay = 15; // Small delay for animation

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
          friction: 0.5, // Higher ground friction
          frictionAir: 0.02, // Higher air friction
          restitution: 0.5, // Less bounce
          render: {
            fillStyle: color
          }
        });
        Composite.add(engine.world, circle);
      }, index * delay);
    })(i);
  }
}

function createWalls() {
  ground = Bodies.rectangle(
      matterContainer.value.clientWidth / 2,
      matterContainer.value.clientHeight + THICCNESS / 2,
      27184,
      THICCNESS,
      { isStatic: true }
  );

  leftWall = Bodies.rectangle(
      0 - THICCNESS / 2,
      matterContainer.value.clientHeight / 2,
      THICCNESS,
      matterContainer.value.clientHeight * 5,
      { isStatic: true }
  );

  rightWall = Bodies.rectangle(
      matterContainer.value.clientWidth + THICCNESS / 2,
      matterContainer.value.clientHeight / 2,
      THICCNESS,
      matterContainer.value.clientHeight * 5,
      { isStatic: true }
  );

  // add all of the bodies to the world
  Composite.add(engine.world, [ground, leftWall, rightWall]);
}

function mobileAndTabletCheck() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function setupMouseInteraction() {
  const isMobile = mobileAndTabletCheck();

  if (!isMobile) {
    // Custom mouse implementation that only handles drag/click but ignores wheel
    let customMouse = {
      position: { x: 0, y: 0 },
      absolute: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      button: -1,
      pixelRatio: 1,
      sourceEvents: {
        mousemove: null,
        mousedown: null,
        mouseup: null,
        mousewheel: null,
      },
      mousemove: function(event) {
        const rect = render.canvas.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        };

        this.position = position;
        this.absolute = {
          x: event.clientX,
          y: event.clientY
        };
      },
      mousedown: function(event) {
        this.button = event.button;
      },
      mouseup: function(event) {
        this.button = -1;
      },
      element: render.canvas
    };

    // Manually set up the event listeners we want
    render.canvas.addEventListener('mousemove', function(event) {
      customMouse.mousemove(event);
    });

    render.canvas.addEventListener('mousedown', function(event) {
      customMouse.mousedown(event);
    });

    render.canvas.addEventListener('mouseup', function(event) {
      customMouse.mouseup(event);
    });

    // Create constraint with our custom mouse
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: customMouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    // Add to world
    Composite.add(engine.world, mouseConstraint);
  }
}

function handleResize() {
  if (!matterContainer.value || !render || !render.canvas) return;

  // set canvas size to new values
  render.canvas.width = matterContainer.value.clientWidth;
  render.canvas.height = matterContainer.value.clientHeight;

  // Update renderer bounds
  render.options.width = matterContainer.value.clientWidth;
  render.options.height = matterContainer.value.clientHeight;

  // reposition ground
  Body.setPosition(
      ground,
      Vector.create(
          matterContainer.value.clientWidth / 2,
          matterContainer.value.clientHeight + THICCNESS / 2
      )
  );

  // reposition right wall
  Body.setPosition(
      rightWall,
      Vector.create(
          matterContainer.value.clientWidth + THICCNESS / 2,
          matterContainer.value.clientHeight / 2
      )
  );
}
</script>

<template>
  <section id="home" class="relative h-screen overflow-hidden">
    <div ref="matterContainer" id="matter-container" class="relative w-full h-screen overflow-hidden">
      <div id="hidden-text" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15vw] font-extrabold text-custom-white pointer-events-none z-10 text-center leading-none">
        Timon Amesmann
      </div>
      <canvas ref="canvas" class="absolute top-0 left-0 z-[1]"></canvas>
    </div>
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl text-sunset-gray z-10 animate-bounce">
      <svg class="w-6 h-6 text-sunset-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
    </div>
  </section>
</template>