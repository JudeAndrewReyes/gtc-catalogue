import { useQuoteFormContext } from "../hooks/useQuoteForm.context";

const Footer = () => {
    const { open } = useQuoteFormContext();

  return (
    <footer className="bg-gray-800 text-gray-300" id="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">Gensson Trade Corporation</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Address: DJPMM Access Road, Sta. Clara, Batangas City, Batangas</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>Phone: 043 757 1935 Loc 1932 & 1933</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>Email: gensson@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕒</span>
                <span>Business Hours: Mon-Fri 8AM-5PM</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Equipment Sourcing</li>
              <li>Project Procurement</li>
              <li>Custom Solutions</li>
              <li>Authorized Dealer Network</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#Brands" className="hover:text-white transition-colors">
                  Premium Equipment Brands
                </a>
              </li>
              <li>
                <a 
                    onClick={open}
                    href="#quote" className="hover:text-white transition-colors">
                Get Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#Home" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © 2006 Gensson Trade Corporations. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">
                🏆 Authorized STIHL Dealer Since 2018
              </span>
              {/* <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                ISO 9001 Certified
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;