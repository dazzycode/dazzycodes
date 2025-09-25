import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaBars, FaTimes, FaArrowLeft, FaArrowRight, FaArrowUp, FaLink } from "react-icons/fa";


// ✅ Inline Thin Arrow SVG
const ArrowIcon = ({ className = "" }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 36 12"
  strokeWidth={2}
  stroke="currentColor"
  className={`w-8 h-4 ${className}`}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M2 6h28m0 0l-5-5m5 5l-5 5"
  />
</svg>

);
 

  

export default function Portfolio() {
 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; 
const testimonials = [
  {
    name: "Clara Oni",
    role: "CEO, Lawrose",
    image: "https://i.pravatar.cc/100?img=1",
    text: "The E-commerce platform you built for Lawrose has completely transformed our business. Sales have doubled and the sleek design makes our brand stand out. I’m beyond impressed with the professionalism and creativity!",
    rating: 5,
  },
  {
    name: "Khalil Balogun",
    role: "CTO, CTEC Team",
    image: "/khalil.jpg",
  text: "You delivered beyond expectations. The custom registration page works flawlessly, allowing our clients to register and pay with ease. Truly world-class work!",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Founder, GreenMarket",
    image: "https://i.pravatar.cc/100?img=7",
    text: "From start to finish, the process was seamless. The custom web solution built for our marketplace runs smoothly and has received fantastic feedback from our users. Excellent communication and support all the way.",
    rating: 5,
  },
];


 const services = [
  {
    title: "Tournament Dashboard",
    items:
      "The Tournament Dashboard is an all-in-one web platform that combines eSports tournaments, digital wallet transactions, and social interaction into a seamless experience.",
    image: "/dashboardpesport.jpg",
    link: "https://pesports.gg/",
    keyFeatures: [
      "Join and play online tournaments",
      "Integrated digital wallet for sending/receiving money",
      "Social media features (posts, likes, comments)",
      "Player stats and leaderboards",
    ],
  },
  {
    title: "CTEC Events Manager",
    items:
      "CTEC Events – browse upcoming events, register instantly, and complete payments directly through zest payment system.",
    image: "/pesport.jpg",
    link: "https://pesports.gg/ctec",
    keyFeatures: [
      "Event registration with email confirmation",
      "Secure payment via Zest integration",
      "View event details, dates, and venues",
      "Seamless user onboarding process",
    ],
  },
  {
    title: "Lawrose E-commerce Website",
    items:
      "The Lawrose eCommerce Website is a modern online shopping platform designed to provide customers with a seamless, intuitive, and secure shopping experience.",
    image: "/dashboard.jpg",
    link: "https://lawrose-frontend.vercel.app/continue",
    keyFeatures: [
      "Responsive and user-friendly shopping experience",
      "Secure checkout process",
      "Product search and filtering",
      "Order tracking and customer accounts",
    ],
  },
  {
    title: "Lawrose Functional Dashboard",
    items:
      "The Lawrose Functional Dashboard is a sleek and intuitive interface designed to showcase how store owners can manage their eCommerce platform. It focuses on modern UI/UX design and demonstrates the core functions of an admin system in a visually engaging way.",
    image: "/lawrose.jpg",
    link: "https://lawrose-dashboard.vercel.app/",
    keyFeatures: [
      "Inventory and product management",
      "Order and payment tracking",
      "Analytics and sales reports",
      "Modern UI/UX for easy navigation",
    ],
  },
 {
  title: "Fruitieveggie Urban Farm",
  items: "A sustainable urban farm portfolio website showcasing eco-friendly farming and fresh produce.",
  image: "/value4.jpg",
  link: "/services/farming",
  keyFeatures: [
    "Showcasing sustainable urban farming practices",
    "Highlighting fresh, locally grown produce",
    "Educating communities on eco-friendly agriculture",
    "Promoting farm-to-table lifestyle and healthy living",
  ],
}

];



  const pricing = [
  {
    title: "Portfolio Website",
    price: "₦150,000",
    highlight: false,
    features: [
      "Up to 5 custom pages",
      "Responsive & mobile-friendly design",
      "Basic contact form",
      "SEO-friendly structure",
      "1 month free support",
    ],
  },
  {
    title: "E-Commerce Website",
    price: "₦400,000",
    highlight: true,
    features: [
      "Full online store setup",
      "Product catalog & categories",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "3 months free support",
    ],
  },
  {
    title: "Business / Custom Website",
    price: "Starting at ₦500,000",
    highlight: false,
    features: [
      "Tailored to your brand needs",
      "Advanced functionality (blogs, booking, etc.)",
      "Custom integrations & APIs",
      "Premium SEO setup",
      "Ongoing maintenance option",
    ],
  },
];


const blogs = [
  {
    title: "Top Tech Trends of 2025: AI-powered Everything",
    date: "September, 2025",
    category: "Tech Trends",
    comments: 0,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    link: "https://www.forbes.com/councils/forbestechcouncil/2025/04/15/five-transformative-ai-technology-trends-shaping-2025/?utm_source=chatgpt.com"
  },
  {
    title: "Deloitte’s Tech Trends 2025",
    date: "September, 2025",
    category: "Business Tech",
    comments: 0,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends.html?utm_source=chatgpt.com"
  }
];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  return (
    <div className="bg-black text-white  font-sans">
      {/* ✅ Hero Section */}
     
    <div className="relative min-h-[40vh] md:min-h-[70vh] flex flex-col justify-start overflow-hidden">
  {/* Navbar */}
  <nav className="w-full flex justify-between items-center px-6 md:px-20 py-6 bg-black/70 backdrop-blur-sm fixed top-0 z-50">
    <div className="flex items-center gap-2">
  {/* Logo image */}
  <img 
    src="/logo.jpg"   
    alt="" 
    className="w-8 h-8 object-contain"
  />

  {/* Brand text */}
  <div className="text-2xl italic font-bold text-yellow-400">
    Dazzy<span className="text-white">Codes</span>
  </div>
</div>


    {/* Desktop Links */}
    <ul className="hidden md:flex space-x-8 text-white font-medium">
<li><a href="#about" className="hover:text-yellow-400">About</a></li>
<li><a href="#project" className="hover:text-yellow-400">Projects</a></li>
<li><a href="#skill" className="hover:text-yellow-400">Skills</a></li>
<li><a href="#pricing" className="hover:text-yellow-400">Pricing Plans</a></li>
<li><a href="#testimonial" className="hover:text-yellow-400">Testimonial</a></li>
<li><a href="#blog" className="hover:text-yellow-400">Blog</a></li>
<li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>

    </ul>

    {/* Mobile Hamburger */}
    <div className="md:hidden text-white cursor-pointer z-50" onClick={toggleMobileMenu}>
      {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </div>
  </nav>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center space-y-8 z-40 text-white text-xl">
     <a href="#about" onClick={toggleMobileMenu} className="hover:text-yellow-400">About</a>
<a href="#projects" onClick={toggleMobileMenu} className="hover:text-yellow-400">Projects</a>
<a href="#skills" onClick={toggleMobileMenu} className="hover:text-yellow-400">Skills</a>
<a href="#pricing" onClick={toggleMobileMenu} className="hover:text-yellow-400">Pricing Plan</a>
<a href="#testimonial" onClick={toggleMobileMenu} className="hover:text-yellow-400">Testimonial</a>
<a href="#blog" onClick={toggleMobileMenu} className="hover:text-yellow-400">Blog</a>
<a href="#contact" onClick={toggleMobileMenu} className="hover:text-yellow-400">Contact</a>

    </div>
  )}

  {/* Background swirl */}
  <img
    src="/bg.jpg"
    alt="bg swirl"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

  {/* Hero Content */}
  <div className="relative z-10 flex flex-rowmt-40 md:mt-0  flex-wrap items-center justify-between mt-20 px-6 md:px-20 pt-20">
    {/* Left Text */}
    <div className="w-full md:w-1/2 text-left flex flex-col items-start">
      <p className="text-lg">Hi there! 👋 I'm DazzyCodes</p>
      <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
        FRONTEND <span className="italic mx-10 md:mx-20 text-yellow-400">DEVELOPER</span>
      </h1>
      <p className="mt-6 max-w-lg text-xs md:text-sm text-gray-300">
        A visionary frontend developer who transforms ideas into seamless, interactive digital experiences that captivate and inspire users.
      </p>

      {/* Buttons */}
      <div className="flex flex-row flex-wrap items-center space-x-4 space-y-4 mt-8 w-full md:w-auto">
        <Link to="/projects" className="w-full md:w-auto">
          <button className="flex items-center justify-center space-x-2 bg-yellow-400 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] text-black px-3 md:px-6 md:py-3 py-2 rounded-full font-semibold  md:w-auto">
            <span className="text-xs md:text-sm">View My Works</span>
            <ArrowIcon className="text-black" />
          </button>
        </Link>
        <div className="flex items-center justify-center space-x-2 text-sm">
          <ArrowIcon className="text-yellow-400 hidden md:block " />
          <p>
            <a
              href="/Bello Zainab cv.pdf"
              download
              className="text-white underline hover:text-yellow-300"
            >
              Download My CV
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* Right: Profile + Badge */}
    <div className="w-full md:w-1/2 relative flex justify-center mt-10 mb-10 md:mb-0  md:mt-0">
      {/* Floating Badge */}
      <div className="absolute -top-10 right-0 md:right-5 bg-black border-2 border-yellow-400 shadow-[0_0_15px_8px_rgba(255,255,0,0.6)] rounded-full px-3 py-3 md:px-6 md:py-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400">2+</h2>
        <p className="text-xs text-gray-300">Years of Experience</p>
      </div>

      <img
        src="/hero.jpg"
        alt="Profile"
        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>

  {/* Vertical Social Icons */}
  <div className="absolute right-4 md:right-6 top-1/4 md:top-1/2 flex flex-col items-center space-y-4 transform -translate-y-1/2 z-50">
  <ArrowIcon className="text-yellow-400 rotate-90 mb-2" />

  <a
    href="https://twitter.com/Playful_techie"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
  >
    <FaTwitter className="text-white hover:text-yellow-400" />
  </a>

  <a
    href="https://www.linkedin.com/in/bello-zainab-243350271"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
  >
    <FaLinkedin className="text-white hover:text-yellow-400" />
  </a>

  <a
    href="https://github.com/dazzycode"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
  >
    <FaGithub className="text-white hover:text-yellow-400" />
  </a>
