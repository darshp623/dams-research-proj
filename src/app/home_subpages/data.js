"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from "../components/title";
import "../css/data.css"; // Keep the existing CSS for data
import Modal from 'react-modal'; // Import a modal library, or create your own

export default function Data() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const [experiments] = useState([
        { number: 1, title: "Gemma 2", results: "Spotify/gemma2_answers_expOne.json" },
        { number: 2, title: "Gemma 2", results: "Spotify/gemma2_answers_expTwo.json" },
        { number: 3, title: "Gemma 2", results: "Spotify/gemma2_answers_expThree.json" },
        { number: 1, title: "Llama 3.1", results: "Spotify/llama3.1_answers_expOne.json" },
        { number: 2, title: "Llama 3.1", results: "Spotify/llama3.1_answers_expTwo.json" },
        { number: 3, title: "Llama 3.1", results: "Spotify/llama3.1_answers_expThree.json" },
        { number: 1, title: "Llava", results: "Spotify/llava_answers_expOne.json" },
        { number: 2, title: "Llava", results: "Spotify/llava_answers_expTwo.json" },
        { number: 3, title: "Llava", results: "Spotify/llava_answers_expThree.json" },
        { number: 1, title: "Mistral", results: "Spotify/mistral_answers_expOne.json" },
        { number: 2, title: "Mistral", results: "Spotify/mistral_answers_expTwo.json" },
        { number: 3, title: "Mistral", results: "Spotify/mistral_answers_expThree.json" },
        { number: 1, title: "Qwen 2", results: "Spotify/qwen2_answers_expOne.json" },
        { number: 2, title: "Qwen 2", results: "Spotify/qwen2_answers_expTwo.json" },
        { number: 3, title: "Qwen 2", results: "Spotify/qwen2_answers_expThree.json" }
    ]);

    // State for dark mode detection
    const [isDarkMode, setIsDarkMode] = useState(
        () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    // UseEffect to listen to system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setIsDarkMode(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentResults, setCurrentResults] = useState([]);

    // Open modal and fetch JSON
    const openModal = async (path) => {
        try {
            const response = await fetch(`/${path}`);
            const data = await response.json();
            setCurrentResults(data);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
    };

    // Close modal function
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentResults([]);
    };

    return (
        <div className={`data-page ${isDarkMode ? 'dark-mode-page' : 'light-mode-page'}`}>
            <div className="data-content">
                <div className={`data-section-title ${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`} data-aos="fade-up">
                    <SectionTitle title="DATA" />
                </div>
                <div className={`data-title-subheading ${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`} data-aos="fade-up">
                    Experiment Data Overview
                </div>
                {/* Table for experiment data */}
                <div className="overflow-x-hidden mt-4" data-aos="fade-up">
                    <table className="min-w-full bg-blue-50 text-center justify-center text-sm shadow-md">
                        <thead className="bg-blue-950 text-white uppercase text-md">
                            <tr>
                                <th className="py-3 px-6">LLM</th>
                                <th className="py-3 px-6">Experiment Number</th>
                                <th className="py-3 px-6">Results</th>
                            </tr>
                        </thead>
                        <tbody className={`text-blue-900 ${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}>
                            {experiments.map(exp => (
                                <tr key={exp.number} className="border-b hover:bg-gray-100 transition duration-300">
                                    <td className="border-b py-3 px-6">{exp.title}</td>
                                    <td className="border-b py-3 px-6">{exp.number}</td>
                                    <td className="border-b py-3 px-6">
                                        <button 
                                            className="text-blue-600 hover:underline"
                                            onClick={() => openModal(exp.results)}
                                        >
                                            Click here
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Component with inline styling based on dark mode */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        backgroundColor: isDarkMode ? '#23232f' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    }
                }}
            >
                <h2 style={{ color: isDarkMode ? '#00ffb3' : '#00ff15' }}>Results</h2>
                {currentResults && currentResults.map((result, index) => (
                    <div key={index}>
                        <h3 style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{result.Question}</h3>
                        <p style={{ color: isDarkMode ? '#d1d5db' : '#000000' }}>
                            <strong>Answer:</strong> {result.Answer}
                        </p>
                    </div>
                ))}
                <button
                    style={{
                        backgroundColor: isDarkMode ? '#00ff15' : '#00ff15',
                        color: '#23232f',
                        padding: '10px 15px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}
                    onClick={closeModal}
                >
                    Close
                </button>
            </Modal>
        </div>
    );
}
