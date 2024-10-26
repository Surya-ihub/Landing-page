import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us-div bg-zinc-900 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-white text-3xl font-bold text-center mb-4">Get in Touch</h2>
      <p className="text-white text-lg text-center mb-10">We’d love to hear from you—reach out today!</p>
      <div className="main-contact-div bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="contact-input"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="contact-input"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Suggestion</label>
            <textarea
              placeholder="Your suggestion"
              className="contact-textarea"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="send-button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
