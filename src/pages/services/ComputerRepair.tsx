import React from 'react';
import Seo from '../../seo/Seo';
import Breadcrumb from '../../components/Breadcrumb';
import FAQ from '../../components/FAQ';
import { createServiceSchema, createFAQSchema } from '../../seo/jsonld';
import { SITE } from '../../seo/config';
import { 
  Monitor, 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  Zap,
  Settings,
  HardDrive,
  Cpu
} from 'lucide-react';

const ComputerRepair = () => {
  const faqs = [
    {
      question: "How much does computer repair cost in Charlotte?",
      answer: "Computer repair costs vary by issue type. We provide free diagnostics and transparent pricing. Most repairs range from $99-$299 depending on the problem."
    },
    {
      question: "Do you repair all computer brands in Charlotte?",
      answer: "Yes, we repair all major computer brands including Dell, HP, Lenovo, ASUS, Acer, and custom-built PCs. Our technicians are experienced with all operating systems."
    },
    {
      question: "How long does computer repair take?",
      answer: "Most computer repairs are completed within 1-2 business days. Simple issues like virus removal can often be completed same-day."
    },
    {
      question: "What areas do you serve for computer repair?",
      answer: `We provide computer repair services throughout ${SITE.AREAS.join(', ')} and surrounding areas with pickup and delivery available.`
    },
    {
      question: "Do you offer warranty on computer repairs?",
      answer: "Yes, we provide a 14-day limited warranty on all parts installed. This covers manufacturing defects but not accidental damage or misuse."
    }
  ];

  const schema = [
    createServiceSchema("Computer Repair Services", "Professional computer repair services for all major brands. Expert diagnosis, hardware repair, software troubleshooting, and performance optimization."),
    createFAQSchema(faqs)
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Computer Repair Charlotte NC | KorTech Service"
        description="Professional computer repair Charlotte NC. Same-day PC & Mac repair, virus removal. Serving Charlotte, Matthews, Mint Hill. Call 704-246-7642!"
        canonical="/computer-repair"
        jsonLd={schema}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb items={[
          { name: 'Services', url: '/services' },
          { name: 'Computer Repair', url: '/computer-repair' }
        ]} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Monitor className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Computer Repair Experts</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Computer Repair
                <span className="block text-blue-300">Charlotte NC</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Professional computer repair services in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, and Ballantyne. 
                Expert PC & Mac repair, virus removal, and performance optimization with same-day service available.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our experienced technicians diagnose and repair all types of computer problems at our convenient Charlotte location. 
                From hardware failures to software issues, we provide comprehensive solutions for desktop computers, workstations, 
                and all-in-one systems. We serve customers throughout the Charlotte metro area including Matthews, Mint Hill, 
                Indian Trail, Waxhaw, Pineville, and Ballantyne with same-day service available for most common issues.
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
                  <span>Free Diagnostic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>All Brands</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Computer Problems?</h3>
                  <p className="text-blue-200">We fix all PC & Mac issues</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-blue-300">Call/Text</div>
                    <div className="text-sm text-blue-200">For Quote</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-300">Same Day</div>
                    <div className="text-sm text-indigo-200">Service</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Hardware diagnosis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Software troubleshooting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Virus removal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">Performance optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Issues We Fix */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-slate-600">
              We proudly serve computer repair customers throughout {SITE.AREAS.join(', ')} and surrounding areas. 
              Our Charlotte location provides convenient access for all your computer repair needs.
            </p>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Computer Problems We Fix
            </h2>
            <p className="text-lg text-slate-600">
              Expert diagnosis and repair for all computer issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Won't Turn On</h3>
              <p className="text-slate-600 mb-4">
                Power supply issues, motherboard problems, and startup failures.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Power supply replacement</li>
                <li>• Motherboard repair</li>
                <li>• Boot sequence troubleshooting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Slow Performance</h3>
              <p className="text-slate-600 mb-4">
                System optimization, virus removal, and hardware upgrades.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• SSD upgrades</li>
                <li>• RAM installation</li>
                <li>• System cleanup</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Virus & Malware</h3>
              <p className="text-slate-600 mb-4">
                Complete virus removal and security setup for protection.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Virus scanning & removal</li>
                <li>• Malware elimination</li>
                <li>• Security software setup</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <HardDrive className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Hard Drive Issues</h3>
              <p className="text-slate-600 mb-4">
                Drive replacement, data recovery, and storage upgrades.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Hard drive replacement</li>
                <li>• Data recovery services</li>
                <li>• Storage upgrades</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Hardware Failures</h3>
              <p className="text-slate-600 mb-4">
                Component replacement and motherboard repair services.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Component replacement</li>
                <li>• Motherboard repair</li>
                <li>• Hardware diagnostics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Software Problems</h3>
              <p className="text-slate-600 mb-4">
                Operating system repair, driver issues, and software conflicts.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• OS reinstallation</li>
                <li>• Driver updates</li>
                <li>• Software troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 my-12">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold">Need Computer Repair?</h3>
          <p className="text-xl text-blue-100">
            Professional repair service in Charlotte, NC • Call/Text For Quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href={`tel:${SITE.PHONE}`}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <span>Call Now</span>
            </a>
            <a
              href={`sms:${SITE.SMS}`}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <span>Text Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} title="Computer Repair FAQ" />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Related Computer Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/laptop-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Monitor className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Laptop Repair</h3>
              <p className="text-slate-600">Professional laptop screen repair and hardware service</p>
            </a>

            <a href="/mac-repair" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mac Repair</h3>
              <p className="text-slate-600">Expert MacBook and iMac repair services</p>
            </a>

            <a href="/data-recovery" className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <HardDrive className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Data Recovery</h3>
              <p className="text-slate-600">Recover lost files from failed hard drives</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerRepair;