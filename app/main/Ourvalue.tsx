// src/components/CoreValuesSection.tsx
import React from 'react';

const coreValues = [
    { id: 1, title: 'Customer Success', description: 'Your success is our success. We are devoted to providing exceptional support and resources to help you achieve your hiring goals.' },
    { id: 2, title: 'Innovation', description: 'We are committed to continuously improving our technology to meet the evolving needs of our users and stay ahead of industry trends..' },
    { id: 3, title: 'Simplicity', description: 'We believe that great technology should be intuitive and easy to use. Our solutions are designed to streamline your hiring process without unnecessary complexity.' },
    { id: 4, title: 'Transparency', description: 'We value open and honest communication, both within our team and with our users. We’re dedicated to building trust through clarity and integrity.' },
    { id: 5, title: 'Inclusivity', description: 'We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases and ensuring fairness, we empower every candidate to present their unique strengths and capabilities.' },
    { id: 6, title: 'Security', description: 'We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard your information and ensure privacy, giving you peace of mind.' },
];

const CoreValuesSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center text-center p-10 bg-gray-50">
            <h2 className="text-5xl font-bold mb-6"> Our Values</h2>
            <h2 className="text-3xl font-bold mb-6">
            At Everything Talent, our six core values drive everything we do.</h2>
            
            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreValues.map((value) => (
                    <div key={value.id} className="bg-white p-6 rounded-lg shadow-lg">
                        {/* Circle Number */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xl font-bold mx-auto mb-4">
                            {String(value.id).padStart(2, '0')}
                        </div>
                        {/* Title and Description */}
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreValuesSection;
