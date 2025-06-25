import React from 'react';

const Testimonials = () => {
    const testimonials =
        [
            {
                "id": 1,
                "name": "Abdur Rahman",
                "image": "https://i.ibb.co/xqw2m2tM/portrait-of-indian-college-boy-holding-books-photo.jpg",
                "rating": 5,
                "feedback": "This platform helped me enhance my career path greatly!"
            },
            {
                "id": 2,
                "name": "Tanvir Hasan",
                "image": "https://i.ibb.co/TxZPFZ3H/young-chinese-male-student-at-desk-in-library-study-environment-with-books-and-laptop-education-conc.jpg",
                "rating": 5,
                "feedback": "The courses are well structured and easy to follow. Highly recommended!"
            },
            {
                "id": 3,
                "name": "Naheyan khan",
                "image": "https://i.ibb.co/mCrnWxHm/ai-generated-youthful-student-boy-on-white-background-photo.jpg",
                "rating": 4,
                "feedback": "I learned a lot from the courses. The instructors are very helpful."
            }

        ];

    return (
        <section className="my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map(({ id, name, image, rating, feedback }) => (
                    <div key={id} className="bg-white p-6 rounded-2xl shadow-lg">
                        <img src={image} alt="Student image" className="w-16  rounded-2xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-center text-black">{name}</h3>
                        <p className="text-yellow-400 text-center my-2">
                            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                        </p>
                        <p className="text-gray-600 text-sm text-center">{feedback}</p>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Testimonials;