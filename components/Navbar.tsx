"use client";

import { useState, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const [courseOpen, setCourseOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCourseOpen(false);
      setTechOpen(false);
    }, 200);
  };

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200 px-7 py-4 flex items-center justify-between">
  {/* LOGO */}
  <h1 className="text-blue-600 font-bold text-xl">Strydoz</h1>

  {/* DESKTOP MENU */}
  <ul className="hidden md:flex gap-7 items-center text-black">

    <li className="hover:text-blue-600 cursor-pointer">Home</li>
    <li className="hover:text-blue-600 cursor-pointer">Html</li>
    <li className="hover:text-blue-600 cursor-pointer">CSS</li>

        {/* COURSES */}
        <div
          className="relative"
          onMouseEnter={() => {
            handleEnter();
            setCourseOpen(true);
          }}
          onMouseLeave={handleLeave}
        >
          <span className="hover:text-blue-600 cursor-pointer">
            Courses ▾
          </span>

          {courseOpen && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-[260px] z-50">

              {/* SAFE AREA */}
              <div className="absolute -top-2 left-0 w-full h-3"></div>

              <div className="flex flex-col gap-3 text-sm">

                {/* TECHNOLOGY */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    handleEnter();
                    setTechOpen(true);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setTechOpen(false);
                    }, 200);
                  }}
                >
                  <p className="hover:text-blue-600 cursor-pointer flex justify-between">
                    💻 Technology →
                  </p>

                  {techOpen && (
                    <div className="absolute right-full top-0 bg-white shadow-lg rounded-lg 
                    p-4 w-[260px] z-50">

                      {/* SIDE SAFE AREA */}
                      <div className="absolute left-[-10px] top-0 w-3 h-full"></div>

                      <div className="flex flex-col gap-2 text-sm">
                        <p className="hover:bg-gray-100 px-2 py-1 rounded">Data Science</p>
                        <p className="hover:bg-gray-100 px-2 py-1 rounded">Full Stack Development</p>
                        <p className="hover:bg-gray-100 px-2 py-1 rounded">Mobile App Development</p>
                        <p className="hover:bg-gray-100 px-2 py-1 rounded">Software Development</p>
                        <p className="hover:bg-gray-100 px-2 py-1 rounded">Machine Learning</p>
                        <p className="hover:bg-gray-100 px-2 py-1 rounded">Web Development</p>
                        <p className="hover:bg-gray-100 px-2 py-1 rounded font-medium">🎨 Designz</p>
                      </div>

                    </div>
                  )}
                </div>

                <p className="hover:text-blue-600 cursor-pointer">🏫 Education 
                  
                </p>
                 <p className="hover:text-blue-600 cursor-pointer">💼 Business</p>


              </div>
            </div>
          )}
        </div>

        {/* LANGUAGE */}
        <div className="relative group cursor-pointer">
          <span>{language} 🌐</span>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
            <p onClick={() => setLanguage("EN")} className="px-4 py-2 hover:bg-gray-100">English</p>
            <p onClick={() => setLanguage("TA")} className="px-4 py-2 hover:bg-gray-100">தமிழ்</p>
          </div>
          
        </div>

        {/* LOGIN */}
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition">
          Login
        </button>

        {/* SIGN UP */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Sign Up
        </button>

      </ul>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">

          <a>Home</a>
          <a>Html</a>
          <a>CSS</a>

          {/* MOBILE COURSES */}
          <div className="text-center">
            <button onClick={() => setMobileCourseOpen(!mobileCourseOpen)}>
              Courses ▾
            </button>

            {mobileCourseOpen && (
              <div className="mt-2 flex flex-col gap-2 text-sm">

                <div>
                  <p className="font-medium">💻 Technology</p>
                  <div className="ml-4 flex flex-col gap-1 text-gray-600">
                    <p>Data Science</p>
                    <p>Full Stack Development</p>
                    <p>Mobile App Development</p>
                    <p>Software Development</p>
                    <p>Machine Learning</p>
                    <p>Web Development</p>
                    <p>🎨 Designz</p>
                  </div>
                </div>

                <p>🏫 School (1–12)</p>
                <p>🎓 College</p>
                <p>💼 Business</p>

              </div>
            )}
          </div>

          {/* LANGUAGE */}
          <div className="flex gap-4">
            <button onClick={() => setLanguage("EN")}>English</button>
            <button onClick={() => setLanguage("TA")}>தமிழ்</button>
          </div>

          {/* LOGIN */}
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Login
          </button>

          {/* SIGN UP */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </button>

        </div>
      )}
    </nav>
  );
}