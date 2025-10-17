import React, { useState } from "react";
import { FaPlus, FaMinus, FaCalendarAlt, FaUsers, FaChartLine } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Sociial = () => {
  const projects = [
    { id: 1, category: "Instagram", image: "/brand1.jpg", title: " #01", tags: ["Clothing", "Branding"] },
    { id: 2, category: "Fashion", image: "/brand2.jpg", title: " #02", tags: ["Skin care", "Branding"] },
    { id: 3, category: "Fashion", image: "/brand3.jpg", title: " #03", tags: ["skin care", "Design"] },
    { id: 4, category: "Instagram", image: "/brand4.jpg", title: " #04", tags: ["bags", "Branding"] },
    { id: 5, category: "Design", image: "/social2.jpg", title: " #05", tags: ["Branding", "Action"] },
        { id: 5, category: "Design", image: "/social6.jpg", title: " #06", tags: ["Design", "Branding"] },

  ];

  const skills = [
    { title: "CONTENT STRATEGY AND PLANNING", description: "I specialize in crafting content strategies aligned with company objectives. From planning to scheduling, I optimize our approach across diverse social media platforms, staying attuned to market trends and using advanced planning tools for effective execution." },
    { title: "ENGAGEMENT AND INTERACTION", description: "I manage community engagement by creating interactive campaigns, responding to audience feedback, and fostering strong relationships with followers across various platforms." },
    { title: "ANALYSIS AND REPORTING", description: "I analyze performance metrics to identify growth opportunities, prepare detailed reports, and use data insights to refine social media strategies for maximum impact." },
  ];

  const portfolioItems = [
    { id: 1, title: "01", category: "Management", img: "/social6.jpg" },
    { id: 2, title: "02", category: "Design", img: "/canva.jpg" },
    { id: 3, title: "03", category: "Analytics ", img: "/meta.jpg"},
    { id: 4, title: "04", category: "Management", img: "/yoast.jpg" },
    { id: 5, title: "05", category: "Design", img: "/capcut.png" },
    { id: 6, title: "06", category: "Analytics ", img: "/sem.png"},
        { id: 7, title: "07", category: "Management", img: "/tiktok.png" },

  ];



  const filters = ["All", "Management", "Design", "Analytics"];
  const tabs = ["All", "Instagram", "Fashion", "Design"];

  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredItems = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  const filteredProjects = activeTab === "All" ? projects : projects.filter(item => item.category === activeTab);

  return (
    <div className="font-sans bg-black text-yellow-400 scroll-smooth">

      {/* Header */}
      <header className="fixed w-full bg-black shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-400">Bello Zainab</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="#work" className="hover:text-yellow-300 transition">My Work</a></li>
            <li><a href="#skills" className="hover:text-yellow-300 transition">Skills</a></li>
            <li><a href="#offers" className="hover:text-yellow-300 transition">Offers</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-yellow-400"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <h1 className="md:text-5xl text-xl font-bold mb-4 text-center">FREELANCE SOCIAL MEDIA MANAGER</h1>
        <p className="md:text-xl text-sm mb-6 text-center max-w-2xl">
          Unlocking the Power of Social Media. Elevate Your Online Presence with Creative Social Media Management.
        </p>
       <a
  href="mailto:bellozainab@example.com"
  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
>
  Contact Me
</a>

      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 md:px-16 bg-gray-900 text-yellow-400">
        <h2 className="text-4xl font-extrabold mb-6 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base">
          <p>Hi, I’m Bello Zainab, a Social Media Manager and Web Developer with a passion for helping brands grow, connect, and convert online.</p>
          <p>I specialize in creating high-performing social media strategies that combine data-driven content, trend analysis, and SEO-backed storytelling, turning casual scrollers into loyal customers.</p>
          <p>With a background in web development, I understand how social algorithms, search optimization, and engagement signals all work together to boost visibility and build an authentic digital presence.</p>

          <h3 className="text-2xl font-bold mt-4">What I Do</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Content Strategy & Planning — Building monthly content calendars aligned with business goals and audience behavior.</li>
            <li>Content Creation & Editing — Producing engaging short-form videos (Reels, TikToks) and interactive posts designed for retention.</li>
            <li>Trend & Algorithm Optimization — Using trending sounds, timing, and storytelling structures to maximize reach and virality.</li>
            <li>Community Growth & Engagement — Creating authentic relationships through comments, DMs, polls, and audience interaction.</li>
            <li>Performance Analytics — Tracking metrics (reach, engagement, CTR, conversion) and refining strategy for continuous growth.</li>
            <li>SEO-Integrated Strategy — Using keywords, hashtags, and metadata optimized for search engines and social algorithms.</li>
            <li>Website + Funnel Alignment — Ensuring the brand’s website, landing pages, and social presence all drive toward the same conversion goals.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-4">Tools & Platforms I Work With</h3>
          <p>Social Media Management: Meta Business Suite, TikTok Creative Center, Metricool, Later</p>
          <p>Design & Video Editing: Canva, CapCut, VN, Adobe Express</p>
          <p>Analytics & SEO: Google Analytics, SEMrush, TikTok & Instagram Insights, Yoast SEO</p>
          <p>Web Development: WordPress, Shopify, HTML/CSS/JS, SEO optimization</p>
        </div>
      </section>

    


      {/* Work / Portfolio Section */}
      <section id="skills" className="py-20 bg-black">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">My Skills</h2>
        <div className="flex justify-center gap-4 mb-8">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full border ${activeFilter === filter ? 'bg-yellow-400 text-black' : 'bg-black text-yellow-400 border-yellow-400'} hover:bg-yellow-300 hover:text-black transition`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map(item => (
            <div key={item.id} className="shadow-lg rounded-lg overflow-hidden bg-gray-900">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-yellow-400">{item.title}</h3>
                <p className="text-yellow-300 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative">
        <div className="md:w-1/2 relative z-10">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">MY SKILLS</h2>
          <p className="text-yellow-300 mb-8 leading-relaxed">
            Explore my skills in content strategy, community engagement, and
            performance analysis as a junior Social Media Manager.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition">
            Let’s work together!
          </button>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 cursor-pointer ${openIndex === index ? "bg-gray-800 shadow-lg p-6" : "bg-gray-900 p-4"}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center w-full text-left">
                <h3 className={`font-semibold ${openIndex === index ? "text-yellow-400" : "text-yellow-300 tracking-wide"}`}>
                  {skill.title}
                </h3>
                <span className="text-yellow-300">{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </div>
              {openIndex === index && (
                <p className="text-yellow-300 mt-3 text-sm leading-relaxed">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Tabs Section */}
      <section id="work" className="bg-black py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-2">MY WORK</h2>
        <p className="text-yellow-300 mb-8">I showcase various projects from my different areas.</p>

        <div className="relative flex justify-center gap-6 mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm font-medium transition-all ${activeTab === tab ? "text-yellow-400" : "text-yellow-300"}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-[2px] bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center"
          >
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-yellow-400 mb-2">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-700 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    


    <section id="offers" className="bg-[#f9f3f2] py-20 px-6 md:px-16 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 mb-2">MY OFFERS</h2>
      <p className="text-gray-600 mb-12">
        I provide my services with different offers.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center">
          <FaCalendarAlt className="text-3xl text-gray-800 mb-4" />
          <h3 className="font-bold text-lg mb-3">SCHEDULE</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Plan and schedule your social media content strategically to reach
            your audience at the right time.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center">
          <FaUsers className="text-3xl text-gray-800 mb-4" />
          <h3 className="font-bold text-lg mb-3">ENGAGE</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Build and grow meaningful connections with your audience through
            engagement and creative interaction.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center">
          <FaChartLine className="text-3xl text-gray-800 mb-4" />
          <h3 className="font-bold text-lg mb-3">ANALYSE</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Track performance metrics to measure growth and optimize future
            strategies based on valuable insights.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
        Let’s work together !
      </button>

      {/* Contact Bar */}
      <div id="contact" className="mt-20 bg-black text-white rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-lg">
          INTERESTED ? CONTACT ME !
        </p>
        <div className="flex items-center bg-white rounded-full px-3 py-1 w-full md:w-auto">
          <input
            type="email"
            placeholder="bellozainab244@gmail.com"
            className="w-full md:w-72 p-2 rounded-full text-gray-700 outline-none"
          />
          <a   href="mailto:bellozainab@example.com">
  <button className="bg-black text-white px-5 py-2 rounded-full ml-2 hover:bg-gray-800 transition">
            →
          </button></a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-300 pt-10 text-left text-gray-600 grid md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Bello Zainab</h3>
          <p className="text-sm leading-relaxed">
             A Social Media Manager and Web Developer with a passion for helping brands grow, connect, and convert online.

          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">SITEMAP</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">CONTACT ME</h3>
          <ul className="space-y-2 text-sm">
            <li>09118733266</li>
            <li>bellozainab244@gmail.com</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </footer>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 Zainab. All Rights Reserved.
      </div>
    </section>
  
    </div>
  );
};

export default Sociial;
