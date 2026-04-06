import { Search, Globe, Bell } from 'lucide-react';

interface TopBarProps {
  title?: string;
  searchPlaceholder?: string;
}

export function TopBar({ title, searchPlaceholder = "Search..." }: TopBarProps) {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-[0_10px_40px_rgba(25,28,30,0.04)] flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-6 flex-1">
        {title && (
          <h2 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-100 font-headline hidden md:block">
            {title}
          </h2>
        )}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-1 focus:ring-primary/20 focus:bg-white transition-all font-body placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-4">
        {/* VI/EN Toggle */}
        <div className="hidden sm:flex items-center bg-surface-container-high rounded-full p-1 h-10">
          <button className="px-4 text-xs font-bold rounded-full bg-primary text-on-primary h-full flex items-center">EN</button>
          <div className="w-px h-4 bg-outline-variant/30 mx-1"></div>
          <button className="px-4 text-xs font-medium text-slate-500 hover:bg-slate-200 rounded-full h-full flex items-center transition-colors">VI</button>
        </div>

        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500">
          <Globe className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-outline-variant/30 mx-2 hidden sm:block"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-blue-900 dark:text-blue-100 font-manrope leading-tight">Alexander Pierce</p>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-tight">Super Admin</p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCybQw12iJ78vo5wd7rVIe0zZktSeJ9uk5bdYb7NbVWb-KB8gunQH-9O6xjcK0iktCyihEgz-SqOQSQp8y-ywZBhAlgXIoyAhkiaePDbluxB47jZUUx9OZGg0jv7aDCAn1-14ziL8CTcuCN9yNGO_hxm8CrLXgZFjBMTjFO_UHWWuKY5IsCsmMsUyVF-kVyR4q3Qi6v2rGgPwSpNjnjeb3-TqHVGAiwP6JYYCGIj5Nht-5TOL8k4N_t-i7CPxw_sWkuIR-rf_LkcN88"
            alt="Admin Profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
          />
        </div>
      </div>
    </header>
  );
}
