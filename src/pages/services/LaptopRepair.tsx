import React from 'react';
import Seo from '../../seo/Seo';
import Breadcrumb from '../../components/Breadcrumb';
import FAQ from '../../components/FAQ';
import { createServiceSchema, createFAQSchema } from '../../seo/jsonld';
import { SITE } from '../../seo/config';
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
      question: "How much does laptop repair cost in Charlotte?",
      answer: "Laptop repair costs vary by model and issue. Screen repairs typically range from $150-$400. We provide free diagnostics and transparent quotes."
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
      question: "What areas do you serve for laptop repair?",
      answer: `We provide laptop repair services throughout ${SITE.AREAS.join(', ')} and surrounding areas with pickup and delivery available.`
    },
    {
      question: "Do you offer warranty on laptop repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed. This covers manufacturing defects but not accidental damage."
    }
  ];

  const schema = [
    createServiceSchema("Laptop Repair Services", "Professional laptop repair services including screen replacement, keyboard repair, battery service, and hardware troubleshooting for all major brands."),
    createFAQSchema(faqs)
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Laptop Repair Charlotte NC | KorTech Service"
        description="Expert laptop repair Charlotte NC. Screen replacement, keyboard repair, battery service. Serving Charlotte, Matthews, Mint Hill. Call 704-246-7642!"
        canonical="/laptop-repair"
        jsonLd={schema}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[
          { name: 'Services', url: '/services' },
          { name: 'Laptop Repair', url: '/laptop-repair' }
        ]} />
      </div>

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
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our certified technicians specialize in laptop repair for all major brands including Dell, HP, Lenovo, ASUS, Acer, MSI, and Apple MacBook. 
                Whether you need a cracked screen replaced, keyboard repaired, battery serviced, or performance optimization, we provide fast, 
                reliable service with quality parts and competitive pricing. We serve customers throughout the Charlotte metro area with 
                same-day service available for most common laptop issues.
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
          <div className="text-center mb-8">
            <p className="text-slate-600">
              We proudly serve laptop repair customers throughout {SITE.AREAS.join(', ')} and surrounding areas. 
              Our Charlotte location provides convenient access for all your laptop repair needs.
            </p>
          </div>
          
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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 my-12">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold">Need Laptop Repair?</h3>
          <p className="text-xl text-green-100">
            Professional repair service in Charlotte, NC • Call/Text For Quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href={`tel:${SITE.PHONE}`}
              className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <span>Call Now</span>
            </a>
            <a
              href={`sms:${SITE.SMS}`}
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <span>Text Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Laptop Repair FAQ" />

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