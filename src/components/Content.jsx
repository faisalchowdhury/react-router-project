import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';
const Content = () => {

  
  const data = useLoaderData();

  

    return (
        <>
          <section className='grid grid-cols-4 gap-5 my-5'>
      <div className='left-area col-span-1 text-2xl border border-sky-200 p-5 '>
        <h4>Shopping </h4>
        <h4>Article</h4>
        <h4>Affiliate</h4>
        <h4>Coupon</h4>
      </div>
      <div className='right-area col-span-3 border border-sky-200 p-5 '>
        <div className='grid grid-cols-2 gap-5'>
        {
          data.map(item => <Post key={item.id} item={item}></Post> )
        }
        </div>
      </div>
     </section>
        </>
    );
};

export default Content;