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
          <h1>GenAIPABench</h1>
          <h2 className="description">
            This site contains results of the questions and answers used for the LLM testing.
          </h2>
          <div className="content">
            <h2>Experiments</h2>
            <p>Provided any number of Questions, Annotated Answers, and List of Company Documents. 
              The python code is capable of making numerous and orderly API calls to locally run LLMs to both answer the question list, 
              and peer review one another with the corresponding scores.
            </p>

            <h3>Prepare before running the code</h3>
            <p>Provide in adjacent files to the main and experiments python file your Companies Policy 
              Documents as text file, Companies Annotated Answers as csv, and question_list as csv.
            Make sure that each Annotated Answer matches with the line of the question_list csv.</p>

            <h3>How to Run</h3>
            <p>
            Provide the names of the companies in main, add or remove models that you want to use in experiments.py.
            Note: Code is intended to work with Ollama Server, please ensure you have this installed and all models 
            used are pulled using ollama. Once all of this is provided, run the code with python3 main.py
            </p>

            <h3>Python Code Flow</h3>
            <p>
            From main, code iterates through the list of companies and calls the 'experiments' function to run 3 experiments given ith 
            company from the list.Within 'experiments', code then iterates again through each of the experiments (one, two, and three).
            Each time, we will read the coresponding policy document for the company. Make nth amount of API calls to answer the questions 
            given some information, where n is number of questions. And finally, have each LLM reference eachothers answer to that of the 
            corresponding annotated answer. Experiment One: This will run given that each LLM is provided the Question and Policy Document 
            together. Experiment Two: This will run given that each LLM is provided the Question only. Experiment Three: This will run give 
            that each LLM is provided a Policy Document to summarize, and then use this summary to answer a Question. After each experiment 
            is ran, it will package both the answers by the LLMs in json file, and the reviews given by other models to those answers in a 
            seperate json file. These will be stored in a folder, corresponding to the company we are reviewing. Once all three experiments 
            are ran, iterate to the next company and repeat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
