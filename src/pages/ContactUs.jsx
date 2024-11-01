import React from 'react'

const ContactUs = () => {
  return (
<div className="bg-green-900 flex justify-center py-8 h-screen ">
    <form className="space-y-4 w-full max-w-lg px-4 md:px-0 mt-8">
        <div className="text-white text-2xl font-semibold mb-6">
            <h1>Contact Us</h1>
        </div>
        
        {/* Name Field */}
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input 
                type="text" 
                id="name" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
            <input 
                type="email" 
                id="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-describedby="emailHelp" placeholder="example@domain.com"
            />
            <p id="emailHelp" className="mt-1 text-xs text-gray-200">We'll never share your email with anyone else.</p>
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
            <textarea 
                id="message" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Write your message here..."
            ></textarea>
        </div>

        <div className="flex items-center">
            <input 
                type="checkbox" 
                id="check" 
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="check" className="ml-2 block text-sm text-white">Check me out</label>
        </div>

        <button 
            type="submit" 
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Submit
        </button>
    </form>
</div>

  )
}

export default ContactUs
