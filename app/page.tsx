export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col px-6 mt-15">

      {/* HERO */}
      <section className="mt-20 flex flex-col items-center text-center w-full">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl text-black mb-10">Strydoz Edtech</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn Skills that
            <span className="text-blue-600"> Matter 🚀</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Master Web Development & Design with real-world projects.
            <br></br> Build your career with Strydoz Edtech Platform.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Explore Courses
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="mt-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Courses</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["HTML & CSS", "JavaScript", "React"].map((course, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-600 mb-4">
                Master {course} with real-world projects.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
                View Course
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mt-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Strydoz?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Real Projects</h3>
            <p className="text-gray-600">Build portfolio with real-world projects.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
            <p className="text-gray-600">Start from basics step by step.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Career Focused</h3>
            <p className="text-gray-600">Learn skills to get a job.</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mt-24 max-w-6xl mx-auto px-6">
        <div className="bg-blue-50 rounded-3xl p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-10">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Students" },
              { value: "10+", label: "Courses" },
              { value: "50+", label: "Projects" },
              { value: "95%", label: "Success Rate" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-blue-600">{item.value}</h3>
                <p className="text-gray-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 max-w-6xl mx-auto px-6">

  <h2 className="text-3xl font-bold text-center mb-10">
    Featured Courses
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        title: "Full Stack Web Development",
        desc: "Become a complete developer with real projects",
      },
      {
        title: "Digital Marketing Mastery",
        desc: "Learn SEO, Ads, and social media growth",
      },
      {
        title: "Business Startup Guide",
        desc: "Start and scale your own business step by step",
      },
    ].map((course, i) => (
      <div key={i} className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition">
        
        <h3 className="text-xl font-semibold mb-3">
          {course.title}
        </h3>

        <p className="text-gray-600 mb-4">
          {course.desc}
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
          Enroll Now
        </button>

      </div>
    ))}

  </div>

</section>


<section className="mt-24 max-w-6xl mx-auto px-6">

  <h2 className="text-3xl font-bold text-center mb-12">
    Explore Categories
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    {/* SCHOOL */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-blue-600">
          School (1st - 12th)
        </h3>
        <p className="text-gray-600 mb-6">
          Strong foundation for students with structured lessons from basics to board exams.
        </p>
      </div>
      <button className="text-blue-600 font-medium hover:underline">
        Explore →
      </button>
    </div>

    {/* COLLEGE */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-blue-600">
          College
        </h3>
        <p className="text-gray-600 mb-6">
          Courses for MBA, MCA, BCA, BBA, Engineering, and Science students.
        </p>
      </div>
      <button className="text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>

    {/* PROFESSIONAL */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-blue-600">
          Professional (Working)
        </h3>
        <p className="text-gray-600 mb-6">
          Upgrade your skills with job-oriented training, certifications, and career growth programs.
        </p>
      </div>
      <button className="text-blue-600 font-medium hover:underline">
        Explore →
      </button>
    </div>

    {/* BUSINESS */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-3 text-blue-600">
          Business
        </h3>
        <p className="text-gray-600 mb-6">
          Learn how to start, manage, and grow your business with marketing, GST, and digital tools.
        </p>
      </div>
      <button className="text-blue-600 font-medium hover:underline">
        Explore →
      </button>
    </div>

  </div>

</section>

      {/* TESTIMONIALS */}
      <section className="mt-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              text: "This course helped me land my first job!",
              name: "Arun Kumar",
              role: "Frontend Developer",
            },
            {
              text: "Very beginner friendly and practical.",
              name: "Priya S",
              role: "Student",
            },
            {
              text: "Real-world examples made it easy.",
              name: "Rahul V",
              role: "Web Developer",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white border p-6 rounded-2xl shadow hover:shadow-lg">
              <p className="text-gray-600 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FULL WIDTH FOOTER SECTION */}
      <section className="mt-24 bg-gray-900 text-white py-24">
        <div className="w-full px-6 md:px-20">
          <h2 className="text-2xl font-bold mb-10">Explore Top Skills</h2>

          <div className="grid md:grid-cols-4 gap-12 text-sm">
            <div>
              <h3 className="font-semibold mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-400">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Programming</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>Data Structures</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Docker</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Career</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Frontend Developer</li>
                <li>Backend Developer</li>
                <li>Full Stack Developer</li>
                <li>UI/UX Designer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COPYRIGHT */}
      <footer className="border-t border-gray-200 py-6 text-center text-gray-500">
        © 2026 Strydoz EdTech. All rights reserved.
      </footer>

    </main>
  );
}