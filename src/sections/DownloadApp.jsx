import React from 'react'
import { images } from '../assets/assets'
import { motion } from 'framer-motion'

const DownloadApp = () => {


    let downloadVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: .3,
            }
        }
    }

    let h1Var={
        hidden: {
            y: -30,
            opacity:0,
        },

        visible : {
            y:0,
            opacity:1,
            transition : {
                duration : .4,
                type: 'spring',
                stiffness : 200,
            }
        }
    }

    let pVar={
        hidden: {
            y: 40,
            opacity:0,
        },

        visible : {
            y: 0,
            opacity:1,
            transition : {
                duration : .4,
                type: 'spring',
                stiffness : 200,
            }
        }
    }

    let appStoreVarients={
        hidden : {
            x:'-100%',
            opacity :0
        },
        visible : {
            x:0,
            opacity :1,
            transition : {
                delay: .5,
                duration : .5,
            }
        }
    }

    let googlePlayVarients={
        hidden : {
            x:'100%',
            opacity :0
        },
        visible : {
            x:0,
            opacity :1,
            transition : {
                delay: .5,
                duration : .5,
            }
        }
    }


    return (
        <section className='downloadApp'>
            <motion.div variants={downloadVariants} initial='hidden' whileInView='visible'>
                <motion.h1 variants={h1Var}>Download the app</motion.h1>
                <motion.p variants={pVar}>
                    Lorem ipsum dolor sit amet consedolor
                    sit amet consectetur adipisicing elit.
                    Officiis
                </motion.p>
                <motion.div className="links">
                    <motion.a variants={appStoreVarients} initial='hidden' whileInView='visible' href="./app_store"><img src={images.app_store} alt="photo" loading='lazy'/></motion.a>
                    <motion.a variants={googlePlayVarients} initial='hidden' whileInView='visible' href="./google_play"><img src={images.play_store} alt="photo" loading='lazy'/></motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default DownloadApp


