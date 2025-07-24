"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Info } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


interface UserProfile {
  userType: 'Huissier' | 'Avocat' | 'Notaire' | 'Particulier' | '';
  civilite: 'Madame' | 'Monsieur' | '';
  prenom: string;
  nom: string;
  dateNaissance: {
    jour: string;
    mois: string;
    annee: string;
  };
  e_mail: string;
  confirm_mail: string;
  numero: number;
  password: string;
  confirm_password: string;
}

const LoginPage: React.FC = () => {

  const router = useRouter();

  const [tab, setTab] = useState(false); // false: connexion, true: création de compte
  const [isActive, setIsActive] = useState(false);
  const [step, setStep] = useState<number>(1);

  /// loginnnn

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [error, setError] = useState<string | null>(null);


  ////hummmmmm

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    setError(null); // reset erreur
    const res = await axios.post('https://backend-u7yr.onrender.com/api/auth/login', {
      email,
      password
    });
    
    if (res.data.success) {
      // Stocker le token (localStorage ou cookie)
      localStorage.setItem('token', res.data.token);
      // Rediriger
      router.push('connexion/moncompte'); // ou la page où tu veux
    }
  } catch (err: any) {
    console.error(err);
    setError(err.response?.data?.message || "Erreur lors de la connexion.");
  }
};



  const [userProfile, setUserProfile] = useState<UserProfile>({
    userType: '',
    civilite: '',
    prenom: '',
    nom: '',
    dateNaissance: { jour: '', mois: '', annee: '' },
    e_mail: '',
    confirm_mail: '',
    numero: 0,
    password: '',
    confirm_password: ''
  });
  const [inputCode, setInputCode] = useState("");
  const [codeSent, setCodeSent] = useState(""); // on peut l’enlever si backend envoie
  const [formData, setFormData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'jour' || name === 'mois' || name === 'annee') {
      setUserProfile(prev => ({
        ...prev,
        dateNaissance: { ...prev.dateNaissance, [name]: value }
      }));
    } else {
      setUserProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserProfile(prev => ({ ...prev, userType: e.target.value as UserProfile['userType'] }));
  };

  // Etape 1 : soumission du formulaire inscription
  const handleSubmitStep1 = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userProfile.password !== userProfile.confirm_password) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    if (userProfile.e_mail !== userProfile.confirm_mail) {
      alert("Les emails ne correspondent pas !");
      return;
    }

    try {
      await axios.post('https://backend-u7yr.onrender.com/api/auth/register', {
        email: userProfile.e_mail,
        password: userProfile.password,
        userType: userProfile.userType,
        prenom: userProfile.prenom,
        nom: userProfile.nom,
        numero: userProfile.numero,
        dateNaissance: userProfile.dateNaissance,
        code
      });
      alert("✅ Code envoyé par mail !");
      setFormData(userProfile);
      setStep(2);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Erreur lors de l'enregistrement.....");
    }
  };

  // Etape 2 : vérification du code
  const handleSubmitStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-u7yr.onrender.com/api/auth/verify-code', {
        email: userProfile.e_mail,
        code: inputCode
      });
      alert("✅ Vérification réussie !");
      setStep(3);
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "Code invalide ou expiré");
    }
  };

 


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;

  if (name === 'jour' || name === 'mois' || name === 'annee') {
    setUserProfile(prev => ({
      ...prev,
      dateNaissance: { ...prev.dateNaissance, [name]: value }
    }));
  } else if (name === 'numero') {
    setUserProfile(prev => ({
      ...prev,
      numero: parseInt(value) || 0
    }));
  } else {
    setUserProfile(prev => ({
      ...prev,
      [name]: value
    }));
  }
};


  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

   // État pour stocker le profil utilisateur sélectionné


  // État pour gérer l'étape actuelle du processus d'inscription
  const [currentStep, setCurrentStep] = useState<number>(1);

  const code = Math.floor(100000 + Math.random() * 900000).toString();



  return (
    <div className="min-h-screen ">
          <Header />
    <div className="min-h-screen bg-white flex flex-col items-center py-14 px-10 font-sans">
      {/* Titre */}
            <div className="flex w-full max-w-5xl mb-6  border-gray-200">

      <h1 className="text-4xl font-bold mb-6">Votre compte</h1>
            </div>

      {/* Navigation tabs */}
     
      <div className="flex w-full max-w-5xl mb-10  border-gray-200">
        <button onClick={ ()=>setTab(false) } className="px-8 py-2 max-w-3xl text-lg font-medium border-b-2 border-[#00007c] text-[#00007c]">
          Je me connecte
        </button>
        <button  onClick={ ()=>setTab(true)} className="ml-auto px-6 max-w-3xl py-2 text-base font-medium border-b-2 border-transparent hover:border-[#00007c] hover:text-blue-900 transition">
          Je crée un compte
        </button>
      </div>

      {/* Grid */}
            { tab === false && (<div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Méthodes alternatives */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Me connecter via l&apos;une de ces solutions
          </h2>
          <div className="space-y-4">

            {/* FranceConnect */}
            <div className="border-b-4 border-[#00007c] shadow rounded bg-white shadow flex flex-col p-6 cursor-pointer">
              <span className="font-bold text-[#00007c] mb-2">Avec FranceConnect</span>
              <span className="text-gray-700 text-sm">Vous êtes résident et/ou citoyen français.</span>
            </div>

            {/* France Identité */}
            <div className="border-b-4 border-[#00007c] rounded bg-white shadow flex flex-col p-8">
              <div className="flex items-center mb-1">
                {/* Fake icon (placez ici la vraie SVG si besoin) */}
                <div className="w-6 h-6 bg-blue-200 rounded mr-2 flex items-center justify-center">
                  <span role="img" aria-label="Carte">🪪</span>
                </div>
                <span className="font-bold text-[#00007c]">Avec l&apos;application France Identité</span>
              </div>
              <span className="text-gray-700 text-sm">
                Vous possédez une carte nationale d’identité au format carte bancaire et un téléphone compatible.
              </span>
            </div>

            {/* Identité UE */}
            <div className="border shadow border-gray-200 bg-white shadow flex flex-col p-8 opacity-50 relative">
              <span className="absolute top-2 left-2 bg-gray-100 text-gray-700 text-xs rounded px-2 py-0.5 border border-gray-300">Bientôt disponible</span>
              <span className="font-semibold text-gray-700 mt-4">Avec une identité numérique d’un autre pays membre de l’Union Européenne</span>
            </div>

            {/* NC Connect */}
            <div className="border-b-4 border-[#00007c] rounded bg-white shadow flex flex-col p-8">
              <div className="flex items-center mb-1">
                {/* Fake icon */}
                <div className="w-6 h-6 bg-blue-100 rounded mr-2 flex items-center justify-center">
                  <span role="img" aria-label="ID">💳</span>
                </div>
                <span className="font-semibold text-[#00007c]">Avec NC Connect</span>

                </div>

                 <span className="text-gray-700 text-sm">
                    Vous résidez en Nouvelle-Calédonie              </span>
              
            </div>
          </div>
        </section>

        {/* Connexion ANTS */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Me connecter avec un identifiant ANTS
          </h2>
<form onSubmit={handleLogin} className="flex flex-col space-y-7">

            {/* Identifiant */}
            <div>
              <label htmlFor="identifiant" className="block text-xl font-medium mb-1">
                Identifiant
              </label>
              <input
                id="identifiant"
                type="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 border-[#00007c] rounded bg-gray-100 py-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
              />
              <div>
                <a href="#" className="text-[#00007c] text-xl hover:underline mt-1 inline-block">Identifiant oublié ?</a>
              </div>
            </div>

            {/* Mot de passe */}
            <div>
                <div className="flex justify">
              <label htmlFor="password" className="block text-xl font-medium mb-1 text-base">
                Mot de passe
              </label>
               <label className="mr-10 text-base flex items-center ml-2 text-xl text-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(v => !v)}
                    className=" mr-1 accent-[#00007c]"
                  />
                  Afficher
                </label>
                </div>
              <div className="flex items-center">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b-2 border-[#00007c] rounded bg-gray-100 py-3 px-3 focus:outline-none focus:ring-2 focus:ring-[#00007c] transition"
                />
               
              </div>
              <div>
                <a href="#" className="text-blue-900 text-xl hover:underline mt-1 inline-block">Mot de passe oublié ?</a>
              </div>
            </div>

            {/* Bouton connexion */}
            <button
              type="submit"
              className="w-full bg-[#00007c] text-white font-bold py-4  hover:bg-blue-800 transition"
            >
              Me connecter
            </button>
            <div className="text-center">
              <a href="#" className="text-blue-900 text-xl underline">Je n&apos;ai pas encore de compte</a>
            </div>
          </form>
        </section>
      </div>
        )}

         { tab === true && (
        <div className="w-full max-w-4xl mx-auto mt-10 flex flex-col gap-16">
          {/* Méthodes d'identification */}

          
          <section className="border -lg shadow bg-white">
            <div className="flex items-center justify-between bg-[#00007c] text-white  p-6">
              <div className="text-lg font-semibold">
                Créer un compte via une solution d’identification
              </div>
              <button onClick={handleToggle} className="bg-gray-500 "><span className="text-blue-900 bg-blue-100 px-4 py-4   cursor-pointer">    {isActive === true ? <>&#9650;</> : <>&#9660;</>} {/* Flèche haut si ouvert, bas si fermé */} </span></button>
            </div>

            {(isActive === true && <div className="px-6 pt-2 pb-6">
              <div className="text-sm text-blue-900 mb-6">
                Ceci vous permettra de réaliser toutes les démarches en ligne sans exception.
              </div>
              <div>
                <div className="text-2xl font-bold text-center mb-6">
                  Créer mon compte via l&apos;une de ces solutions
                </div>
                 <div className="space-y-4">

            {/* FranceConnect */}
            <div className="border-b-4 border-[#00007c] shadow rounded max-w-xl ml-25 bg-white shadow flex flex-col p-6 cursor-pointer">
              <span className="font-bold text-[#00007c] mb-2">Avec FranceConnect</span>
              <span className="text-gray-700 text-sm">Vous êtes résident et/ou citoyen français.</span>
            </div>

            {/* France Identité */}
            <div className="border-b-4 border-[#00007c] rounded max-w-xl ml-25 bg-white shadow flex flex-col p-8">
              <div className="flex items-center mb-1">
                {/* Fake icon (placez ici la vraie SVG si besoin) */}
                <div className="w-6 h-6 bg-blue-200 rounded mr-2 flex items-center justify-center">
                  <span role="img" aria-label="Carte">🪪</span>
                </div>
                <span className="font-bold text-[#00007c]">Avec l&apos;application France Identité</span>
              </div>
              <span className="text-gray-700 text-sm">
                Vous possédez une carte nationale d’identité au format carte bancaire et un téléphone compatible.
              </span>
            </div>

            {/* Identité UE */}
            <div className="border shadow border-gray-200 bg-white max-w-xl ml-25 shadow flex flex-col p-8 opacity-50 relative">
              <span className="absolute top-2 left-2 bg-gray-100 text-gray-700 text-xs rounded px-2 py-0.5 border border-gray-300">Bientôt disponible</span>
              <span className="font-semibold text-gray-700 mt-4">Avec une identité numérique d’un autre pays membre de l’Union Européenne</span>
            </div>

            {/* NC Connect */}
            <div className="border-b-4 border-[#00007c] rounded max-w-xl ml-25 bg-white shadow flex flex-col p-8">
              <div className="flex items-center mb-1">
                {/* Fake icon */}
                <div className="w-6 h-6 bg-blue-100 rounded mr-2 flex items-center justify-center">
                  <span role="img" aria-label="ID">💳</span>
                </div>
                <span className="font-semibold text-[#00007c]">Avec NC Connect</span>

                </div>

                 <span className="text-gray-700 text-sm">
                    Vous résidez en Nouvelle-Calédonie              </span>
              
            </div>
          </div>
              </div>
            
            </div>
            )}

          </section>

          {/* OU séparation */}
          <div className="my-0 mx-auto text-2xl font-semibold text-gray-800">OU</div>

          {/* Formulaire création classique */}
          <section className="border  shadow bg-white">
            <div className="flex items-center justify-between bg-[#00007c] text-white  p-6">
              <span className="text-lg font-semibold">Demander un identifiant ANTS</span>
              <button onClick={handleToggle}><span className="text-blue-900 bg-blue-100 px-3 py-1 rounded cursor-pointer">&#9650;</span></button>
            </div>
            {(isActive === true && <div className="px-6 pt-2 pb-6">
              <div className="text-blue-900 text-sm mb-3">
                Certaines démarches d’immatriculation nécessitent de s’identifier uniquement avec FranceConnect
                <span className="inline-block ml-1 text-xs bg-white text-blue-800 rounded-full w-5 h-5 text-center border font-bold" title="info">i</span>
              </div>
              <div className="text-2xl font-bold text-center mb-6">
                Créer votre compte en remplissant le formulaire
              </div>

              {/* Timeline étapes */}
              
              {/* Section des étapes de progression */}
        <div className="mb-12">
          {/* Conteneur des étapes avec ligne de connexion */}
          <div className="flex items-center justify-between mb-8 max-w-3xl mx-auto">
            {/* Étape 1 */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded border-2 flex items-center justify-center font-semibold text-lg ${
                currentStep >= 1 
                  ? 'border-blue-600 bg-white text-blue-600' 
                  : 'border-gray-300 bg-gray-100 text-gray-500'
              }`}>
                1
              </div>
            </div>
            
            {/* Ligne de connexion entre étape 1 et 2 */}
            <div className={`flex-1 h-0.5 mx ${
              currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'
            }`}></div>
            
            {/* Étape 2 */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded border-2 flex items-center justify-center font-semibold text-lg ${
                currentStep >= 2 
                  ? 'border-blue-600 bg-white text-blue-600' 
                  : 'border-gray-300 bg-gray-100 text-gray-500'
              }`}>
                2
              </div>
            </div>
            
            {/* Ligne de connexion entre étape 2 et 3 */}
            <div className={`flex-1 h-0.5 mx ${
              currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'
            }`}></div>
            
            {/* Étape 3 */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded border-2 flex items-center justify-center font-semibold text-lg ${
                currentStep >= 3 
                  ? 'border-blue-600 bg-white text-blue-600' 
                  : 'border-gray-300 bg-gray-100 text-gray-500'
              }`}>
                3
              </div>
            </div>
          </div>
          
          {/* Descriptions des étapes */}
          <div className="flex justify-between items-start text-sm text-gray-600 max-w-3xl mx-auto">
            <div className="text-center flex-1 px-2">
              <p className="font-medium">Renseignez vos coordonnées</p>
            </div>
            <div className="text-center flex-1 px-2">
              <p className="font-medium">Cliquez sur le lien d'activation reçu par courriel</p>
            </div>
            <div className="text-center flex-1 px-2">
              <p className="font-medium">Accédez aux demandes en ligne</p>
            </div>
          </div>
        </div>

        {/* Contenu principal du formulaire */}
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
          
          {/* Message d'information sur les champs obligatoires */}
          
        {step === 1 &&(
          <>
          <div className="mb-8">
            <p className="text-gray-700 text-base">
              Sauf mention contraire, tous les champs sont obligatoires.
            </p>
          </div>
        

          {/* Section de sélection du profil utilisateur */}
          <div className="mb-8">
            {/* Label pour la sélection du type d'utilisateur */}
            <label htmlFor="userType" className="block text-gray-800 font-medium mb-4 text-lg">
              Je suis un
            </label>
            
            {/* Menu déroulant pour sélectionner le type d'utilisateur */}
            <div className="relative">
              <select
                id="userType"
                value={userProfile.userType}
                onChange={handleUserTypeChange}
                className="w-full p-4 border-b-2 border-gray-700 bg-gray-200  rounded  text-gray-700 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors duration-200"
                required
              >
                <option value="">Sélectionnez votre profil</option>
                <option value="Particulier">Particulier</option>
                <option value="Ecole de conduite">Ecole de conduite</option>
                <option value="Centre de sensibilisation à la sécurité routière">Centre de sensibilisation à la sécurité routière</option>
                <option value="Mairie">Mairie</option>
                <option value="Prof. de la vente mobile">Prof. de la vente mobile</option>
                <option value="Loueur">Loueur</option>
                <option value="Centre VHU">Centre VHU</option>
                <option value="Expert">Expert</option>
                <option value="Huissier">Huissier</option>
                <option value="Assureur">Assureur</option>
                <option value="Démolisseur">Démolisseur</option>
                <option value="Partenaire SIV">Partenaire SIV</option>
                <option value="Ventes aux enchères ">Ventes aux enchères</option>
                <option value="Société de crédit">Société de crédit</option>
                
              </select>
            </div>
          </div>

          

          {/* Message d'information avec icône */}
          { userProfile.userType && userProfile.userType !== 'Particulier' && (
            <div className=" border-l-4 border-blue-400 p-2 mb-8">
              <div className="flex items-start">
                {/* Icône d'information */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8   flex items-center justify-center">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Texte d'information */}
                <div className="ml-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    Pour le profil sélectionné, votre compte est créé automatiquement lors de 
                    l'obtention du numéro d'habilitation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Formulaire d'identité pour les particuliers */}
          {userProfile.userType === 'Particulier' && (
            <form  onSubmit={handleSubmitStep1} >
            <div className="space-y-8">
              {/* Section Identité */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6  pb-2">
                  Identité
                </h3>
                
            {/* Civilité */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-3">
                    Civilité
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="civilite"
                        value="Madame"
                        checked={userProfile.civilite === 'Madame'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-800 border-2 border-blue-700 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">Madame</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="civilite"
                        value="Monsieur"
                        checked={userProfile.civilite === 'Monsieur'}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">Monsieur</span>
                    </label>
                  </div>
                </div>

                {/* Prénom et Nom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                       name="prenom"
                     value={userProfile.prenom} onChange={handleChange}
                      className="w-full p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                       name="nom"
                      value={userProfile.nom}
                      onChange={handleChange}
                      className="w-full p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Date de naissance */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-4">
                    Date de naissance
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        Jour
                      </label>
                      <p className="text-xs text-gray-400 mb-1">Exemple : 14</p>
                      <input
                        type="number"
                         name="jour"
                        value={userProfile.dateNaissance.jour}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                        placeholder=""
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        Mois
                      </label>
                      <p className="text-xs text-gray-400 mb-1">Exemple : 07</p>
                      <input
                        type="text"
                        name="mois"
                        value={userProfile.dateNaissance.mois}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                        placeholder=""
                        maxLength={2}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">
                        Année
                      </label>
                      <p className="text-xs text-gray-400 mb-1">Exemple : 1989</p>
                      <input
                        type="text"
                        name="annee"
                        value={userProfile.dateNaissance.annee}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                        placeholder=""
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6  pb-2">
                  Contact
                </h3>

                {/* mail */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-4">
                    Adresse electronique
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      
                      <p className="text-xs text-gray-400 mb-4">Exemple de format attendu : nom@domaine.fr</p>
                      <input
                        type="mail"
                        name="e_mail"
                        value={userProfile.e_mail}
                        onChange={handleInputChange}
                        className="w-full min-w-xl p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                        placeholder=""
                        required
                      />

                    </div>
                  </div>
                </div>
                {/* mail */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-4">
                    Confirmation adresse électronique
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      
                      <p className="text-xs text-gray-400 mb-4">Exemple de format attendu : nom@domaine.fr</p>
                      <input
                        type="mail"
                         name="confirm_mail"
                        value={userProfile.confirm_mail}
                        onChange={handleInputChange}
                        className="w-full min-w-xl p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                        placeholder=""
                        required
                      />

                    </div>
                  </div>
                </div>
                {/* mail */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-1">
                   Numéro de téléphone (facultatif)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div >
                    <label className="block text-gray-700 font-medium mb-1">
                      Indicatif

                    </label>
                    <div>
                    
                    
                     <div className="relative">
              <select
                
                className="w-full p-2 rounded max-w-40 border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                required
              >
                <option value=""></option>
                <option value="Huissier">France</option>
                <option value="Avocat">belgique</option>
                <option value="Notaire">allemagne</option>
                <option value="france">canada</option>
              </select>
            </div>
                    
                </div>

                  </div>
                  <div className="mr-20">
                    <label className="block text-gray-700 font-medium ">
                      Numéro de téléphone
                    </label>
                    <input
                      type="number"
                      name="numero"
                      value={userProfile.numero}
                      onChange={handleInputChange}
                      className="w-full min-w-70  p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                      placeholder=""

                    />
                  </div>
                  </div>
                
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6  pb-2">
                  Sécurité
                </h3>

                   {/* Prénom et Nom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                     <div className="flex justify-between">
                    <label className="block text-gray-700 font-medium mb-2">
                      Mot de passe
                    </label>
                    <label className="block text-gray-700 font-medium mb-2">
                      Afficher
                    </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={userProfile.password}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded border-b-2 border-gray-700 bg-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                    <label className="block text-gray-700 font-medium mb-2">
                      Confirmation mot de passe
                    </label>
                    <label className="block text-gray-700 font-medium mb-2">
                      Afficher
                    </label>
                    </div>
                    <input
                      type="password"
                      name="confirm_password"
                      value={userProfile.confirm_password}
                      onChange={handleInputChange}
                      className="w-full p-2 border-b-2 border-gray-700 bg-gray-200 rounded focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200"
                      placeholder=""
                    />
                  </div>
                </div>

                
                      
                      <p className="text-xs font-bold text-gray-400 mt-4">Votre mot de passe doit contenir au moins :</p>
                      
                        
                 
                      <p className="text-xs text-blue-600 mb">au moins 12 caractères</p>
                      <p className="text-xs text-blue-600 mb">au moins une majuscule et une minuscule</p>
                      <p className="text-xs text-blue-600 mb">au moins un chiffre</p>
                      <p className="text-xs text-blue-600 mb-4">au moins un caractère spécial ou signe de ponctuation (@,!,:,?....)</p>


                      <div>
                        <span> </span>
                        <span className="text-center ml-20">J'ai pris connaissance des <a href="" className="border-b">conditions générales d'utilisation</a> </span>
                      </div>
                      <div className="justify-between items-centered">
                        <button type="submit" className="bg-[#00007c] ml-40 mt-6 p-3 items-center text-white text-xl cursor-pointer">
                            Créer mon compte
                        </button>
                      </div>

                      

                

              </div>

            </div>
            </form>
            

         
          )}
         </> 
        )}
          


<div>

      {step === 2 && (
  <form onSubmit={handleSubmitStep2} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
      Vérification du code
    </h2>
    <p className="text-gray-600 mb-6 text-center">
      Entrez le code que vous avez reçu par email pour confirmer votre inscription.
    </p>
    <input
      type="text"
      value={inputCode}
      onChange={e => setInputCode(e.target.value)}
      className="w-full p-3 border-b-2 border-gray-700 bg-gray-100 rounded focus:border-blue-500 focus:bg-white focus:outline-none transition-colors duration-200 mb-6"
      placeholder="Code de vérification"
      required
    />
    <button
      type="submit"
      className="w-full bg-[#00007c] text-white text-lg font-medium py-3 rounded hover:bg-blue-900 transition-colors duration-200"
    >
      Vérifier le code
    </button>
  </form>
)}



  {step === 3 && (
  <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <span className="text-green-600 text-4xl">🎉</span>
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      Compte créé avec succès !
    </h2>
    <p className="text-gray-600 mb-6">
      Vous pouvez maintenant vous connecter pour accéder à votre espace.
    </p>
    <Link href="/connexion" passHref>
      <span className="block bg-[#00007c] text-white text-lg font-medium py-3 rounded hover:bg-blue-900 transition-colors duration-200 cursor-pointer">
        Aller à la page de connexion
      </span>
    </Link>
  </div>
)}

   
</div>
        
        </div>
            </div>
            )}
            
          </section>
        </div>
      )}
    </div>
     
        <Footer />
    </div>
  );
};



export default LoginPage;
