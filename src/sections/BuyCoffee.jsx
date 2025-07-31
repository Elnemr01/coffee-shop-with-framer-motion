import React from 'react'
import { images } from '../assets/assets'
import { motion } from 'framer-motion'

const BuyCoffee = () => {

    let formVarients= {
        hidden : {},

        visible : {
            transition : {
                staggerChildren : .2,
            }
        }
    }

    let formChildrenVarients= {
        hidden : {
            opacity: 0,
            y: 30,
        },

        visible : {
            opacity :1,
            y: 0,
            transition : {
                duration :.2,
                type:'spring',
                stiffness:200,
            }
        }
    }



    return (
        <section className='coffeeOrder'>
            <motion.form onSubmit={(e)=> e.preventDefault()} variants={formVarients} initial='hidden' whileInView='visible'>
                <motion.h1 variants={formChildrenVarients}>Buy our products from anywhere</motion.h1>
                <motion.div variants={formChildrenVarients} className="first">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                </motion.div>
                <motion.div variants={formChildrenVarients} className="second">
                    <input type="text" placeholder='counryt' />
                    <input type="text" placeholder='zipcode' />
                </motion.div>
                <motion.button variants={formChildrenVarients}>order now</motion.button>
            </motion.form>
            <div className="image">
                <motion.img src={images.map} alt="world map" loading='lazy' 
                initial={{scale:0}} whileInView={{scale: 1}} transition={{duration: .5}} />
            </div>
        </section>
    )
}

export default BuyCoffee
