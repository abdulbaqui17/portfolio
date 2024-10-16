import { FaLightbulb, FaClipboardList, FaCreditCard } from 'react-icons/fa';
import ideaImage from "../assets/idea.png"
import bloging from "../assets/bloging.png"
import ecommors from "../assets/ecommors.png"
import paytm from "../assets/paytm.png"
import todo from "../assets/todo.png"


export const Project = () => {
  return (
    <div id='projects' className="bg-customDark text-white  flex flex-col items-center gap-10">
      <div className="mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-amber-500">
          <path fillRule="evenodd" d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
        </svg>
      </div>

      <div className="w-full max-w-4xl mb-10">
        <hr className="border-t-2 bg-gradient-to-r from-amber-500 to-pink-500 mt-2 py-2 px-4 rounded-3xl" />
      </div>

      <h1 className="text-5xl font-bold mb-8">My Projects</h1>

      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <a
            href="https://mern-project-tau-six.vercel.app/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-4"
          >
            <img src={ideaImage} alt="Idea Submission" className="w-25 h-25" />

          </a>
          <p className="mt-4 text-center text-xl">
            Idea Submission
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://todo-nine-henna.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-4"
          >
            <img src={todo} alt="todo" className="w-25 h-25" />

          </a>
          <p className="mt-4 text-center text-xl">
            Todo App
          </p>
        </div>


        <div className="flex flex-col items-center">
          <a
            href="https://pay-tm-frontend-taupe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-4"
          >
            <img src={paytm} alt="paytm" className="w-25 h-25" />
          </a>
          <p className="mt-4 text-center text-xl">
            Pay-TM
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <a
            href="https://medium-nine-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-4"
          >
            <img src={bloging} alt="bloging" className="w-25 h-25" />
          </a>
          <p className="mt-4 text-center text-xl">
            Bloging Website
          </p>
        </div>

        <div>
          <a
            href="https://e-commerce-ui-six-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center gap-4"
          >
            <img src={ecommors} alt="bloging" className="w-25 h-25" />
          </a>
          <p className="mt-4 text-center text-xl">
            E-Commerce UI
          </p>
        </div>
      </div>
      <div className="text-center text-lg font-medium mt-10">
        <p className="bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">
          More exciting projects are on the way!
        </p>
      </div>
    </div>
  );
};
