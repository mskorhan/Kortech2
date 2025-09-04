import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGA4 } from './hooks/useGA4';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Recycling from './pages/Recycling';
import MailInForm from './pages/MailInForm';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

// Service pages
import ComputerRepair from './pages/services/ComputerRepair';
import LaptopRepair from './pages/services/LaptopRepair';
import MacRepair from './pages/services/MacRepair';
import ConsoleRepair from './pages/services/ConsoleRepair';
import XboxHDMIRepair from './pages/services/XboxHDMIRepair';
import PS5HDMIRepair from './pages/services/PS5HDMIRepair';
import PhoneRepair from './pages/services/PhoneRepair';
import TabletRepair from './pages/services/TabletRepair';
import DataRecovery from './pages/services/DataRecovery';
import PrinterRouterRepair from './pages/services/PrinterRouterRepair';
import ITSupport from './pages/services/ITSupport';
import GamingPCBuilds from './pages/services/GamingPCBuilds';
import ElectronicsRecycling from './pages/services/ElectronicsRecycling';
import SSDUpgrades from './pages/services/SSDUpgrades';
import VirusMalwareRemoval from './pages/services/VirusMalwareRemoval';
import CustomGamingPC from './pages/services/CustomGamingPC';
import WaterDamageRepair from './pages/services/WaterDamageRepair';
import SmartphoneRepair from './pages/services/SmartphoneRepair';
import TabletIPadRepair from './pages/services/TabletIPadRepair';
import SmartTVRepair from './pages/services/SmartTVRepair';
import PCBMicroSoldering from './pages/services/PCBMicroSoldering';
import ApplianceElectronicsRepair from './pages/services/ApplianceElectronicsRepair';
import NintendoSwitchRepair from './pages/services/NintendoSwitchRepair';
import GraphicDesign from './pages/services/GraphicDesign';
import RemoteAssistance from './pages/services/RemoteAssistance';
import BusinessITSupport from './pages/services/ITSupport';
import LaptopScreenRepair from './pages/services/LaptopScreenRepair';

// Location pages
import Charlotte from './pages/locations/Charlotte';
import Matthews from './pages/locations/Matthews';
import MintHill from './pages/locations/MintHill';
import IndianTrail from './pages/locations/IndianTrail';
import Monroe from './pages/locations/Monroe';
import Waxhaw from './pages/locations/Waxhaw';
import Pineville from './pages/locations/Pineville';
import Ballantyne from './pages/locations/Ballantyne';
import Locations from './pages/locations/Locations';

// Blog pages
import HowToFixBrokenPS5HDMIPort from './pages/blog/HowToFixBrokenPS5HDMIPort';
import SSDUpgradesForLaptops2025 from './pages/blog/SSDUpgradesForLaptops2025';
import StepsToRemoveVirusFromWindowsPC from './pages/blog/StepsToRemoveVirusFromWindowsPC';
import CustomGamingPCBuildGuide2025 from './pages/blog/CustomGamingPCBuildGuide2025';
import SignsHardDriveFailingDataRecoveryTips from './pages/blog/SignsHardDriveFailingDataRecoveryTips';
import HowToKnowWhenToReplacePhoneBattery from './pages/blog/HowToKnowWhenToReplacePhoneBattery';
import WhatIsPCBMicroSoldering from './pages/blog/WhatIsPCBMicroSoldering';
import Top5SignsSmartTVNeedsRepair from './pages/blog/Top5SignsSmartTVNeedsRepair';
import DataRecoveryCharlotte2025 from './pages/blog/DataRecoveryCharlotte2025';
import LaptopScreenRepairGuideCharlotte from './pages/blog/LaptopScreenRepairGuideCharlotte';
import NintendoSwitchRepairGuide from './pages/blog/NintendoSwitchRepairGuide';
import XboxHDMIRepairGuide from './pages/blog/XboxHDMIRepairGuide';
import VirusRemovalGuideCharlotte from './pages/blog/VirusRemovalGuideCharlotte';

