// components/HowItWorks.js
import { Row, Col } from 'react-bootstrap'
import { FaUpload, FaMoneyCheckAlt, FaWallet } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    { icon: <FaUpload size={40} />, label: 'Upload License' },
    { icon: <FaMoneyCheckAlt size={40} />, label: 'Get Valuation' },
    { icon: <FaWallet size={40} />, label: 'Get Paid' }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center mb-4">How It Works</h2>
      <Row className="text-center">
        {steps.map((step, i) => (
          <Col md key={i} className="mb-3">
            {step.icon}
            <h5 className="mt-2">{step.label}</h5>
          </Col>
        ))}
      </Row>
    </motion.section>
  )
}
