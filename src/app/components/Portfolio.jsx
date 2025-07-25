import FlipCard from "./FlipCard";

const projects = [
  {
    title: "Homegenius Real Estate",
    description: "React / Next / TypeScript /Google Maps",
    link: "https://homegeniusrealestate.com/home-search/",
    image: "/images/homegenius.png",
    extraContent: (
      <p>
        A real estate platform with interactive Google Maps property markers and
        fast real-time MLS search. Built with a consistent UI theme, secure
        authentication, and scalable backend services.
      </p>
    ),
  },
  {
    title: "Smart movie recommender",
    description:
      "React · JavaScript · Node.js · Express · Vite · OpenAI API · OMDB API",
    link: "https://movie-frontend-three-zeta.vercel.app/",
    image: "/images/ai_movie.png",
    extraContent: (
      <p>
        An AI-powered movie recommendation app that suggests films based on user
        mood or preferences, using GPT for natural language understanding and
        OMDB for metadata like ratings and genre.
      </p>
    ),
  },
  {
    title: "Weather app",
    description: "React / Next / TypeScript / Redis / OpenWeatherMap API",
    link: "https://appweather-theme.netlify.app/",
    image: "/images/weather.png",
    extraContent: (
      <>
        <p>
          A weather app using the OpenWeatherMap API, displaying real-time
          forecasts by location or city search. Features a clean UI with
          light/dark mode toggle for enhanced user experience.
        </p>
      </>
    ),
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-white pt-4 mb-4 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 ">
        {projects.map((project, index) => (
          <FlipCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
