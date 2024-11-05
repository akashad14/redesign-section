// Story Section Component
import React from 'react';



const Story: React.FC = () => {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-[15rem] bg-gray-50">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">Our Story</h2>
        <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600 mt-6 mb-10">
          We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, 
          we empower our weavers and their families to break the cycle of poverty and build a brighter future.
        </p>
      </div>
    
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
        <div className="max-w-lg mx-auto order-1 md:order-2">
          <img
            src="/image/story1.webp" 
            alt="Journey to Transform Recruitment"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="p-6 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            The Journey to Transform Recruitment
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-justify">
            Everything Talent was founded with a vision to transform the way organizations approach hiring. 
            Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for 
            bias in evaluating candidates, our founder set out to create a solution that simplifies the 
            hiring journey while leveraging the latest advancements in technology.
          </p>
        </div>
      </div>
    
      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 mt-8">
        <div className="max-w-lg mx-auto order-1">
          <img 
            src="/image/story_2.webp" 
            alt="Combining Innovation" 
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="p-6 order-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Combining Innovation with Efficiency
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-justify">
            Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. 
            This allows you to evaluate candidates quickly and accurately, regardless of their background 
            or the complexity of the role. We are committed to leveraging the latest technology to streamline 
            the recruitment process and reduce bias.
          </p>
        </div>
      </div>
    
      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 mt-8">
        <div className="max-w-lg mx-auto order-1 md:order-2">
          <img
            src="/image/story_3.webp"
            alt="Journey to Transform Recruitment"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="p-6 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">The Journey to Transform Recruitment</h2>
          <p className="text-base sm:text-lg text-gray-600 text-justify">
            Everything Talent was founded with a vision to transform the way organizations approach hiring.
            Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for bias
            in evaluating candidates, our founder set out to create a solution that simplifies the hiring journey
            while leveraging the latest advancements in technology.
          </p>
        </div>
      </div>
    </section>
    
    );
  };

  export default Story;