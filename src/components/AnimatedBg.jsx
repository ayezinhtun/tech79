import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Example images
import img1 from "../assets/img/automotive.jpg";
import img2 from "../assets/img/automotive.jpg";
import img3 from "../assets/img/automotive.jpg";
import img4 from "../assets/img/automotive.jpg";
import img5 from "../assets/img/automotive.jpg";

const AnimatedBackground = () => {
  const particles = Array.from({ length: 12 });

  return (
    <div
      className="position-relative min-vh-100 d-flex align-items-center justify-content-center px-4"
      style={{
        background: "linear-gradient(90deg, #0a2540, #133c7a, #0a2540)",
        overflow: "hidden",
      }}
    >
      {/* Animated Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="position-absolute rounded-circle bg-info"
          style={{
            width: "10px",
            height: "10px",
            opacity: 0.3,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            scale: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container position-relative text-white">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-5 fw-bold">
              Transform Your Business with <span className="text-info">AI</span>
            </h1>
            <p className="lead text-light mt-3">
              Revolutionize your experience with cutting-edge AI solutions.  
              Join us and experience the future of technology today.
            </p>
            <button className="btn btn-info btn-lg mt-3 fw-semibold shadow">
              Get Started
            </button>
          </div>

          {/* Right Section - Stacked Images */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {[img1, img2, img3, img4, img5].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3, duration: 0.8 }}
                  className="overflow-hidden rounded-4 shadow-lg"
                >
                  <img
                    src={img}
                    alt={`slide-${i}`}
                    className="w-100"
                    style={{ height: "120px", objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
