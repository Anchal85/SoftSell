// components/ContactForm.js
import { Form, Button } from 'react-bootstrap'
import { FaUser, FaEnvelope, FaBuilding, FaTags, FaCommentDots } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center mb-4">Get in Touch</h2>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label><FaUser className="me-2" /> Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><FaEnvelope className="me-2" /> Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><FaBuilding className="me-2" /> Company</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><FaTags className="me-2" /> License Type</Form.Label>
          <Form.Select required>
            <option>Enterprise</option>
            <option>Individual</option>
            <option>Academic</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><FaCommentDots className="me-2" /> Message</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </motion.section>
  )
}
