import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import p5 from 'p5';

const PhysicsAnimation = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      console.log('Initializing the component...');

      const Engine = Matter.Engine;
      const World = Matter.World;
      const Bodies = Matter.Bodies;
      const MouseConstraint = Matter.MouseConstraint;
      const Mouse = Matter.Mouse;

      const engine = Engine.create();
      const world = engine.world;

      const sketch = (p) => {
        let boxes = [];
        let containerWidth, containerHeight; // Declare variables
      
        p.setup = () => {
          const container = document.getElementById('animation-container');
          containerWidth = container.clientWidth; // Assign values
          containerHeight = container.clientHeight; // Assign values
      
          const canvas = p.createCanvas(containerWidth, containerHeight);
          canvas.parent('animation-container');
      
          const ground = Bodies.rectangle(
            containerWidth / 2,
            containerHeight,
            containerWidth,
            20,
            { isStatic: true }
          );
          World.add(world, ground);
      
          for (let i = 0; i < 10; i++) {
            const x = p.random(50, containerWidth - 50);
            const y = p.random(50, containerHeight - 50);
            const box = new TextBox(p, x, y, 'Hello', 16, containerWidth, containerHeight);
            boxes.push(box);
          }

          const mouse = Mouse.create(canvas.elt);
          const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
              render: {
                visible: false,
              },
              stiffness: 0.8,
            },
          });

          World.add(world, mouseConstraint);
          p.mouse = mouse;
        };

        p.draw = () => {
          Engine.update(engine);
          p.background('#5933EF');

          for (let box of boxes) {
            box.display();
          }
        };
class TextBox {
  constructor(p, x, y, text, size, containerWidth, containerHeight) {
    this.p = p;
    this.size = size;
    this.text = text;

    const constrainedX = p.constrain(x, 0, containerWidth);
    const constrainedY = p.constrain(y, 0, containerHeight);

    this.body = Bodies.rectangle(constrainedX, constrainedY, 80, 20, {
      friction: 0.8,
      restitution: 0.5,
    });

    World.add(world, this.body);
  }

  
  display() {
    const p = this.p;
    const pos = this.body.position;
    const angle = this.body.angle;

    p.push();
    p.translate(pos.x, pos.y);
    p.rotate(angle);

    // Draw the box with a dynamic size based on text content
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(0, 0, this.body.width, this.body.height, 10); // Adjust the 10 to set the border radius

    // Draw the text inside the box
    p.fill(0);
    p.textSize(this.size);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(this.text, 0, 0);

    p.pop();
  }
  
}
        
      };

      new p5(sketch);

      // Mark the component as initialized
      isInitialized.current = true;

      return () => {
        console.log('Cleaning up...');
        Matter.World.clear(world, false);
        Matter.Engine.clear(engine);
      };
    }
  }, []);

  return <div id="animation-container"></div>;
};

export default PhysicsAnimation;
