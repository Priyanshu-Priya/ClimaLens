import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Ensures the component takes at least the full height of the screen */}
      <div className="flex-grow max-w-3xl mx-auto px-4 py-8"> {/* Allows the div to grow and take available space */}
        <h1 className="text-3xl font-bold text-center text-green-900 mb-6">About Us</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700">Welcome to ClimaLens</h2>
          <p className="mt-2 text-gray-700">
            At ClimaLens, we believe that understanding climate data is essential for making informed decisions that impact our planet's future. Our mission is to provide accessible, engaging, and insightful visualizations of climate data, empowering individuals, organizations, and policymakers to take meaningful action against climate change.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700">Our Vision</h2>
          <p className="mt-2 text-gray-700">
            We envision a world where everyone has access to reliable and comprehensive climate information. By transforming complex data into clear visual narratives, we aim to inspire collective action and foster a deeper understanding of the environmental challenges we face.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700">Our Team</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Priyanshu Priya</strong> - Founder & Developer<br />
              Passionate about AI and machine learning, Priyanshu leads our technical efforts to build an innovative platform that harnesses the power of data for climate awareness.
            </li>
            <li>
              <strong>[Team Member Name]</strong> - Data Analyst<br />
              An expert in climate science, [Team Member Name] ensures that our data is accurate, up-to-date, and relevant to our audience's needs.
            </li>
            <li>
              <strong>[Team Member Name]</strong> - Designer<br />
              With a keen eye for aesthetics, [Team Member Name] focuses on creating user-friendly interfaces and engaging visual content that brings climate data to life.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Interactive Data Visualizations: Explore a variety of charts, graphs, and maps that illustrate key climate trends and patterns.</li>
            <li>Educational Resources: Access articles, research, and tools to deepen your understanding of climate science and its implications.</li>
            <li>Community Engagement: Join discussions and initiatives aimed at raising awareness and promoting sustainability within your community.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700">Join Us</h2>
          <p className="mt-2 text-gray-700">
            At ClimaLens, we are not just about data; we are about community. We encourage you to engage with us, share your thoughts, and participate in our ongoing mission to create a sustainable future. Follow us on social media, subscribe to our newsletter, or contribute to our projects.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700">Contact Us</h2>
          <p className="mt-2 text-gray-700">
            If you have any questions, suggestions, or would like to collaborate, please feel free to reach out through our <Link to="/contact-us" className="text-indigo-600 hover:underline">Contact Us</Link> page. We look forward to connecting with you!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
