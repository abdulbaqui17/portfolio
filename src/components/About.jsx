import { FaLaptopCode, FaServer, FaCloud, FaProjectDiagram } from 'react-icons/fa';

export const About = () => {
  return (
    <div id='about' className="bg-customDark text-white p-8 flex flex-col items-center text-center">
      <h1 className="text-6xl font-bold mb-6">About Me</h1>
      <div className="max-w-3xl text-center mb-10">
        <p className="text-xl leading-8">
          Hi, I’m Abdul Baqui, a Full Stack Developer passionate about building web applications. I have experience in both front-end and back-end development, and I enjoy creating user-friendly and efficient solutions.
        </p>
        <p className="text-xl leading-8 mt-4">
         I'm always learning and staying updated with the latest tools to deliver the best results in every project.
        </p>

      </div>
      <div className="mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-amber-500">
          <path fillRule="evenodd" d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
        </svg>
      </div>

      <div className="w-full max-w-4xl mb-10">
        <hr className="border-t-2 bg-gradient-to-r from-amber-500 to-pink-500 mt-2 py-2 px-4 rounded-3xl" />
      </div>
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaLaptopCode size={36} className="text-amber-500" />
              Front-End Development
            </h3>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, and JavaScript</li>
              <li>React.js, Next.js</li>
              <li>Responsive Design (CSS, Tailwind CSS)</li>
              <li>Cross-Browser Compatibility</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaServer size={36} className="text-amber-500" />
              Back-End Development
            </h3>
            <ul className="list-disc list-inside">
              <li>Node.js, Express.js, Next.js</li>
              <li>Serverless Backend, Hono Cloudflare</li>
              <li>Database Management</li>
              <li>(NoSQL, MongoDB, MySQL, PostgreSQL, Prisma)</li>
              <li>RESTful API</li>
              <li>Authentication & Authorization (JWT, NextAuth, OAuth)</li>
              <li>Server-Side Logic and Optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaCloud size={36} className="text-amber-500" />
              DevOps & Deployment
            </h3>
            <ul className="list-disc list-inside">
              <li>Git & Version Control (GitHub, GitLab)</li>
              <li>CI/CD Pipelines (GitHub Actions)</li>
              <li>Cloud Deployment (AWS, Vercel)</li>
              <li>Docker & Kubernetes</li>
              <li>Performance Monitoring & Debugging</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaProjectDiagram size={36} className="text-amber-500" />
              Project Management
            </h3>
            <ul className="list-disc list-inside">
              <li>Requirement Analysis & Solution Design</li>
              <li>Team Collaboration & Communication</li>
              <li>Problem-Solving & Creative Thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
