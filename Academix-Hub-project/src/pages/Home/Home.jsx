import React from 'react';
import Hero from '../../components/hero/Hero';
import { useLoaderData } from 'react-router';
import HomeCourseComponent from '../../components/HomeCoureseComponent/HomeCoureseComponent';
import Testimonials from '../../components/Testimonials/Testimonials';
import StayUpdateSection from '../../components/stayUpdateSection/stayUpdateSection';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PopularCourses from '../../components/PopularCourses/PopularCourses';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">
            <HelmetProvider>
                <title>Home Page</title>
            </HelmetProvider>
            <Hero></Hero>
            <HomeCourseComponent courses={courses}></HomeCourseComponent>
            <PopularCourses></PopularCourses>
            <Testimonials></Testimonials>
            <StayUpdateSection></StayUpdateSection>
        </div>
    );
};

export default Home;