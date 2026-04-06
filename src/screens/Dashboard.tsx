import { Building2, Users, CreditCard, CalendarX, TrendingUp, LogIn, Wrench, Star, MoreHorizontal, Filter, Download } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto">
      {/* Header Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight">Dashboard Overview</h2>
          <p className="text-on-surface-variant mt-1">Welcome back. Here is what's happening today at BlueMoon.</p>
        </div>
        <div className="text-sm text-on-surface-variant bg-surface-container-lowest px-4 py-2 rounded-xl shadow-sm border border-outline-variant/10 w-fit">
          <span className="font-semibold text-primary">Monday, Oct 24</span>
        </div>
      </div>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)] transition-all hover:translate-y-[-4px]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-primary px-2 py-1 bg-primary-fixed/30 rounded-full">+2%</span>
          </div>
          <p className="text-on-surface-variant text-sm font-medium">Total Apartments</p>
          <p className="text-3xl font-black font-headline text-blue-900 mt-1">250</p>
        </div>

        {/* Card 2 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)] transition-all hover:translate-y-[-4px]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-tertiary px-2 py-1 bg-tertiary-fixed/40 rounded-full">+12 new</span>
          </div>
          <p className="text-on-surface-variant text-sm font-medium">Residents</p>
          <p className="text-3xl font-black font-headline text-blue-900 mt-1">850</p>
        </div>

        {/* Card 3 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)] transition-all hover:translate-y-[-4px]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-on-secondary-container px-2 py-1 bg-secondary-container rounded-full">Target 95%</span>
          </div>
          <p className="text-on-surface-variant text-sm font-medium">Total Revenue (Oct)</p>
          <p className="text-3xl font-black font-headline text-blue-900 mt-1">1.2B <span className="text-lg font-bold">VNĐ</span></p>
        </div>

        {/* Card 4 */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_10px_40px_rgba(25,28,30,0.02)] transition-all hover:translate-y-[-4px]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center text-on-error-container">
              <CalendarX className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-error px-2 py-1 bg-error-container/50 rounded-full">High</span>
          </div>
          <p className="text-on-surface-variant text-sm font-medium">Vacant Units</p>
          <p className="text-3xl font-black font-headline text-blue-900 mt-1">42</p>
        </div>
      </div>

      {/* Central Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Monthly Collection Chart Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold font-headline">Service Fee Collection</h3>
                <p className="text-sm text-on-surface-variant">Comparison between current and previous year</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  <span className="text-xs font-medium text-on-surface-variant">2023</span>
                </div>
                <div className="flex items-center gap-1 ml-4">
                  <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full"></span>
                  <span className="text-xs font-medium text-on-surface-variant">2022</span>
                </div>
              </div>
            </div>

            {/* Abstract Chart Representation */}
            <div className="h-64 flex items-end gap-4 px-2">
              {[
                { month: 'JUL', val1: 'h-32', val2: 'h-40', label: '450M' },
                { month: 'AUG', val1: 'h-24', val2: 'h-48', label: '520M' },
                { month: 'SEP', val1: 'h-36', val2: 'h-56', label: '680M' },
                { month: 'OCT', val1: 'h-40', val2: 'h-60', label: '710M' },
                { month: 'NOV', val1: 'h-12', val2: 'h-4', label: '120M' },
                { month: 'DEC', val1: 'h-12', val2: 'h-4', label: '150M' },
              ].map((col) => (
                <div key={col.month} className="flex-1 flex flex-col justify-end gap-1 group">
                  <div className={`w-full bg-primary/10 ${col.val1} rounded-t-md transition-all group-hover:bg-primary/20`}></div>
                  <div className={`w-full bg-primary ${col.val2} rounded-t-md relative`}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-on-surface text-white text-[10px] py-1 px-2 rounded pointer-events-none">{col.label}</div>
                  </div>
                  <span className="text-[10px] text-center mt-2 font-bold text-on-surface-variant">{col.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Insights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-primary p-6 rounded-xl text-white overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-sm font-medium opacity-80 uppercase tracking-widest">Occupancy Rate</h4>
                <p className="text-4xl font-black font-headline mt-2">94.2%</p>
                <p className="text-xs mt-4 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  3.1% from last month
                </p>
              </div>
              <Building2 className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Maintenance Pending</h4>
              <p className="text-4xl font-black font-headline text-blue-900 mt-2">18</p>
              <div className="mt-4 w-full bg-surface-variant rounded-full h-1.5 overflow-hidden">
                <div className="bg-primary h-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Sidebar */}
        <div className="space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold font-headline">Recent Activity</h3>
              <button className="text-xs font-bold text-primary hover:underline">View All</button>
            </div>

            <div className="space-y-6 flex-1">
              {/* Activity Item 1 */}
              <div className="flex gap-4 items-start relative pb-6 border-b border-outline-variant/5">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center">
                  <LogIn className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">New Check-in: Unit B-402</p>
                  <p className="text-xs text-on-surface-variant mt-1">Nguyen Minh Tu moved in today</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-2">2 HOURS AGO</p>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="flex gap-4 items-start relative pb-6 border-b border-outline-variant/5">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center">
                  <CreditCard className="text-error w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Payment Received</p>
                  <p className="text-xs text-on-surface-variant mt-1">14,500,000 VNĐ - Unit C-110</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-2">5 HOURS AGO</p>
                </div>
                <span className="ml-auto flex h-2 w-2 rounded-full bg-primary"></span>
              </div>

              {/* Activity Item 3 */}
              <div className="flex gap-4 items-start relative pb-6 border-b border-outline-variant/5">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center">
                  <Wrench className="text-secondary w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Maintenance Request</p>
                  <p className="text-xs text-on-surface-variant mt-1">Water leakage reported in Lobby A</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-2">YESTERDAY</p>
                </div>
              </div>

              {/* Activity Item 4 */}
              <div className="flex gap-4 items-start relative pb-6">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex-shrink-0 flex items-center justify-center">
                  <Star className="text-primary w-5 h-5 fill-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Review Posted</p>
                  <p className="text-xs text-on-surface-variant mt-1">5-star rating for gym facilities</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-2">YESTERDAY</p>
                </div>
              </div>
            </div>

            {/* Mini Map Preview */}
            <div className="mt-6 rounded-xl overflow-hidden border border-outline-variant/20 group relative">
              <div className="relative h-48 bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdxnce-rUVJ0Bv6maII24aCkqggEJ7ab07AjJMQVmE6AjtDcEGBmVHm5rI3gFEz9lWYpXXwLjJqc6ltshmnOPrVuGhk1BxJJkitE0b3kr6ELIwr8ZFQ5IbuSOCqKVPwMxVSUetrt8KX5yslihCEkemxJcRiM_xrH6dcvDmdNF8mHrVaS3Jvgi38QGTY6pmR2qV_o4zkMAmfvY5GEPc6TIRXkUuhagGeJPLsaJbpJYwJCp5xF5vYys6_8YtV6kuVlIaztXttDsosKz0"
                  alt="Map"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary/30 rounded-full animate-ping absolute -inset-0"></div>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center relative shadow-lg">
                      <Building2 className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-4">
                  <p className="text-white text-xs font-bold font-headline">BlueMoon Tower I</p>
                  <p className="text-white/80 text-[10px]">District 1, HCMC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Latest Residents Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-outline-variant/10 flex items-center justify-between">
          <h3 className="text-lg font-bold font-headline">Recent Resident Onboarding</h3>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100">
              <Filter className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-8 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Resident</th>
                <th className="px-8 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Unit</th>
                <th className="px-8 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Contract Date</th>
                <th className="px-8 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-dRXu5yjP-cDT-5odZ96JGZsbZfLm6MSys9lUBCOYKQaJWyyLDrOZxFxTNIrLhdvhVfVtg2RMo2ZE6n4r3pdsAQ5fQGYAuEx9-rK5h9dGlvn_kveQ2ujfi4r1UeIYmU9tUvFTEZk88RSozfwAxaIQjt72TAbavQ3kKneRjdqhtBBX6JQVL_gQcCyNYSpAij71TV4hAjpFXQogwNI0XY3v4CwQfiDsLjB_mGzN7vpdiqbcMNbReIx11Ix06RP-Ll7GKt0psiVA2QDA" alt="Resident" className="w-8 h-8 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-bold text-on-surface">Le Thi Thanh</p>
                      <p className="text-[10px] text-on-surface-variant">thanh.le@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-medium text-primary">B-402</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Oct 24, 2023</td>
                <td className="px-8 py-5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-fixed text-on-primary-fixed-variant">ACTIVE</span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
              <tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAayJm6VjIt1RhiBbOQCJYwt_cm6SPLPUtPkt9C4d_FawGuFQkUgH6lGKnd21Xn39WJoo6-5YrBjUfWNLeDrKnCGQ4rEWKlEIWrh1o8ZXenA3dCLsR01YpT7gkcwJQ8kNjJmMVawgJ7FfNawvoA0IuGYbo2KL7CzjyO2C05Zb7eemgUe7QMCXvu7Sb3sPqc4F2bIajarQ_sALbBm8jE6LjgLkmXWV84IrW9nUkJIddW8CyPFD3S9WRQY9OTsFwmiMmiE6PL7cvaXH_j" alt="Resident" className="w-8 h-8 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-bold text-on-surface">Marcus Nguyen</p>
                      <p className="text-[10px] text-on-surface-variant">marcus.n@company.vn</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-medium text-primary">A-1205</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Oct 22, 2023</td>
                <td className="px-8 py-5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed-variant">PENDING</span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdOqsufm7gpQkaGOYrttG4LLcwqzr4ghkSsWSYD2o8nX_8F_L3u9w6pClJ84dW1DLXI5114XkII08xrGu5asyk2RgC6GRqTD8XiXou4Nira-7kRC8ORkw4FIpJ0oNyECWv34J09e952cOo7dbYHEN8VHE34aWlZUXJ5S4K_XeSp9uVcy-VObap1vo7IrZ7j2eA-jggNQnEQRuGyO_YT227xIEQ5H7HbbqQkJhrWFLOQ6DM9oebHp-c2QE-WaK_P3RghG94O3Oda0NY" alt="Resident" className="w-8 h-8 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-bold text-on-surface">Sophia Tran</p>
                      <p className="text-[10px] text-on-surface-variant">sophia.t@lifestyle.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-medium text-primary">C-901</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Oct 20, 2023</td>
                <td className="px-8 py-5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-fixed text-on-primary-fixed-variant">ACTIVE</span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
