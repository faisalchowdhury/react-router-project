import { Logs, X } from 'lucide-react';
import React, { useState } from 'react';


const menuList = [
    {
        id : 1,
        name : 'Home',
        url : '/'
    },
    {
        id : 2,
        name : 'About',
        url : '/about'
    },
    {
        id : 3,
        name : 'Blog',
        url : '/blog'
    },
    {
        id : 4,
        name : 'Contact',
        url : '/contact'
    },

]


const Header = () => {
   
    const [toggle , setToggle] = useState(false);


    
    return (
        <>
        <div className="navbar bg-base-100 border-b border-slate-200">
  <div className="navbar-start space-x-3">

    <div className='relative' onClick={() => setToggle(!toggle)}>
    {
        toggle == false ? <Logs className='md:hidden'></Logs> :    <X className='md:hidden'></X>
    }
    <ul className={`${toggle == false ? 'hidden' : 'block'} , text-white bg-purple-600  absolute`}>
    {
        menuList.map((list) => <li className='px-10 py-1 hover:bg-purple-700' key={list.id}><a href={list.url}>{list.name}</a></li>)
    }
    </ul>
    </div>
 
    <a className="text-xl font-semibold">Bugnitian Blog</a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      
      {
        menuList.map((list) => <li key={list.id}><a href={list.url}>{list.name}</a></li>)
      }

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn border-none bg-purple-700 text-white">Get In Touch</a>
  </div>
</div>
        </>
    );
};

export default Header;