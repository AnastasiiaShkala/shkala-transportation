import React, { useEffect } from 'react';
import { ReactComponent as UpArrow } from './assets/up-arrow.svg';


function ScrollButton() {
    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                document.getElementById('btn-top').classList.add('visible');
            } else {
                document.getElementById('btn-top').classList.remove('visible');
            }
        }

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id="btn-top" onClick={scrollToTop}>
            <UpArrow className="up-arrow" width="50px" height="50px" fill="currentColor" />
        </div>
    );
}

export default ScrollButton;