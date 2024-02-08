"use_client"
import React, { useState, useEffect } from 'react';

const RotatingText = ({ texts }) => {
    const [index, setIndex] = useState(0);

    const rotateText = () => {
        setIndex((index + 1) % texts.length);
    };

    useEffect(() => {
        const interval = setInterval(rotateText, 2000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="flex overflow-hidden text-xl font-semibold">
            {texts.map((text, i) => (
                <div
                    key={i}
                    className={`transition-opacity duration-1000 ${i === index ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-full'
                        }`}
                >
                    {text}
                </div>
            ))}
        </div>
    );
};

export default RotatingText;
