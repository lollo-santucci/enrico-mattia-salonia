import { useState, useLayoutEffect } from 'react';

// Define an interface for window dimensions
interface WindowDimensions {
    width: number | undefined;
}

const useWindowDimensions = () => {
    // State now explicitly starts as an object with width possibly undefined
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({ width: undefined });

    useLayoutEffect(() => {
        // Function to get window dimensions
        function getWindowDimensions(): WindowDimensions {
            // Ensure this runs only in the browser
            if (typeof window !== 'undefined') {
                return { width: window.innerWidth };
            }
            // Fallback in case window is undefined
            return { width: undefined };
        }

        // Handler to set dimensions
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        // Set dimensions initially and setup event listener
        if (typeof window !== 'undefined') {
            setWindowDimensions(getWindowDimensions());
            window.addEventListener('resize', handleResize);
        }

        // Cleanup listener on unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);  // Empty dependency array ensures this runs only once after mounting

    return windowDimensions;
};

export default useWindowDimensions;
