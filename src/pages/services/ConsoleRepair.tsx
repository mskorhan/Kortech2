import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Gamepad2, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Zap,
  Settings,
  Monitor
} from 'lucide-react';

const ConsoleRepair = () => {
  const faqs = [
    {
      question: "What gaming consoles do you repair?",
      answer: "We repair all major gaming consoles including PlayStation 5, Xbox Series X/S, Nintendo Switch, and older console models. We specialize in HDMI port repairs and other common issues."
    },
    {
      question: "How much does console repair cost in Charlotte?",
      answer: "Console repair costs vary by issue and model. HDMI port repairs typically range from $129-$199. We provide free diagnostics ($75-$150 value, waived with repair) and detailed quotes."
    },
    {
      question: "How long does console repair take?",
      answer: "Most console repairs are completed within 1-3 business days at our Charlotte location. HDMI port repairs and common issues can often be completed same-day or next-day."
    },
    {
      question: "Do you offer warranty on console repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents."
    },
    {
      question: "Can you fix water-damaged gaming consoles?",
      answer: "Yes, we specialize in water damage repair for gaming consoles. Bring your console in immediately for the best chance of recovery."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gaming Console Repair Services",
      "description": "Professional gaming console repair services for PlayStation, Xbox, Nintendo Switch, and other gaming systems. Expert HDMI port repair and component replacement.",
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
        "description": "Professional gaming console repair services"
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
        title="Gaming Console Repair Charlotte NC | KorTech"
        description="Expert gaming console repair Charlotte NC. PS5, Xbox, Nintendo Switch HDMI repair. Serving Charlotte, Matthews, Mint Hill. Call 704-246-7642!"
        keywords="console repair Charlotte NC, PS5 repair Charlotte, Xbox repair Charlotte, Nintendo Switch repair, gaming console HDMI repair"
        canonicalUrl="/console-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Gamepad2 className="h-5 w-5 text-purple-300" />
                <span className="text-white font-medium">Gaming Console Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Gaming Console Repair
                <span className="block text-purple-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional gaming console repair services in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, and Ballantyne. 
                Expert PS5, Xbox, and Nintendo Switch repair with fast turnaround.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Text 980-888-5300</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Consoles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>HDMI Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Fast Repair</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Gamepad2 className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Console Not Working?</h3>
                  <p className="text-purple-200">We fix all gaming systems</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-purple-300">Call/Text</div>
                    <div className="text-sm text-purple-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300">1-3 Days</div>
                    <div className="text-sm text-blue-200">Most Repairs</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">HDMI port repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Power issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Disc drive problems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Controller repair</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Console Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Gaming Consoles We Repair
            </h2>
            <p className="text-lg text-slate-600">
              Expert repair for all major gaming systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">PlayStation Repair</h3>
              <p className="text-slate-600 mb-4">
                PS5, PS4, and PlayStation console repair services.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• HDMI port repair</li>
                <li>• Disc drive issues</li>
                <li>• Power problems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Xbox Repair</h3>
              <p className="text-slate-600 mb-4">
                Xbox Series X/S, Xbox One repair and troubleshooting.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• HDMI port replacement</li>
                <li>• Red ring of death</li>
                <li>• Overheating issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Nintendo Switch</h3>
              <p className="text-slate-600 mb-4">
                Nintendo Switch repair including Joy-Con drift fixes.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Joy-Con drift repair</li>
                <li>• Screen replacement</li>
                <li>• Charging port repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Gaming Console Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Console Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Gaming Console Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Gaming Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/ps5-hdmi-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Gamepad2 className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">PS5 HDMI Repair</h3>
              <p className="text-slate-600">Specialized PS5 HDMI port replacement</p>
            </a>

            <a href="/xbox-hdmi-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Gamepad2 className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Xbox HDMI Repair</h3>
              <p className="text-slate-600">Xbox Series X/S and Xbox One HDMI repair</p>
            </a>

            <a href="/gaming-pc-builds" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Gaming PC Builds</h3>
              <p className="text-slate-600">Custom gaming PC building and upgrades</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsoleRepair;