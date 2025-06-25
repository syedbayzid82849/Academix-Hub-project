import React, { useState } from 'react';
import Swal from 'sweetalert2';

const StayUpdateSection = () => {
    const [email, setEmail] = useState('')

    const handleSubscrib = () => {
        Swal.fire({
            icon: 'success',
            title: 'Your Subscribe Updated!',
            text: 'Your Subscribe has been successfully updated.',
        });
        setEmail('');

    }
    return (
        <section className='my-16 px-4 border-2 rounded-3xl mt-28'>
            <div className=" p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-2 text-white">Stay Updated!</h2>
                <p className="mb-4 text-gray-600">Subscribe to our newsletter to get latest course updates.</p>
                <div className="grid justify-center grid-cols-1 mx-auto md:grid-cols-2 gap-2">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="px-10 lg:px16 py-2 rounded-l-lg border" />
                    <button onClick={() => handleSubscrib()} className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
                </div>
            </div>

        </section>
    );
};

export default StayUpdateSection;