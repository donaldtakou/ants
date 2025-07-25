// pages/index.tsx
"use client"
import Header from "../components/Header";
import React, { useState } from 'react';
import Footer from "../components/Footer";
import ServiceCard from "../components/Servicecard";
import UserTypeSelector from "../components/Usertyp";

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

function Cap1() {
  return (
      <img
        src="/icons/cap1.png"
        alt="TikTok"
       className="w-full h-full  object-cover"
      />
  );
}
function Cap2() {
  return (
      <img
        src="/icons/cap2.png"
        alt="TikTok"
       className="w-full h-auto  object-cover"
      />
  );
}
function Cap3() {
  return (
      <img
        src="/icons/cap2.png"
        alt="TikTok"
       className="w-full h-auto object-cover"
      />
  );
}








export default function Home() {

      const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('Grand public');

  const tabs = [
    'Grand public',
    'Professionnels de l\'automobile',
    
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
     
    
      case 'Professionnels de l\'automobile':
        return {
          title: 'Retrouvez toute l\'information vous concernant sur l\'espace dédié aux professionnels de l\'automobile sur les sites de France Titres',
          subtitle: 'Me rendre sur le site pha.ants.gouv.fr',
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
      title: 'Voir toute l\'actualité ',
      icon: <ArrowRight className="w-2 h-2" />,
      external: false
    },
  ]
  const services = [
    {
      title: 'Obtenir un certificat de situation administrative',
      icon: <ExternalLink className="w-5 h-5" />,
      external: false
    },
    {
      title: 'Télécharger un formulaire CERFA',
      icon: <ArrowRight className="w-5 h-5" />,
      external: true
    },
    {
      title: 'Simuler le côut de votre certificat d\'immatriculation',
      icon: <ExternalLink className="w-5 h-5" />,
      external: false
    },
    {
      title: 'Consulter la liste des garages habilités à détruire votre véhicule',
      icon: <ArrowRight className="w-5 h-5" />,
      external: false
    },
      
  ];

   const services2 = [
    {
      title: 'Le systeme d\'immatriculation d\'un vehicule (SIV) ',
      icon: <ExternalLink className="w-5 h-5" />,
      external: false
    },
    {
      title: 'Taxes sur les cartes grises',
      icon: <ArrowRight className="w-5 h-5" />,
      external: true
    },
    {
      title: 'L\'application simplimmat',
      icon: <ExternalLink className="w-5 h-5" />,
      external: false
    },
  
      
  ];

  const mainCards = [
    {
      title: 'Suivre ma démarche ne ligne',
      icon: (
        <Icap1 />
      ),
      lien: " "
    },
    {
      title: 'Suivre l\'expédition de votre carte grise',
      icon: (
        <Icap1 />
      ),
      lien: " "
    },
    {
      title: 'Démarches d\'Immatriculation ',
      icon: (
        <Icap1 />
      ),
      lien: "https://passeport.ants.gouv.fr/?lang=fr"
    },
   
  ];

   const mainCards2 = [
    {
      title: 'la carte grise numérique arrive dans France Identité',
      imag: (
        <Cap1 />
      ),
      icon: <ArrowRight className="w-5 h-5" />,
      lien: " "
    },
    {
      title: 'Simplimmat.gouv dépasse le million de téléchargements',
      imag: (
        <Cap2 />
      ),
      icon: <ArrowRight className="w-5 h-5" />,
      lien: " "
    },
    {
      title: 'France Identité : connectez-vous à un service via FranceConnnect sans mot de passe , ni identifiant  ',
      imag: (
        <Cap3 />
      ),
      icon: <ArrowRight className="w-5 h-5" />,
      lien: "https://passeport.ants.gouv.fr/?lang=fr"
    },
   
  ];

    const content = getTabContent();

  return (
  <div className="min-h-screen ">
      <Header />
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 text-center bg-gray-50">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
Bienvenue sur le site dédié à l'immatriculation des véhicules          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
France Titres vous accompagne au quotidien dans la réalisation de vos démarches en ligne concernant l’immatriculation
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}

         <div className=" border border-gray-300 grid grid-cols-1 md:grid-cols-4  sm:grid-rows-4 justify-center max-w-2xl mt-10 rounded   flex flex-col sm:flex-row  w-max-width cursor-pointer">
       
         
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
            <div key={index} className="bg-white  border-b-4 border-[#00007c] p-6 sm:p-6 hover:shadow-md transition-shadow cursor-pointer">
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
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Services et formulaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white gap-2 border border-gray-200 p-20 sm:p-15 hover:shadow-md transition-shadow cursor-pointer group">
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
       <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-2">
Actualités</h2>
     <div className="flex flex-cols justify-between">
    
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-3 p-10">
            {mainCards2.map((service, index) => (
              <div key={index} className="bg-white  border border-gray-200 p-20 sm:p-15 hover:shadow-md transition-shadow cursor-pointer group">
                <div>
                     {service.imag}
                  </div>
                <div className="flex md-flex-rows items-start justify-between">
                  
                  <h3 className="text-lg sm:text-2xl font-medium text-[#00007c] flex-1 pr-4 leading-tight">{service.title}</h3>
                  <div className="text-[#00007c] group-hover:translate-x-1 transition-transform">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

            </div> 
          
             <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
     
          
{content.showServices && (
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
Tout savoir sur l'immatriculation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-10">
            {services2.map((service, index) => (
              <div key={index} className="bg-white gap-2 border border-gray-200 p-20 sm:p-15 hover:shadow-md transition-shadow cursor-pointer group">
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
      </div>
    </div>
       

        

      {/* Dropdown Arrow */}
    
      <Footer />
    </div>
  );
}

