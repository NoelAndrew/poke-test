/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
const Navbar = () => {
    return (
    <>
    <div className="head">
        <div className="menu">
        <Image
            alt="logo"
            src="/icons/Menu.svg"
            width={100}
            height={40}
            />
        </div>
        <div className="logo">
            <Image
                alt="logo"
                src="/logo.png"
                width={100}
                height={40}
            />
        </div>
        <div className="avatar">
            <Image 
                alt="ash"
                src="/avatar.png"
                width={120}
                height={120}
            />
        </div>
        <div className="username">
            <h1>ASHK123</h1>
            <p className="level">Level 1</p>
        </div>
        <p className="description">&quot;Work hard on your tests&quot;</p>
        <div role="button" className="logout">
            <img
                src="/icons/Logout.svg"
                alt="logut"
            />
            <div className="logout-text">
                LOG OUT
            </div>
        </div>
    </div>
    </>
    )
};

export default Navbar;
