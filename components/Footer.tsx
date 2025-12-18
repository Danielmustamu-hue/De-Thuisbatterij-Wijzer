
import React from 'react';
import { AppTab } from '../types';

interface FooterProps {
  onNavigate: (tab: AppTab, anchor?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1A202C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">De Wijzer</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#48BB78] transition text-left">Home</button></li>
            <li><button onClick={() => onNavigate('kennisbank')} className="hover:text-[#48BB78] transition text-left">Kennisbank</button></li>
            <li><button onClick={() => onNavigate('home', 'advies')} className="hover:text-[#48BB78] transition text-left">Hoe het werkt</button></li>
            <li><button onClick={() => onNavigate('home', 'merken')} className="hover:text-[#48BB78] transition text-left">Merken Vergelijken</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Juridisch</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><button onClick={() => onNavigate('legal', 'privacy')} className="hover:text-[#48BB78] transition text-left">Privacybeleid</button></li>
            <li><button onClick={() => onNavigate('legal', 'cookies')} className="hover:text-[#48BB78] transition text-left">Cookieverklaring</button></li>
            <li><button onClick={() => onNavigate('legal', 'voorwaarden')} className="hover:text-[#48BB78] transition text-left">Algemene Voorwaarden</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Over Ons</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            De Thuisbatterij Wijzer is een onafhankelijk adviesplatform. Wij helpen huishoudens bij het maken van de juiste keuze voor energie-opslag. Wij ontvangen mogelijk een commissie van onze partners wanneer u via een link een aankoop doet of een offerte-aanvraag indient. Dit stelt ons in staat om de tool gratis aan te bieden.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
        <p>© 2025 De Thuisbatterij Wijzer - Gecertificeerd onafhankelijk advies.</p>
        <p className="text-center md:text-right">
          Let op: Alle berekeningen zijn indicatief. Voor definitieve installatie adviseren wij altijd een gecertificeerd installateur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