function App() {
  useGA4();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recycling" element={<Recycling />} />
            <Route path="/mail-in-form" element={<MailInForm />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* Service pages */}
            <Route path="/computer-repair" element={<ComputerRepair />} />
            <Route path="/laptop-repair" element={<LaptopRepair />} />
            <Route path="/mac-repair" element={<MacRepair />} />
            <Route path="/console-repair" element={<ConsoleRepair />} />
            <Route path="/xbox-hdmi-repair" element={<XboxHDMIRepair />} />
            <Route path="/ps5-hdmi-repair" element={<PS5HDMIRepair />} />
            <Route path="/phone-repair" element={<PhoneRepair />} />
            <Route path="/tablet-repair" element={<TabletRepair />} />
            <Route path="/data-recovery" element={<DataRecovery />} />
            <Route path="/printer-router-repair" element={<PrinterRouterRepair />} />
            <Route path="/it-support" element={<ITSupport />} />
            <Route path="/gaming-pc-builds" element={<GamingPCBuilds />} />
            <Route path="/electronics-recycling" element={<ElectronicsRecycling />} />
            <Route path="/ssd-upgrades" element={<SSDUpgrades />} />
            <Route path="/virus-malware-removal" element={<VirusMalwareRemoval />} />
            <Route path="/custom-gaming-pc" element={<CustomGamingPC />} />
            <Route path="/water-damage-repair" element={<WaterDamageRepair />} />
            <Route path="/smartphone-screen-repair-charlotte" element={<SmartphoneRepair />} />
            <Route path="/tablet-ipad-repair" element={<TabletIPadRepair />} />
            <Route path="/smart-tv-repair" element={<SmartTVRepair />} />
            <Route path="/pcb-micro-soldering" element={<PCBMicroSoldering />} />
            <Route path="/appliance-electronics-repair" element={<ApplianceElectronicsRepair />} />
            <Route path="/nintendo-switch-repair" element={<NintendoSwitchRepair />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/remote-assistance" element={<RemoteAssistance />} />
            <Route path="/business-it-support" element={<BusinessITSupport />} />
            <Route path="/laptop-screen-repair" element={<LaptopScreenRepair />} />

            {/* Location pages */}
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/charlotte" element={<Charlotte />} />
            <Route path="/locations/matthews" element={<Matthews />} />
            <Route path="/locations/mint-hill" element={<MintHill />} />
            <Route path="/locations/indian-trail" element={<IndianTrail />} />
            <Route path="/locations/monroe" element={<Monroe />} />
            <Route path="/locations/waxhaw" element={<Waxhaw />} />
            <Route path="/locations/pineville" element={<Pineville />} />
            <Route path="/locations/ballantyne" element={<Ballantyne />} />

            {/* Legacy location routes */}
            <Route path="/charlotte-computer-repair" element={<Charlotte />} />
            <Route path="/matthews-computer-repair" element={<Matthews />} />
            <Route path="/mint-hill-computer-repair" element={<MintHill />} />
            <Route path="/indian-trail-computer-repair" element={<IndianTrail />} />
            <Route path="/monroe-computer-repair" element={<Monroe />} />

            {/* Blog posts */}
            <Route path="/blog/how-to-fix-broken-ps5-hdmi-port" element={<HowToFixBrokenPS5HDMIPort />} />
            <Route path="/blog/best-ssd-upgrade-old-laptop-2025" element={<SSDUpgradesForLaptops2025 />} />
            <Route path="/blog/steps-to-remove-virus-from-windows-pc" element={<StepsToRemoveVirusFromWindowsPC />} />
            <Route path="/blog/custom-gaming-pc-build-guide-2025" element={<CustomGamingPCBuildGuide2025 />} />
            <Route path="/blog/signs-hard-drive-failing-data-recovery-tips" element={<SignsHardDriveFailingDataRecoveryTips />} />
            <Route path="/blog/how-to-know-when-to-replace-phone-battery" element={<HowToKnowWhenToReplacePhoneBattery />} />
            <Route path="/blog/what-is-pcb-micro-soldering" element={<WhatIsPCBMicroSoldering />} />
            <Route path="/blog/top-5-signs-smart-tv-needs-repair" element={<Top5SignsSmartTVNeedsRepair />} />
            <Route path="/blog/data-recovery-charlotte-2025" element={<DataRecoveryCharlotte2025 />} />
            <Route path="/blog/laptop-screen-repair-guide-charlotte" element={<LaptopScreenRepairGuideCharlotte />} />
            <Route path="/blog/nintendo-switch-repair-guide" element={<NintendoSwitchRepairGuide />} />
            <Route path="/blog/xbox-hdmi-repair-guide" element={<XboxHDMIRepairGuide />} />
            <Route path="/blog/virus-removal-guide-charlotte" element={<VirusRemovalGuideCharlotte />} />

            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;