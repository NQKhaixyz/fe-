/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './screens/Dashboard';
import { Apartments } from './screens/Apartments';
import { Residents } from './screens/Residents';
import { BillsPayments } from './screens/BillsPayments';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'apartments':
        return <Apartments />;
      case 'residents':
        return <Residents />;
      case 'bills':
        return <BillsPayments />;
      default:
        return <div className="p-8 text-center text-slate-500">Screen not implemented yet.</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-on-background">
      <Sidebar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopBar />
        <div className="flex-1">
          {renderScreen()}
        </div>
      </main>
    </div>
  );
}

