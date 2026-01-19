import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  MessageSquare, 
  Wallet, 
  User, 
  Dog, 
  Clock, 
  MapPin, 
  Star, 
  Camera, 
  AlertCircle,
  ChevronRight,
  Settings,
  LogOut,
  HelpCircle,
  Plus,
  ArrowLeft
} from "lucide-react";

const DashboardPreview = () => {
  const [activeRole, setActiveRole] = useState<'owner' | 'walker'>('owner');
  const [activeTab, setActiveTab] = useState('home');

  // Colors from Master Plan
  const colors = {
    emerald: '#10b981', // Vert Émeraude
    midnight: '#0f172a', // Bleu Nuit
    darkBg: '#111827',
    cardBg: '#1f2937',
    sos: '#ef4444' // Rouge SOS
  };

  const TabBar = ({ role }: { role: 'owner' | 'walker' }) => {
    const tabs = role === 'owner' 
      ? [
          { id: 'home', icon: Search, label: 'Accueil' },
          { id: 'missions', icon: MessageSquare, label: 'Missions' },
          { id: 'calendar', icon: Calendar, label: 'Calendrier' },
          { id: 'profile', icon: User, label: 'Profil' }
        ]
      : [
          { id: 'home', icon: Search, label: 'Accueil' },
          { id: 'planning', icon: Calendar, label: 'Planning' },
          { id: 'gains', icon: Wallet, label: 'Gains' },
          { id: 'profile', icon: User, label: 'Profil' }
        ];

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a] border-t border-slate-800 px-6 py-3 flex justify-between items-center z-50">
        {tabs.map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 ${activeTab === tab.id ? 'text-[#10b981]' : 'text-slate-400'}`}
          >
            <tab.icon className="h-6 w-6" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    );
  };

  const OwnerHome = () => (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="bg-[#10b981] p-6 rounded-b-[2.5rem] mb-6">
        <h1 className="text-2xl font-bold text-white mb-6">Bonjour, Thomas 👋</h1>
        <div className="bg-[#1f2937] p-6 rounded-2xl shadow-xl space-y-4">
          <div>
            <label className="text-slate-400 text-xs font-bold uppercase mb-2 block">Type de service</label>
            <div className="bg-[#111827] p-3 rounded-xl border border-slate-700 flex justify-between items-center">
              <span className="text-white flex items-center gap-2"><Dog className="h-4 w-4 text-[#10b981]" /> Choisir une option</span>
              <ChevronRight className="h-4 w-4 text-slate-500" />
            </div>
          </div>
          <div>
            <label className="text-slate-400 text-xs font-bold uppercase mb-2 block">Dates</label>
            <div className="bg-[#111827] p-3 rounded-xl border border-slate-700 flex justify-between items-center">
              <span className="text-white flex items-center gap-2"><Calendar className="h-4 w-4 text-[#10b981]" /> Choisir une option</span>
              <ChevronRight className="h-4 w-4 text-slate-500" />
            </div>
          </div>
          <div>
            <label className="text-slate-400 text-xs font-bold uppercase mb-2 block">Taille du chien</label>
            <div className="bg-[#111827] p-3 rounded-xl border border-slate-700 flex justify-between items-center">
              <span className="text-white flex items-center gap-2"><Dog className="h-4 w-4 text-[#10b981]" /> Choisir une option</span>
              <ChevronRight className="h-4 w-4 text-slate-500" />
            </div>
          </div>
          <button className="w-full bg-[#10b981] text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20">Rechercher</button>
        </div>
      </div>

      <div className="px-6">
        <h2 className="text-white font-bold text-lg mb-4">Promeneurs disponibles</h2>
        <div className="space-y-4">
          {[
            { name: "Alice Genois", price: "15€", rating: 4.9 },
            { name: "Marc Beaulieu", price: "20€", rating: 4.8 },
            { name: "Camille Dubois", price: "18€", rating: 4.7 }
          ].map((walker, i) => (
            <div key={i} className="bg-[#1f2937] p-4 rounded-2xl flex items-center justify-between border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-700 border-2 border-[#10b981]"></div>
                <div>
                  <p className="text-white font-bold">{walker.name}</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className={`h-3 w-3 ${s <= 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />)}
                    <span className="text-[10px] text-slate-400 ml-1">{walker.rating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#10b981] font-bold text-lg">{walker.price}</p>
                <p className="text-[10px] text-slate-500">Per perwalk</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WalkerHome = () => (
    <div className="animate-in fade-in duration-500 pb-24">
      <div className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-4 bg-[#10b981] rounded-full relative">
            <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-white font-bold text-sm">Disponible</span>
        </div>
      </div>

      <div className="px-6 mb-8">
        <div className="bg-[#10b981] rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 bg-[#065f46] text-white font-bold text-sm">Mission en cours</div>
          <div className="p-4 flex gap-4">
            <div className="h-20 w-24 bg-slate-700 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=200" alt="Dog" className="w-full h-full object-cover" />
            </div>
            <div className="text-white">
              <p className="text-xs opacity-80">Parc Monceau | 12:45 - 13:30</p>
              <p className="font-bold text-lg">Max, Golden Retriever</p>
              <div className="flex gap-2 mt-3">
                <button className="bg-[#1f2937] p-2 rounded-lg flex items-center gap-2 text-[10px] font-bold"><Camera className="h-3 w-3" /> Envoyer Photo</button>
                <button className="bg-[#1f2937] p-2 rounded-lg flex items-center gap-2 text-[10px] font-bold"><MessageSquare className="h-3 w-3" /> Message</button>
                <button className="bg-[#ef4444] px-4 py-2 rounded-lg text-[10px] font-bold shadow-lg shadow-red-900/40">SOS</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <h2 className="text-white font-bold text-lg mb-4">Demandes en attente</h2>
        <div className="space-y-3">
          {[
            { name: "Balade avec Luna", dist: "1 km", time: "15 min" },
            { name: "Sortie avec Rocky", dist: "500 m", time: "30 min" },
            { name: "Promenade avec Bella", dist: "2 km", time: "45 min" }
          ].map((req, i) => (
            <div key={i} className="bg-[#1f2937] p-4 rounded-2xl flex items-center justify-between border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-lg">🐕</div>
                <div>
                  <p className="text-white font-bold">{req.name}</p>
                  <p className="text-[10px] text-[#10b981] font-bold">À {req.dist} • {req.time}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const GainsView = () => (
    <div className="animate-in slide-in-from-right duration-500 p-6 pb-24">
      <div className="flex items-center gap-4 mb-8">
        <ArrowLeft className="text-white h-6 w-6" onClick={() => setActiveTab('home')} />
        <h1 className="text-xl font-bold text-white">Mes Revenus</h1>
      </div>

      <div className="bg-[#1f2937] p-6 rounded-3xl mb-6 border border-slate-800">
        <p className="text-slate-400 text-sm mb-1">Revenus hebdomadaires</p>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-3xl font-bold text-white">176 € <span className="text-sm font-normal opacity-60">cette semaine</span></h2>
          <div className="bg-[#111827] px-3 py-1 rounded-lg text-[#10b981] text-xs font-bold">102 €</div>
        </div>
        
        {/* Simple Chart Representation */}
        <div className="h-32 flex items-end justify-between gap-2 mb-2">
          {[30, 45, 25, 60, 40, 80, 65].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-[#10b981]/20 rounded-t-md relative overflow-hidden" style={{ height: `${h}%` }}>
                <div className="absolute bottom-0 left-0 right-0 bg-[#10b981]" style={{ height: '30%' }}></div>
              </div>
              <span className="text-[10px] text-slate-500 font-bold">L M M J V S D".split(" ")[i]</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1f2937] p-6 rounded-3xl mb-6 border border-slate-800 flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">Solde disponible</p>
          <p className="text-2xl font-bold text-white">258,00 €</p>
        </div>
        <ChevronRight className="h-6 w-6 text-slate-500" />
      </div>

      <div className="bg-[#1f2937] p-6 rounded-3xl border border-slate-800 flex justify-between items-center">
        <p className="text-white font-bold">Historique des virements</p>
        <ChevronRight className="h-6 w-6 text-slate-500" />
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="animate-in slide-in-from-bottom duration-500 pb-24">
      <div className="bg-[#10b981] p-10 rounded-b-[3rem] flex flex-col items-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-6">Menu</h1>
        <div className="h-24 w-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center text-4xl">👤</div>
      </div>

      <div className="px-6 space-y-4">
        {[
          { icon: Dog, label: "Mes Chiens", extra: "2 Chiens" },
          { icon: User, label: "Mon Profil" },
          { icon: Settings, label: "Paramètres" },
          { icon: HelpCircle, label: "Aide & Support" },
          { icon: LogOut, label: "Déconnexion", color: "text-red-400" }
        ].map((item, i) => (
          <div key={i} className="bg-[#1f2937] p-5 rounded-2xl flex items-center justify-between border border-slate-800">
            <div className="flex items-center gap-4">
              <item.icon className={`h-6 w-6 ${item.color || 'text-white'}`} />
              <span className={`font-bold ${item.color || 'text-white'}`}>{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.extra && <span className="text-xs text-slate-500 font-bold">{item.extra}</span>}
              <ChevronRight className="h-5 w-5 text-slate-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111827] font-sans overflow-x-hidden">
      {/* Role Switcher (For Preview Only) */}
      <div className="fixed top-4 right-4 z-[100] flex gap-2 bg-[#0f172a] p-1 rounded-full border border-slate-700 shadow-2xl">
        <button 
          onClick={() => { setActiveRole('owner'); setActiveTab('home'); }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeRole === 'owner' ? 'bg-[#10b981] text-white' : 'text-slate-400'}`}
        >
          Propriétaire
        </button>
        <button 
          onClick={() => { setActiveRole('walker'); setActiveTab('home'); }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeRole === 'walker' ? 'bg-[#10b981] text-white' : 'text-slate-400'}`}
        >
          Promeneur
        </button>
      </div>

      {/* Content Area */}
      <div className="max-w-md mx-auto min-h-screen relative">
        {activeRole === 'owner' ? (
          <>
            {activeTab === 'home' && <OwnerHome />}
            {activeTab === 'profile' && <ProfileView />}
            {activeTab !== 'home' && activeTab !== 'profile' && (
              <div className="flex flex-col items-center justify-center h-screen text-slate-500 p-10 text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h2 className="text-xl font-bold text-white mb-2">Onglet en construction</h2>
                <p>L'interface "{activeTab}" sera finalisée après validation de la structure globale.</p>
                <button onClick={() => setActiveTab('home')} className="mt-6 text-[#10b981] font-bold">Retour à l'accueil</button>
              </div>
            )}
          </>
        ) : (
          <>
            {activeTab === 'home' && <WalkerHome />}
            {activeTab === 'gains' && <GainsView />}
            {activeTab === 'profile' && <ProfileView />}
            {activeTab === 'planning' && (
              <div className="p-6 pb-24">
                <h1 className="text-2xl font-bold text-white mb-8">Planning</h1>
                <div className="space-y-6">
                  {[
                    { time: "09:30 AM", name: "Bella", addr: "631 Oak St" },
                    { time: "11:00 AM", name: "Oliver", addr: "268 Maple Ave" },
                    { time: "01:30 PM", name: "Daisy", addr: "395 Cedar Ln" },
                    { time: "03:30 PM", name: "Charlie", addr: "17 Birch Rd" }
                  ].map((m, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-16 text-[10px] font-bold text-slate-500 pt-2">{m.time}</div>
                      <div className="flex-1 bg-[#1f2937] p-4 rounded-2xl border-l-4 border-[#10b981]">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                          <div>
                            <p className="text-white font-bold text-sm">{m.name}</p>
                            <p className="text-[10px] text-slate-500">{m.addr}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <TabBar role={activeRole} />
      </div>
    </div>
  );
};

export default DashboardPreview;
