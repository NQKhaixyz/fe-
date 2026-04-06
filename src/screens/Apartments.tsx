import { Filter, Download, Eye, Edit, User, ChevronLeft, ChevronRight } from 'lucide-react';

export function Apartments() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      {/* Filters & Actions Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-on-surface-variant mb-4">Apartment Status</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-6 py-2 bg-primary text-on-primary rounded-full text-sm font-semibold shadow-md shadow-primary/10">All Units</button>
            <button className="px-6 py-2 bg-surface-container-lowest text-secondary border border-outline-variant/10 hover:bg-surface-container-low rounded-full text-sm font-medium transition-all">Occupied</button>
            <button className="px-6 py-2 bg-surface-container-lowest text-secondary border border-outline-variant/10 hover:bg-surface-container-low rounded-full text-sm font-medium transition-all">Vacant</button>
            <button className="px-6 py-2 bg-surface-container-lowest text-secondary border border-outline-variant/10 hover:bg-surface-container-low rounded-full text-sm font-medium transition-all">Maintenance</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/10 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors">
            <Filter className="w-5 h-5" />
            More Filters
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/10 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.03)] border-b-2 border-primary/10">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Total Units</p>
          <div className="flex items-end gap-3">
            <h4 className="text-3xl font-headline font-bold text-primary">1,240</h4>
            <span className="text-xs text-primary-fixed-dim mb-1 font-medium">98.5% capacity</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.03)] border-b-2 border-green-500/10">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Available</p>
          <div className="flex items-end gap-3">
            <h4 className="text-3xl font-headline font-bold text-on-secondary-container">18</h4>
            <span className="text-xs text-secondary-fixed-dim mb-1 font-medium">Ready for move-in</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.03)] border-b-2 border-error/10">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Maintenance</p>
          <div className="flex items-end gap-3">
            <h4 className="text-3xl font-headline font-bold text-error">4</h4>
            <span className="text-xs text-outline-variant mb-1 font-medium">Under repair</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.03)] border-b-2 border-tertiary/10">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Pending Dues</p>
          <div className="flex items-end gap-3">
            <h4 className="text-3xl font-headline font-bold text-tertiary">12</h4>
            <span className="text-xs text-outline-variant mb-1 font-medium">Payment overdue</span>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Room Number</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Floor</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Unit Type</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Resident</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Monthly Fee</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-6 py-5">
                  <div className="font-headline font-bold text-primary">A-101</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Main Wing</div>
                </td>
                <td className="px-6 py-5 text-sm text-secondary font-medium">Floor 01</td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">Studio</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary text-xs font-bold">JD</div>
                    <div className="text-sm font-semibold text-on-surface">Johnathan Doe</div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-bold text-on-surface text-right">$1,200</td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex items-center px-3 py-1 bg-primary-fixed text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Occupied
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="View Detail"><Eye className="w-5 h-5" /></button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="Edit"><Edit className="w-5 h-5" /></button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-6 py-5">
                  <div className="font-headline font-bold text-primary">B-1204</div>
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Sky Tower</div>
                </td>
                <td className="px-6 py-5 text-sm text-secondary font-medium">Floor 12</td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">2 Bedroom</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-medium text-slate-400 italic">No Active Resident</div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-bold text-on-surface text-right">$2,450</td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex items-center px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Vacant
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="View Detail"><Eye className="w-5 h-5" /></button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="Edit"><Edit className="w-5 h-5" /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between">
          <p className="text-xs font-medium text-on-surface-variant">Showing 1 to 2 of 1,240 units</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-slate-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary text-xs font-bold rounded-lg shadow-md shadow-primary/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high text-xs font-medium rounded-lg">2</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high text-xs font-medium rounded-lg">3</button>
            <span className="text-slate-400 px-1">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high text-xs font-medium rounded-lg">310</button>
            <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-slate-400">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
