import React from 'react'
import toast from 'react-hot-toast';

const Contect = () => {
  const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const phone = e.target.phone.value.trim();
   if (!name || !email || !phone) {
    toast.error("Name, Email & Phone required");
    return;
  }
  if (!/^\d{10}$/.test(phone)) {
    toast.error("Enter valid 10 digit phone number");
    return;
  }
  toast.success("Form submitted successfully");
  e.target.reset();
};

  return (
    <div>
      <div className='py-20 px-6 lg:px-32' id="Contact">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto my-12 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-4xl font-semi-bold mb-6 text-center">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Name</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Email</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" placeholder="Your Email" />     
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Phone No.</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" maxLength={10} type="tel" id="phone" name="phone" placeholder="Your Phone No." />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Message</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-2xl mt-6 text-xl font-medium hover:bg-black transition duration-300" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contect
