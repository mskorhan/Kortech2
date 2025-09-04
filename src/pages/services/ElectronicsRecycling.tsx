import React from 'react';
import SEOHead from '../../components/SEOHead';
import ServiceCTA from '../../components/ServiceCTA';
import FAQSection from '../../components/FAQSection';
import { 
  Recycle, 
  Leaf, 
  Shield, 
  CheckCircle, 
  Star,
  Heart,
  Globe,
  Award
} from 'lucide-react';

const ElectronicsRecycling = () => {
  const faqs = [
    {
      question: "Is electronics recycling really free?",
      answer: "Yes, our electronics recycling service is completely free. No fees, no appointments needed. Just drop off your old electronics during business hours."
    },
    {
      question: "What electronics do you accept for recycling?",
      answer: "We accept computers, laptops, phones, tablets, gaming consoles, printers, and most small electronics. We cannot accept CRT monitors or large appliances."
    },
    {
      question: "Do you wipe data from recycled devices?",
      answer: "Yes, we perform secure data destruction on all storage devices to protect your privacy before recycling."
    },
    {
      question: "What happens to my recycled electronics?",
      answer: "Electronics are sorted, data is securely wiped, and materials are sent to certified recycling facilities for proper processing and resource recovery."
    },
    {
      question: "Can I get a receipt for tax purposes?",
      answer: "Yes, we can provide documentation of your electronics donation for tax purposes upon request."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Free Electronics Recycling",
      "description": "Free electronics recycling service for computers, phones, tablets, and other electronic devices. Environmentally responsible disposal with secure data destruction.",
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
        "price": "0",
        "priceCurrency": "USD",
        "availability": "InStock",
        "description": "Free electronics recycling service"
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
        title="Free Electronics Recycling Charlotte NC | Computer Disposal | KorTech"
        description="Free electronics recycling in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, Ballantyne. Environmentally responsible computer disposal. Call 704-246-7642!"
        keywords="electronics recycling Charlotte NC, computer recycling Charlotte, free electronics disposal, e-waste recycling"
        canonicalUrl="/electronics-recycling"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Recycle className="h-5 w-5 text-green-300" />
                <span className="text-white font-medium">100% FREE Recycling</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Electronics Recycling
                <span className="block text-green-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Free electronics recycling services in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, and Ballantyne. 
                Environmentally responsible disposal with secure data destruction.
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
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Secure Data Destruction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Eco-Friendly</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Recycle className="h-16 w-16 text-green-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Old Electronics?</h3>
                  <p className="text-green-200">We recycle them for free</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-green-300">100%</div>
                    <div className="text-sm text-green-200">FREE</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-300">Secure</div>
                    <div className="text-sm text-emerald-200">Data Wiping</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Computers & laptops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Phones & tablets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Gaming consoles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Small electronics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <ServiceCTA 
        service="Electronics Recycling" 
        price="100% FREE Service"
        urgentText="Drop Off During Business Hours"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Electronics Recycling FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Environmental Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Data Recovery</h3>
              <p className="text-slate-600">Recover data before recycling old devices</p>
            </a>

            <a href="/computer-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Leaf className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Computer Repair</h3>
              <p className="text-slate-600">Repair instead of replace - better for environment</p>
            </a>

            <a href="/it-support" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Star className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">IT Support</h3>
              <p className="text-slate-600">Extend device life with proper maintenance</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectronicsRecycling;