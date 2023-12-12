import { Bodies, Composite, Engine, Events, Mouse, MouseConstraint, Runner } from "matter-js";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const engine = Engine.create({
  constraintIterations: 2, // Increase precision
  positionIterations: 6, // Increase precision
});

const runner = Runner.create();

Runner.run(runner, engine);

const StyledRectangle = styled.div`
  background-color: white;
  border-radius: 25px; /* Set the border-radius to 25px for rounded edges */
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 0% 100%; /* Set the transform origin for diagonal rotation */
  transition: transform 0.3s ease-in-out; /* Add transition for smooth movement */
`;

const Canvas = styled.div`
  width: 100%;
  height: 100%; /* Set height to 100% to inherit from its parent */
  position: relative;
  background: #5933EF;
  overflow: hidden; /* Ensure that the rectangles are contained within the canvas */
  padding: 10px;
`;

export function PressStart() {
  const ref = useRef(null);

  const dots = useRef([]);
  const [, setAnim] = useState(0);

  useEffect(function init() {
    const width = 300;
    const height = 643;

    const ground = Bodies.rectangle(width / 2, height, width, 50, {
      isStatic: true,
    });
    const ceiling = Bodies.rectangle(width / 2, 0, width, 1, {
      isStatic: true,
    });
    const wallL = Bodies.rectangle(0, height / 2, 1, height, {
      isStatic: true,
    });
    const wallR = Bodies.rectangle(width, height / 2, 50, height, {
      isStatic: true,
    });

    Composite.add(engine.world, [ground, ceiling, wallL, wallR]);
  }, []);

  useEffect(() => {
    let unsubscribe;
    function addDot() {
      const width = 300;
      const height = 300;
      const padding = 10; // Adjust the padding value
    
      const word = generateRandomWord();
      const rectWidth = 100; // Set a fixed width for all rectangles
      const rectHeight = 50;
    
      const rect = Bodies.rectangle(
        Math.random() * (width - rectWidth - 2 * padding) + rectWidth / 2 + padding,
        height - rectHeight / 2 - padding, // Adjust the y-coordinate to start from the bottom
        rectWidth,
        rectHeight,
        {
          isStatic: false,
          friction: 0.2, // Adjust friction for less movement after falling
          frictionAir: 0.01, // Adjust frictionAir for less movement after falling
          restitution: 0, // Set restitution to 0 for no bouncing after falling
          angle: Math.random() * (Math.PI / 4), // Set initial angle for diagonal motion
        }
      );
    
      Composite.add(engine.world, rect);
    
      dots.current.push({ word, rectangle: rect });
    
      if (dots.current.length < 10) setTimeout(addDot, 300);
    }
    
    
    

    addDot();

    return () => {
      clearTimeout(unsubscribe);
    };
  }, []);

  useEffect(function triggerAnimation() {
    let unsubscribe;

    function animate() {
      for (let i = 0; i < dots.current.length; i++) {
        const dot = dots.current[i];
        const { rectangle } = dot;

        if (!rectangle.isStatic) {
          dots.current[i] = { ...dot, x: rectangle.position.x, y: rectangle.position.y, angle: rectangle.angle };
        }
      }

      setAnim((x) => x + 1);

      unsubscribe = requestAnimationFrame(animate);
    }

    unsubscribe = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(unsubscribe);
    };
  }, []);

  useEffect(() => {
    const mouse = Mouse.create(ref.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2, // Set the stiffness for smooth movement
        render: {
          visible: false, // Hide constraint rendering
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    // Event listener for mouse drag start
    Events.on(mouseConstraint, "startdrag", (event) => {
      const { body } = event;
      if (body && body.render) {
        body.render.fillStyle = "red"; // Change color when dragged
      }
    });

    // Event listener for mouse drag end
    Events.on(mouseConstraint, "enddrag", (event) => {
      const { body } = event;
      if (body && body.render) {
        body.render.fillStyle = "white"; // Change color back to white when released
      }
    });

    return () => {
      Mouse.clearSourceEvents(mouse);
      Composite.remove(engine.world, mouseConstraint);
    };
  }, []);

  return (
    <Canvas ref={ref}>
      {dots.current.map((dot, key) => (
        <StyledRectangle
          key={key}
          style={{
            top: dot.y,
            left: dot.x,
            width: "100px", // Set a fixed width for all rectangles
            height: "50px",
            transform: `rotate(${dot.angle}rad)`, // Rotate the rectangle diagonally
          }}
        >
          {dot.word}
        </StyledRectangle>
      ))}
    </Canvas>
  );
}

export function generateRandomWord() {
  const words = [" AI-based engine ", "Privacy focused", "Abundant in features", "Easy to use", "good Ui", "Secure", "Multimedia", "Fast"];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
