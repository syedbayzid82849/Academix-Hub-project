import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('https://academix-hub-server.vercel.app/popular-courses')
            .then(res => {
                setCourses(res.data);
            })
            .catch(err => {
                console.error('Failed to fetch popular courses:', err);
            });
    }, []);

    const filteredCourses = courses.slice(0, 3);


    return (
        <section className="mt-16 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">🔥 Popular Courses</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredCourses?.map(course => (
                    <div key={course._id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-40 object-cover rounded"
                        />
                        <div className="mt-3">
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <p className="text-gray-600 text-sm mb-1">Instructor: {course.instructorName}</p>
                            <p className="text-gray-500 text-sm mb-2">Duration: {course.duration}</p>
                            <p className="text-gray-700 text-sm mb-2">
                                {course.description?.slice(0, 80)}...
                            </p>
                            <p className="text-sm font-medium text-blue-600">🔥 Enrolled: {course.enrollCount}</p>

                            <NavLink to={`/courseDetails/${course._id}`}>
                                <button className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                                    View Details
                                </button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCourses;
