import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Example certificate images
import cert1 from "../assets/img/partners/checkpoint.png";
import cert2 from "../assets/img/partners/dell.png";
import cert3 from "../assets/img/partners/fortinet.png";
import cert4 from "../assets/img/partners/lenovo.png";
import cert5 from "../assets/img/partners/paloalto.png";
import cert6 from "../assets/img/partners/vmware.png";
import cert7 from "../assets/img/partners/checkpoint.png";
import cert8 from "../assets/img/partners/checkpoint.png";

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow left" onClick={onClick} aria-label="Previous">
    <ChevronLeft size={28} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow right" onClick={onClick} aria-label="Next">
    <ChevronRight size={28} />
  </button>
);

function Certificates() {
  const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,     // 👈 stop auto-scroll on hover
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="pb-5">
      <div className="container-fluid position-relative">
        <Slider {...settings}>
          {certificates.map((cert, index) => (
            <div key={index} className="px-3">
              <div className="cert-card d-flex justify-content-center px-4 bg-light align-items-center">
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="cert-img"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom CSS */}
      <style>{`
        .cert-card {
          border-radius: 10px;
          height: 150px;
          transition: transform 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-5px);
        }
        .cert-img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        .custom-arrow {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          background: #003399;
          color: #fff;
          border: none;
          border-radius: 50%;
          padding: 6px;
          z-index: 2;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: background 0.3s;
        }
        .custom-arrow:hover {
          background: #0056b3;
        }
        .custom-arrow.left { left: -10px; }
        .custom-arrow.right { right: -10px; }
      `}</style>
    </section>
  );
}

export default Certificates;
