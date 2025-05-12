// components/WhyChooseUs.js
import { Row, Col } from 'react-bootstrap'
import { FaBolt, FaShieldAlt, FaThumbsUp, FaUsers } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const items = [
    { icon: <FaBolt />, text: 'Instant Quotes' },
    { icon: <FaShieldAlt />, text: 'Secure Transactions' },
    { icon: <FaUsers />, text: 'Trusted by 500+ companies' },
    { icon: <FaThumbsUp />, text: 'High Payouts' }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center mb-4">Why Choose Us</h2>
      <Row className="text-center">
        {items.map((item, i) => (
          <Col md={3} key={i} className="mb-3">
            <div>{item.icon}</div>
            <p>{item.text}</p>
          </Col>
        ))}
      </Row>
    </motion.section>
  )
}
