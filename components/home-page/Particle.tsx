import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle: React.FC = () => {
  const particlesInit = useCallback(async (main: any) => {
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback(async (container: any): Promise<void> => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
          events: {
            onClick: {
              enable: false, // Disable onClick effect
            },
            onHover: {
              enable: false, // Disable onHover effect
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#ffffff", // White particles (stars)
          },
          links: {
            color: "#ffffff", // White links connecting particles
            distance: 150,
            enable: false, // Disable links for a more natural starry look
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false, // Disable collisions for a more natural starry look
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out", // Particles will disappear when they go out of bounds
            },
            random: true,
            speed: 0.5, // Slower speed for a starry effect
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200, // Increase number of particles for more stars
          },
          opacity: {
            value: 0.8, // Slightly more opaque to mimic stars
          },
          shape: {
            type: "circle", // Changed shape to circle for a more natural star look
          },
          size: {
            value: { min: 1, max: 3 }, // Size of the stars
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
