import React, { useState, useEffect } from 'react';
import { TourPackage, EnquiryForm, Offer } from '../types';
import { LayoutDashboard, Package, FileText, Sparkles, RefreshCw, Check, Trash2, Plus, ArrowUpRight } from 'lucide-react';

interface AdminPageProps {
  packages: TourPackage[];
  offers: Offer[];
  onRefreshData: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ packages, offers, onRefreshData }) => {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'packages' | 'offers'>('enquiries');
  const [enquiries, setEnquiries] = useState<EnquiryForm[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      setEnquiries(data);
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchEnquiries();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
        <div>
          <span className="text-[10px] font-bold text-teal-400 bg-teal-950 px-2.5 py-1 rounded border border-teal-800 uppercase">
            Internal Operations Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif mt-1">Agency Management Dashboard</h1>
        </div>

        <button
          onClick={fetchEnquiries}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition flex items-center gap-1.5 self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('enquiries')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'enquiries' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Booking Enquiries ({enquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('packages')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'packages' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Tour Packages ({packages.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('offers')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'offers' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Promotions & Vouchers ({offers.length})</span>
        </button>
      </div>

      {/* Tab 1: Enquiries Table */}
      {activeTab === 'enquiries' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 font-bold text-sm font-serif text-slate-900">
            Customer Inquiries & Callbacks
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Customer</th>
                  <th className="p-3.5">Type & Dest</th>
                  <th className="p-3.5">Travel Date</th>
                  <th className="p-3.5">Guests</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-slate-50/50">
                    <td className="p-3.5 font-medium">
                      <div className="font-bold text-slate-900">{enq.fullName}</div>
                      <div className="text-[11px] text-slate-400">{enq.email} • {enq.phone}</div>
                    </td>
                    <td className="p-3.5">
                      <span className="font-bold text-sky-700">{enq.type}</span>
                      <div className="text-slate-500 text-[11px]">{enq.destination || enq.packageTitle || 'N/A'}</div>
                    </td>
                    <td className="p-3.5 font-medium">{enq.travelDate || 'Flexible'}</td>
                    <td className="p-3.5 font-medium">{enq.guestsAdults}A {enq.guestsChildren > 0 ? `, ${enq.guestsChildren}K` : ''}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        enq.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : enq.status === 'Contacted' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {enq.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right space-x-1">
                      <button
                        onClick={() => handleUpdateStatus(enq.id, 'Contacted')}
                        className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold"
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(enq.id, 'Confirmed')}
                        className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold"
                      >
                        Confirm
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Packages List */}
      {activeTab === 'packages' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2">
              <div className="aspect-16/9 rounded-xl overflow-hidden">
                <img src={pkg.heroImage} alt={pkg.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm font-serif">{pkg.title}</h4>
              <div className="text-xs text-slate-500">{pkg.destination}, {pkg.country} • ${pkg.price.USD}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Offers List */}
      {activeTab === 'offers' && (
        <div className="space-y-4">
          {offers.map((off) => (
            <div key={off.id} className="bg-white rounded-2xl border border-slate-200 p-4 flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Voucher: {off.code}</span>
                <h4 className="font-bold text-slate-900 text-sm mt-1">{off.title} ({off.discount})</h4>
                <p className="text-xs text-slate-500">{off.description}</p>
              </div>
              <span className="text-xs font-bold text-emerald-700">Valid till {off.validUntil}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
