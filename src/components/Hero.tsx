import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Download, ArrowRight } from 'lucide-react';
import pp_keren from '../assets/img/pp_keren.jpeg';
import {type HeroData} from '../data/hero'
import cv from '../assets/cv/CV_Lutfi_Rizaldi_Mahida.pdf';

export interface HeroProps {
  hero: HeroData[];
}

const Hero: React.FC<HeroProps> = ({hero}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.1,
    freezeOnceVisible: true 
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={elementRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
    >
    
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

   
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >

           
            <div className="space-y-4 mt-[10vh]">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-zinc-100">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-green-200 via-green-400 to-green-600 font-bold bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Lutfi Rizaldi Mahida
                </span>
              </h1>
              
            
              <p className="text-2xl lg:text-3xl text-gray-300 font-bold">
                {hero[0]?.roles.join(' | ')}
              </p>
               
            </div>

            <p className="text-lg text-zinc-400 font-bold leading-relaxed max-w-xl text-justify">
              {hero[0]?.deskripsi}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => window.open(`${cv}`, '_blank')}
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 border border-zinc-700 hover:border-zinc-600 hover:-translate-y-0.5"
              >
                View CV
                <Download className="w-5 h-5" />
              </button>
            </div>

          
            <div className="flex gap-4 pt-4">
              {hero[0]?.profile.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800/50 hover:bg-zinc-700 border border-zinc-700/50 hover:border-emerald-500/50 rounded-xl text-zinc-400 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isIntersecting 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
            
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
              
              
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                  <img
                    src={pp_keren}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              
              <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-2xl translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;
