import React, { useEffect, useState } from "react";

const Type = () => {
    const words = ["Frontend Developer", "HTML Developer", "Bootstrap Developer", "Javascript Engineer", "React Developer", "Web Designer", 'Web Developer'];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(50);
    const [isTyping, setIsTyping] = useState(true); // Track typing status

    useEffect(() => {
        let typingTimeout;

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
            }, speed);
        } else {
            typingTimeout = setTimeout(() => {
                setText((prev) => words[index].slice(0, prev.length + 1));
            }, speed);
        }

        setIsTyping(true); // Cursor should not blink while typing

        if (!isDeleting && text === words[index]) {
            setTimeout(() => setIsDeleting(true), 1000);
            setSpeed(50);
            setIsTyping(false); // Typing has stopped, allow blinking
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            setSpeed(100);
            setIsTyping(false); // Typing has stopped, allow blinking
        }

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, index, speed]);

    return (
        <span className="highlight">
            {text}
            <span className={`cursor ${isTyping ? "static" : "blink"}`}>|</span>
            <style>
                {`
                    .cursor {
                        display: inline-block;
                        font-weight: 300;
                        color: #948b8e;
                        font-size: 60px;
                    }

                    .static {
                        opacity: 1; /* Cursor stays visible while typing */
                    }

                    .blink {
                        animation: blink 700ms infinite;
                    }

                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}
            </style>
        </span>
    );
};

export default Type;
