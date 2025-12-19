
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { CalculationResult, BlogPost, AppTab } from './types';
import { RECOMMENDED_PRODUCTS, FAQS, BLOG_POSTS, TARGET_GROUPS, TOP_5_BRANDS } from './constants';

const App: React.FC = () => {
  const [result, setResult] = useState<(CalculationResult & { postalCode: string }) | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitVariant, setExitVariant] = useState(1);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 0 && !sessionStorage.getItem('exitShown')) {
        const variant = Math.floor(Math.random() * 3) + 1;
        setExitVariant(variant);
        setShowExitPopup(true);
        sessionStorage.setItem('exitShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, []);

  const navigateTo = (tab: AppTab, anchor?: string) => {
    setActiveTab(tab);
    setSelectedBlog(null);
    
    if (tab === 'home' && anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBlog = (slug: string) => {
    const blog = BLOG_POSTS.find(b => b.slug === slug);
    if (blog) {
      setSelectedBlog(blog);
      setActiveTab('kennisbank');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getExitText = () => {
    switch(exitVariant) {
      case 2: return "Wacht even! Bespaar je niet liever? Laat de AI de huidige prijzen van bol en Amazon checken.";
      case 3: return "Zeker weten dat je de juiste kiest? De redactie heeft de top 3 van 2025 net bijgewerkt.";
      default: return "Nog niet de perfecte match gevonden? Vraag het onze AI.";
    }
  };

  const renderBlogContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-3xl font-black mt-16 mb-8 text-gray-900 border-l-8 border-[#48BB78] pl-8 uppercase tracking-tighter leading-none">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-2xl font-bold mt-10 mb-6 text-gray-800 italic">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('* ')) {
        return <li key={i} className="ml-8 mb-3 text-gray-600 list-disc font-medium text-lg leading-relaxed">{line.replace('* ', '')}</li>;
      }
      if (line.startsWith('[') && line.includes('bol')) {
        return (
          <div key={i} className="my-14 p-12 bg-gradient-to-br from-[#48BB78]/10 to-transparent border-2 border-dashed border-[#48BB78]/40 rounded-[3.5rem] text-center shadow-inner">
            <p className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.3em] mb-6">Expert Aanbeveling 2025</p>
            <h4 className="text-xl font-bold mb-8 text-gray-800">Bespaar op installatiekosten. Vergelijk hier gratis 3 erkende installateurs.</h4>
            <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#48BB78] text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:shadow-2xl hover:bg-black transition-all transform hover:scale-105 active:scale-95">
              Start Gratis Offerte-check &rarr;
            </button>
          </div>
        );
      }
      if (line.trim().length === 0) return <div key={i} className="h-6" />;
      return <p key={i} className="mb-8 text-gray-600 leading-relaxed text-xl font-normal" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') }}></p>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] selection:bg-[#48BB78]/30 selection:text-black">
      <Header onNavigate={navigateTo} activeTab={activeTab === 'legal' ? 'home' : activeTab as any} hasResult={!!result} />

      <main className="flex-grow">
        {activeTab === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section id="hero" className="relative pt-24 pb-32 overflow-hidden bg-[#F7FAFC]">
              <div className="max-w-7xl mx-auto px-4 relative z-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[#48BB78] text-[10px] font-black mb-10 uppercase tracking-[0.2em]">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-[#48BB78] mr-3 animate-pulse"></span>
                      Update: Energiemarkt 2025 Live
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A202C] leading-[0.9] mb-10 tracking-tighter">
                      Verzilver Je Zonnestroom <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48BB78] to-[#38a169]">& Stop Terugleverkosten</span>
                    </h1>
                    <p className="text-2xl text-gray-500 mb-12 max-w-2xl leading-relaxed font-medium">
                      Ontdek hoe een thuisbatterij i.c.m. een dynamisch contract tot €950 per jaar bespaart. Bereken direct je rendement.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                      <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#1A202C] text-white px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-2xl hover:translate-y-[-2px]">Start Systeem Analyse</button>
                      <button onClick={() => navigateTo('home', 'merken')} className="bg-white border-4 border-gray-100 text-gray-600 px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-widest text-xs hover:border-[#48BB78] transition-all">Bekijk Top 5 Accu's</button>
                    </div>
                  </div>
                  <div id="calculator-anchor" className="flex-1 w-full flex justify-center">
                    <Calculator onResult={setResult} />
                  </div>
                </div>
              </div>
            </section>

            {/* TOP 5 BRANDS SECTION */}
            <section id="merken" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-[11px] font-black text-[#48BB78] uppercase tracking-[0.5em] mb-4 block">Onafhankelijke Test 2025</span>
                        <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-6 italic underline decoration-8 decoration-[#48BB78]/20 text-center">De Top 5 Thuisbatterijen</h2>
                        <p className="text-gray-400 italic text-lg text-center mx-auto max-w-2xl font-medium">"Getest op rendement, garantie en software-integratie voor de Nederlandse markt."</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {TOP_5_BRANDS.map((brand, idx) => (
                            <div key={idx} className="bg-[#F7FAFC] p-8 rounded-[3rem] border-2 border-transparent hover:border-[#48BB78]/20 transition-all hover:shadow-2xl text-center group">
                                <div className="text-[#48BB78] font-black text-4xl mb-4 italic">#{idx+1}</div>
                                <h3 className="text-xl font-black mb-2 text-gray-900 tracking-tight leading-none uppercase">{brand.name}</h3>
                                <p className="text-[10px] font-black text-gray-400 mb-6 uppercase tracking-widest">{brand.bestFor}</p>
                                <div className="flex flex-col items-center gap-2 border-t border-gray-100 pt-6">
                                    <span className="text-3xl font-black text-[#1A202C]">{brand.score}<span className="text-sm text-gray-400">/10</span></span>
                                    <span className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Garantie: {brand.warranty}