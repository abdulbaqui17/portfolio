import { FaTwitter, FaLinkedin, FaLink, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div id='contact' className="bg-customDark text-white min-h-screen p-8 flex flex-col items-center gap-10">
      <div className="w-full max-w-4xl mb-10">
        <hr className="border-t-2 bg-gradient-to-r from-amber-500 to-pink-500 mt-2 py-2 px-4 rounded-3xl" />
      </div>

      <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>

      <div className="flex flex-col gap-8 md:flex-row md:justify-around w-full max-w-4xl">
        <a
          href="https://x.com/abdul_baqui_10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white text-customDark rounded-full shadow-lg">
            <FaTwitter size={32} />
          </div>
          <div>
            <span className="block font-semibold">Twitter</span>
            <span className="text-sm">Follow me for daily updates and insights into my projects and thoughts.</span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/abdul-baqui-861a52299/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white text-customDark rounded-full shadow-lg">
            <FaLinkedin size={32} />
          </div>
          <div>
            <span className="block font-semibold">LinkedIn</span>
            <span className="text-sm">Connect with me professionally and explore my career achievements and endorsements.</span>
          </div>
        </a>

        <a
          href="https://linktr.ee/abdul_baqui_17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white text-customDark rounded-full shadow-lg">
            <FaLink size={32} />
          </div>
          <div>
            <span className="block font-semibold">Linktree</span>
            <span className="text-sm">Discover all my online profiles and important links in one place.</span>
          </div>
        </a>

        <a
          href="https://github.com/abdulbaqui17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 p-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white text-customDark rounded-full shadow-lg">
            <FaGithub size={32} />
          </div>
          <div>
            <span className="block font-semibold">GitHub</span>
            <span className="text-sm">Explore my repositories, contributions, and open-source projects.</span>
          </div>
        </a>
      </div>
    </div>
  );
};