</div>

</div>

  

      {/* ✅ About Section with Line + Circle Button */}
      <section id="about" className="relative px-6 md:px-20 py-10 text-center border-t border-gray-700">
        <div className="absolute left-1/4  justify-start top-0 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-yellow-400 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] text-black font-semibold px-6 py-3 rounded-full shadow-lg">
            About Me
          </button>
        </div>
      <p className="max-w-6xl mx-auto text-gray-300 text-justify  mt-10 md:text-sm text-xs leading-relaxed">
  I am a dedicated Frontend Developer with a deep passion for creating seamless, visually captivating, and highly interactive web experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks such as React, I transform design concepts into fully functional, responsive, and intuitive interfaces. My work is driven by a keen eye for detail and a commitment to user-centric design, ensuring that every project I build is not only visually engaging but also optimized for performance and accessibility.  

  Over the years, I have collaborated on a variety of projects ranging from startups to corporate platforms, crafting solutions that balance creativity with functionality. I thrive in environments where design meets code, translating ideas into digital experiences that resonate with users and meet business goals. Beyond coding, I am constantly exploring the latest trends and technologies in frontend development, from animation libraries and design systems to progressive web apps and performance optimization techniques.  

  I am passionate about problem-solving and continuously refining my craft, striving to deliver products that are both innovative and practical. My goal is to build digital experiences that tell a story, enhance user engagement, and leave a lasting impression, combining technical expertise with creative vision in every line of code I write.  
</p>

        {/* small details row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm text-gray-400">
          <div>
            <p className="font-semibold text-white">Born in</p>
            <p className="text-xs md:text-sm">Lagos, Nigeria</p>
          </div>
          <div>
            <p className="font-semibold text-white">Experience</p>
            <p className="text-xs md:text-sm">3 Years</p>
          </div>
                   <div>
            <p className="font-semibold text-white">Language</p>
            <p className="text-xs md:text-sm"> English</p>
          </div>
        </div>
      </section>

      {/* ✅ Experience Section with Big 10+ */}
      <section className="px-6 md:px-20 md:py-8 py-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Big years */}
        <div>
          <h2 className="text-7xl font-bold text-yellow-400">2+</h2>
          <p className="mt-2 bg-yellow-400 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] text-black px-4 py-1 inline-block rounded-full text-xs md:text-sm font-semibold">
Years of Expertise in Intuitive, Engaging Interfaces          </p>
        </div>

        {/* Right: Timeline */}
        <ul className="space-y-6">
          <li>
            <h3 className="font-semibold">Petabyte Esport – Nigeria</h3>
            <p className="md:text-sm text-xs text-gray-400">Frontend Developer| 2024 – Present</p>
          </li>
          <li>
            <h3 className="font-semibold">CidretX – Nigeria</h3>
            <p className="md:text-sm text-xs text-gray-400">UI/UX Designer | 2023 – 2024</p>
          </li>
          <li>
            <h3 className="font-semibold">BPO Possible – Nigeria</h3>
            <p className="md:text-sm text-xs text-gray-400">Intern Developer | 2023 – 2023</p>
          </li>
         
        </ul>
      </section>
  
    <div className="bg-black text-white px-6 md:px-20 py-5 md:py-10">
      {/* ✅ Services Section */}
   
    <section id="project" className="bg-black text-white px-6 md:px-20  py-5 md:py-10">
      <h2 className="text-4xl md:text-5xl font-extrabold  text-center mb-16">
        PROJECTS <span className="text-yellow-400 text-lg align-top">[5]</span>
      </h2>

      <div className="grid grid-cols-1  gap-12">
    {services.map((service, idx) => (
  <div
    key={idx}
    className="flex flex-col md:flex-row items-center  md:items-start pb-6"
  >
    {/* Image */}
    <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
      <img
        src={service.image}
        alt={service.title}
        className="md:w-54 md:h-48 w-72 h-54 object-cover rounded-lg shadow-md
                   transform transition duration-300 hover:scale-105 hover:shadow-xl"
      />
    </div>

    {/* Text + Arrow */}
    <div className="flex-1 flex justify-between items-start text-xs md:text-sm  w-full md:pl-6">
      <div>
        <h3 className="font-semibold text-lg">{service.title}</h3>

        {/* ✅ Normal text for items */}
        <div className="md:text-sm text-xs text-gray-400 mt-2 space-y-1">
          {Array.isArray(service.items) ? (
            service.items.map((item, i) => (
              <p key={i} className="mb-1">{item}</p>
            ))
          ) : (
            <p>{service.items}</p>
          )}
        </div>

        {/* ✅ Key Features listed format */}
        {Array.isArray(service.keyFeatures) && service.keyFeatures.length > 0 && (
          <div className="mt-3">
            <h4 className="md:text-sm text-xs  font-semibold text-white">Key Features:</h4>
            <ul className="list-disc list-inside  text-xs mdtext-sm text-gray-400 mt-1 space-y-1">
              {service.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <a
        href={service.link}
        className="p-2 rounded-full border border-gray-600 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] 
                   hover:bg-yellow-400 hover:text-black transition flex items-center justify-center"
      >
        <FaLink />
      </a>
    </div>
  </div>
))}

      </div>
    </section>
  </div>

  
    <section id="skill" className="bg-black text-white px-6 md:px-20 ">
       
      {/* Trusted by section */}
      <div className="mt-5 text-center">
        <p className="text-gray-400 text-md">
      <span className="text-white font-semibold">Technical</span>{" "}
         Skills
        </p>

       <div className="flex flex-wrap justify-center gap-10 mt-8">
  <div className="flex flex-col items-center">
    <img src="/react.jpg" alt="React" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">React</p>
  </div>
<div className="flex flex-col items-center">
    <img src="/html.jpg" alt="React" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">HTML</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/restful.jpg" alt="RESTful API" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">RESTful API</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/responsive.jpg" alt="Responsive Design" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">Responsive Design</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/typescript.jpg" alt="TypeScript" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">TypeScript</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/vite.jpg" alt="Vite" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">Vite</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/vscode.jpg" alt="VS Code" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">VS Code</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/js.jpg" alt="JavaScript" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">JavaScript</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/github.jpg" alt="GitHub" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">GitHub</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/css.jpg" alt="CSS" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">CSS</p>
  </div>

  <div className="flex flex-col items-center">
    <img src="/bug.jpg" alt="Debugging" className="h-12" />
    <p className="mt-2 text-sm text-gray-300">Debugging</p>
  </div>
</div>

      </div>
    </section>


    <div id="pricing" className="bg-black text-white px-6 md:px-20 py-5">
      
 {/* ✅ Pricing Section */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mt-28 mb-16">
       Tailored<span className="italic text-yellow-400"> Plans for Your Project</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricing.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-xl border ${
              plan.highlight ? "bg-yellow-400 text-black" : "bg-black shadow-[0_0_10px_5px_rgba(255,255,0,0.6)]  border-gray-700"
            }`}
          >
            <h3 className="md:text-xl text-xs font-semibold">{plan.title}</h3>
            <p className="md:text-2xl text-sm mb-3 font-bold mt-4">{plan.price}</p>

            <button
              className={`w-full py-2 rounded-full font-semibold flex items-center justify-center space-x-2 ${
                plan.highlight
                  ? "bg-black text-yellow-400 md:text-sm text-xs hover:bg-gray-900"
                  : "bg-white text-black md:text-sm text-xs hover:bg-yellow-400 hover:text-black"
              }`}
            >
              <span>Start My Project Now</span>
              <ArrowIcon />
            </button>

            <ul className="mt-6 text-sm space-y-2">
              {plan.features.map((feat, i) => (
                <li key={i}>• {feat}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

  
    <div className="bg-black text-white font-sans">
      {/* Testimonials */}
      <section id="testimonial"  className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-8">( TESTIMONIALS )</h2>
        <p className="text-center text-xl md:text-3xl font-bold max-w-3xl mx-auto mb-12">
          Our happy customers give us impactful and positive feedback on our
          services customer support & etc.
        </p>

        <div className="flex justify-center items-center gap-6 mb-10">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white text-black text-yellow-400  shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] hover:bg-gray-700 rounded-full"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-black text-white   shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] hover:bg-gray-700 rounded-full"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="max-w-xl mx-auto bg-yellow-400  shadow-[0_0_10px_5px_rgba(255,255,0,0.6)]  p-6 rounded-xl shadow-lg transition-all duration-500">
          <div className="flex mb-4">
            {Array(testimonials[current].rating)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-black text-xl">★</span>
              ))}
          </div>
          <p className="text-black mb-6">{testimonials[current].text}</p>
          <div className="flex items-center gap-4">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-sm md:text-lg text-black">{testimonials[current].name}</h4>
              <p className="md:text-sm text-xs text-black">
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-6 py-16 max-w-6xl mx-auto">
       <h2 className="text-xl font-semibold mb-6">( TECH & TRENDS )</h2>
<p className="text-xl md:text-3xl font-bold max-w-3xl mb-12">
  Stay ahead with insights on modern web technologies, design trends, and the tools that power our projects.
</p>


        <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((b, i) => (
  <div key={i} className="bg-yellow-400 rounded-xl overflow-hidden shadow-lg">
    <img src={b.image} alt={b.title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <p className="text-sm text-black mb-2">
        {b.date} · {b.category} · {b.comments} Comments
      </p>
      <h3 className="text-lg text-black font-semibold mb-4">{b.title}</h3>
      <a
        href={b.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black font-semibold flex items-center gap-1"
      >
        Read More  <FaLink size={16} />
      </a>
    </div>
  </div>
))}

        </div>

        <div className="text-center mt-10">
  <button className="bg-yellow-500 text-black px-6 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
  View All Blog
  <a
    href="https://www.forbes.com/tech/" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <FaLink size={18} />
  </a>
</button>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-black text-center">
        {/* LETS TALK */}
        <div className="flex justify-center items-center text-5xl md:text-6xl font-bold gap-4 mb-8">
          <span>LETS</span>
          <img
            src="/dazzy1.jpg"
            alt="avatar"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full  shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] border-4 border-yellow-500"
          />
          <span>TALK</span>
        </div>

        {/* Email button */}
        <a
          href="mailto:bellozainab244@gmail.com"
          className="inline-flex items-center gap-3 text-lg bg-white px-6 py-3 text-black shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] rounded-full mb-8 hover:bg-gray-700 transition"
        >
         bellozainab244@gmail.com
          <FaArrowUp size={20} />
        </a>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
         <a
          href="mailto:bellozainab244@gmail.com"> <button className="border border-yellow-400 text-xs md:text-sm  shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] px-6 py-3 rounded-full hover:bg-gray-800">
            Write a Message
          </button></a> 
         <a
          href="mailto:bellozainab244@gmail.com">   <button className="border border-yellow-400 text-xs md:text-sm   shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] px-6 py-3 rounded-full hover:bg-gray-800">
            Discuss Project
          </button></a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-8 text-lg mb-6">
        <div className="flex gap-4">
  <a
    href="https://twitter.com/Playful_techie" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter className="hover:text-white text-yellow-400 cursor-pointer" />
  </a>

  <a
    href="https://www.linkedin.com/in/bello-zainab-243350271" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="hover:text-white text-yellow-400 cursor-pointer" />
  </a>

  <a
    href="https://github.com/dazzycode" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="hover:text-white text-yellow-400 cursor-pointer" />
  </a>
</div>

        </div>

        <p className="mt-6 text-gray-500 text-sm">
          © dazzycodes — 2025, All rights reserved. Powered by themeservices
        </p>
      </section>
     
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-black text-yellow-400 p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    )
  

    </div>
   </div>
  );
}
