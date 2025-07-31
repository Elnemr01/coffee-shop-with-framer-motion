import React from 'react'
import { BsFillTelephoneFill, BsTelegram } from 'react-icons/bs'
import { FaFacebook, FaMapLocationDot } from 'react-icons/fa6'
import { ImInstagram } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import { images } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {



    let parent= {
        hidden :{},
        visible : {
            transition : {
                staggerChildren: .3
            }
        }
    }

    let children= {
        hidden :{
            y:-40,
            opacity:0,
        },
        visible : {
            y:0,
            opacity:1,
            transition : {
                duration:.3,
                type: 'spring',
                stiffness: 200
            }
        }
    }



    return (
        <footer>
            <div className="container">
                <motion.div className="parts" variants={parent} initial='hidden' whileInView='visible'>
                    {/* --------------- part 1 --------------- */}
                    <motion.div className="part1 part" variants={children}>
                        <h1>coffee market</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eum ea ratione quidem libero,
                            praesentium ab atque? Quidem maxime, numquam dolores
                        </p>
                        <div className="telephone">
                            <BsFillTelephoneFill />
                            <span>+0201204662807</span>
                        </div>
                        <div className="location">
                            <FaMapLocationDot />
                            <span>samanoud, gharbia</span>
                        </div>
                    </motion.div>
                    {/* --------------- part 2 --------------- */}
                    <motion.div className="part2 part" variants={children}>
                        <h1>quick links</h1>
                        <ul>
                            <li>home</li>
                            <li>about</li>
                            <li>contact us</li>
                            <li>private policy</li>
                        </ul>
                    </motion.div>
                    {/* --------------- part 3 --------------- */}
                    <motion.div className="part3 part" variants={children}>
                        <h1>follw us</h1>
                        <ul>
                            <li><FaFacebook/></li>
                            <li><ImInstagram/></li>
                            <li><BsTelegram/></li>
                            <li><SiGmail/></li>
                        </ul>
                        <div className="payment">
                            <h2>payment methods</h2>
                            <img src={images.visa} alt="payment cards" loading='lazy'/>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="copyRight">
                    <motion.p initial={{x: '100%'}} whileInView={{x:0}} transition={{duration:.5,type:'spring',stiffness:200}}>
                        Copyright © 2024 Company Name. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
