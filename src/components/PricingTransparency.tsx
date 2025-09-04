import React from 'react';
import { DollarSign, Clock, Shield, CheckCircle } from 'lucide-react';

interface PricingTransparencyProps {
  services?: Array<{
    name: string;
    priceRange: string;
    description: string;
    turnaround: string;
  }>;
  showWarranty?: boolean;
}

const PricingTransparency: React.FC<PricingTransparencyProps> = ({ 
  services = [],
  showWarranty = true 
}) => {
  const defaultServices = [
    {
      name: "Computer Diagnostic",
      priceRange: "$75-$150",
      description: "Complete system analysis and problem identification",
      turnaround: "Same Day"
    },
    {
      name: "Virus Removal",
      priceRange: "$99-$149",
      description: "Complete malware removal and security setup",
      turnaround: "2-4 Hours"
    },
    {
      name: "Screen Repair",
      priceRange: "$129-$299",
      description: "Laptop and mobile device screen replacement",
      turnaround: "Same Day"
    },
    {
      name: "Data Recovery",
      priceRange: "$199-$499",
      description: "Professional data recovery from failed drives",
      turnaround: "1-3 Days"
    },
    {
      name: "HDMI Port Repair",
      priceRange: "$129-$179",
      description: "Gaming console HDMI port replacement",
      turnaround: "1-2 Days"
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            No Hidden Fees - Clear Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Honest, upfront pricing for all our computer repair services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayServices.map((service, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-800">{service.name}</h3>
                <div className="text-xl font-bold text-green-600">{service.priceRange}</div>
              </div>
              <p className="text-slate-600 text-sm mb-3">{service.description}</p>
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <Clock className="h-4 w-4" />
                <span>{service.turnaround}</span>
              </div>
            </div>
          ))}
        </div>

        {showWarranty && (
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Service Guarantee</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                  <h4 className="font-bold text-slate-800">14-Day Warranty</h4>
                  <p className="text-slate-600 text-sm">Limited warranty on all parts installed</p>
                </div>
                <div className="space-y-2">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                  <h4 className="font-bold text-slate-800">No Hidden Fees</h4>
                  <p className="text-slate-600 text-sm">Transparent pricing with detailed quotes</p>
                </div>
                <div className="space-y-2">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                  <h4 className="font-bold text-slate-800">Quality Parts</h4>
                  <p className="text-slate-600 text-sm">OEM and high-quality compatible components</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-blue-700 text-sm">
                  <strong>Note:</strong> Diagnostic fee ($75-$150) is waived when you proceed with hardware repair. 
                  Warranty covers manufacturing defects only, not accidental damage.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingTransparency;