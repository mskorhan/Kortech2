import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Recycling from './pages/Recycling'; 
import TermsConditions from './pages/TermsConditions';
import MailInForm from './pages/MailInForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blog from './pages/Blog';

// Service Pages
import GraphicDesign from './pages/services/GraphicDesign';
import RemoteAssistance from './pages/services/RemoteAssistance';

// Service Landing Pages
import PS5HDMIRepair from './pages/services/PS5HDMIRepair';
import XboxHDMIRepair from './pages/services/XboxHDMIRepair';
import LaptopScreenRepair from './pages/services/LaptopScreenRepair';
import SSDUpgrades from './pages/services/SSDUpgrades';
import VirusMalwareRemoval from './pages/services/VirusMalwareRemoval';
import LaptopRepair from './pages/services/LaptopScreenRepair';
import ITSupport from './pages/services/ITSupport';
import DataRecovery from './pages/services/DataRecovery';
import CustomGamingPC from './pages/services/CustomGamingPC';
import WaterDamageRepair from './pages/services/WaterDamageRepair';
import SmartphoneRepair from './pages/services/SmartphoneRepair';
import TabletIPadRepair from './pages/services/TabletIPadRepair';
import SmartTVRepair from './pages/services/SmartTVRepair';
import PrinterRouterRepair from './pages/services/PrinterRouterRepair';
import PCBMicroSoldering from './pages/services/PCBMicroSoldering';
import ApplianceElectronicsRepair from './pages/services/ApplianceElectronicsRepair';
import BusinessITSupport from './pages/services/ITSupport';
import NintendoSwitchRepair from './pages/services/NintendoSwitchRepair';

// Location Pages
import Charlotte from './pages/locations/Charlotte';
import Matthews from './pages/locations/Matthews';
import IndianTrail from './pages/locations/IndianTrail';
import MintHill from './pages/locations/MintHill';
import Monroe from './pages/locations/Monroe';
import Locations from './pages/locations/Locations';
import Waxhaw from './pages/locations/Waxhaw';
import Pineville from './pages/locations/Pineville';
import Ballantyne from './pages/locations/Ballantyne';
import HowToKnowWhenToReplacePhoneBattery from './pages/blog/HowToKnowWhenToReplacePhoneBattery';
import WhatIsPCBMicroSoldering from './pages/blog/WhatIsPCBMicroSoldering';
import Top5SignsSmartTVNeedsRepair from './pages/blog/Top5SignsSmartTVNeedsRepair';
import SSDUpgradesForLaptops2025 from './pages/blog/SSDUpgradesForLaptops2025';
import DataRecoveryCharlotte2025 from './pages/blog/DataRecoveryCharlotte2025';
import StepsToRemoveVirusFromWindowsPC from './pages/blog/StepsToRemoveVirusFromWindowsPC';
import HowToFixBrokenPS5HDMIPort from './pages/blog/HowToFixBrokenPS5HDMIPort';
import CustomGamingPCBuildGuide2025 from './pages/blog/CustomGamingPCBuildGuide2025';
import SignsHardDriveFailingDataRecoveryTips from './pages/blog/SignsHardDriveFailingDataRecoveryTips';
import LaptopScreenRepairGuideCharlotte from './pages/blog/LaptopScreenRepairGuideCharlotte';
import NintendoSwitchRepairGuide from './pages/blog/NintendoSwitchRepairGuide';
import XboxHDMIRepairGuide from './pages/blog/XboxHDMIRepairGuide';
import VirusRemovalGuideCharlotte from './pages/blog/VirusRemovalGuideCharlotte';
import NotFound from './pages/NotFound';

// New Service Pages
import ComputerRepair from './pages/services/ComputerRepair';
import LaptopRepair from './pages/services/LaptopRepair';
import MacRepair from './pages/services/MacRepair';
import ConsoleRepair from './pages/services/ConsoleRepair';
import PhoneRepair from './pages/services/PhoneRepair';
import TabletRepair from './pages/services/TabletRepair';
import GamingPCBuilds from './pages/services/GamingPCBuilds';
import ElectronicsRecycling from './pages/services/ElectronicsRecycling';

