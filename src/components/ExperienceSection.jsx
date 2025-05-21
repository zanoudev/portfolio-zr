import React from 'react';

const ExperienceSection = ({
  companyName,
  location,
  jobTitle,
  jobDescription,
  toolsImages
}) => {
  // Function to render up to 4 tool images
  const renderToolImages = (images) => {
    return images.slice(0, 4).map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Tool ${index + 1}`}
        className="w-12 h-12 object-contain"
      />
    ));
  };

  return (
    <section className="flex inline-flex items-center gap-42">
      {/* Location section */}
      <div
        className="flex w-[153px] flex-col items-center gap-[13px] text-black text-center text-[16px] leading-normal"
        style={{ fontFamily: "Averia Serif Libre" }}
      >
        <img
        src="/assets/images/animated-icons/earth1-ezgif.com-effects.gif"
        alt="Earth gif"
        className="w-20 h-20"
        />
        <p className="font-bold">{companyName}</p>
        <p>{location}</p>
      </div>

      {/* Job title and description */}
      <div className="flex flex-col gap-4">
        <p
          className="text-black text-[28px] font-bold leading-normal"
          style={{ fontFamily: "Young Serif" }}
        >
          {jobTitle}
        </p>
        {jobDescription.map((desc, idx) => (
          <p key={idx} className="text-black text-[16px] leading-normal">
            {desc}
          </p>
        ))}
      </div>

      {/* Tools images */}
      <div className="flex inline-flex items-center gap-8">
        {renderToolImages(toolsImages)}
      </div>
    </section>
  );
};

export default ExperienceSection;
