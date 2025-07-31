import React from 'react'
import Header from '../components/header/Header'
import { images } from '../assets/assets'
import { motion } from 'framer-motion'

const Hero = () => {

    let hero={
        hidden : {},
        visible : {
            transition :{
                staggerChildren: 1
            }
        }
    }

    let container={
        hidden : {},
        visible : {
            transition :{
                staggerChildren: .2
            }
        }
    }

    let imageParent={
        hidden : {},
        visible : {
            transition :{
                staggerChildren: .2
            }
        }
    }

    let image= {
        hidden : {
            scale:0
        },
        visible : {
            scale:1,
            transition :{
                type:'spring',
                stiffness: 150,
                duration: .5
            }
        }
    }

    let round= {
        hidden : {
            opacity:0,
            y:100
        },
        visible : {
            opacity:1,
            y:0,
            transition :{
                type:'spring',
                stiffness: 150,
                duration: .5
            }
        }
    }

    let h1varient= {
        hidden : {
            opacity:0,
            y:-100
        },
        visible : {
            opacity:1,
            y:0,
            transition :{
                delay: .3,
                type:'spring',
                stiffness: 150,
                duration: .5
            }
        }
    }


    let hugeH1= {
        hidden : {
            opacity:0,
            x:'-100%'
        },
        visible : {
            opacity:1,
            x:0,
            transition :{
                type:'spring',
                duration: 1
            }
        }
    }

    let textObjVar= {
        hidden : {
            opacity:0,
            y:50
        },
        visible : {
            opacity:1,
            y:0,
            transition :{
                type:'spring',
                duration: 1
            }
        }
    }


    return (
        <motion.section className='hero' variants={hero} initial="hidden" whileInView={'visible'}>
            <Header/>
            <motion.div className="container" variants={container}>
                {/* part 1 */}
                <motion.div className="part1 part">
                    <motion.h1 variants={h1varient} initial="hidden" whileInView={'visible'}>Blvck Tumbler</motion.h1>
                    <motion.div className="text" variants={textObjVar}>
                        <h2>Black Lifestyle Lovers,</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Delectus aspernatur, cumque eos neque dolorem architecto deserunt
                            quis voluptatibus in quisquam quia ducimus
                        </p>
                    </motion.div>
                </motion.div>
                {/* part 2 */}
                <motion.div className="image part2" variants={imageParent} initial='hidden' whileInView='visible' >
                    <motion.div className="round" variants={round}></motion.div>
                    <motion.img src={images.hero} alt="hero section photo" loading='lazy' variants={image}/>
                </motion.div>
                {/* part 3 */}
                <div className="part3 part">
                    <motion.h1 variants={hugeH1}>Blvck Tumbler</motion.h1>
                    <motion.div className="text" variants={textObjVar}>
                        <h2>Black Lifestyle Lovers,</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Delectus aspernatur,Delectus aspernatur, Delectus aspernatur,Delectus
                            aspernatur,
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Hero
