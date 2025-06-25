import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const faqData = [
    {
        question: "How do I enroll in a course?",
        answer: "Go to the course details page and click the 'Enroll' button. You must be logged in to enroll in any course."
    },
    {
        question: "Is payment required?",
        answer: "Currently, there is no payment system in this website. All courses are free to enroll."
    },
    {
        question: "How many courses can I enroll in at once?",
        answer: "You can enroll in up to 3 courses at the same time. If you’ve already enrolled in 3, you won’t be able to enroll in a new one until you remove an existing one."
    },
    {
        question: "Can I remove my enrollment after enrolling?",
        answer: "Yes, you can go to the 'My Enrolled Courses' page and remove your enrollment from any course."
    },
    {
        question: "How many users can enroll in the same course?",
        answer: "Each course has a limited number of seats. Once all seats are taken, no more users will be able to enroll in that course."
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <HelmetProvider>
                <title>FAQ | Academix Hub</title>
            </HelmetProvider>
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Frequently Asked Questions (FAQs)</h1>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-sm"
                    >
                        <button
                            onClick={() => toggleIndex(index)}
                            className="w-full flex justify-between items-center px-4 py-3 hover:text-black hover:bg-gray-200 focus:outline-none"
                        >
                            <span className="text-lg font-medium">{faq.question}</span>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-4 py-3   border-t">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
