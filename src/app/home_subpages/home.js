"use client";
import "../css/home.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-page light-mode-background">
      <div className="home-container">
        <div className="home-title">
          <h1>GenAIPABench Repository</h1>
          <p className="description">
            This repository contains files and documents related to GenAIPABench benchmark.
          </p>
          <div className="content">
            <h2>Contents</h2>
            <h3>Data Regulation Questions:</h3>
            <p>A paraphrased list of questions related to data regulations.</p>
            <p>The original list of questions pertaining to data regulations.</p>

            <h3>Privacy Policy Questions:</h3>
            <p>A paraphrased list of questions related to privacy policies.</p>
            <p>The original list of questions about privacy policies.</p>

            <h3>Annotated Answers:</h3>
            <p>
              A folder containing annotated answers to the provided questions for 5 privacy
              policies (Twitter, Facebook, Airbnb, Uber, Spotify).
            </p>

            <h3>Privacy Documents:</h3>
            <p>
              A folder containing various privacy-related documents to 5 privacy policies (Twitter, Facebook, Airbnb, Uber, Spotify).
            </p>

            <h3>Usage Results:</h3>
            <p>A folder containing various results from the various experiments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
