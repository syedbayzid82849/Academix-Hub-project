import React from 'react';
import { motion } from 'framer-motion';
import animationData from '../../assets/add a course animation.json';
import Lottie from 'lottie-react';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';



const EditCourse = () => {
    const course = useLoaderData();
    const { _id, title, totalSeats, instructorName, instructorEmail, image, duration, description, createdAt } = course;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCourse = Object.fromEntries(formData.entries());

        // update Course
        axios.patch(`https://academix-hub-server.vercel.app/all-course/${_id}`, newCourse)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Course Updated!',
                        text: 'Your course has been successfully updated.',
                    });
                    navigate('/manage-courses');
                }
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'Something went wrong while updating the course.',
                });
            })

    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto border rounded-lg p-8 shadow-md mt-10"
        >
            <HelmetProvider>
                <title>{title} Edit Page | Academix Hub</title>
            </HelmetProvider>
            <h2 className="text-2xl font-bold text-center mb-6">Update Your Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <label className="block">Name: </label>
                <input name="instructorName" type='text' defaultValue={instructorName} className="w-full p-3 border rounded-lg" />

                <label className="block">Email: </label>
                <input name="instructorEmail" type='email' defaultValue={instructorEmail} className="w-full p-3 border rounded-lg" />

                <div className="w-32 mx-auto">
                    <Lottie animationData={animationData} loop={true} />
                </div>

                <label className="block">Course Name: </label>
                <input defaultValue={title} name="title" type='text' className="w-full p-3 border rounded-lg" required />

                <label className="block">Short Description: </label>
                <textarea
                    defaultValue={description}
                    name="description"
                    rows="4"
                    className="border rounded w-full py-2 px-3"
                    required
                ></textarea>

                <label className="block">Released Date: </label>
                <input defaultValue={createdAt?.slice(0, 10)} type="date" name="createdAt" className="w-full p-3 border rounded-lg" required />

                <label className="block">Image URL: </label>
                <input defaultValue={image} name="image" type='url' className="w-full p-3 border rounded-lg" required />

                <label className="block">Total Seats:</label>
                <input defaultValue={totalSeats} name="totalSeats" type='number' className="w-full p-3 border rounded-lg" required />

                <label className="block">Duration: </label>
                <input defaultValue={duration} name="duration" type='text' className="w-full p-3 border rounded-lg" required />

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">Update Course</button>
            </form>
        </motion.div>

    );
};

export default EditCourse;