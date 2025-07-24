// pages/index.tsx
"use client"
import Header from "../../components/Header";
import React, { useState } from 'react';
import Footer from "../../components/Footer";
import ServiceCard from "../../components/Servicecard";
import UserTypeSelector from "../../components/Usertyp";

import { ChevronDown, ExternalLink, ArrowRight } from 'lucide-react';


function Icap1() {
  return (
      <img
        src="/icons/icap1.png"
        alt="TikTok"
        className="w-18 h-18 "
      />
  );
}

function Icap2() {
  return (
      <img
        src="/icons/icap2.png"
        alt="TikTok"
        className="w-18 h-18 "
      />
  );
}

function Icap3() {
  return (
      <img
        src="/icons/icap3.png"
        alt="TikTok"
        className="w-20 h-20"
      />
  );
}

function Icap4() {
  return (
      <img
        src="/icons/icap4.png"
        alt="TikTok"
        className="w-20 h-20"
      />
  );
}





export default function Home() {

      const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('Grand public');

  const tabs = [
    'Grand public',
    'Professionnels de l\'auto',
    'Auto-écoles et CSSR',
    'Agent de mairie'
  ];

   const getTabContent = () => {
    switch (activeTab) {

      case 'Grand public':
        return {
          title: 'Retrouvez toute l\'information vous concernant sur l\'espace dédié aux professionnels de l\'automobile sur les sites de France Titres',
          subtitle: 'Me rendre sur le site pha.ants.gouv.fr',
          showServices: true,
          showMainServices: true,
          showtitle : false
        };
     
    
      case 'Professionnels de l\'auto':
        return {
          title: 'Retrouvez toute l\'information vous concernant sur l\'espace dédié aux professionnels de l\'automobile sur les sites de France Titres',
          subtitle: 'Me rendre sur le site pha.ants.gouv.fr',
          showServices: true,
          showMainServices: false,
          showtitle : true
        };
         case 'Auto-écoles et CSSR':
        return {
          title: 'Retrouvez toute l\'information vous concernant sur l\'espace dédié aux professionnels de l\'auto-écoles et CSSR sur les sites de France Titres',
          subtitle: 'Me rendre sur le site autoecole.ants.gouv.fr',
          showServices: true,
          showMainServices: false,
          showtitle : true
        };
     
      case 'Agent de mairie':
        return {
          title: 'Retrouvez toute l\'information vous concernant sur l\'espace dédié aux agents de mairie sur les sites de France Titres',
          subtitle: 'Me rendre sur le site mairie.ants.gouv.fr',
          showServices: true,
          showMainServices: false,
          showtitle : true
        };
      default:
        return {};
    }
  };

   const aide = [
    {
      title: 'voir toutes les categories d\'aide',
      icon: <ArrowRight className="w-2 h-2" />,
      external: false
    },
  ]
  const services = [
    {
      title: 'Géolocaliser des professionnels habilités à l\'immatriculation',
      icon: <ArrowRight className="w-5 h-5" />,
      external: false
    },
    {
      title: 'Simuler le coût de votre certificat d\'immatriculation',
      icon: <ExternalLink className="w-5 h-5" />,
      external: true
    },
    {
      title: 'Obtenir son permis numérique',
      icon: <ArrowRight className="w-5 h-5" />,
      external: false
    },
    {
      title: 'Accéder aux résultats du permis',
      icon: <ArrowRight className="w-5 h-5" />,
      external: false
    },
      {
      title: 'Géolocaliser une mairie pour traiter ma demande',
      icon: <ArrowRight className="w-5 h-5" />,
      external: false
    },
    {
      title: 'Accès facilités aux rendez-vous en mairie ',
      icon: <ArrowRight className="w-5 h-5" />,
      external: false
    },
    {
      title: 'Acheter un timbre fiscal',
      icon: <ExternalLink className="w-5 h-5" />,
      external: false
    },
  
  ];

  const mainCards = [
    {
      title: 'Immatriculation',
      icon: (
        <Icap1 />
      ),
      lien: " "
    },
    {
      title: 'Permis de conduire',
      icon: (
        <Icap2 />
      ),
      lien: " "
    },
    {
      title: 'Carte d\'identité et passeport',
      icon: (
        <Icap3 />
      ),
      lien: "https://passeport.ants.gouv.fr/?lang=fr"
    },
    {
      title: 'Application France Identité',
      icon: (
       <Icap4 />
      ),
      lien:"https://france-identite.gouv.fr/?lang=fr"
    }
  ];

    const content = getTabContent();

  return (
  <div className="min-h-screen ">
      <Header />
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 text-center bg-gray-50">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Bienvenue sur le site de France Titres - Agence Nationale des Titres Sécurisés
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            France Titres vous accompagne au quotidien dans la réalisation de vos démarches en ligne 
            concernant l'immatriculation, le permis de conduire et vos titres d'identité.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}

         <div className="bg-gray-200 border border-gray-300 grid grid-cols-1 md:grid-cols-4 gap-1 sm:grid-rows-4 justify-center max-w-2xl mt-10 rounded   flex flex-col sm:flex-row  w-max-width cursor-pointer">
       
         
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-2 mx-0 ml-0 rounded sm:border-2 font-medium text-sm text-left sm:text-center whitespace-nowrap  cursor-pointer ${
                  activeTab === tab
                    ? 'border-[#00007c] text-[#00007c] bg-gray-50 sm:bg-white'
                    : 'border-transparent  hover:text-gray-700  sm:hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}

          </div>



               {/* Main Content */}
      <div className="max-w-8xl bg-gray-50 mx-auto px-2 sm:px-2 lg:px-4 py-4">
        {/* Info Banner */}


        {content.showtitle && (<div className="bg-white  border-b-4 border-[#00007c] shadow-sm p-10 mb-8 mt-4 cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[#00007c] text-lg font-semibold mb-2">
                {content.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {content.subtitle}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
          )}
     
        
        
       


     
        {/* Main Cards Grid */}
        {content.showMainServices && (<div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-4 mt-4 sm:mb-12">
          {mainCards.map((card, index) => (
            <div key={index} className="bg-white  border-b-4 border-[#00007c] p-6 sm:p-4 hover:shadow-md transition-shadow cursor-pointer">
              <a href={card.lien}><div className="flex flex-col items-center text-center">
                <div className="mb-6">{card.icon}</div>
                <h3 className=" sm:text-xl font-bold text-[#00007c]  mb-6 leading-tight">{card.title}</h3>
               
              </div>
               </a>
            </div>
          ))}
        </div>
        )}

        

         

        {/* Services Section */}

        {content.showServices && (
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white  border border-gray-200 p-10 sm:p-8 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-2xl font-medium text-[#00007c] flex-1 pr-4 leading-tight">{service.title}</h3>
                  <div className="text-[#00007c] group-hover:translate-x-1 transition-transform">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
          )}

      {/*second*/ }
      
     <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Aides et Contact</h2>
    
            {aide.map((service, index) => (
              <div key={index} className="bg-white  border-t-4 border-[#00007c] p-4 sm:p-6 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-medium text-[#00007c] flex-1 pr-4 leading-tight">{service.title}</h3>
                  <div className="text-blue-800 group-hover:translate-x-1 transition-transform">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          
             <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {mainCards.map((card, index) => (
            <div key={index} className="bg-white  border-b-4 border-[#00007c] p-8 sm:p-10 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl sm:text-xl font-bold text-[#00007c] mb-4 leading-tight">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
      

      {/* Tout savoir Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Tout savoir</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image */}
              <div className="lg:w-1/3">
                <img 
                  src="/image.jpg" 
                  alt="Bâtiment ANTS" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="lg:w-2/3">
                <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                  France Titres vous accompagne dans la réalisation de vos démarches en ligne 
                  liées à l'immatriculation, le permis de conduire, la carte d'identité et le passeport.
                </p>
                
                <div className="space-y-4 text-[#00007c]">
                  <a href="https://ants.gouv.fr/qui-sommes-nous?lang=fr" className="flex items-center text-[#00007c] hover:text-[#00007c] transition-colors group">
                    <span className="border-b border-[#00007c] group-hover:[#00007c]">Qui sommes-nous ?</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a href="https://ants.gouv.fr/nos-missions?lang=fr" className="flex items-center text-[#00007c] hover:text-[#00007c] transition-colors group">
                    <span className="border-b border-[#00007c] group-hover:border-[#00007c]">Nos missions</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a href="https://ants.gouv.fr/nos-resultats?lang=fr" className="flex items-center text-[#00007c] hover:text-[#00007c] transition-colors group">
                    <span className="border-b border-[#00007c] group-hover:border-[#00007c]">Nos résultats</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a href="https://ants.gouv.fr/nos-missions?lang=fr" className="flex items-center text-[#00007c] hover:text-[#00007c] transition-colors group">
                    <span className="border-b border-[#00007c] group-hover:border-[#00007c]">Nos offres d'emplois</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
       

        

      {/* Dropdown Arrow */}
    
      <Footer />
    </div>
  );
}

