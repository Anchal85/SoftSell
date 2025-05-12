// components/Testimonials.js
import { Card, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const reviews = [
    {
      name: 'Jane Doe',
      role: 'IT Manager',
      company: 'TechCorp',
      text: '“SoftSell helped us recover value from unused licenses quickly. The entire process was smooth, transparent, and incredibly fast. Their platform made it easy to upload our license details, and we received a fair quote within minutes. Highly recommended for any business looking to optimize software costs.”'
    },
    {
      name: 'John Smith',
      role: 'Procurement Head',
      company: 'SoftWorks',
      text: '“Our experience with SoftSell was nothing short of excellent. The platform is intuitive, the team is responsive, and the entire transaction felt secure and efficient. We were able to liquidate unused software assets with minimal effort. Highly recommended for companies seeking reliable resale solutions.”'
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Row>
        {reviews.map((review, i) => (
          <Col md={6} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Text className="fst-italic">{review.text}</Card.Text>
                  <Card.Subtitle className="text-muted mt-3">
                    – {review.name}, {review.role} at {review.company}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.section>
  )
}
