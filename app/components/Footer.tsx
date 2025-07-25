import React from "react";

const socialLinks = [
  {
    href: "https://x.com/documentants",
    label: "X",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path fill="#00007c" d="M19.8 4.2h-3.1L12 8.3 7.3 4.2H4.2l6.1 5.7-6.4 7.9h3.1l4.1-5 4.1 5h3.1l-6.4-7.9 6.1-5.7z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/document-ants-481aa8375",
    label: "LinkedIn",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path fill="#00007c" d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452z"/>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61578797450999",
    label: "Facebook",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path fill="#00007c" d="M22.675 0h-21.35C.592 0 0 .592 0 1.326v21.348C0 23.408.592 24 1.325 24h11.495V14.708h-3.13V11.08h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.628h-3.12V24h6.093c.73 0 1.322-.592 1.322-1.326V1.326C24 .592 23.408 0 22.675 0"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/c/ANTSChaineTV?lang=fr&cbrd=1",
    label: "YouTube",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path fill="#00007c" d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.115c-1.862-.502-9.39-.502-9.39-.502s-7.528 0-9.39.502a2.994 2.994 0 0 0-2.108 2.115c-.502 1.863-.502 5.758-.502 5.758s0 3.895.502 5.758a2.994 2.994 0 0 0 2.108 2.115c1.862.502 9.39.502 9.39.502s7.528 0 9.39-.502a2.994 2.994 0 0 0 2.108-2.115c.502-1.863.502-5.758.502-5.758s0-3.895-.502-5.758zm-13.498 9.814v-7l6.5 3.5-6.5 3.5z"/>
      </svg>
    ),
  },
  {
    href: "https://ants.gouv.fr/nos-missions?lang=fr",
    label: "Vimeo",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path fill="#00007c" d="M22.23 5.924c-.08 1.761-1.307 4.183-3.684 7.262-2.457 3.188-4.531 4.782-6.221 4.782-1.051 0-1.941-.967-2.671-2.899-.486-1.779-.972-3.559-1.458-5.338-.542-1.949-1.12-2.924-1.735-2.924-.134 0-.604.282-1.413.847l-.847-1.099c.9-.792 1.782-1.584 2.646-2.376 1.195-1.043 2.089-1.587 2.684-1.623 1.409-.089 2.277.831 2.601 2.759.352 2.102.596 3.408.731 3.919.406 1.848.852 2.772 1.337 2.772.378 0 .947-.58 1.708-1.741.761-1.161 1.169-2.044 1.224-2.649.109-1.003-.29-1.506-1.198-1.506-.427 0-.868.098-1.323.294.879-2.874 2.555-4.264 5.027-4.164 1.832.064 2.684 1.237 2.547 3.517z"/>
      </svg>
    ),
  },
];

const Footer: React.FC = () => (
  <footer className="bg-white w-full">
    {/* Réseaux sociaux */}
    <div className="bg-[#f5f6fa] pt-6 pb-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="font-semibold text-[#222] text-lg mb-2">Suivez-nous<br className="sm:hidden" /> sur les réseaux sociaux</div>
        <div className="flex space-x-6 mt-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="hover:opacity-70 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    {/* Ligne bleue */}
    <div className="border-b-2" style={{ borderColor: "#00007c" }}></div>
    {/* Bloc institutionnel */}
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
      {/* Logos et texte */}
      <div className="flex flex-row items-start gap-4 min-w-[220px]">
        <img src="/rf-logo.png" alt="République Française" className="h-20 w-auto" />
      </div>
      {/* Liens principaux */}
      
      </div>
      <div className="flex flex-col mx-auto gap-4 text-gray-500 mt-2  md:mt-0 px-12 py-4">
        <a href="https://immatriculation.ants.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#00007c] hover:underline text-gray-500">
          Immatriculation : immatriculation.ants.gouv.fr <span aria-hidden>↗</span>
        </a>
        <a href="https://permisdeconduire.ants.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#00007c] hover:underline text-gray-500">
          Permis de conduire : permisdeconduire.ants.gouv.fr <span aria-hidden>↗</span>
        </a>
        <a href="https://passeport.ants.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#00007c] hover:underline text-gray-500">
          Carte d'identité et passeport : passeport.ants.gouv.fr <span aria-hidden>↗</span>
        </a>
        <a href="https://rendezvouspasseport.ants.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#00007c] hover:underline text-gray-500">
          Prise de RDV en ligne : rendezvouspasseport.ants.gouv.fr <span aria-hidden>↗</span>
        </a>
    </div>
    {/* Liens secondaires */}
    <div className="max-w-7xl mx-auto px-4 md:px-12 pb-2 px-4 py-4">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#222]">
        <a href="https://info.gouv.fr" target="_blank" rel="noopener noreferrer" className="hover:underline">info.gouv.fr</a>
        <a href="https://service-public.fr" target="_blank" rel="noopener noreferrer" className="hover:underline">service-public.fr</a>
        <a href="https://legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" className="hover:underline">legifrance.gouv.fr</a>
        <a href="https://data.gouv.fr" target="_blank" rel="noopener noreferrer" className="hover:underline">data.gouv.fr</a>
      </div>
      <div className="text-xs text-[#222] mt-2 border-t border-gray-200 pt-2">Nos partenaires :</div>
      <div className="flex flex-row items-start gap-4 mx-auto m-8 min-w-[500px]">
        <img src="/part.png" alt="République Française" className="h-14 w-auto" />
      </div>
            <div className="border-t mt-4 text-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 text-gray-500">
            <a href="#" className="hover:underline">Plan du site</a>
            <div>|</div>
            <a href="#" className="hover:underline">Accessibilité : partiellement conforme</a>
            <div>|</div>
            <a href="#" className="hover:underline">Accessibilité des démarches en ligne</a>
            <div>|</div>
            <a href="#" className="hover:underline">Mentions légales</a>
            <div>|</div>
            <a href="#" className="hover:underline">CGU</a>
            <div>|</div>
            <a href="#" className="hover:underline">Données personnelles</a>
            <div>|</div>
            <a href="#" className="hover:underline">Charte de modération des réseaux sociaux</a>
            <div>|</div>
            <a href="#" className="hover:underline">Gestion des cookies</a>
            <div>|</div>
            <a href="#" className="hover:underline">Contactez-nous</a>
            <div>|</div>
            <a href="#" className="hover:underline">Services Publics +</a>
          </div>
        
        </div>
          <br></br><p className="mt-2 md:mt-0">
            Sauf mention contraire, tous les textes de ce site sont sous&nbsp;
            <a href="https://www.etalab.gouv.fr/licence-ouverte-open-licence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-gray-500">
              licence etalab-2.0
            </a>.
          </p>
      </div>

    </div>
  </footer>
);

export default Footer;
