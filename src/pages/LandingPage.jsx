import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaBars, FaTimes, FaArrowLeft, FaArrowRight, FaArrowUp, FaLink } from "react-icons/fa";
import { FaArrowUpRight } from "react-icons/fa";


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
  
const testimonials = [
  {
    name: "Shoko Mugikura",
    role: "Envato customer",
    image: "https://i.pravatar.cc/100?img=1",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur magni eos qui ratione.",
    rating: 5,
  },
  {
    name: "Shoko Mugikura",
    role: "Envato customer",
    image: "https://i.pravatar.cc/100?img=2",
    text: "Neque porro dolorem quia non dolorem sit amet, consectetur adipisci velit.",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "UI Designer",
    image: "https://i.pravatar.cc/100?img=3",
    text: "Customer support was really great. They handled everything smoothly.",
    rating: 4,
  },
];


 const services = [
  {
    title: "Web Development",
    items: ["WordPress", "Brand", "Laravel"],
    image: "/hero.jpg",
    link: "/services/web-development",
  },
  {
    title: "Application Design",
    items: ["Figma", "Prototyping", "Responsive"],
    image: "/hero.jpg",
    link: "/services/application-design",
  },
  {
    title: "UI/UX Mobile Design",
    items: ["Wireframes", "User Research", "Testing"],
    image: "/hero.jpg",
    link: "/services/uiux-design",
  },
  {
    title: "Brand Identity",
    items: ["Logos", "Guidelines", "Typography"],
    image: "/hero.jpg",
    link: "/services/brand-identity",
  },
  {
    title: "Digital Marketing",
    items: ["SEO", "Content Strategy", "Social Ads"],
    image: "/hero.jpg",
    link: "/services/digital-marketing",
  },
];


  const pricing = [
    {
      title: "Silver Pack",
      price: "$100.00",
      highlight: false,
      features: [
        "Free customer support",
        "Free installation",
        "20+ predesigned templates",
        "Free back-up",
        "World class support",
      ],
    },
    {
      title: "Gold Pack",
      price: "$200.00",
      highlight: true,
      features: [
        "Free customer support",
        "Free installation",
        "20+ predesigned templates",
        "Free back-up",
        "World class support",
      ],
    },
    {
      title: "Platinum Pack",
      price: "$300.00",
      highlight: false,
      features: [
        "Free customer support",
        "Free installation",
        "20+ predesigned templates",
        "Free back-up",
        "World class support",
      ],
    },
  ];


const blogs = [
  {
    title: "The Best Kept Secrets of Medspa Web Design",
    date: "May 05, 2024",
    category: "Design Trends",
    comments: 0,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    title: "The Best Kept Secrets of Medspa Web Design",
    date: "May 05, 2024",
    category: "Design Trends",
    comments: 0,
    image: "https://picsum.photos/400/300?random=2",
  },
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
     
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden">
  {/* Navbar */}
  <nav className="w-full flex justify-between items-center px-6 md:px-20 py-6 bg-black/70 backdrop-blur-sm fixed top-0 z-50">
    <div className="text-2xl italic font-bold text-yellow-400">
      Dazzy<span className="text-white">Codes</span>
    </div>

    {/* Desktop Links */}
    <ul className="hidden md:flex space-x-8 text-white font-medium">
      <li><Link to="#about" className="hover:text-yellow-400">About</Link></li>
      <li><Link to="#projects" className="hover:text-yellow-400">Projects</Link></li>
      <li><Link to="#skills" className="hover:text-yellow-400">Skills</Link></li>
      <li><Link to="#contact" className="hover:text-yellow-400">Contact</Link></li>
    </ul>

    {/* Mobile Hamburger */}
    <div className="md:hidden text-white cursor-pointer z-50" onClick={toggleMobileMenu}>
      {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </div>
  </nav>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center space-y-8 z-40 text-white text-xl">
      <Link to="#about" onClick={toggleMobileMenu} className="hover:text-yellow-400">About</Link>
      <Link to="#projects" onClick={toggleMobileMenu} className="hover:text-yellow-400">Projects</Link>
      <Link to="#skills" onClick={toggleMobileMenu} className="hover:text-yellow-400">Skills</Link>
      <Link to="#contact" onClick={toggleMobileMenu} className="hover:text-yellow-400">Contact</Link>
    </div>
  )}

  {/* Background swirl */}
  <img
    src="/bg.jpg"
    alt="bg swirl"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

  {/* Hero Content */}
  <div className="relative z-10 flex flex-row flex-wrap items-center justify-between mt-32 px-6 md:px-20 py-20">
    {/* Left Text */}
    <div className="w-full md:w-1/2 text-left flex flex-col items-start">
      <p className="text-lg">Hi there! 👋 I'm DazzyCodes</p>
      <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
        FRONTEND <span className="italic mx-0 md:mx-20 text-yellow-400">DEVELOPER</span>
      </h1>
      <p className="mt-6 max-w-lg text-gray-300">
        A visionary frontend developer who transforms ideas into seamless, interactive digital experiences that captivate and inspire users.
      </p>

      {/* Buttons */}
      <div className="flex flex-row flex-wrap items-center space-x-4 space-y-4 mt-8 w-full md:w-auto">
        <Link to="/projects" className="w-full md:w-auto">
          <button className="flex items-center justify-center space-x-2 bg-yellow-400 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] text-black px-3 md:px-6 py-3 rounded-full font-semibold  md:w-auto">
            <span>View My Works</span>
            <ArrowIcon className="text-black" />
          </button>
        </Link>
        <div className="flex items-center justify-center space-x-2 text-sm">
          <ArrowIcon className="text-yellow-400 hidden md:block " />
          <p>
            <a
              href="/path/to/your-cv.pdf"
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
    <div className="w-full md:w-1/2 relative flex justify-center mt-10 md:mt-0">
      {/* Floating Badge */}
      <div className="absolute -top-10 right-0 md:right-5 bg-black border-2 border-yellow-400 shadow-[0_0_15px_8px_rgba(255,255,0,0.6)] rounded-full px-6 py-6 text-center">
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
  <div className="absolute right-4 md:right-6 top-1/2 flex flex-col items-center space-y-4 transform -translate-y-1/2">
    <ArrowIcon className="text-yellow-400 rotate-90 mb-2" />
    <FaTwitter className="text-white hover:text-yellow-400 cursor-pointer" />
    <FaLinkedin className="text-white hover:text-yellow-400 cursor-pointer" />
    <FaGithub className="text-white hover:text-yellow-400 cursor-pointer" />
  </div>
