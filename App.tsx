import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { CalculationResult, BlogPost, AppTab } from './types';
import { RECOMMENDED_PRODUCTS, FAQS, BLOG_POSTS, LEGAL_PAGES } from './constants';
import { fetchLiveDeals, DaisyconDeal } from './services/daisyconService';

const App: React.FC = () => {
  const [result, setResult] = useState<(CalculationResult & { postalCode: string }) | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [suggestedCategory, setSuggestedCategory] = useState<string>('');
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [selectedLegal, setSelectedLegal] = useState<string | null>(null);
  const [liveDeals, setLiveDeals] = useState<DaisyconDeal[]>([]);

  useEffect(() => {
    const loadDeals = async () => {
      const deals = await fetchLiveDeals();
      setLiveDeals(deals);
    };
    loadDeals();
  }, []);

  useEffect(() => {
    if (result) {
      if (result.idealSize > 12) setSuggestedCategory('Premium');
      else if (result.idealSize >= 4) setSuggestedCategory('Modulair');
      else setSuggestedCategory('Budget');
    }
  }, [result]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const navigateTo = (tab: AppTab, anchor?: string) => {
    setActiveTab(tab);
    setSelectedBlog(null);
    setSelectedLegal(null);
    
    if (tab === 'home' && anchor) {
      const targetAnchor = (anchor === 'results-section' && !result) ? 'calculator-anchor' : anchor;
      
      setTimeout(() => {
        const element = document.getElementById(targetAnchor);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else if (tab === 'legal' && anchor) {
      setSelectedLegal(anchor);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const renderBlogContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-3xl font-black mt-12 mb-6 text-gray-900 leading-tight border-l-4 border-[#48BB78] pl-6 uppercase tracking-tight">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-2xl font-bold mt-8 mb-4 text-gray-800">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('|')) {
        if (line.includes('---')) return null;
        const cells = line.split('|').filter(c => c.trim().length > 0);
        return (
          <div key={i} className="flex border-b border-gray-100 py-3 bg-gray-50/50">
            {cells.map((c, j) => <div key={j} className={`flex-1 text-sm px-4 ${j === 0 ? 'font-black text-gray-900' : 'text-gray-600'}`}>{c.trim()}</div>)}
          </div>
        );
      }
      if (line === '[AFFILIATE LINK HIER]') {
        return (
          <div key={i} className="my-12 p-10 bg-[#48BB78]/5 border-2 border-dashed border-[#48BB78]/20 rounded-[3rem] text-center shadow-inner">
            <p className="text-xs font-black text-[#48BB78] uppercase tracking-[0.2em] mb-6">Partner Tip bij bol</p>
            <h4 className="text-xl font-bold mb-6 text-gray-900 max-w-md mx-auto italic">Vind de beste hardware voor dit scenario bij bol</h4>
            <button 
              onClick={() => window.open('https://www.bol.com', '_blank')}
              className="bg-[#ED8936] hover:bg-[#D6762E] text-white font-black py-5 px-10 rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-xs uppercase tracking-widest"
            >
              Bekijk Aanbiedingen bij bol &rarr;
            </button>
          </div>
        );
      }
      if (line.trim().length === 0) return <div key={i} className="h-4" />;
      return <p key={i} className="mb-6 text-gray-600 leading-relaxed text-lg">{line}</p>;
    });
  };

  const renderLegalContent = () => {
    const page = selectedLegal ? LEGAL_PAGES[selectedLegal] : null;
    if (!page) return null;

    return (
      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <button onClick={() => navigateTo('home')} className="text-sm font-bold text-[#48BB78] mb-8 flex items-center">&larr; Terug naar Home</button>
          <h1 className="text-4xl font-black mb-8 text-gray-900">{page.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap">{page.content}</div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#48BB78] selection:text-white bg-[#F7FAFC]">
      <Header onNavigate={navigateTo} activeTab={activeTab === 'legal' ? 'home' : activeTab as any} hasResult={!!result} />

      <main className="flex-grow">
        {activeTab === 'home' ? (
          <>
            {/* Hero Section */}
            <section id="hero" className="relative pt-16 pb-32 overflow-hidden bg-[#F7FAFC]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[#48BB78] text-xs font-bold mb-8 uppercase tracking-widest">
                      <span className="flex h-2 w-2 rounded-full bg-[#48BB78] mr-2 animate-pulse"></span>
                      Update: Energiemarkt 2025 Analyse Live
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A202C] leading-[1.05] mb-8 tracking-tight">
                      Bespaar Slim. <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48BB78] to-[#38a169]">Kies de Juiste Accu.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed italic">
                      "Onafhankelijk advies, 5 diepgaande gidsen en de beste deals bij bol."
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                      <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#1A202C] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-2xl">Start Analyse &rarr;</button>
                      <button onClick={() => navigateTo('kennisbank')} className="bg-white border-2 border-gray-100 text-gray-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:border-[#48BB78] transition-all">Lees Kennisbank</button>
                    </div>
                  </div>
                  <div id="calculator-anchor" className="flex-1 w-full flex justify-center">
                    <Calculator onResult={setResult} />
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            {result && (
              <section id="results-section" className="py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Jouw Persoonlijk Rapport</h2>
                    <p className="text-gray-500 italic text-sm">Regio: {result.postalCode} | Analyse 2025</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-[#1A202C] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden border-b-8 border-[#48BB78]">
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.2em] mb-4">Geadviseerde Opslag</p>
                                    <div className="flex items-baseline justify-center md:justify-start">
                                        <span className="text-6xl font-black tracking-tighter">{result.idealSize}</span>
                                        <span className="text-xl font-bold text-gray-500 ml-2">kWh</span>
                                    </div>
                                </div>
                                <div className="text-center md:text-left border-y md:border-y-0 md:border-x border-gray-800 py-8 md:py-0 md:px-12">
                                    <p className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.2em] mb-4">Terugverdientijd</p>
                                    <div className="flex items-baseline justify-center md:justify-start">
                                        <span className="text-6xl font-black tracking-tighter">{result.paybackTime}</span>
                                        <span className="text-xl font-bold text-gray-500 ml-2">jr</span>
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.2em] mb-4">Jaarlijkse Winst</p>
                                    <div className="flex items-baseline justify-center md:justify-start">
                                        <span className="text-xl font-bold text-[#48BB78] mr-1">€</span>
                                        <span className="text-6xl font-black tracking-tighter text-[#48BB78]">{result.annualSavings}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 pt-12 border-t border-gray-800">
                                <p className="text-gray-300 italic text-sm leading-relaxed">"{result.aiAdvice}"</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-4 border-[#ED8936] shadow-2xl sticky top-28">
                            {leadSubmitted ? (
                                <div className="text-center py-12">
                                    <h3 className="text-2xl font-black mb-4 text-gray-900 tracking-tight">Ontvangen!</h3>
                                    <p className="text-gray-500 text-sm">Gecertificeerde installateurs voor {result.postalCode} nemen contact met u op.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-black mb-6 text-gray-900 tracking-tight italic text-center">Plan Adviesgesprek ⚡️</h3>
                                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <input type="text" placeholder="Postcode" value={result.postalCode} className="col-span-1 px-4 py-4 rounded-2xl border-2 border-gray-50 bg-gray-100 font-bold text-xs outline-none" disabled />
                                            <input type="text" placeholder="Huisnr." className="col-span-2 px-6 py-4 rounded-2xl border-2 border-gray-50 bg-gray-50 outline-none focus:border-[#ED8936] transition-all" required />
                                        </div>
                                        <input type="text" placeholder="Naam" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 bg-gray-50 outline-none focus:border-[#ED8936] transition-all" required />
                                        <input type="email" placeholder="E-mail" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 bg-gray-50 outline-none focus:border-[#ED8936] transition-all" required />
                                        <input type="tel" placeholder="Telefoon" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-50 bg-gray-50 outline-none focus:border-[#ED8936] transition-all" required />
                                        <button className="w-full bg-[#ED8936] text-white font-black py-6 rounded-2xl uppercase tracking-widest text-sm shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all">
                                            Bekijk Offertes bij bol &rarr;
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Aanbevelingen Sectie */}
            <section id="onze-aanbevelingen" className="py-32 bg-[#F7FAFC] border-y border-gray-100 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#1A202C] mb-6 tracking-tight">Top Hardware bij bol</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm italic">"Onderzoek welk systeem aansluit bij uw energiebehoefte en vergelijk hardware-specificaties."</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {RECOMMENDED_PRODUCTS.map((product) => (
                            <div key={product.id} className={`group relative bg-white rounded-[3rem] border-2 transition-all duration-500 overflow-hidden ${suggestedCategory === product.category ? 'border-[#48BB78] shadow-2xl scale-[1.03] z-10' : 'border-transparent shadow-sm'}`}>
                                <div className="h-56 relative overflow-hidden bg-gray-100">
                                    <img src={product.imageUrl} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" alt={product.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-6 left-8 text-white z-10">
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{product.category}</span>
                                        <h3 className="text-2xl font-black tracking-tight">{product.name}</h3>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col min-h-[360px]">
                                    <p className="text-gray-500 text-sm mb-10 leading-relaxed italic">"{product.description}"</p>
                                    <div className="mt-auto space-y-3">
                                      <a href={product.partnerUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-[#48BB78] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-gray-900 shadow-lg">
                                        {product.partnerName}
                                      </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Sectie - Quick Scan */}
            <section id="faq" className="py-32 bg-white scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.4em] mb-4 block">Quick Answers</span>
                        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Veelgestelde Vragen</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto italic">"Snel antwoord op 10 prangende vragen, of duik diep in onze 5 gidsen voor meer detail."</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                        {FAQS.map((faq, idx) => (
                            <div key={idx} className="bg-[#F7FAFC] rounded-[2.5rem] p-10 border border-transparent hover:border-gray-200 transition-all hover:bg-white hover:shadow-xl group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                  <h3 className="text-xl font-bold text-gray-900 flex-grow pr-4">{faq.q}</h3>
                                  {faq.blogSlug && (
                                    <button onClick={() => openBlog(faq.blogSlug!)} className="shrink-0 bg-white border border-gray-200 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#48BB78] hover:text-white transition-all shadow-sm">
                                      Lees Gids &rarr;
                                    </button>
                                  )}
                                </div>
                                <div className="h-px bg-gray-200 w-full my-6"></div>
                                <p className="text-gray-500 text-md leading-relaxed italic">"{faq.a}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kennisbank Preview - Deep Dive (Toont alle 5) */}
            <section id="kennisbank-preview" className="py-32 bg-[#1A202C] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.4em] mb-4 block text-center lg:text-left">Deep Dives</span>
                            <h2 className="text-5xl font-black mb-6 tracking-tight text-center lg:text-left">Diepgaande Kennisbank</h2>
                            <p className="text-gray-400 max-w-xl text-lg italic opacity-80 text-center lg:text-left">"Strategische analyses voor wie het maximale uit zijn energierekening wil halen."</p>
                        </div>
                        <button onClick={() => navigateTo('kennisbank')} className="bg-[#48BB78] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all shadow-2xl mx-auto lg:mx-0">Bekijk Alle 5 Artikelen</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {BLOG_POSTS.map((post) => (
                            <div key={post.id} className="group cursor-pointer bg-white/5 p-4 rounded-[3rem] hover:bg-white/10 transition-all border border-white/5" onClick={() => openBlog(post.slug)}>
                                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                                    <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt={post.title} />
                                </div>
                                <div className="px-4 pb-4">
                                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#48BB78] transition-colors line-clamp-2 leading-tight">{post.title}</h3>
                                  <p className="text-sm text-gray-400 mb-8 line-clamp-3 italic opacity-70">"{post.excerpt}"</p>
                                  <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform inline-block">Lees Volledige Gids &rarr;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          </>
        ) : activeTab === 'kennisbank' ? (
          <section className="py-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
              {selectedBlog ? (
                <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <button onClick={() => setSelectedBlog(null)} className="text-[10px] font-black uppercase tracking-widest text-[#48BB78] mb-12 flex items-center hover:-translate-x-2 transition-transform">
                    &larr; Terug naar Kennisbank
                  </button>
                  <div className="mb-12">
                    <img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="w-full h-[500px] object-cover rounded-[4rem] shadow-2xl" />
                  </div>
                  <h1 className="text-4xl md:text-7xl font-black mb-12 leading-[1.1] text-gray-900 tracking-tight">{selectedBlog.title}</h1>
                  <div className="prose prose-2xl max-w-none text-gray-700 selection:bg-[#48BB78]/20">{renderBlogContent(selectedBlog.content)}</div>
                  <div className="mt-24 pt-12 border-t border-gray-100">
                    <div className="bg-[#F7FAFC] p-12 rounded-[4rem] text-center border-2 border-gray-100">
                      <h3 className="text-3xl font-black mb-6">Klaar voor de volgende stap?</h3>
                      <p className="text-gray-500 mb-10 max-w-md mx-auto italic">"Bereken binnen 1 minuut wat een {selectedBlog.slug.includes('rendement') ? 'rendabel' : 'slim'} systeem voor jouw woning kost."</p>
                      <button onClick={() => navigateTo('home', 'calculator-anchor')} className="bg-[#1A202C] text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-[#48BB78] transition-all transform hover:scale-105 shadow-2xl">Start Gratis Analyse</button>
                    </div>
                  </div>
                </article>
              ) : (
                <>
                  <div className="mb-24 text-center md:text-left">
                    <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.4em] mb-4 block">Overzicht</span>
                    <h1 className="text-6xl font-black mb-8 text-gray-900 tracking-tight">Diepgaande Gidsen</h1>
                    <p className="text-gray-500 text-xl italic max-w-2xl leading-relaxed">"5 onafhankelijke rapporten over energie-opslag, rendement en technologie."</p>
                  </div>
                  <div className="grid grid-cols-1 gap-16">
                    {BLOG_POSTS.map((post) => (
                      <div key={post.id} className="group cursor-pointer flex flex-col md:flex-row gap-12 items-center border-b border-gray-100 pb-16 transition-all hover:translate-y-[-8px]" onClick={() => setSelectedBlog(post)}>
                        <div className="md:w-[400px] h-[300px] rounded-[3rem] overflow-hidden shrink-0 shadow-xl">
                          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold mb-6 group-hover:text-[#48BB78] transition-colors leading-tight">{post.title}</h2>
                          <p className="text-gray-500 mb-8 text-lg leading-relaxed italic line-clamp-3">"{post.excerpt}"</p>
                          <span className="text-[10px] font-black text-[#48BB78] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform inline-block">Lees Volledige Gids &rarr;</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        ) : (
          renderLegalContent()
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <FloatingCTA onClick={() => navigateTo('home', 'calculator-anchor')} />
    </div>
  );
};

export default App;
