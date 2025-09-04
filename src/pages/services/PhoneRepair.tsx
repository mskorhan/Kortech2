import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Smartphone, 
  Wrench, 
  Shield, 
  Clock,
  CheckCircle, 
  Star,
  Battery,
  Monitor,
  Zap
} from 'lucide-react';

const PhoneRepair = () => {
  const faqs = [
    {
      question: "How much does phone screen repair cost in Charlotte?",
      answer: "Phone screen repair costs vary by device model. iPhone screen repairs typically range from $129-$299, Android screens from $99-$249. We provide free diagnostics and detailed quotes."
    },
    {
      question: "How long does phone repair take?",
      answer: "Most phone repairs are completed within 1-2 hours at our Charlotte location. Screen replacements and battery services can often be done while you wait."
    },
    {
      question: "What phone brands do you repair?",
      answer: "We repair all major smartphone brands including iPhone, Samsung Galaxy, Google Pixel, OnePlus, LG, and more."
    },
    {
      question: "Do you offer warranty on phone repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed, covering only the parts themselves. This warranty does not include accidental damage, liquid damage, drops, or any similar incidents."
    },
    {
      question: "Can you repair water-damaged phones?",
      answer: "Yes, we specialize in water damage repair. Bring your phone in immediately for the best chance of recovery."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Smartphone Repair Services",
      "description": "Professional smartphone repair services including screen replacement, battery replacement, and water damage repair for iPhone, Samsung, and all major brands.",
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
        "description": "Professional smartphone repair services"
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
        title="Phone Repair Charlotte NC | iPhone & Android | KorTech"
        description="Expert phone repair Charlotte NC. iPhone & Android screen repair, battery replacement. Serving Charlotte, Matthews, Mint Hill. Call 704-246-7642!"
        keywords="phone repair Charlotte NC, iPhone repair Charlotte, Android repair Charlotte, phone screen repair, phone battery replacement"
        canonicalUrl="/phone-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Smartphone className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Phone Repair Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Phone Repair
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional smartphone repair services in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, and Ballantyne. 
                Expert iPhone and Android repair with same-day service available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
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
                  <span>Quality Parts</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Smartphone className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Cracked Phone Screen?</h3>
                  <p className="text-blue-200">We fix all smartphone issues</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">Call/Text</div>
                    <div className="text-sm text-blue-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">1-2 Hours</div>
                    <div className="text-sm text-purple-200">Most Repairs</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Screen replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Battery replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Water damage repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Charging port repair</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Phone Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Phone Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Phone Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Mobile Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/tablet-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Tablet Repair</h3>
              <p className="text-slate-600">iPad and Android tablet repair services</p>
            </a>

            <a href="/laptop-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Wrench className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Laptop Repair</h3>
              <p className="text-slate-600">Professional laptop screen and hardware repair</p>
            </a>

            <a href="/computer-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Computer Repair</h3>
              <p className="text-slate-600">Desktop PC and Mac repair services</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneRepair;