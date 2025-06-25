import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const HomeCourseComponent = () => {
    const { getAllCourses, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    // Fetching courses data
    useEffect(() => {
        getAllCourses()
            .then(res => setCourses(res))
            .catch(error => console.error(error));
    }, []);

    const filteredCourses = courses.slice(0, 6);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <section className="mt-10">
            <div className="px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Latest Courses</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(({ title, image, _id, createdAt }) => (
                        <motion.div
                            key={_id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    Added: {new Date(createdAt).toLocaleDateString()}
                                </p>
                                <NavLink
                                    to={`/courseDetails/${_id}`}
                                    className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    View Details
                                </NavLink>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Courses Button */}
                <div className="text-center mt-10">
                    <NavLink to="/courses">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition"
                        >
                            View All Courses
                        </motion.button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default HomeCourseComponent;
