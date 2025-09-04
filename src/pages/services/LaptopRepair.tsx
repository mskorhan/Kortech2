import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Laptop, 
  Monitor, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Battery,
  Keyboard,
  Wrench
} from 'lucide-react';

const LaptopRepair = () => {
  const faqs = [
    {
      question: "How much does laptop repair cost?",
      answer: "Laptop repair costs vary by issue and model. Screen repairs typically range from $150-$400, while other repairs vary. We provide free diagnostics and transparent quotes."
    },
    {
      question: "How long does laptop repair take?",
      answer: "Most laptop repairs are completed within 1-2 business days. Screen replacements and simple repairs can often be done same-day."
    },
    {
      question: "What laptop brands do you repair?",
      answer: "We repair all major laptop brands including Dell, HP, Lenovo, ASUS, Acer, MSI, Apple MacBook, and more."
    },
    {
      question: "Do you offer warranty on laptop repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed. This warranty covers manufacturing defects but does not include accidental damage."
    },
    {
      question: "Can you repair water-damaged laptops?",
      answer: "Yes, we specialize in water damage repair. Bring your laptop in immediately for the best chance of recovery."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Laptop Repair Services",
      "description": "Professional laptop repair services including screen replacement, keyboard repair, battery service, and hardware troubleshooting for all major brands.",
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
        "description": "Professional laptop repair services"
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
        title="Laptop Repair Charlotte NC | Screen Replacement & Battery Service | KorTech"
        description="Expert laptop repair in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, Ballantyne. Screen replacement, keyboard repair, battery service. Call 704-246-7642!"
        keywords="laptop repair Charlotte NC, laptop screen repair Charlotte, laptop battery replacement, laptop keyboard repair"
        canonicalUrl="/laptop-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Laptop className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">Laptop Repair Specialists</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Laptop Repair
                <span className="block text-green-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional laptop repair services in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, and Ballantyne. 
                Expert screen replacement, keyboard repair, battery service, and hardware troubleshooting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Text 980-888-5300</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Brands</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>14-Day Warranty</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Laptop className="h-16 w-16 text-green-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Laptop Problems?</h3>
                  <p className="text-green-200">We fix all laptop issues</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-green-300">Call/Text</div>
                    <div className="text-sm text-green-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300">1-2 Days</div>
                    <div className="text-sm text-blue-200">Most Repairs</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Screen replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Keyboard repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Battery replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Hardware upgrades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Laptop Repair Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive laptop repair for all major brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Screen Replacement</h3>
              <p className="text-slate-600 mb-4">
                Professional laptop screen replacement for cracked or damaged displays.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• LCD screen replacement</li>
                <li>• Touchscreen repair</li>
                <li>• Backlight repair</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Keyboard className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Keyboard & Trackpad</h3>
              <p className="text-slate-600 mb-4">
                Repair and replacement of laptop keyboards and trackpads.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Keyboard replacement</li>
                <li>• Individual key repair</li>
                <li>• Trackpad replacement</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Battery & Charging</h3>
              <p className="text-slate-600 mb-4">
                Battery replacement and charging port repair services.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Battery replacement</li>
                <li>• Charging port repair</li>
                <li>• Power jack replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Laptop Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Laptop Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Laptop Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/computer-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Computer Repair</h3>
              <p className="text-slate-600">Desktop PC and Mac repair services</p>
            </a>

            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Data Recovery</h3>
              <p className="text-slate-600">Recover data from failed laptop drives</p>
            </a>

            <a href="/phone-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Phone Repair</h3>
              <p className="text-slate-600">iPhone and Android repair services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaptopRepair;