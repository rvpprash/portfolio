const FlipCard = ({ title, description, link, image, extraContent }) => {
  return (
    <div className="group [perspective:1000px] w-full max-w-xs mx-auto">
      <div className="relative min-h-[340px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-[#101936] text-white p-6 rounded-lg border border-slate-700 shadow-md backface-hidden flex flex-col justify-center items-center text-center overflow-hidden">
          <h3 className="text-lg font-bold border-b-2 border-green-500 inline-block mb-2 break-words">
            {title}
          </h3>
          <p className="text-sm text-slate-300">{description}</p>
        </div>

        <div className="absolute inset-0 bg-[#0f172a] text-white p-4 rounded-lg border border-slate-700 shadow-md [transform:rotateY(180deg)] backface-hidden overflow-auto">
          <div className="text-sm text-slate-300 space-y-2">
            {extraContent}
            {image && (
              <img
                src={image}
                alt={`${title} screenshot`}
                className="mt-2 rounded-lg max-h-40 object-contain"
              />
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-400 underline mt-2"
              >
                Visit website →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
