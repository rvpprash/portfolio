import WorkExperience from "./WorkExperience";

const MyWork = () => {
  return (
    <>
      {/* <div className="flex-1 max-w-xl text-white font-mono"> */}
      <div className="flex-shrink-0 w-full md:w-5/12 lg:w-1/3 text-white font-mono mb-8 md:mb-0 px-4 md:px-6">
        <h1 className="text-5xl font-bold mb-8">My Work</h1>

        <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
          I’m a developer passionate about building fast, accessible web apps
          that scale effortlessly. I have experience building reusable UI
          libraries that combine thoughtful design with clean, efficient code.
          <br />
          <br />
          Currently, I work full-stack, focusing on React, Next.js, and
          TypeScript for frontend experiences, and Nest.js, Prisma, and MongoDB
          for scalable backend APIs. I also have a strong interest in analytics
          and data visualization
        </p>
      </div>

      <WorkExperience />
    </>
  );
};

export default MyWork;
