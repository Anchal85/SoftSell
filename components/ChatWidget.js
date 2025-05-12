import { useState } from 'react'
import { FaComments, FaUserCircle } from 'react-icons/fa'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about selling your license.' }
  ])

  const sendMessage = () => {
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'Thanks! We\'ll get back to you.' }])
    setInput('')
  }

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      {open && (
        <div className="bg-light p-3 border rounded shadow-lg" style={{ width: 300 }}>
          <div style={{ maxHeight: 200, overflowY: 'auto' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                {msg.sender !== 'user' && <FaUserCircle className="me-1 mt-1" />}
                <small className={`p-2 rounded ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                  {msg.text}
                </small>
              </div>
            ))}
          </div>
          <input
            className="form-control mt-2"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
          />
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="btn btn-primary mt-2 rounded-circle">
        <FaComments />
      </button>
    </div>
  )
}
