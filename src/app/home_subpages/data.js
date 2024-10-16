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

    const companies = ["Spotify", "Twitter", "Airbnb", "Uber", "Facebook",]; // Define companies

    // Initialize state for experiments
    const [experiments] = useState({
        "Spotify": [
            { number: 1, title: "Gemma 2", results: "Spotify/gemma2expOne_full.json" },
            { number: 2, title: "Gemma 2", results: "Spotify/gemma2expTwo_full.json" },
            { number: 3, title: "Gemma 2", results: "Spotify/gemma2expThree_full.json" },
            { number: 1, title: "Llama 3.1", results: "Spotify/llama3.1expOne_full.json" },
            { number: 2, title: "Llama 3.1", results: "Spotify/llama3.1expTwo_full.json" },
            { number: 3, title: "Llama 3.1", results: "Spotify/llama3.1expThree_full.json" },
            { number: 1, title: "Llava", results: "Spotify/llavaexpOne_full.json" },
            { number: 2, title: "Llava", results: "Spotify/llavaexpTwo_full.json" },
            { number: 3, title: "Llava", results: "Spotify/llavaexpThree_full.json" },
            { number: 1, title: "Mistral", results: "Spotify/mistralexpOne_full.json" },
            { number: 2, title: "Mistral", results: "Spotify/mistralexpTwo_full.json" },
            { number: 3, title: "Mistral", results: "Spotify/mistralexpThree_full.json" },
            { number: 1, title: "Qwen 2", results: "Spotify/qwen2expOne_full.json" },
            { number: 2, title: "Qwen 2", results: "Spotify/qwen2expTwo_full.json" },
            { number: 3, title: "Qwen 2", results: "Spotify/qwen2expThree_full.json" },
        ],
        "Twitter": [
            { number: 1, title: "Gemma 2", results: "Twitter/gemma2expOne_full.json" },
            { number: 2, title: "Gemma 2", results: "Twitter/gemma2expTwo_full.json" },
            { number: 3, title: "Gemma 2", results: "Twitter/gemma2expThree_full.json" },
            { number: 1, title: "Llama 3.1", results: "Twitter/llama3.1expOne_full.json" },
            { number: 2, title: "Llama 3.1", results: "Twitter/llama3.1expTwo_full.json" },
            { number: 3, title: "Llama 3.1", results: "Twitter/llama3.1expThree_full.json" },
            { number: 1, title: "Llava", results: "Twitter/llavaexpOne_full.json" },
            { number: 2, title: "Llava", results: "Twitter/llavaexpTwo_full.json" },
            { number: 3, title: "Llava", results: "Twitter/llavaexpThree_full.json" },
            { number: 1, title: "Mistral", results: "Twitter/mistralexpOne_full.json" },
            { number: 2, title: "Mistral", results: "Twitter/mistralexpTwo_full.json" },
            { number: 3, title: "Mistral", results: "Twitter/mistralexpThree_full.json" },
            { number: 1, title: "Qwen 2", results: "Twitter/qwen2expOne_full.json" },
            { number: 2, title: "Qwen 2", results: "Twitter/qwen2expTwo_full.json" },
            { number: 3, title: "Qwen 2", results: "Twitter/qwen2expThree_full.json" },
        ],
        "Airbnb": [
            { number: 1, title: "Gemma 2", results: "Airbnb/gemma2expOne_full.json" },
            { number: 2, title: "Gemma 2", results: "Airbnb/gemma2expTwo_full.json" },
            { number: 3, title: "Gemma 2", results: "Airbnb/gemma2expThree_full.json" },
            { number: 1, title: "Llama 3.1", results: "Airbnb/llama3.1expOne_full.json" },
            { number: 2, title: "Llama 3.1", results: "Airbnb/llama3.1expTwo_full.json" },
            { number: 3, title: "Llama 3.1", results: "Airbnb/llama3.1expThree_full.json" },
            { number: 1, title: "Llava", results: "Airbnb/llavaexpOne_full.json" },
            { number: 2, title: "Llava", results: "Airbnb/llavaexpTwo_full.json" },
            { number: 3, title: "Llava", results: "Airbnb/llavaexpThree_full.json" },
            { number: 1, title: "Mistral", results: "Airbnb/mistralexpOne_full.json" },
            { number: 2, title: "Mistral", results: "Airbnb/mistralexpTwo_full.json" },
            { number: 3, title: "Mistral", results: "Airbnb/mistralexpThree_full.json" },
            { number: 1, title: "Qwen 2", results: "Airbnb/qwen2expOne_full.json" },
            { number: 2, title: "Qwen 2", results: "Airbnb/qwen2expTwo_full.json" },
            { number: 3, title: "Qwen 2", results: "Airbnb/qwen2expThree_full.json" },
        ],
        "Uber": [
            { number: 1, title: "Gemma 2", results: "Uber/gemma2expOne_full.json" },
            { number: 2, title: "Gemma 2", results: "Uber/gemma2expTwo_full.json" },
            { number: 3, title: "Gemma 2", results: "Uber/gemma2expThree_full.json" },
            { number: 1, title: "Llama 3.1", results: "Uber/llama3.1expOne_full.json" },
            { number: 2, title: "Llama 3.1", results: "Uber/llama3.1expTwo_full.json" },
            { number: 3, title: "Llama 3.1", results: "Uber/llama3.1expThree_full.json" },
            { number: 1, title: "Llava", results: "Uber/llavaexpOne_full.json" },
            { number: 2, title: "Llava", results: "Uber/llavaexpTwo_full.json" },
            { number: 3, title: "Llava", results: "Uber/llavaexpThree_full.json" },
            { number: 1, title: "Mistral", results: "Uber/mistralexpOne_full.json" },
            { number: 2, title: "Mistral", results: "Uber/mistralexpTwo_full.json" },
            { number: 3, title: "Mistral", results: "Uber/mistralexpThree_full.json" },
            { number: 1, title: "Qwen 2", results: "Uber/qwen2expOne_full.json" },
            { number: 2, title: "Qwen 2", results: "Uber/qwen2expTwo_full.json" },
            { number: 3, title: "Qwen 2", results: "Uber/qwen2expThree_full.json" },
        ],
        "Facebook": [
            { number: 1, title: "Gemma 2", results: "Facebook/gemma2expOne_full.json" },
            { number: 2, title: "Gemma 2", results: "Facebook/gemma2expTwo_full.json" },
            { number: 3, title: "Gemma 2", results: "Facebook/gemma2expThree_full.json" },
            { number: 1, title: "Llama 3.1", results: "Facebook/llama3.1expOne_full.json" },
            { number: 2, title: "Llama 3.1", results: "Facebook/llama3.1expTwo_full.json" },
            { number: 3, title: "Llama 3.1", results: "Facebook/llama3.1expThree_full.json" },
            { number: 1, title: "Llava", results: "Facebook/llavaexpOne_full.json" },
            { number: 2, title: "Llava", results: "Facebook/llavaexpTwo_full.json" },
            { number: 3, title: "Llava", results: "Facebook/llavaexpThree_full.json" },
            { number: 1, title: "Mistral", results: "Facebook/mistralexpOne_full.json" },
            { number: 2, title: "Mistral", results: "Facebook/mistralexpTwo_full.json" },
            { number: 3, title: "Mistral", results: "Facebook/mistralexpThree_full.json" },
            { number: 1, title: "Qwen 2", results: "Facebook/qwen2expOne_full.json" },
            { number: 2, title: "Qwen 2", results: "Facebook/qwen2expTwo_full.json" },
            { number: 3, title: "Qwen 2", results: "Facebook/qwen2expThree_full.json" },
        ],
    });

    const [selectedCompany, setSelectedCompany] = useState("Spotify"); // Default to Spotify

    // State for dark mode detection
    const [isDarkMode, setIsDarkMode] = useState(false);

    // UseEffect to detect and listen to system theme changes (client-side only)
    useEffect(() => {
        if (typeof window !== 'undefined') { // Ensure `window` is available
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches); // Set the initial dark mode state

            const handleChange = () => setIsDarkMode(mediaQuery.matches);
            mediaQuery.addEventListener('change', handleChange);

            // Cleanup event listener on unmount
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
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

    const [loading, setLoading] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(true);

    const switchCompany = (company) => {
        setSelectedCompany(company);
        setIsTableVisible(false); // Hide table first
        setLoading(true);

        // Simulate data fetching delay
        setTimeout(() => {
            setSelectedCompany(company);
            setIsTableVisible(true); // Show table after a brief delay
            setLoading(false);
        }, 300); // Duration of the fade effect
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
                <div>
                {loading && <div className="loading-indicator">Loading data...</div>}
                <div className={`overflow-x-hidden mt-4 ${isTableVisible ? '' : 'hidden'}`}>
                    <table className={`min-w-full bg-blue-50 text-center justify-center text-sm shadow-md table-transition`}>
                        {/* Company Tabs */}
                        <thead className="bg-blue-950 text-white uppercase text-md">
                            <tr>
                                <th colSpan="3" className="py-3 px-6">
                                    <div className="tabs" data-aos="fade-up">
                                    {companies.map((company) => (
                                        <button
                                            key={company}
                                            onClick={() => switchCompany(company)}
                                            className={`tab-button ${selectedCompany === company ? 'active-tab' : ''}`}
                                        >
                                            {company}
                                        </button>
                                        ))}
                                    </div>
                                </th>
                            </tr>
                            <tr data-aos="fade-in">
                                <th className="py-3 px-6">LLM</th>
                                <th className="py-3 px-6">Experiment Number</th>
                                <th className="py-3 px-6">Results</th>
                            </tr>
                        </thead>
                        <tbody className={`text-blue-900 ${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}>
                            {experiments[selectedCompany].map((exp, index) => (
                                <tr key={index} className="border-b hover:bg-gray-100 transition duration-300">
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
                <h2 style={{ color: isDarkMode ? '#00ffb3' : '#00ff15', textAlign: 'center'}}>Results</h2>
                {currentResults && currentResults.map((result, index) => (
                    <div key={index}>
                        <h3 style={{ color: isDarkMode ? '#ffffff' : '#000000', textAlign: 'center' }}>{result.Question}</h3>
                        <p style={{ color: isDarkMode ? '#d1d5db' : '#000000' , textAlign: 'center'}}>
                            <strong>Answer:</strong> {result.Answer}
                        </p>
                        <p style={{ color: isDarkMode ? '#d1d5db' : '#000000' }}>
                            <strong>Reviewer:</strong> {result.Reviewer}
                        </p>
                        {result.Score && (
                            <div>
                                <p style={{ color: isDarkMode ? '#d1d5db' : '#000000' }}>
                                    <strong>Score:</strong>
                                </p>
                                <ul style={{ color: isDarkMode ? '#d1d5db' : '#000000', textAlign: 'center' }}>
                                    <li>Completeness: {result.Score.completeness}</li>
                                    <li>Clarity: {result.Score.clarity}</li>
                                    <li>Reference: {result.Score.reference}</li>
                                    <li>Relevance: {result.Score.relevance}</li>
                                    <li>Accuracy: {result.Score.accuracy}</li>
                                </ul>
                            </div>
                        )}
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
