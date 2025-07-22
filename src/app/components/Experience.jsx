import ParticlesBackground from "./ParticlesBackground";

const Experience = () => {
  return (
    <section className="bg-[#101936] py-16 text-white">
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <ParticlesBackground />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "20px",
            color: "white",
          }}
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Experience
              {/* <br /> */}
              <span className="text-indigo-400"> & Education</span>
            </h2>

            {/* Entry 1 */}
            <div className="mb-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="text-indigo-400 font-semibold text-lg md:w-1/4">
                2030
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold">
                  Senior Software Engineer
                </h3>
                <p className="text-sm font-medium text-gray-400">
                  Heiman Software Labs
                </p>
                <p className="mt-2 text-gray-300">
                  Provides direction for applications in development. Researches
                  and develops new ways to improve our development process.
                  Mentors Junior Software Engineers.
                </p>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="mb-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="text-indigo-400 font-semibold text-lg md:w-1/4">
                2027
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold">
                  Junior Software Engineer
                </h3>
                <p className="text-sm font-medium text-gray-400">
                  Heiman Software Labs
                </p>
                <p className="mt-2 text-gray-300">
                  Developed, installed, and configured internal applications, as
                  well as new application releases into test and production
                  environments.
                </p>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="mb-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="text-indigo-400 font-semibold text-lg md:w-1/4">
                2025
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold">
                  Master of Science in Software Engineering
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
