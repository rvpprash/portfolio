const Skills = () => {
  return (
    <>
      {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">
        My Expertise
      </h2> */}

      <div className="group [perspective:1000px] w-full sm:w-[320px] mx-auto">
        <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 bg-[#101936] text-white p-6 rounded-lg border border-slate-700 shadow-md backface-hidden flex items-center justify-center text-center overflow-hidden">
            <h3 className="text-xl font-bold border-b-2 border-pink-500 inline-block break-words">
              💻 Frontend Development
            </h3>
          </div>

          <div className="absolute inset-0 bg-[#0f172a] text-white p-4 rounded-lg border border-slate-700 shadow-md [transform:rotateY(180deg)] backface-hidden overflow-hidden">
            <ul className="list-disc list-inside text-sm text-slate-300 leading-relaxed break-words">
              <li>React.js, Next.js, TypeScript</li>
              <li>Zustand, RxJS, Emotion.js</li>
              <li>HTML5, CSS3, SASS</li>
              <li>Backbone.js, jQuery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#101936] border border-slate-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30 animate-fadeUp">
          <h3 className="text-xl font-extrabold border-b-2 border-pink-500 inline-block mb-3">
            💻 Front-end Development
          </h3>
          <ul className="list-disc list-inside text-sm text-slate-300 leading-relaxed mt-3">
            <li>
              <span className="text-white font-semibold">React.js</span>,
              Next.js, TypeScript
            </li>
            <li>Zustand, RxJS, Emotion.js</li>
            <li>HTML5, CSS3, SASS, Bootstrap</li>
            <li>jQuery, Backbone.js, Handlebars.js</li>
          </ul>
        </div>

        <div className="bg-[#101936] border border-slate-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30 animate-fadeUp delay-100">
          <h3 className="text-xl font-extrabold border-b-2 border-cyan-400 inline-block mb-3">
            🛠️ Web Engineering
          </h3>
          <p className="text-sm text-slate-300 mt-2">
            Experienced with{" "}
            <span className="text-white font-semibold">GraphQL</span>,
            <span className="text-white font-semibold">Webpack</span>,{" "}
            <span className="text-white font-semibold">Docker</span>, and{" "}
            <span className="text-white font-semibold">Git</span> to build fast,
            maintainable, and scalable applications.
          </p>
        </div>

        <div className="bg-[#101936] border border-slate-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-orange-400/30 animate-fadeUp delay-200">
          <h3 className="text-xl font-extrabold border-b-2 border-orange-400 inline-block mb-3">
            🎨 Design & Testing
          </h3>
          <p className="text-sm text-slate-300 mt-2">
            Skilled in <span className="text-white font-semibold">CSS3</span>,{" "}
            <span className="text-white font-semibold">Figma</span>,
            <span className="text-white font-semibold">Storybook</span>, and{" "}
            <span className="text-white font-semibold">Jest</span> for building
            accessible, pixel-perfect UIs with robust test coverage.
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
