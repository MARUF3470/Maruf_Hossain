"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CredentialPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div data-aos="zoom-in-left" data-aos-duration="1000">
        <h3 className="text-white text-xl font-medium">ABOUT ME</h3>
        <p className="text-zinc-400 my-8">
          Hi, I am Maruf Hossain. I am doing Bachelor in Computer Science and
          Engineering in Daffodil International University. I am working as a
          professional full-stack web developer for the last 2 years.
          <br /> <br /> I can build modern websites with using modern
          technologies. I am pretty much confident about my skills and always
          try my best to fulfill the needs of my clients and provide them the
          best services.
        </p>
      </div>
      <div data-aos="zoom-in-left" data-aos-duration="1000" className="mt-20">
        <h3 className="text-white text-xl font-medium">EXPERIENCE</h3>
        <div className="my-10">
          <p className="text-zinc-500">2022</p>
          <h4 className="text-blue-500 my-1">Programming Hero</h4>
          <p className="text-zinc-500 text-sm">Student</p>
          <p className="text-zinc-400 my-2">
            I was a Programming Hero student in 2022 and i successfully
            completed the course{" "}
            <strong className="text-white">
              Complete Web Development Course With Jhankar Mahbub
            </strong>{" "}
            ontime with highest mark. Throughout the journey, i leared a lot of
            things about web development and gather many skills and experiance.
            It holds a great value to my web development career.
          </p>
        </div>
        <div>
          <p className="text-zinc-500">2023 - Current</p>
          <h4 className="text-blue-500 my-1">Fiverr & Upwork</h4>
          <p className="text-zinc-500 text-sm">Freelancer</p>
          <p className="text-zinc-400 my-2">
            I am in both Fiverr & Upwork from the last 1 year. I worked with
            some foreign clients and completed their order successfully. It also
            a great achievement in my web development career.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-white text-xl font-medium">EDUCATION</h3>
        <div className="my-10">
          <p className="text-zinc-500">2020 - Current</p>
          <h4 className="text-blue-500 my-1">
            Bachelor Degree in Computer Science & Engineering
          </h4>
          <p className="text-zinc-500 text-sm">
            Daffodil International University
          </p>
          <p className="text-zinc-400 my-2">
            I am doing Bachelor in Computer Science & Engineering from January
            2022 in{" "}
            <strong className="text-white">
              Daffodil International University
            </strong>{" "}
            and i will be a graduated student in june 2024.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-white text-xl font-medium">SKILLS</h3>
        <div className="w-3/4 flex justify-between">
          <div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">90%</p>
              <h3 className="text-white text-lg font-medium">TailwindCSS</h3>
              <p className="text-sm">CSS Framework</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">90%</p>
              <h3 className="text-white text-lg font-medium">JavaScript</h3>
              <p className="text-sm">Scripting Language</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">80%</p>
              <h3 className="text-white text-lg font-medium">Figma</h3>
              <p className="text-sm">UI/UX Design</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">90%</p>
              <h3 className="text-white text-lg font-medium">React</h3>
              <p className="text-sm">JavaScript Library</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">80%</p>
              <h3 className="text-white text-lg font-medium">Redux</h3>
              <p className="text-sm">State Management</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">85%</p>
              <h3 className="text-white text-lg font-medium">NextJs</h3>
              <p className="text-sm">React Full Stack Framework</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">80%</p>
              <h3 className="text-white text-lg font-medium">Prisma</h3>
              <p className="text-sm">Object-Relational Mapping (ORM)</p>
            </div>
          </div>
          <div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">80%</p>
              <h3 className="text-white text-lg font-medium">TypeScript</h3>
              <p className="text-sm">Defines The Type</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">90%</p>
              <h3 className="text-white text-lg font-medium">Firebase</h3>
              <p className="text-sm">Database / Authentication</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">80%</p>
              <h3 className="text-white text-lg font-medium">NodeJS</h3>
              <p className="text-sm">Open-source Server Environment</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">85%</p>
              <h3 className="text-white text-lg font-medium">ExpressJs</h3>
              <p className="text-sm">Nodejs Framework</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">85%</p>
              <h3 className="text-white text-lg font-medium">MongoDB</h3>
              <p className="text-sm">NoSQL Database</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">80%</p>
              <h3 className="text-white text-lg font-medium">PostgreSQL</h3>
              <p className="text-sm">Relational Database</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">60%</p>
              <h3 className="text-white text-lg font-medium">Stripe</h3>
              <p className="text-sm">Online Payment Gateway Integration</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="text-white text-xl font-medium">Awards</h3>
        <div className="my-6">
          <p className="text-zinc-500 text-sm">16th December 2022</p>
          <h3 className="text-white text-lg font-medium">Black-Belt</h3>
          <p className="text-sm">Programming Hero</p>
        </div>
        <div className="my-6">
          <p className="text-zinc-500 text-sm">5th January 2023</p>
          <h3 className="text-white text-lg font-medium">
            Certificate Of Completion With Excellence
          </h3>
          <p className="text-sm">Programming Hero</p>
        </div>
      </div>
    </div>
  );
};

export default CredentialPage;
