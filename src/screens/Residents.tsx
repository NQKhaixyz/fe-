import { RefreshCw, UserPlus, Filter, Download, MoreVertical, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';

export function Residents() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto">
      {/* Page Header & Action Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-2">
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-100 tracking-tight font-headline">Resident Directory</h2>
          <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">
            Curate and manage your community access points. Monitor credential statuses and registration timelines across the entire estate.
          </p>
        </div>
        <div className="flex items-center justify-start lg:justify-end gap-3 lg:self-end">
          <button className="px-6 py-3 rounded-xl bg-surface-container-highest text-primary font-bold text-sm flex items-center gap-2 hover:bg-surface-container-high transition-all">
            <RefreshCw className="w-5 h-5" />
            Card Renewal
          </button>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/10 hover:scale-[1.02] transition-all">
            <UserPlus className="w-5 h-5" />
            Add Resident
          </button>
        </div>
      </div>

      {/* Stats Layer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)]">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Residents</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-blue-900 font-headline">1,284</span>
            <span className="text-xs text-primary font-bold">+12%</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)]">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Active Cards</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-blue-900 font-headline">1,240</span>
            <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden self-center ml-2">
              <div className="bg-primary h-full w-[96%]"></div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)]">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Expired Soon</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-secondary font-headline">32</span>
            <AlertTriangle className="text-secondary w-4 h-4" />
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)]">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">New this month</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-blue-900 font-headline">45</span>
            <span className="text-xs text-slate-400 font-medium">New entries</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(25,28,30,0.02)]">
        <div className="px-8 py-6 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-lg text-blue-900 font-headline">Directory Listings</h3>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-primary transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-primary transition-colors">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-50">
                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</th>
                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Apartment ID</th>
                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Phone</th>
                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Card Status</th>
                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Registration Date</th>
                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant font-bold text-xs">NL</div>
                    <span className="font-semibold text-blue-900">Nguyen Lam</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-medium text-slate-600">B-1204</td>
                <td className="px-8 py-5 text-sm text-slate-600 font-mono">+84 901 234 567</td>
                <td className="px-8 py-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-primary-fixed text-on-primary-fixed-variant flex w-fit items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-on-primary-fixed-variant"></span>
                    Active
                  </span>
                </td>
                <td className="px-8 py-5 text-sm text-slate-500">12 Oct, 2023</td>
                <td className="px-8 py-5 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              <tr className="bg-surface-container-low/30 hover:bg-slate-50/80 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4x8zHzFAO7AhbRjZCy4a6nM8ebC3QzU2rx-4eoSOX9gJBeyxOn1mKoLZSqmeX8lwziXs5XSs0nhxwVmpOVnfq-wubxLiSalS6mw0npW0_93hS8r7e3R0KBXgieACgCLztMqJbAEsJyRIF8nWvJjTvbVy_sDN4AFe2IgHmRqZACGX7JSPJCtuTkiVbv7jjkP_xYSUR7YCrXpsYePdZzJB1TxWxk73hYEd0GZ2eV7k_R_XimP0s8X7X1o3p2DNzvGLn-tgYQ1J44CxZ" alt="Sarah Jenkins" className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-semibold text-blue-900">Sarah Jenkins</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-medium text-slate-600">A-0501</td>
                <td className="px-8 py-5 text-sm text-slate-600 font-mono">+84 988 776 554</td>
                <td className="px-8 py-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-error-container text-on-error-container flex w-fit items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-on-error-container"></span>
                    Expired
                  </span>
                </td>
                <td className="px-8 py-5 text-sm text-slate-500">28 Aug, 2023</td>
                <td className="px-8 py-5 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-8 py-4 flex items-center justify-between border-t border-slate-50">
          <p className="text-xs text-slate-500 font-medium">Showing 1-2 of 1,284 residents</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-30" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg bg-primary text-on-primary text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-xs font-medium">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-xs font-medium">3</button>
              <span className="px-2 text-slate-400">...</span>
              <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-xs font-medium">257</button>
            </div>
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
