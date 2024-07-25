import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
      <p className="text-gray-700 leading-relaxed mb-8 text-center">
        Feel free to reach out to me via email at <a href="jmuirbusiness@gmail.com" className="text-blue-500 hover:underline">jmuirbusiness@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/jack-muir-462689281/" className="text-blue-500 hover:underline">LinkedIn</a>.
      </p>
      <form action="https://formspree.io/f/xoqgjklr" method="POST" className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows={5}></textarea>
        </div>
        <button aria-label='send' type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
      </form>
    </section>
  );
}
