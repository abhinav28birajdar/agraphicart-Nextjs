'use client'

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactInfo: ContactInfo = {
    address: "123 Main St, Anytown, USA 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@example.com"
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted", { name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          Get in Touch
        </h2>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 lg:p-8 bg-indigo-700 text-white">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span>{contactInfo.address}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" />
                  <span>{contactInfo.phone}</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <span>{contactInfo.email}</span>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Our Location</h4>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img src="/placeholder.svg?height=300&width=400" alt="Map" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full flex justify-center items-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

