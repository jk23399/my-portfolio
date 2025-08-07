import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_juyu4n4',   
      'template_scgs51k',   
      form.current,
      'zlQUIqdVjWfbzgKAN'     
    ).then(
      () => {
        setStatus('SUCCESS');
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        console.error('Email send error:', error);
        setStatus('FAILED');
      }
    );
  };

  return (
    <section id="Contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user_name"
            className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="user_email"
            className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            rows="6"
            className="w-full border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Send
          </button>
        </form>
        {status === 'SUCCESS' && (
          <p className="mt-4 text-green-500">Your message has been sent!</p>
        )}
        {status === 'FAILED' && (
          <p className="mt-4 text-red-500">Oops! Something went wrong.</p>
        )}
      </div>
    </section>
  );
}
