import React from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";



const Expertteam = () => {
    return (
      <div>
        <div className="w-full px-28 bg-white border-white dark:bg-neutral-950 pt-[8rem]">
          {/* <!-- Container for the journey section --> */}
          <div className="flex justify-center md:container px-4 sm:px-6 md:mb-20">
            {/* <!-- Text container for heading and description --> */}
            <div className="text-center md:w-[80vw]">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Experts Team</h2>
              <p className="text-xl opacity-80 mb-1">
              At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS 
              to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing 
              accessible tools for companies of all sizes to attract top talent.
              </p>
            </div>
            </div>
            </div>
          </div>
          );
          };
const reviews = [
  {
    name: "Vikram Sinha",
    username: "Founder/CEO",
    body: "Tech innvator and Solving real world problems",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fin1.jpg&w=96&q=75",
  },
  {
    name: "Radhika Iyer",
    username: "Chief Strategy Officer",
    body: "Drives growth with strategic insights.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf1.jpg&w=96&q=75",
  },
  {
    name: "Nisha Rao",
    username: "Brand Manager",
    body: "Maintains strong brand identity",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf2.jpg&w=96&q=75",
  },
  {
    name: "Chris Anderson",
    username: "Content Strategist",
    body: "Creates engaging content strategies.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    name: "Sophia Miller",
    username: "Social Media Manager",
    body: "Builds brands through social media.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Famf1.jpg&w=96&q=75",
  },
  {
    name: "Olivia Brown",
    username: "Content Writer",
    body: "Develops engaging and informative content",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Finf4.jpg&w=96&q=75",
  },
];

const firstRow = reviews.slice();


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-80 max-w-xs m-4 dark:bg-gray-800">
      <img
        className="w-20 h-20 rounded-full border-4 border-pink-500 mb-4"
        src={img}
        alt={`${name}'s profile`}
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4">{body}</p>
      
      {/* Star Rating */}
      <div className="flex mt-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.478 4.549a1 1 0 00.95.69h4.797c.969 0 1.371 1.24.588 1.81l-3.89 2.828a1 1 0 00-.364 1.118l1.478 4.548c.3.921-.755 1.688-1.54 1.118l-3.889-2.828a1 1 0 00-1.176 0l-3.89 2.828c-.784.57-1.838-.197-1.539-1.118l1.478-4.548a1 1 0 00-.364-1.118L2.135 9.976c-.784-.57-.381-1.81.588-1.81h4.797a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[420px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 p-8">
      <Marquee pauseOnHover className="[--duration:80s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-gray-900"></div>
    </div>
  );
}

const CulturePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-3xl md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Culture</h2>
        <p className="text-gray-500 mb-4 md:mb-6">
            We foster a collaborative and inclusive environment where innovation thrives, professional growth is supported, and every team member is valued.
        </p>
        <p className="text-gray-800 mb-3 md:mb-4">
            Everything Talent is built on the principles of collaboration, respect, and continuous growth. We are a team of dedicated professionals passionate about improving the hiring experience for both employers and candidates. Our culture fosters creativity, encourages learning, and supports each individual’s development.
        </p>
        <p className="text-gray-800 mb-4 md:mb-6">
            We are driven by a shared commitment to making a positive impact on the world of recruitment. As we grow, we remain focused on delivering solutions that are not only effective but also aligned with our core values. We invite you to join us on this journey and experience the difference our platform can make in your hiring process.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
        </button>
    </div>
</div>
  );
};
const main = () => {
    return (
      <main>
       
        <Expertteam/>
        <MarqueeDemo />
        <CulturePage/>
      </main>
    );
  };

  export default main;