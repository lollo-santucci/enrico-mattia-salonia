import "./Credits.style.css"; // Assicurati di creare questo file CSS

const Credits = () => {
    return (
        <div className="logo-container flex flex-row">
            <span className="crafted-by">Designed and Developed by:</span>
            <a href="https://www.lorenzosantucci.com" target="_blank">
                <div className="logo-credits">
                    <p className="text">L:<span className="blink">\</span></p>
                </div>
            </a>
        </div>
    );
};

export default Credits;
