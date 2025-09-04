import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Monitor, 
  Zap, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Gamepad2,
  Cpu,
  HardDrive,
  MemoryStick
} from 'lucide-react';

const GamingPCBuilds = () => {
  const faqs = [
    {
      question: "How much does a custom gaming PC cost?",
      answer: "Custom gaming PC costs vary based on performance needs. Budget builds start around $800, mid-range builds $1200-$1800, and high-end builds $2000+. We work with your budget to maximize performance."
    },
    {
      question: "How long does it take to build a gaming PC?",
      answer: "Most custom gaming PC builds are completed within 3-5 business days after parts arrive. Complex builds with custom cooling may take up to a week."
    },
    {
      question: "Do you provide warranty on gaming PC builds?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed and assembly work. Individual components also carry manufacturer warranties."
    },
    {
      question: "Can you help me choose the right components?",
      answer: "Absolutely! Our experts will recommend the best components for your gaming needs, budget, and preferred games. We stay current with the latest hardware releases."
    },
    {
      question: "Do you offer gaming PC upgrades?",
      answer: "Yes, we can upgrade existing gaming PCs with new graphics cards, more RAM, faster storage, better cooling, and other performance improvements."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Gaming PC Build Services",
      "description": "Professional custom gaming PC building services. Expert component selection, assembly, and optimization for maximum gaming performance.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "KorTech Service",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1721 Sardis Rd N, Suite 7A",
          "addressLocality": "Charlotte",
          "addressRegion": "NC",
          "postalCode": "28270"
        },
        "telephone": "704-246-7642"
      },
      "areaServed": ["Charlotte, NC", "Matthews, NC", "Mint Hill, NC", "Indian Trail, NC", "Waxhaw, NC", "Pineville, NC", "Ballantyne, NC"],
      "offers": {
        "@type": "Offer",
        "availability": "InStock",
        "description": "Professional custom gaming PC building services"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Gaming PC Builds Charlotte NC | Custom Gaming Computer Assembly | KorTech"
        description="Expert gaming PC builds in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, Ballantyne. Custom gaming computer assembly and upgrades. Call 704-246-7642!"
        keywords="gaming PC builds Charlotte NC, custom gaming PC Charlotte, gaming computer assembly, PC builder Charlotte"
        canonicalUrl="/gaming-pc-builds"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Gamepad2 className="h-5 w-5 text-red-300" />
                <span className="text-white font-medium">Gaming PC Specialists</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Gaming PC Builds
                <span className="block text-red-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional custom gaming PC building services in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, and Ballantyne. 
                Expert component selection, assembly, and optimization for maximum gaming performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Text 980-888-5300</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Assembly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Component Selection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Performance Testing</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-red-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Dream Gaming PC?</h3>
                  <p className="text-red-200">We build custom PCs for every budget</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-red-300">Call/Text</div>
                    <div className="text-sm text-red-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">3-5 Days</div>
                    <div className="text-sm text-purple-200">Build Time</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Component selection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Professional assembly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Performance optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Testing & support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Gaming PC Build" 
        price="Call/Text For Quote"
        urgentText="Expert Gaming PC Assembly Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Gaming PC Build FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Gaming Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/console-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Gamepad2 className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Console Repair</h3>
              <p className="text-slate-600">PS5, Xbox, and Nintendo Switch repair</p>
            </a>

            <a href="/computer-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Computer Repair</h3>
              <p className="text-slate-600">Desktop PC and Mac repair services</p>
            </a>

            <a href="/it-support" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">IT Support</h3>
              <p className="text-slate-600">Business IT support and network setup</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamingPCBuilds;