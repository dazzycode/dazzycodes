import React, { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaBars,
  FaTimes,
} from "react-icons/fa";
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
 const navLinks = [
    { name: "About", href: "#about" },
    { name: "My Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredItems = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  const filteredProjects = activeTab === "All" ? projects : projects.filter(item => item.category === activeTab);

  return (
    <div className="font-marcellus bg-black text-yellow-400 scroll-smooth">
      {/* Header */}
      <header className="fixed w-full bg-black shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide">
            BZ.
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-yellow-400 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition-all duration-300 text-sm lg:text-base"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-gray-900 text-yellow-400 flex flex-col items-center space-y-4 py-4 overflow-hidden"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm sm:text-base font-medium hover:text-yellow-300 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-yellow-400 text-center px-4"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          FREELANCE<span className="text-white"> SOCIAL MEDIA </span><span className="text-yellow-400">  MANAGER</span> 
        </h1>
        <p className="text-sm text-white sm:text-base md:text-xl mb-6 max-w-2xl">
          Unlocking the Power of Social Media. Elevate Your Online Presence with
          Creative Social Media Management.
        </p>
        <a
          href="mailto:bellozainab@example.com"
          className="bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:scale-105"
        >
          Contact Me
        </a>
      </section>


      {/* About Me Section */}
      <section id="about" className="py-20 text-justify  px-3 md:px-16 bg-black text-yellow-400">
        <h2 className="md:text-4xl text-xl font-extrabold mb-6 text-center">About Me</h2>
        <div className="nd:max-w-4xl w-full px-2 mx-auto space-y-6 text-sm md:text-base">
          <p className="md:text-sm text-xs">Hi, I’m Bello Zainab, a Social Media Manager and Web Developer with a passion for helping brands grow, connect, and convert online.</p>
          <p className="md:text-sm text-xs">I specialize in creating high-performing social media strategies that combine data-driven content, trend analysis, and SEO-backed storytelling, turning casual scrollers into loyal customers.</p>
          <p className="md:text-sm text-xs">With a background in web development, I understand how social algorithms, search optimization, and engagement signals all work together to boost visibility and build an authentic digital presence.</p>

          <h3 className="md:text-2xl text-sm font-bold mt-4">What I Do</h3>
          <ul className="list-disc md:text-sm text-xs list-inside space-y-2">
            <li>Content Strategy & Planning — Building monthly content calendars aligned with business goals and audience behavior.</li>
            <li>Content Creation & Editing — Producing engaging short-form videos (Reels, TikToks) and interactive posts designed for retention.</li>
            <li>Trend & Algorithm Optimization — Using trending sounds, timing, and storytelling structures to maximize reach and virality.</li>
            <li>Community Growth & Engagement — Creating authentic relationships through comments, DMs, polls, and audience interaction.</li>
            <li>Performance Analytics — Tracking metrics (reach, engagement, CTR, conversion) and refining strategy for continuous growth.</li>
            <li>SEO-Integrated Strategy — Using keywords, hashtags, and metadata optimized for search engines and social algorithms.</li>
            <li>Website + Funnel Alignment — Ensuring the brand’s website, landing pages, and social presence all drive toward the same conversion goals.</li>
          </ul>

          <h3 className="md:text-2xl text-sm font-bold mt-4">Tools & Platforms I Work With</h3>
          <p className="md:text-sm text-xs">Social Media Management: Meta Business Suite, TikTok Creative Center, Metricool, Later</p>
          <p className="md:text-sm text-xs">Design & Video Editing: Canva, CapCut, VN, Adobe Express</p>
          <p className="md:text-sm text-xs">Analytics & SEO: Google Analytics, SEMrush, TikTok & Instagram Insights, Yoast SEO</p>
          <p className="md:text-sm text-xs" >Web Development: WordPress, Shopify, HTML/CSS/JS, SEO optimization</p>
        </div>
      </section>

    


      {/* Work / Portfolio Section */}
     {/* Skills Section (fully responsive with scrollable filters on mobile) */}
<section id="skills" className="py-20 bg-black">
  <h2 className="md:text-4xl text-xl font-bold text-center text-yellow-400 mb-12">
    My Skills
  </h2>

  {/* Filter Tabs */}
  <div className="max-w-6xl mx-auto px-4">
    <div
      className="flex gap-3 md:gap-4 mb-8
                 overflow-x-auto md:overflow-visible
                 whitespace-nowrap md:whitespace-normal
                 snap-x snap-mandatory md:snap-none
                 -mx-4 px-4 md:px-0 justify-start md:justify-center"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`flex-shrink-0 snap-start md:snap-none
                      px-3 md:px-4 py-2 rounded-full border
                      text-xs sm:text-sm md:text-base
                      transition
                      ${
                        activeFilter === filter
                          ? "bg-yellow-400 text-black"
                          : "bg-black text-yellow-400 border-yellow-400"
                      }
                      hover:bg-yellow-300 hover:text-black`}
        >
          {filter}
        </button>
      ))}
    </div>

    {/* Skill Cards Grid */}
    <div className="grid sm:grid-cols-2 px-8 lg:grid-cols-3 gap-6 md:gap-8 w-full md:max-w-6xl mx-auto">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="shadow-lg rounded-xl overflow-hidden bg-gray-900 hover:shadow-yellow-400/10 transition-shadow duration-300"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-56 md:h-64 object-cover"
          />
          <div className="p-3 md:p-4 text-left">
            <h3 className="font-semibold text-sm md:text-lg text-yellow-400">
              {item.title}
            </h3>
            <p className="text-yellow-300 text-xs md:text-sm">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    {/* Skills Section */}
<section
  id="skills"
  className="bg-black py-16 md:py-24 px-5 px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative"
>
  {/* Left Text Section */}
  <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 mb-3 md:mb-5">
      MY SKILLS
    </h2>
    <p className="text-yellow-300 text-sm sm:text-base md:text-lg mb-6 md:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
      Explore my skills in content strategy, community engagement, and performance analysis as a junior Social Media Manager.
    </p>
    <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-lg shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105">
      Let’s work together!
    </button>
  </div>

  {/* Accordion Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5">
    {skills.map((skill, index) => (
      <div
        key={index}
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
          openIndex === index
            ? "bg-gray-800 shadow-lg p-5 sm:p-6"
            : "bg-gray-900 p-4 sm:p-5"
        }`}
      >
        <div className="flex justify-between items-center w-full text-left">
          <h3
            className={`font-semibold text-xs sm:text-sm md:text-base ${
              openIndex === index
                ? "text-yellow-400"
                : "text-yellow-300 tracking-wide"
            }`}
          >
            {skill.title}
          </h3>
          <span className="text-yellow-300 text-sm sm:text-base">
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </span>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openIndex === index ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-yellow-300 text-xs sm:text-sm md:text-base leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Portfolio Tabs Section */}
      <section id="work" className="bg-black py-20 px-6 md:px-6 md:px-16 text-center">
        <h2 className="md:text-4xl text-xl font-extrabold text-yellow-400 mb-2">MY WORK</h2>
        <p className="text-yellow-300 text-xs md:text-sm mb-8">I showcase various projects from my different areas.</p>

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
      <h2 className="md:text-4xl text-xl font-extrabold text-gray-900 mb-2">MY OFFERS</h2>
      <p className="text-gray-600  text-xs text-sm mb-12">
        I provide my services with different offers.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center">
          <FaCalendarAlt className="text-3xl text-gray-800 mb-4" />
          <h3 className="font-bold md:text-lg text-sm mb-3">SCHEDULE</h3>
          <p className="text-gray-600 md:text-sm text-xs leading-relaxed">
            Plan and schedule your social media content strategically to reach
            your audience at the right time.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center">
          <FaUsers className="text-3xl text-gray-800 mb-4" />
          <h3 className="font-bold text-lg mb-3">ENGAGE</h3>
          <p className="text-gray-600 md:text-sm text-xs leading-relaxed">
            Build and grow meaningful connections with your audience through
            engagement and creative interaction.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center">
          <FaChartLine className="text-3xl text-gray-800 mb-4" />
          <h3 className="font-bold text-lg mb-3">ANALYSE</h3>
          <p className="text-gray-600 md:text-sm text-xs leading-relaxed">
            Track performance metrics to measure growth and optimize future
            strategies based on valuable insights.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-black text-white md:px-6 px-2 py-2 rounded-lg hover:bg-gray-800 transition">
        Let’s work together !
      </button>

      {/* Contact Bar */}
      <div id="contact" className="mt-20 bg-black text-white rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-sm md:text-lg">
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
