// components/Hero.js
import { Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="display-4 text-center">Turn Unused Software Into Cash</h1>
      <p className="lead text-center">Sell your unused software licenses in 3 simple steps.</p>
      <div className="text-center">
        <Button variant="primary" size="lg">Sell My Licenses</Button>
      </div>
    </motion.section>
  )
}
   