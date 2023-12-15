import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import Two from 'two.js';

const CanvasAnimation = () => {
  const containerRef = useRef(null);
  const entities = [];
  const copy = [" AI-based engine ", "Privacy focused", "Abundant in features", "Easy to use", "good Ui", "Secure", "Multimedia", "Fast"];

  const vector = new Two.Vector();

  useEffect(() => {
    const two = new Two({
      type: Two.Types.canvas,
      fullscreen: true,
      autostart: true,
    }).appendTo(containerRef.current);

    const solver = Matter.Engine.create();
    solver.world.gravity.y = 1;

    const bounds = {
      length: 5000,
      thickness: 50,
      properties: {
        isStatic: true,
      },
    };

    bounds.left = createBoundary(bounds.thickness, bounds.length);
    bounds.right = createBoundary(bounds.thickness, bounds.length);
    bounds.bottom = createBoundary(bounds.length, bounds.thickness);

    Matter.World.add(solver.world, [
      bounds.left.entity,
      bounds.right.entity,
      bounds.bottom.entity,
    ]);

    const defaultStyles = {
      size: two.width * 0.08,
      weight: 400,
      fill: "black", // Set the fill color to black
      leading: two.width * 0.08 * 0.8,
      family: "Angus, Arial, sans-serif",
      alignment: "center",
      baseline: "baseline",
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    };

    addSlogan();
    resize();
    const mouse = addMouseInteraction();
    two.bind("resize", resize).bind("update", update);

    function addMouseInteraction() {
      const mouse = Matter.Mouse.create(document.body);
      const mouseConstraint = Matter.MouseConstraint.create(solver, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
        },
      });

      Matter.World.add(solver.world, mouseConstraint);

      return mouseConstraint;
    }

    function resize() {
      const length = bounds.length;
      const thickness = bounds.thickness;

      vector.x = -thickness / 2;
      vector.y = two.height / 2;
      Matter.Body.setPosition(bounds.left.entity, vector);

      vector.x = two.width + thickness / 2;
      vector.y = two.height / 2;
      Matter.Body.setPosition(bounds.right.entity, vector);

      vector.x = two.width / 2;
      vector.y = two.height + thickness / 2;
      Matter.Body.setPosition(bounds.bottom.entity, vector);

      let size;

      if (two.width < 480) {
        size = two.width * 0.12;
      } else if (two.width > 1080 && two.width < 1600) {
        size = two.width * 0.07;
      } else if (two.width > 1600) {
        size = two.width * 0.06;
      } else {
        size = two.width * 0.08;
      }

      let leading = size * 0.8;

      for (let i = 0; i < two.scene.children.length; i++) {
        let child = two.scene.children[i];

        if (!child.isWord) {
          continue;
        }

        const text = child.text;
        const rectangle = child.rectangle;
        const entity = child.entity;

        text.size = size;
        text.leading = leading;

        const rect = text.getBoundingClientRect(true);
        rectangle.width = rect.width;
        rectangle.height = rect.height;

        Matter.Body.scale(entity, 1 / entity.scale.x, 1 / entity.scale.y);
        Matter.Body.scale(entity, rect.width, rect.height);
        entity.scale.set(rect.width, rect.height);

        text.size = size / 3;
      }
    }

    function addSlogan() {
      let x = defaultStyles.margin.left;
      let y = -two.height;
    
      for (let i = 0; i < copy.length; i++) {
        const word = copy[i];
        const group = new Two.Group();
        const text = new Two.Text("", 0, 0, defaultStyles);
    
        group.isWord = true;
    
        if (word.value) {
          text.value = word.value;
    
          for (let prop in word.styles) {
            text[prop] = word.styles[prop];
          }
        } else {
          text.value = word;
        }
    
        const rect = text.getBoundingClientRect();
        let ox = x + rect.width / 2;
        let oy = y + rect.height / 2;
    
        let ca = x + rect.width;
        let cb = two.width;
    
        if (ca >= cb) {
          x = defaultStyles.margin.left;
          y +=
            defaultStyles.leading +
            defaultStyles.margin.top +
            defaultStyles.margin.bottom;
    
          ox = x + rect.width / 2;
          oy = y + rect.height / 2;
        }
    
        group.translation.x = ox;
        group.translation.y = oy;
        text.translation.y = 14;
    
        // Create a rounded rectangle with white fill
        const rectangle = new Two.RoundedRectangle(
          0,
          0,
          rect.width + 25, // Width with additional space for rounded corners
          rect.height + 25, // Height with additional space for rounded corners
          10 // Radius of rounded corners
        );
        rectangle.fill = 'white';
        rectangle.stroke = 'none'; // No stroke (border)
        rectangle.visible = true;
    
        const entity = Matter.Bodies.rectangle(ox, oy, 1, 1);
        Matter.Body.scale(entity, rect.width, rect.height);
    
        entity.scale = new Two.Vector(rect.width, rect.height);
        entity.object = group;
        entities.push(entity);
    
        x += rect.width + defaultStyles.margin.left + defaultStyles.margin.right;
    
        group.text = text;
        group.rectangle = rectangle;
        group.entity = entity;
    
        group.add(rectangle, text);
        two.add(group);
      }
    
      Matter.World.add(solver.world, entities);
    }

    function update(frameCount, timeDelta) {
      let allBodies = Matter.Composite.allBodies(solver.world);
      Matter.MouseConstraint.update(mouse, allBodies);
      Matter.MouseConstraint._triggerEvents(mouse);

      Matter.Engine.update(solver);

      for (let i = 0; i < entities.length; i++) {
        let entity = entities[i];
        entity.object.position.copy(entity.position);
        entity.object.rotation = entity.angle;
      }
    }

    function createBoundary(width, height) {
      const rectangle = two.makeRectangle(0, 0, width, height);
      rectangle.visible = false;

      rectangle.entity = Matter.Bodies.rectangle(
        0,
        0,
        width,
        height,
        bounds.properties
      );
      rectangle.entity.position = rectangle.position;

      return rectangle;
    }
  }, []);

  return <div ref={containerRef} className='bg-black'/>;
};

export default CanvasAnimation;