</section>

  

      {/* ✅ About Section with Line + Circle Button */}
      <section className="relative px-6 md:px-20 py-16 text-center border-t border-gray-700">
        <div className="absolute left-1/4  justify-start top-0 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-yellow-400 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] text-black font-semibold px-6 py-3 rounded-full shadow-lg">
            About Me
          </button>
        </div>
      <p className="max-w-6xl mx-auto text-gray-300 text-justify  leading-relaxed">
  I am a dedicated Frontend Developer with a deep passion for creating seamless, visually captivating, and highly interactive web experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks such as React, I transform design concepts into fully functional, responsive, and intuitive interfaces. My work is driven by a keen eye for detail and a commitment to user-centric design, ensuring that every project I build is not only visually engaging but also optimized for performance and accessibility.  

  Over the years, I have collaborated on a variety of projects ranging from startups to corporate platforms, crafting solutions that balance creativity with functionality. I thrive in environments where design meets code, translating ideas into digital experiences that resonate with users and meet business goals. Beyond coding, I am constantly exploring the latest trends and technologies in frontend development, from animation libraries and design systems to progressive web apps and performance optimization techniques.  

  I am passionate about problem-solving and continuously refining my craft, striving to deliver products that are both innovative and practical. My goal is to build digital experiences that tell a story, enhance user engagement, and leave a lasting impression, combining technical expertise with creative vision in every line of code I write.  
