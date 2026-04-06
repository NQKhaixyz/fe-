import { FileDown, Table, TrendingUp, Clock, CheckCircle2, Eye, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';

export function BillsPayments() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 dark:text-blue-100 mb-1 font-headline">Bills & Payments</h2>
          <p className="text-slate-500 font-medium">Financial oversight for the lunar residential complex.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest text-on-surface-variant font-bold text-sm rounded-xl shadow-sm hover:bg-surface-container-high transition-colors">
            <FileDown className="w-5 h-5" />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest text-on-surface-variant font-bold text-sm rounded-xl shadow-sm hover:bg-surface-container-high transition-colors">
            <Table className="w-5 h-5" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Stats Overview - Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Stat: Total Revenue */}
        <div className="md:col-span-6 bg-primary-container text-white p-8 rounded-[2rem] relative overflow-hidden shadow-xl shadow-primary/10">
          <div className="relative z-10">
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest mb-4">Total Revenue Monthly</p>
            <h3 className="text-5xl font-black mb-6 font-headline">$142,580<span className="text-2xl font-medium opacity-60">.00</span></h3>
            <div className="flex items-center gap-4">
              <span className="flex items-center text-xs font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.4% vs last month
              </span>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Unpaid Stats */}
        <div className="md:col-span-3 bg-error-container p-8 rounded-[2rem] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-error mb-6 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold text-on-error-container uppercase tracking-wider mb-1">Unpaid Balance</p>
            <h3 className="text-3xl font-extrabold text-on-error-container font-headline">$12,450</h3>
          </div>
          <p className="text-xs text-on-error-container/70 font-medium">14 Outstanding Invoices</p>
        </div>

        {/* Paid Stats */}
        <div className="md:col-span-3 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-6 shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Payment Success</p>
            <h3 className="text-3xl font-extrabold text-on-surface font-headline">92.4%</h3>
          </div>
          <p className="text-xs text-secondary font-medium">Goal: 95% Monthly</p>
        </div>
      </div>

      {/* Filters & Data Table Container */}
      <div className="bg-surface-container-low rounded-[2rem] p-4">
        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 mb-2">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="bg-surface-container-lowest px-4 py-2 rounded-xl flex items-center gap-3 shadow-sm">
              <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer outline-none">
                <option>October 2023</option>
                <option>September 2023</option>
                <option>August 2023</option>
              </select>
            </div>
            <div className="bg-surface-container-lowest px-4 py-2 rounded-xl flex items-center gap-3 shadow-sm">
              <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer outline-none">
                <option>All Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Overdue</option>
              </select>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant font-medium">Showing 1-10 of 124 results</p>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-[1.5rem] bg-surface-container-lowest shadow-sm">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-surface-container-high/30">
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Invoice ID</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Apartment</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Month/Year</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Total</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Status</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em] text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5 font-bold text-sm text-primary">#BM-10245</td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">A-1204</span>
                    <span className="text-[10px] text-secondary font-medium">Moonrise Tower</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium">Oct 2023</td>
                <td className="px-6 py-5 font-bold text-sm">$257.50</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase bg-primary-fixed text-on-primary-fixed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    Paid
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="text-secondary hover:text-primary transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="px-6 py-5 font-bold text-sm text-primary">#BM-10246</td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">C-0812</span>
                    <span className="text-[10px] text-secondary font-medium">Lunar Heights</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium">Oct 2023</td>
                <td className="px-6 py-5 font-bold text-sm">$287.10</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase bg-error-container text-on-error-container">
                    <span className="w-1.5 h-1.5 rounded-full bg-error mr-2 animate-pulse"></span>
                    Pending
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="text-secondary hover:text-primary transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="px-6 py-4 bg-surface-container-low/50 flex items-center justify-between border-t border-outline-variant/10">
            <button className="px-4 py-2 text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-2 disabled:opacity-30">
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold text-xs">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high transition-colors font-bold text-xs">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high transition-colors font-bold text-xs">3</button>
              <span className="mx-1 text-secondary">...</span>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high transition-colors font-bold text-xs">12</button>
            </div>
            <button className="px-4 py-2 text-sm font-bold text-primary hover:text-primary-container transition-colors flex items-center gap-2">
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contextual Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-extrabold text-blue-900 font-headline">Revenue Analytics</h4>
            <button className="text-primary font-bold text-xs flex items-center gap-1">
              Yearly View <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="h-48 w-full bg-surface-container-low rounded-2xl flex items-end justify-between px-6 pb-4 gap-2">
            {[
              { month: 'May', h1: 'h-24', h2: 'h-16' },
              { month: 'Jun', h1: 'h-32', h2: 'h-24' },
              { month: 'Jul', h1: 'h-20', h2: 'h-12' },
              { month: 'Aug', h1: 'h-40', h2: 'h-36' },
              { month: 'Sep', h1: 'h-28', h2: 'h-20' },
              { month: 'Oct', h1: 'h-36', h2: 'h-30' },
            ].map((col) => (
              <div key={col.month} className={`w-full bg-primary/10 rounded-t-lg ${col.h1} relative group`}>
                <div className={`absolute bottom-0 w-full bg-primary rounded-t-lg ${col.h2} group-hover:h-full transition-all duration-500`}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-secondary uppercase px-6">
            <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <Sparkles className="w-10 h-10 mb-6 text-primary-fixed" />
            <h4 className="text-xl font-bold mb-3 font-headline">Billing Insight</h4>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Utility costs have increased by 8% this month due to higher HVAC usage. We recommend scheduling maintenance for Tower B.
            </p>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl font-bold text-xs uppercase tracking-widest border border-white/20">
              View Report
            </button>
          </div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/0 via-primary/0 to-primary/40 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
