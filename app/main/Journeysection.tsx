import React from 'react';

const JourneySection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 py-10 px-5 md:px-20">
      {/* Our Journey Card */}
      <aside className="bg-gradient-to-b from-blue-900 to-blue-600 text-white p-6 rounded-lg shadow-lg md:mr-10 mb-6 md:mb-0 w-full md:w-1/4">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-sm leading-relaxed">
          Since our founding in 2021, Arctic Wolf has risen to the rank of market leader in security operations, adding thousands of employees and customers, as well as a trophy case of awards along the way.
        </p>
      </aside>

      {/* Timeline Section */}
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
        {/* Timeline Item */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-2">
            <span className="h-1 w-12 bg-gray-700"></span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Aug 2021</h3>
          <p className="text-sm">IDC Names Arctic Wolf a Leader</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
        </div>

        {/* Repeat Timeline Items */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-2">
            <span className="h-1 w-12 bg-gray-700"></span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Feb 2022</h3>
          <p className="text-sm">Arctic Wolf Incident Launch</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-2">
            <span className="h-1 w-12 bg-gray-700"></span>
          </div>
          <h3 className="text-lg font-semibold mb-1">Oct 2022</h3>
          <p className="text-sm">Arctic Wolf Expands to ANZ</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-2">
            <span className="h-1 w-12 bg-gray-700"></span>
          </div>
          <h3 className="text-lg font-semibold mb-1">May 2023</h3>
          <p className="text-sm">Arctic Wolf on CNBC Disruptor 50</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
        </div>
      </section>
    </div>
  );
};

export default JourneySection;
