import React from 'react'
import './style.css'
import { motion } from 'framer-motion'

const Coffee = ({kind}) => {

    let cardVarients={
        hidden : {
            opacity:0,
            y:25
        },

        visible : {
            opacity: 1,
            y: 0,
            transition :{
                duration : 1,
                type: 'spring',
                stiffness : 200,
            }
        }
    }

    return (
        <motion.section className='coffee' variants={cardVarients}>
            <motion.div className="image">
                <motion.img src={kind.image} alt="drink photo" loading='lazy' whileHover={{scale: 1.1}}/>
            </motion.div>
            <h2 className='name'>{kind.name}</h2>
            <p className="description">{kind.description}</p>
        </motion.section>
    )
}

export default Coffee
