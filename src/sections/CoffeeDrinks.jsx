import React from 'react'
import { drinks } from '../assets/assets'
import Coffee from '../components/coffee/Coffee'
import {motion} from 'framer-motion'

const CoffeeDrinks = () => {

    let drinksVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .2
        }
    }
}

    let h1Var={
        hidden: {
            opacity:0,
            y:30
        },

        visible : {
            opacity:1,
            y:0,
            transition : {
                duration : .4,
                type: 'spring',
                stiffness : 200,
            }
        }
}

    let pVar={
        hidden: {
            opacity:0,
            scale: 0,
        },

        visible : {
            opacity:1,
            scale: 1,
            transition : {
                duration : 1.4,
                type: 'spring',
                stiffness : 200,
            }
        }
}

    return (
        <section className="coffeeDrinks">
            <motion.div className="title">
                <motion.h1 variants={h1Var} initial='hidden' whileInView="visible">fresh and <span>tasty coffee</span></motion.h1>
                <motion.p variants={pVar} initial='hidden' whileInView="visible">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eos reprehenderit eum ducimus, distinctio cum eaque totam
                    voluptatem ex dolorem fuga.
                </motion.p>
            </motion.div>
            <motion.div className="drinks" variants={drinksVariants} initial="hidden" whileInView='visible'>
                {
                    drinks.map((e,i)=> <Coffee kind={e} key={i}/>)
                }
            </motion.div>
        </section>
    )
}

export default CoffeeDrinks
