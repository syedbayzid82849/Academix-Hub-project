import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const AllCourse = () => {
    const { getAllCourses, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    console.log(getAllCourses, loading);

    // Fetching courses data
    useEffect(() => {
        getAllCourses()
            .then(res => setCourses(res))
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }


    // If no courses are available
    if (courses.length === 0) {
        return (
            <section className="my-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
                <p className="text-center text-gray-600">No courses available at the moment.</p>
            </section>
        );
    }

    return (
        <section className="my-16 px-4 max-w-6xl mx-auto">
            <HelmetProvider>
                <title>All Courses | Academix Hub</title>
            </HelmetProvider>
            <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(({ _id, title, image, createdAt }) => (
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
        </section>

    );
};

export default AllCourse;