</p>

        {/* small details row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm text-gray-400">
          <div>
            <p className="font-semibold text-white">Born in</p>
            <p>Lagos, Nigeria</p>
          </div>
          <div>
            <p className="font-semibold text-white">Experience</p>
            <p>3 Years</p>
          </div>
                   <div>
            <p className="font-semibold text-white">Language</p>
            <p> English</p>
          </div>
        </div>
      </section>

      {/* ✅ Experience Section with Big 10+ */}
      <section className="px-6 md:px-20 md:py-8 py-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Big years */}
        <div>
          <h2 className="text-7xl font-bold text-yellow-400">3+</h2>
          <p className="mt-2 bg-yellow-400 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] text-black px-4 py-1 inline-block rounded-full text-xs md:text-sm font-semibold">
            Years of Experiences Specializing in Intuitive and Visually Engaging Interfaces
          </p>
        </div>

        {/* Right: Timeline */}
        <ul className="space-y-6">
          <li>
            <h3 className="font-semibold">Petabyte Esport – Nigeria</h3>
            <p className="text-sm text-gray-400">Frontend Developer| 2024 – Present</p>
          </li>
          <li>
            <h3 className="font-semibold">CidretX – Nigeria</h3>
            <p className="text-sm text-gray-400">UI/UX Designer | 2023 – 2024</p>
          </li>
          <li>
            <h3 className="font-semibold">BPO Possible – Nigeria</h3>
            <p className="text-sm text-gray-400">Intern Developer | 2023 – 2023</p>
          </li>
         
        </ul>
      </section>
  
    <div className="bg-black text-white px-6 md:px-20 py-20">
      {/* ✅ Services Section */}
   
    <section className="bg-black text-white px-6 md:px-20  py-5 md:py-10">
      <h2 className="text-4xl md:text-5xl font-extrabold  text-center mb-16">
        SERVICES <span className="text-yellow-400 text-lg align-top">[5]</span>
      </h2>

      <div className="grid grid-cols-1  gap-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center md:border-hidden  border-b md:items-start pb-6"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-34 h-28 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text + Arrow */}
            <div className="flex-1 flex justify-between items-start w-full md:pl-6">
              <div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <ul className="text-sm text-gray-400 mt-2 space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              <a
                href={service.link}
                className="p-2 rounded-full border border-gray-600 shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] hover:bg-yellow-400 hover:text-black transition flex items-center justify-center"
              >
                <FaLink/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>

  
    <section className="bg-black text-white px-6 md:px-20 ">
       
      {/* Trusted by section */}
      <div className="mt-5 text-center">
        <p className="text-gray-400 text-sm">
        Followed <span className="text-white font-semibold">50+</span>{" "}
          Freelance Platforms
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <img src="/slack.png" alt="Slack" className="h-6" />
          <img src="/google.png" alt="Google" className="h-6" />
          <img src="/linkedin.png" alt="LinkedIn" className="h-6" />
          <img src="/walmart.png" alt="Walmart" className="h-6" />
          <img src="/amazon.png" alt="Amazon" className="h-6" />
        </div>
      </div>
    </section>


    <div className="bg-black text-white px-6 md:px-20 py-8">
      
 {/* ✅ Pricing Section */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mt-28 mb-16">
        PROJECT <span className="italic text-yellow-400">PRICING PLAN</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricing.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-xl border ${
              plan.highlight ? "bg-yellow-400 text-black" : "bg-black shadow-[0_0_10px_5px_rgba(255,255,0,0.6)]  border-gray-700"
            }`}
          >
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-3xl font-bold mt-4">{plan.price}</p>
            <p className="text-sm text-gray-400 mb-6">Per/Month</p>

            <button
              className={`w-full py-3 rounded-full font-semibold flex items-center justify-center space-x-2 ${
                plan.highlight
                  ? "bg-black text-yellow-400 hover:bg-gray-900"
                  : "bg-white text-black hover:bg-yellow-400 hover:text-black"
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
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-8">( TESTIMONIALS )</h2>
        <p className="text-center text-2xl md:text-3xl font-bold max-w-3xl mx-auto mb-12">
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
              <h4 className="font-semibold text-black">{testimonials[current].name}</h4>
              <p className="text-sm text-black">
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">( NEWS & BLOG )</h2>
        <p className="text-2xl md:text-3xl font-bold max-w-3xl mb-12">
          Read our blog and try to see everything from every perspective. Our
          passion lies in making everything accessible and aesthetic for
          everyone.
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
                <button className="text-black font-semibold flex items-center gap-1">
                  Read More <FaLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-yellow-500 text-black px-6  shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
            View All Blog <FaLink size={18} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-black text-center">
        {/* LETS TALK */}
        <div className="flex justify-center items-center text-5xl md:text-6xl font-bold gap-4 mb-8">
          <span>LETS</span>
          <img
            src="https://i.pravatar.cc/100?img=5"
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
          <button className="border border-yellow-400  shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] px-6 py-3 rounded-full hover:bg-gray-800">
            Write a Message
          </button>
          <button className="border border-yellow-400  shadow-[0_0_10px_5px_rgba(255,255,0,0.6)] px-6 py-3 rounded-full hover:bg-gray-800">
            Discuss Project
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-8 text-lg mb-6">
         <FaTwitter className=" hover:text-white text-yellow-400 cursor-pointer" />
        <FaLinkedin className=" hover:text-white text-yellow-400 cursor-pointer" />
        <FaGithub className=" hover:text-white text-yellow-400 cursor-pointer" />
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          © Nabhan — 2024, All rights reserved. Powered by themeservices
        </p>
      </section>
    </div>
   </div>
  );
}
