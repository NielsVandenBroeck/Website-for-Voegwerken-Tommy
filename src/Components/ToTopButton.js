import React, { useState, useEffect } from 'react'
import { FiChevronUp } from "react-icons/fi";

const ToTopButton = () => {
    // 1. We use React State to track if the button should be visible
    const [isVisible, setIsVisible] = useState(false);

    // 2. We use useEffect so the scroll listener is only added once
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        // This is a "cleanup" function that prevents memory leaks!
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        // We changed this to a real <button> element for better browser accessibility
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-orange-500 text-3xl text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl ${
                isVisible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
            }`}
            aria-label="Scroll to top"
        >
            <FiChevronUp />
        </button>
    )
}

export default ToTopButton