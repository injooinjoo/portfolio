import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

gsap.registerPlugin(ScrollTrigger);

const CloneCodingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Musign',
      date: 'May 2024',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Music streaming interface clone with responsive design and interactive player controls.',
      image: 'Music streaming interface',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'E-commerce Platform',
      date: 'April 2024', 
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      description: 'Modern shopping website clone featuring product catalog, cart functionality, and checkout process.',
      image: 'E-commerce interface',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media App',
      date: 'March 2024',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'], 
      description: 'Social platform interface clone with feed, messaging, and profile management features.',
      image: 'Social media mockup',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Portfolio Website',
      date: 'February 2024',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Creative portfolio website clone with smooth animations and modern design principles.',
      image: 'Portfolio showcase',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Dashboard UI',
      date: 'January 2024',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      description: 'Admin dashboard clone with data visualization, charts, and responsive layout.',
      image: 'Dashboard interface',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(titleRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 100,
            duration: 0.3
          });
        }
      });

      // Description animation
      ScrollTrigger.create({
        trigger: descriptionRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(descriptionRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 50,
            duration: 0.3
          });
        }
      });

      // Swiper animation
      ScrollTrigger.create({
        trigger: swiperRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(swiperRef.current, {
            opacity: self.progress,
            y: (1 - self.progress) * 80,
            duration: 0.3
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-black rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-black rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-8 opacity-0">
            Clone<br />Coding
          </h2>
          
          <div ref={descriptionRef} className="max-w-4xl mx-auto space-y-4 text-lg mb-12 opacity-0">
            <p className="font-medium">I clone-coded web pages based on my understanding of HTML, CSS, and JavaScript.</p>
            <p className="text-gray-600">I thoroughly followed the box structure and designed it to be neat to make and use.</p>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div ref={swiperRef} className="opacity-0">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="clone-coding-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-80 !h-96">
                <div className={`h-full bg-gradient-to-br ${project.color} rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.date}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm mb-6 opacity-90 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="h-32 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-16 h-12 bg-white/20 rounded-lg mx-auto mb-2"></div>
                      <span className="text-xs font-medium">{project.image}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm">
                      View Code
                    </button>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                      Live Demo
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Discover more projects</h3>
            <p className="mb-6 opacity-90">
              Explore my complete collection of clone coding projects and see how I've implemented various web technologies.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .clone-coding-swiper {
          padding: 50px 0;
        }
        
        .clone-coding-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
        }
        
        .clone-coding-swiper .swiper-pagination-bullet {
          background: #333;
          opacity: 0.5;
        }
        
        .clone-coding-swiper .swiper-pagination-bullet-active {
          background: #333;
          opacity: 1;
        }
        
        .clone-coding-swiper .swiper-button-next,
        .clone-coding-swiper .swiper-button-prev {
          color: #333;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .clone-coding-swiper .swiper-button-next:after,
        .clone-coding-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default CloneCodingSection;
