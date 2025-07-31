import React, { useState } from 'react'
import './header.css'
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { delay, motion } from 'framer-motion'

const Header = () => {

    let [showMenue,setShow]=useState(false);
    
    let headerVarient={
        hidden : {
            y:-50
        },
        visible : {
            y:0,
            transition : {
                type: 'spring',
                stiffness:200,
                duration: .3,
                delay: .3
            }
        }
    }


    return (
        <motion.header initial='hidden' whileInView='visible' variants={headerVarient}>
            <div className={`container ${showMenue ? '' : 'overflow-hidden' }`}>
                <div className="logo">
                    <span>coders</span> coffee.
                </div>
                <div className='links'>
                    <FaBars onClick={()=> setShow((old)=> !old)}/>
                    <ul className={`${showMenue ? 'right-[0]' :'right-[-120px]' }`}>
                        <li></li>
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><FaTwitter/></a></li>
                        <li><a href="#"><FaInstagram/></a></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
