import React from 'react';
import Stats from '../global/Stats';

const Home = () => {
    return (
        <>
            <div
                className="hero h-[500px] mb-30 text-white rounded-xl"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-linear-to-r from-gray-900 to-gray-900 opacity-65 rounded-xl"></div>
                <div className="isolate w-5xl">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident eius, exercitationem laboriosam, atque optio error cumque esse non est suscipit doloribus soluta ea. Quis veniam eos fugit itaque pariatur?
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>



            <ul className="list bg-base-100 rounded-box shadow-md mb-20">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                    <div>
                        <div>Dio Lupa</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
                    </p>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
                    <div>
                        <div>Ellie Beilish</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.
                    </p>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

                <li className="list-row">
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
                    <div>
                        <div>Sabrino Gardener</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                    </div>
                    <p className="list-col-wrap text-xs">
                        "Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.
                    </p>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li>

            </ul>



            <Stats></Stats>
        </>
    );
};

export default Home;