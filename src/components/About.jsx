import React from 'react';

const About = () => {
    return (
        <>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content grid grid-cols-3 gap-10">
                       <div className='col-span-1 lg:order-1'>
                       <img
                            src="https://i.ibb.co.com/FLWDxLP5/pexels-alex-andrews-271121-821653.jpg"
                            className="w-full rounded-lg shadow-2xl" />
                       </div>
                        <div className='col-span-2 '>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat labore voluptatibus commodi fugit aliquam id a, expedita nisi quaerat quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores dolorem necessitatibus inventore. Sapiente consequatur tempora aspernatur illo suscipit culpa esse modi, dolore ratione similique blanditiis totam itaque. Tempora, numquam.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;