import { Building2, LayoutDashboard, Users, CreditCard, Settings, Plus, HelpCircle, LogOut, Moon } from 'lucide-react';

interface SidebarProps {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
}

export function Sidebar({ currentScreen, setCurrentScreen }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'apartments', label: 'Apartments', icon: Building2 },
    { id: 'residents', label: 'Residents', icon: Users },
    { id: 'bills', label: 'Bills/Payments', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 dark:bg-slate-950 flex flex-col py-8 z-50">
      <div className="px-8 mb-10">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black text-blue-900 dark:text-blue-100 font-headline leading-none tracking-tight">BlueMoon</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-medium font-manrope">Admin Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-manrope text-sm transition-all duration-300 ease-in-out ${
                isActive
                  ? 'text-blue-900 dark:text-blue-100 font-bold border-r-4 border-blue-900 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/10'
                  : 'text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-6 mb-8">
        <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform">
          <Plus className="w-5 h-5" />
          New Entry
        </button>
      </div>

      <div className="px-4 pt-4 border-t border-slate-100 dark:border-slate-900 space-y-1">
        <button className="w-full flex items-center gap-4 px-4 py-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-blue-700 transition-all font-manrope text-sm mb-1">
          <HelpCircle className="w-5 h-5" />
          <span>Support</span>
        </button>
        <button className="w-full flex items-center gap-4 px-4 py-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-error transition-all font-manrope text-sm">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
