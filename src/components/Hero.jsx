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
                    Full Stack Developer
                    <FaGithub size={40} className="text-amber-500 sm:hidden md:inline" />
                    <FaGithub size={70} className="text-amber-500 hidden md:inline" />
                </h1>
                <p className='text-center m-7'>
                    Hello there! I’m Abdul Baqui, a passionate Full Stack Developer who brings both technical expertise and a touch of flair to every project. I specialize
                    in crafting seamless web experiences that are as stylish as they are functional. Let’s dive into what makes me tick:
                </p>
                <div className='text-xl text-center'>
                    <div className='flex items-center gap-4 p-4'>
                        <FaCode size={48} className="text-amber-500" />
                        <div>Front-End Wizardry</div>
                    </div>
                    <div className='flex items-center gap-4 p-4'>
                        <FaServer size={48} className="text-amber-500" />
                        <div>Back-End Brilliance</div>
                    </div>
                    <div className='flex items-center gap-4 p-4'>
                        <FaCloud size={48} className="text-amber-500" />
                        <div>DevOps & Deployment</div>
                    </div>
                    <div className='flex items-center gap-4 p-4'>
                        <FaProjectDiagram size={48} className="text-amber-500" />
                        <div>Project Management</div>
                    </div>
                </div>
                <div 
                    className='hover:border-white hover:border-2 bg-gradient-to-r from-amber-500 to-pink-500 mt-2 py-2 px-4 rounded-3xl cursor-pointer text-sm'
                    
                >
                <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>    
                </div>
            </div>

            {/* Section to scroll to */}
            <div ref={scrollToRef} className="pt-16 pb-16">
                {/* Add content here for the bottom of the page */}
                <h2 className="text-center text-2xl font-bold">Contact Information</h2>
                <p className="text-center">You can reach me via email or follow me on social media!</p>
                {/* You can add more content as needed */}
            </div>
        </div>
    );
};
