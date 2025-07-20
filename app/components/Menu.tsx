// src/components/SidebarMenu.tsx
import React from "react";
import { User, Info, Globe, ChevronDown, ChevronUp, X } from "lucide-react";

type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
  const [langOpen, setLangOpen] = React.useState(false);
  const [sectionsOpen, setSectionsOpen] = React.useState<{ [key: string]: boolean }>({
    "Vos démarches": false,
    "Actualités": false,
    "L'Agence": false,
    "Aide & Contact":false,
    "Services Publics +":false
  });

  const toggleSection = (section: string) => {
    setSectionsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-500 max-w-full bg-white h-screen shadow-lg transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 ">
        <span className="font-medium text-blue-800"></span>
        <button onClick={onClose} className="text-[#00007c] font-bold flex items-center text-l">
          Fermer
          <X size={16} className="ml-1" />
        </button>
      </div>

      {/* Top Links */}
      <div className="flex flex-col p-4 space-y-3 border-b border-gray-200">
        <button className="flex items-center text-[#00007c] font-medium text-xl">
          <User size={18} className="mr-2" /> Mon compte
        </button>
        <button className="flex items-center text-[#00007c] font-medium m-3 text-xl">
          <Info size={18} className="mr-2" /> Qui sommes-nous?
        </button>
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center text-[#00007c] font-medium m-3 text-xl"
        >
          <Globe size={18} className="mr-2" /> FR
          {langOpen ? <ChevronUp size={16} className="ml-auto" /> : <ChevronDown size={16} className="ml-auto" />}
        </button>
      </div>

      {/* Menu Sections */}
      <div className="p-4 m-4">
        <div className="text-md font-semibold   mb-4 text-[#00007c] border-b border-[#00007c] pb-6">Accueil</div>
        <div className="space-y-2">
          {["Vos démarches", "Actualités", "L'Agence",  "Aide & Contact", "Services Publics +"].map((section) => (
            <div key={section}>
              <button
                onClick={() => toggleSection(section)}
                className="flex items-center pb-6 justify-between w-full text-left font-bold border-b mb-8 mt-8 pl-4 border-gray-200"
              >
                {section}
                {sectionsOpen[section] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {/* Sous-menu (vide pour l'instant) */}
              {sectionsOpen[section] && (
                <div className="pl-4 mt-1 text-gray-600 text-sm">
                  {/* <div>- Sous-item</div> */}
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
