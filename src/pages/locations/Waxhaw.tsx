import React from 'react';
import SEOHead from '../../components/SEOHead';
import StickyCTA from '../../components/StickyCTA';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Star,
  CheckCircle,
  Monitor,
  HardDrive,
  Smartphone,
  Wifi,
  Award,
  Users,
  Truck
} from 'lucide-react';

const Waxhaw = () => {
  const services = [
    {
      icon: Monitor,
      title: "Computer Repair Waxhaw",
      description: "Expert Mac & PC repair services for Waxhaw, NC",
      price: "Call/Text For Quote"
    },
    {
      icon: HardDrive,
      title: "Data Recovery Waxhaw",
      description: "Professional data recovery for Waxhaw residents",
      price: "Call/Text For Quote"
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "iPhone, iPad, and Android repair in Waxhaw",
      price: "Call/Text For Quote"
    },
    {
      icon: Wifi,
      title: "Network Setup Waxhaw",
      description: "Business and home network installation",
      price: "Call/Text For Quote"
    }
  ];

  const faqs = [
    {
      question: "Do you provide computer repair services in Waxhaw, NC?",
      answer: "Yes, we provide comprehensive computer repair services to Waxhaw, NC residents. We offer pickup and delivery services throughout Waxhaw for your convenience."
    },
    {
      question: "How do I get my computer repaired if I live in Waxhaw?",
      answer: "We offer pickup and delivery services to Waxhaw residents, or you can drop off your device at our Charlotte location. We make it convenient for Waxhaw customers to get expert computer repair."
    },
    {
      question: "What types of computer issues do you fix in Waxhaw?",
      answer: "We fix all types of computer issues for Waxhaw residents including hardware failures, software problems, virus infections, data loss, slow performance, and network connectivity issues."
    },
    {
      question: "Do you offer same-day service to Waxhaw?",
      answer: "Yes, we offer same-day computer repair services to Waxhaw customers for many common issues. Contact us early in the day for best availability."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "KorTech Service - Waxhaw Computer Repair",
      "description": "Professional computer repair, data recovery, and IT support services serving Waxhaw, NC. Expert technicians providing quality service with pickup and delivery.",
      "url": "https://kortechservice.com/locations/waxhaw",
      "telephone": "704-246-7642",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1721 Sardis Rd N, Suite 7A",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "postalCode": "28270",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Waxhaw",
          "addressRegion": "NC"
        }
      ],
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 11:00-16:00"
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "96"
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
        title="Computer Repair Waxhaw NC | KorTech Service"
        description="Professional computer repair services in Waxhaw, NC. Same-day Mac & PC repair, data recovery, IT support. Pickup and delivery available. Call 704-246-7642!"
        canonicalUrl="/locations/waxhaw"
        location="Waxhaw, NC"
        service="Computer Repair"
        city="Waxhaw"
        schema={schema}
      />

      <StickyCTA showOnMobile={true} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-green-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="h-5 w-5 text-emerald-300" />
              <span className="text-white font-medium">Serving Waxhaw, NC Since 1998</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Computer Repair
              <span className="block text-emerald-300">Waxhaw, NC</span>
            </h1>
            
            <div className="bg-emerald-800/50 rounded-xl p-6 mb-6">
              <p className="text-lg text-emerald-100 mb-4">
                <strong>Waxhaw Community:</strong> Located just minutes from Waxhaw via Highway 16 and easily accessible from downtown Waxhaw, we've been proudly serving Waxhaw families and businesses for over 25 years. Our convenient Charlotte location makes us easily accessible from all Waxhaw neighborhoods.
              </p>
              <p className="text-sm text-emerald-200 italic">
                "As a Waxhaw resident, I appreciate having KorTech so close by. Their pickup service makes it even more convenient, and their work is always top-notch!" - Waxhaw Resident
              </p>
            </div>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair services serving Waxhaw, North Carolina. Expert Mac & PC repair, 
              data recovery, and IT support for Waxhaw residents and businesses. Convenient pickup and 
              delivery services available throughout Waxhaw.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-246-7642"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                <span>Call 704-246-7642</span>
              </a>
              <a
                href="sms:980-888-5300"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Text 980-888-5300</span>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm">
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
                <span>Pickup & Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Computer Services for Waxhaw, NC
            </h2>
            <p className="text-lg text-slate-600">
              Professional computer repair and IT support for Waxhaw residents and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="text-emerald-600 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Waxhaw Residents Choose KorTech Service
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by Waxhaw community for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Pickup & Delivery</h3>
              <p className="text-slate-600">Convenient pickup and delivery services throughout Waxhaw for your computer repair needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Waxhaw Community</h3>
              <p className="text-slate-600">Proudly serving Waxhaw residents and businesses with personalized service</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">4.8★ Google Rating</h3>
              <p className="text-slate-600">Highly rated by Waxhaw customers for quality service and convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Waxhaw Computer Repair FAQ
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about computer repair services for Waxhaw, NC residents
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Computer Repair in Waxhaw?
          </h2>
          <p className="text-xl text-emerald-200 mb-8">
            Contact us today for expert computer repair services in Waxhaw, NC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:704-246-7642"
              className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-6 w-6" />
              <span>Call 704-246-7642</span>
            </a>
            <a
              href="sms:980-888-5300"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300"
            >
              <MessageSquare className="h-6 w-6" />
              <span>Text 980-888-5300</span>
            </a>
          </div>

          <div className="bg-emerald-800 rounded-xl p-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-emerald-300" />
              <div className="text-left">
                <p className="font-bold">KorTech Service</p>
                <p className="text-emerald-200">1721 Sardis Rd N, Suite 7A, Charlotte, NC 28270</p>
                <p className="text-emerald-200">Pickup & Delivery Available in Waxhaw</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-6 w-6 text-emerald-300" />
              <div className="text-left">
                <p className="font-bold">Hours: Mon-Fri 9AM-6PM, Sat 11AM-4PM</p>
                <p className="text-emerald-200">Serving Waxhaw and surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waxhaw;