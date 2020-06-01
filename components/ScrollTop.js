import React, { useState, useEffect } from "react";

export default function ScrollTop() {
    const [scrollTop, setScrollTop] = useState(false);

        function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };

        useEffect(() => {
            const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
            };
            window.addEventListener("scroll", onScroll);

            return () => window.removeEventListener("scroll", onScroll);
        }, [scrollTop]);

    return (
        <>
        {scrollTop > 400 && (
            <button
            className="scrollTop"
                onClick={scrollToTop}
            >
            🔝
            </button>
        )}
        </>
    );
}
