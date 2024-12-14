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


// Detect if the user is on a mobile device
window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
const isMobile = mobileAndTabletCheck();

if (!isMobile) {
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
}

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