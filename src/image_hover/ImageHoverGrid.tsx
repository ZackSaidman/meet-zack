import ImageHover from "./ImageHover";

export const ImageGrid = [
    <ImageHover 
        key="astro"
        src="/astro.webp"
        alt="Astro"
        text="Amazon's Consumer Robot Astro"
        subtext="I create AWS infrastructure for building and deploying platform-level code and configurations"
    />,
    <ImageHover 
        key="sensor-fusion"
        src="/kalman-birds-eye.webp"
        alt="Sensor Fusion Map"
        text="Sensor Fusion for Autonomous Vehicles"
        subtext="I wrote the Agglomerative Hierarchical Clustering (AHC) algorithm to correlate camera, radar, and lidar data for our autonomous vehicle"
    />,
    <ImageHover 
        key="iarc-drone"
        src="/iarc.png"
        alt="IARC Drone"
        text="International Aerial Robotics Competition"
        subtext="This competiton was GPS denied so I used a complimentary filter to fuse the IMU with an Optical Flow Sensor and set up a state machine to allow a planar radar to take control for obstical avoidance"
    />,
    <ImageHover 
        key="vehicle-simulation"
        src="/sim-pic.webp"
        alt="Autonomous Vehicle Simulation"
        text="Autonomous Vehicle Simulation"
        subtext="I worked with MathWorks to improve ROS integration with MATLAB by building out algorithms and networking features on top of a basic car simulation for autonomous function"
    />,
    <ImageHover 
        key="graymatter"
        src="/graymatter-side.webp"
        alt="Autonomous Vehicle"
        text="Embry-Riddle's Autonomous Vehicle"
        subtext="I worked with a small team to outfit this vehicle used in the 2007 DARPA Urban Challenge with modern sensors and computers to bring our simulations to a real platform"
    />,
];
