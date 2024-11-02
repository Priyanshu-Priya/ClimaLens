// src/Components/BlogPage.jsx
import React from 'react';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Understanding Climate Change: A Comprehensive Guide',
      excerpt: 'Explore the fundamentals of climate change, its causes, and effects on our planet.',
      link: 'https://www.nationalgeographic.com/environment/article/climate-change-overview',
    },
    {
      id: 2,
      title: 'The Importance of Renewable Energy in Combating Climate Change',
      excerpt: 'Learn why renewable energy sources are essential for a sustainable future.',
      link: 'https://www.irena.org/publications/2020/Jun/Renewable-Power-Generation-Costs-in-2019',
    },
    {
      id: 3,
      title: '10 Ways to Reduce Your Carbon Footprint',
      excerpt: 'Practical tips to lower your carbon emissions and lead a more sustainable lifestyle.',
      link: 'https://www.epa.gov/recycle/reducing-your-carbon-footprint',
    },
    {
      id: 4,
      title: 'The Effects of Plastic Pollution on Marine Life',
      excerpt: 'An in-depth analysis of how plastic waste impacts oceans and marine ecosystems.',
      link: 'https://www.oceanconservancy.org/trash-free-seas/plastics-in-the-ocean/',
    },
    {
      id: 5,
      title: 'Urban Farming: A Sustainable Solution for Food Security',
      excerpt: 'Discover how urban farming can enhance food security and promote sustainability in cities.',
      link: 'https://www.un.org/en/observances/urban-farming-day',
    },
    {
      id: 6,
      title: 'The Role of Forests in Climate Change Mitigation',
      excerpt: 'Understanding how forests help combat climate change and the importance of conservation.',
      link: 'https://www.worldwildlife.org/pages/forests',
    },
    {
      id: 7,
      title: 'Climate Change and Public Health: A Growing Concern',
      excerpt: 'Exploring the direct impacts of climate change on human health and safety.',
      link: 'https://www.cdc.gov/climateandhealth/effects/default.htm',
    },
    {
      id: 8,
      title: 'Global Warming Effects: What You Need to Know',
      excerpt: 'Discover how global warming is impacting ecosystems and communities around the world.',
      link: 'https://www.nationalgeographic.com/environment/article/global-warming-effects',
    },
    {
      id: 9,
      title: 'Climate Change: Vital Signs of the Planet',
      excerpt: 'Annual report on key indicators of climate change and their implications.',
      link: 'https://climate.nasa.gov/vital-signs/',
    },
    {
      id: 10,
      title: 'The Greenhouse Effect Explained',
      excerpt: 'A simple overview of how the greenhouse effect works and its role in climate change.',
      link: 'https://www.nationalgeographic.com/environment/article/greenhouse-effect',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
              <p className="mt-2 text-gray-600">{article.excerpt}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
