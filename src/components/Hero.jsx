import React, { useEffect, useRef } from 'react';
import { FaCode, FaServer, FaCloud, FaProjectDiagram, FaGithub, FaRegStar } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Hero = () => {
    const typewriterRef = useRef(null);
    const scrollToRef = useRef(null);

    useEffect(() => {
        const words = ["Hello, World!", "Welcome to my website!"];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;

        const type = () => {
            if (typewriterRef.current) {
                currentWord = words[i];
                if (isDeleting) {
                    typewriterRef.current.textContent = currentWord.substring(0, j - 1);
                    j--;
                    if (j === 0) {
                        isDeleting = false;
                        i++;
                        if (i === words.length) {
                            i = 0;
                        }
                    }
                } else {
                    typewriterRef.current.textContent = currentWord.substring(0, j + 1);
                    j++;
                    if (j === currentWord.length) {
                        isDeleting = true;
                    }
                }
                setTimeout(type, 100);
            }
        };

        type();
    }, []);

    const handleScrollToBottom = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id='home'>
            <div className="flex items-center flex-col gap-4 pt-2">
                <div className="w-full h-full flex justify-center items-center mb-4">
                    <div className="flex items-center gap-2">
                        <FaRegStar size={48} className="text-amber-500" />
                        <h1 ref={typewriterRef} className="bg-gradient-to-r from-amber-500 to-pink-500 text-clip text-4xl font-bold m-5"></h1>
                    </div>
                </div>
                <h1 className='text-3xl md:text-4xl font-bold m-6 flex items-center justify-center gap-2'>
                    <span className='hidden sm:inline bg-gradient-to-r from-amber-500 to-pink-500 text-clip text-3xl md:text-4xl font-bold'>I am Abdul Baqui,</span>
                    Software Developer
                    <FaGithub size={40} className="text-amber-500 sm:hidden md:inline" />
                    <FaGithub size={70} className="text-amber-500 hidden md:inline" />
                </h1>
                <p className='text-center m-7 md:w-1/2 text-lg'>
                    Hi, I’m Abdul Baqui, a Software Developer. I create functional and user-friendly web applications with a focus on clean design and performance. Here's a bit about what I do:</p>
            </div>
        </div>
    );
};
