import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Monitor, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Cpu,
  HardDrive,
  Battery
} from 'lucide-react';

const MacRepair = () => {
  const faqs = [
    {
      question: "How much does Mac repair cost?",
      answer: "Mac repair costs vary by model and issue. MacBook screen repairs typically range from $300-$600, while other repairs vary. We provide free diagnostics and detailed quotes."
    },
    {
      question: "Do you repair all Mac models?",
      answer: "Yes, we repair all Mac models including MacBook Air, MacBook Pro, iMac, Mac Mini, and Mac Pro. We have experience with both Intel and Apple Silicon Macs."
    },
    {
      question: "How long does Mac repair take?",
      answer: "Most Mac repairs are completed within 1-3 business days depending on parts availability. Simple repairs may be completed same-day."
    },
    {
      question: "Do you use genuine Apple parts?",
      answer: "We use OEM and high-quality compatible parts for Mac repairs. We'll discuss part options and pricing during your consultation."
    },
    {
      question: "Can you recover data from a broken Mac?",
      answer: "Yes, we specialize in Mac data recovery from failed drives, liquid damage, and other issues. We can often recover data even when the Mac won't boot."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mac Repair Services",
      "description": "Professional Mac repair services for MacBook, iMac, and all Apple computers. Expert diagnosis, screen replacement, and hardware repair.",
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
        "description": "Professional Mac repair services"
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
        title="Mac Repair Charlotte NC | MacBook & iMac Repair | KorTech Service"
        description="Expert Mac repair in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, Ballantyne. MacBook screen repair, iMac service, data recovery. Call 704-246-7642!"
        keywords="Mac repair Charlotte NC, MacBook repair Charlotte, iMac repair, Apple computer repair Charlotte"
        canonicalUrl="/mac-repair"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Monitor className="h-5 w-5 text-slate-300" />
                <span className="text-white font-medium">Mac Repair Specialists</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Mac Repair
                <span className="block text-slate-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional Mac repair services in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, and Ballantyne. 
                Expert MacBook and iMac repair with quality parts and fast turnaround.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:704-246-7642"
                  className="bg-slate-500 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span>Call 704-246-7642</span>
                </a>
                <a
                  href="sms:980-888-5300"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  <span>Text 980-888-5300</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Mac Models</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Quality Parts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Service</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Mac Issues?</h3>
                  <p className="text-slate-200">We fix all Apple computers</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-slate-300">Call/Text</div>
                    <div className="text-sm text-slate-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">1-3 Days</div>
                    <div className="text-sm text-purple-200">Most Repairs</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">MacBook repair</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">iMac service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Data recovery</span>
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

      {/* Service CTA */}
      <ServiceCTA 
        service="Mac Repair" 
        price="Call/Text For Quote"
        urgentText="Same-Day Mac Repair Available"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Mac Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Apple Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/phone-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">iPhone Repair</h3>
              <p className="text-slate-600">Professional iPhone screen and battery repair</p>
            </a>

            <a href="/tablet-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">iPad Repair</h3>
              <p className="text-slate-600">iPad screen replacement and repair services</p>
            </a>

            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <HardDrive className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mac Data Recovery</h3>
              <p className="text-slate-600">Recover data from failed Mac drives</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MacRepair;