// ScrollToTop component to handle scrolling to top on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  
  React.useEffect(() => {
    // Only scroll to top if there's no hash and it's not a POP navigation (back/forward)
    // or if it's a POP navigation to a different pathname
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } else {
      // If there's a hash, scroll to the element with that id
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, navigationType]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <CookieConsent />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recycling" element={<Recycling />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/mail-in-form" element={<MailInForm />} />
          <Route path="/blog" element={<Blog />} />

          {/* Service Pages */}
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/remote-assistance" element={<RemoteAssistance />} />
          
          {/* New Service Pages with Clean URLs */}
          <Route path="/computer-repair" element={<ComputerRepair />} />
          <Route path="/laptop-repair" element={<LaptopRepair />} />
          <Route path="/mac-repair" element={<MacRepair />} />
          <Route path="/console-repair" element={<ConsoleRepair />} />
          <Route path="/phone-repair" element={<PhoneRepair />} />
          <Route path="/tablet-repair" element={<TabletRepair />} />
          <Route path="/gaming-pc-builds" element={<GamingPCBuilds />} />
          <Route path="/electronics-recycling" element={<ElectronicsRecycling />} />
          
          <Route path="/laptop-repair" element={<LaptopRepair />} />
          {/* Service Landing Pages */}
          <Route path="/ps5-hdmi-repair" element={<PS5HDMIRepair />} />
          <Route path="/xbox-hdmi-repair" element={<XboxHDMIRepair />} />
          <Route path="/laptop-screen-repair" element={<LaptopScreenRepair />} />
          <Route path="/ssd-upgrades" element={<SSDUpgrades />} />
          <Route path="/virus-malware-removal" element={<VirusMalwareRemoval />} />
          <Route path="/it-support" element={<ITSupport />} />
          <Route path="/business-it-support" element={<BusinessITSupport />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/custom-gaming-pc" element={<CustomGamingPC />} />
          <Route path="/water-damage-repair" element={<WaterDamageRepair />} />
          <Route path="/smartphone-screen-repair-charlotte" element={<SmartphoneRepair />} />
          <Route path="/tablet-ipad-repair" element={<TabletIPadRepair />} />
          <Route path="/smart-tv-repair" element={<SmartTVRepair />} />
          <Route path="/printer-router-repair" element={<PrinterRouterRepair />} />
          <Route path="/pcb-micro-soldering" element={<PCBMicroSoldering />} />
          <Route path="/appliance-electronics-repair" element={<ApplianceElectronicsRepair />} />
          <Route path="/nintendo-switch-repair" element={<NintendoSwitchRepair />} />
          
          {/* Location Pages */}
          <Route path="/locations/charlotte" element={<Charlotte />} />
          <Route path="/locations/matthews" element={<Matthews />} />
          <Route path="/locations/indian-trail" element={<IndianTrail />} />
          <Route path="/locations/mint-hill" element={<MintHill />} />
          <Route path="/locations/monroe" element={<Monroe />} />
          <Route path="/locations/waxhaw" element={<Waxhaw />} />
          <Route path="/locations/pineville" element={<Pineville />} />
          <Route path="/locations/ballantyne" element={<Ballantyne />} />
          <Route path="/locations" element={<Locations />} />
          
          {/* Legacy redirects - these will be handled by .htaccess but keeping for SPA routing */}
          <Route path="/charlotte-computer-repair" element={<Charlotte />} />
          <Route path="/matthews-computer-repair" element={<Matthews />} />
          <Route path="/indian-trail-computer-repair" element={<IndianTrail />} />
          <Route path="/mint-hill-computer-repair" element={<MintHill />} />
          <Route path="/monroe-computer-repair" element={<Monroe />} />
          
          {/* Blog Posts */}
          <Route path="/blog/how-to-know-when-to-replace-phone-battery" element={<HowToKnowWhenToReplacePhoneBattery />} />
          <Route path="/blog/what-is-pcb-micro-soldering" element={<WhatIsPCBMicroSoldering />} />
          <Route path="/blog/top-5-signs-smart-tv-needs-repair" element={<Top5SignsSmartTVNeedsRepair />} />
          <Route path="/blog/best-ssd-upgrade-old-laptop-2025" element={<SSDUpgradesForLaptops2025 />} />
          <Route path="/blog/data-recovery-charlotte-2025" element={<DataRecoveryCharlotte2025 />} />
          <Route path="/blog/steps-to-remove-virus-from-windows-pc" element={<StepsToRemoveVirusFromWindowsPC />} />
          <Route path="/blog/how-to-fix-broken-ps5-hdmi-port" element={<HowToFixBrokenPS5HDMIPort />} />
          <Route path="/blog/custom-gaming-pc-build-guide-2025" element={<CustomGamingPCBuildGuide2025 />} />
          <Route path="/blog/signs-hard-drive-failing-data-recovery-tips" element={<SignsHardDriveFailingDataRecoveryTips />} />
          <Route path="/blog/laptop-screen-repair-guide-charlotte" element={<LaptopScreenRepairGuideCharlotte />} />
          <Route path="/blog/nintendo-switch-repair-guide" element={<NintendoSwitchRepairGuide />} />
          <Route path="/blog/xbox-hdmi-repair-guide" element={<XboxHDMIRepairGuide />} />
          <Route path="/blog/virus-removal-guide-charlotte" element={<VirusRemovalGuideCharlotte />} />
          
          {/* 404 Page - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;