import { motion } from 'motion/react'
import './style.scss'
import Typewriter from 'typewriter-effect'

const LoadingComponent = ({ id }: { id: string }) => {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2, //1.2
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className="loading-component" id={id}>
      <motion.div
        animate="pulse"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="container"
      >
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
      </motion.div>
      <Typewriter
        options={{
          strings: ['VuManhTien'],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 100
        }}
      />
    </div>
  )
}

export default LoadingComponent
