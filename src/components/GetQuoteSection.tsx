"use client";

import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronLeft, Utensils, Plus, Minus, RotateCcw, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// ... MENU_DATA and EVENT_TYPES remain the same ...
const MENU_DATA = [
  {
    category: "Wedding Thali",
    items: [
      { id: 101, name: "Shahi Paneer", price: 300 },
      { id: 102, name: "Dal Makhani Special", price: 250 },
      { id: 103, name: "Stuffed Kulcha", price: 60 },
      { id: 104, name: "Boondi Raita", price: 100 },
      { id: 105, name: "Malai Kofta", price: 280 },
      { id: 106, name: "Mix Veg Jalfrezi", price: 240 },
      { id: 107, name: "Jeera Rice", price: 150 },
      { id: 108, name: "Butter Naan", price: 45 },
      { id: 109, name: "Gulab Jamun (2pcs)", price: 80 },
      { id: 110, name: "Kesar Pista Kulfi", price: 120 }
    ]
  },
  {
    category: "North Indian",
    items: [
      { id: 201, name: "Paneer Lababdar", price: 320 },
      { id: 202, name: "Aloo Gobhi Adraki", price: 180 },
      { id: 203, name: "Chana Masala", price: 200 },
      { id: 204, name: "Missi Roti", price: 50 },
      { id: 205, name: "Baingan Bharta", price: 190 },
      { id: 206, name: "Mushroom Matar", price: 260 },
      { id: 207, name: "Kadai Paneer", price: 310 },
      { id: 208, name: "Laccha Paratha", price: 55 },
      { id: 209, name: "Pineapple Raita", price: 110 },
      { id: 210, name: "Moong Dal Halwa", price: 140 }
    ]
  },
  {
    category: "South Indian",
    items: [
      { id: 301, name: "Masala Dosa", price: 180 },
      { id: 302, name: "Idli Sambar (2 pcs)", price: 120 },
      { id: 303, name: "Medu Vada (2 pcs)", price: 140 },
      { id: 304, name: "Onion Uttapam", price: 160 },
      { id: 305, name: "Rava Kesari", price: 100 },
      { id: 306, name: "Lemon Rice", price: 150 },
      { id: 307, name: "Appam with Stew", price: 220 },
      { id: 308, name: "Curd Rice", price: 130 },
      { id: 309, name: "Mysore Pak", price: 90 },
      { id: 310, name: "Filter Coffee", price: 60 }
    ]
  },
  {
    category: "Jain Menu",
    items: [
      { id: 401, name: "Jain Paneer Handi", price: 310 },
      { id: 402, name: "Jain Bhindi Fry", price: 190 },
      { id: 403, name: "Kela Ki Sabzi", price: 170 },
      { id: 404, name: "Jain Dal Fry", price: 160 },
      { id: 405, name: "Cabbage Matar", price: 150 },
      { id: 406, name: "Jain Veg Pulao", price: 200 },
      { id: 407, name: "Sada Paratha", price: 35 },
      { id: 408, name: "Cucumber Salad", price: 80 },
      { id: 409, name: "Jain Tomato Soup", price: 120 },
      { id: 410, name: "Fruit Cream", price: 150 }
    ]
  },
  {
    category: "Birthday Snacks",
    items: [
      { id: 501, name: "Veg Burger", price: 90 },
      { id: 502, name: "French Fries", price: 110 },
      { id: 503, name: "Cheese Corn Balls", price: 180 },
      { id: 504, name: "Mini Pizza", price: 150 },
      { id: 505, name: "Spring Rolls", price: 160 },
      { id: 506, name: "Potato Wedges", price: 100 },
      { id: 507, name: "Paneer 65", price: 220 },
      { id: 508, name: "Veg Cutlet", price: 120 },
      { id: 509, name: "Nachos with Dip", price: 140 },
      { id: 510, name: "Chocolate Brownie", price: 120 }
    ]
  }
];

const EVENT_TYPES = [
  "Wedding Reception", "Birthday Party", "Corporate Meeting", 
  "Engagement Ceremony", "Anniversary", "Baby Shower", 
  "House Warming", "Networking Event"
];

const BookingForm = () => {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({
    name: '', phone: '', eventType: '', date: '', guests: 1
  });
  const [selectedTime, setSelectedTime] = useState('09:00 AM');
  const [selectedDishes, setSelectedDishes] = useState<{id: number, name: string, price: number}[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>("Wedding Thali");

  const timeSlots = ['09:00 AM', '11:00 AM', '01:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'];
  
  const menuSubtotal = selectedDishes.reduce((acc, item) => acc + item.price, 0);
  const grandTotal = menuSubtotal * (Number(formData.guests) || 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleDish = (item: {id: number, name: string, price: number}) => {
    setSelectedDishes(prev => 
      prev.find(d => d.id === item.id) 
        ? prev.filter(d => d.id !== item.id) 
        : [...prev, item]
    );
  };

  const loadImage = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new globalThis.Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => reject("Failed to load image");
      img.src = url;
    });
  };

  const generatePDF = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // --- Header Section ---
    try {
      const imgData = await loadImage('/images/Logos.png');
      doc.addImage(imgData, 'PNG', 14, 10, 25, 25);
    } catch (e) {
      console.warn("Logo not found at path");
    }

    doc.setFontSize(22);
    doc.setTextColor(234, 88, 12);
    doc.setFont("helvetica", "bold");
    doc.text("GURUKRUPA SAMRAT CATERERS", 45, 22); 
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.setFont("helvetica", "normal");
    doc.text("Premium Event Catering & Traditional Vegetarian Cuisine", 45, 28); 
    doc.text("Nashik, Maharashtra, India | Contact: +91 9876543210", 45, 33); 

    doc.setDrawColor(234, 88, 12);
    doc.line(14, 38, pageWidth - 14, 38);

    // --- FIX: Customer Details Table using cellWidth instead of width ---
    autoTable(doc, {
      startY: 45,
      body: [
        ["Client Name:", formData.name || "N/A", "Event Date:", formData.date],
        ["Phone Number:", formData.phone || "N/A", "Event Time:", selectedTime],
        ["Event Type:", formData.eventType || "N/A", "Guest Count:", `${formData.guests} Persons`],
      ],
      theme: 'plain',
      styles: { fontSize: 10, cellPadding: 2 },
      columnStyles: { 
        0: { fontStyle: 'bold', cellWidth: 35 }, // Changed width to cellWidth
        2: { fontStyle: 'bold', cellWidth: 35 }  // Changed width to cellWidth
      }
    });

    // --- Menu Items Table ---
    const tableRows = selectedDishes.map(item => [
      item.name,
      `Rs. ${item.price}`,
      formData.guests,
      `Rs. ${item.price * Number(formData.guests)}`
    ]);

    const lastTableY = (doc as any).lastAutoTable.finalY;

    autoTable(doc, {
      startY: lastTableY + 10,
      head: [['Menu Item Selected', 'Rate per Plate', 'Qty', 'Total Amount']],
      body: tableRows,
      headStyles: { fillColor: [234, 88, 12], textColor: [255, 255, 255], fontStyle: 'bold' },
      foot: [
        ['', '', 'Subtotal', `Rs. ${grandTotal}`],
        ['', '', 'GST (5%)', `Rs. ${(grandTotal * 0.05).toFixed(2)}`],
        ['', '', 'Grand Total', `Rs. ${(grandTotal * 1.05).toFixed(2)}`]
      ],
      footStyles: { fillColor: [245, 245, 245], textColor: [0, 0, 0], fontStyle: 'bold', fontSize: 11 },
      alternateRowStyles: { fillColor: [253, 245, 235] }
    });

    // --- Footer Section ---
    const finalY = (doc as any).lastAutoTable.finalY + 20;
    
    doc.setFontSize(12);
    doc.setTextColor(234, 88, 12);
    doc.text("Thank you for choosing Gurukrupa Samrat!", pageWidth / 2, finalY, { align: "center" });

    doc.setFontSize(9);
    doc.setTextColor(150);
    const footerY = pageHeight - 20;
    doc.line(14, footerY - 5, pageWidth - 14, footerY - 5);
    doc.text("Office: Opp. Samrat Hotel, Old Agra Road, Nashik - 422001", pageWidth / 2, footerY, { align: "center" });
    doc.text("Website: www.gurukrupasamrat.com | Email: info@gurukrupasamrat.com", pageWidth / 2, footerY + 5, { align: "center" });
    doc.text("This is a computer generated quote.", pageWidth / 2, footerY + 10, { align: "center" });

    doc.save(`Invoice_${formData.name || 'Booking'}.pdf`);
  };

  // ... Rendering logic remains the same ...
  if (step === 3) {
    return (
      <div className="min-h-screen bg-orange-50 p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-orange-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-black text-orange-600 tracking-tight">Booking Confirmed</h2>
            <CheckCircle2 className="text-green-500 w-12 h-12" />
          </div>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10 pb-8 border-b border-orange-100">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Customer</p>
              <p className="text-lg font-bold text-gray-800">{formData.name}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Event</p>
              <p className="text-lg font-bold text-gray-800">{formData.eventType}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Date</p>
              <p className="text-lg font-bold text-gray-800">{formData.date}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Guests</p>
              <p className="text-lg font-bold text-gray-800">{formData.guests} Persons</p>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={generatePDF}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95"
            >
              <FileText className="w-6 h-6" /> Download Invoice PDF
            </button>
            <button 
              onClick={() => setStep(1)}
              className="w-full bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-50 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <RotateCcw className="w-5 h-5" /> Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-orange-50 p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl flex flex-col h-[85vh]">
          <button onClick={() => setStep(1)} className="flex items-center text-orange-600 mb-6 hover:underline font-semibold">
            <ChevronLeft className="w-5 h-5" /> Back to Details
          </button>
          <h2 className="text-3xl font-bold text-orange-600 mb-2">Select Your Menu</h2>
          <div className="flex-grow overflow-y-auto space-y-4 pr-2">
            {MENU_DATA.map((cat) => (
              <div key={cat.category} className="border border-orange-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                  className={`w-full flex items-center justify-between p-5 ${openCategory === cat.category ? 'bg-orange-600 text-white' : 'bg-orange-50/50 text-orange-900 hover:bg-orange-100'}`}
                >
                  <div className="flex items-center gap-3">
                    <Utensils className="w-5 h-5" />
                    <span className="font-bold text-lg">{cat.category}</span>
                  </div>
                  {openCategory === cat.category ? <Minus /> : <Plus />}
                </button>
                {openCategory === cat.category && (
                  <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cat.items.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => toggleDish(item)}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedDishes.find(d => d.id === item.id) ? 'border-orange-500 bg-orange-50' : 'border-gray-50 bg-gray-50/50 hover:border-orange-200'}`}
                      >
                        <div className="flex items-center gap-2">
                           <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedDishes.find(d => d.id === item.id) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
                             {selectedDishes.find(d => d.id === item.id) && <CheckCircle2 className="w-3 h-3 text-white" />}
                           </div>
                           <span className="font-medium text-gray-700">{item.name}</span>
                        </div>
                        <span className="font-bold text-orange-600">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-900 text-white rounded-[2rem] flex justify-between items-center shadow-xl">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Total (for {formData.guests} guests)</p>
              <p className="text-3xl font-black text-orange-400">₹{grandTotal}</p>
            </div>
            <button 
              onClick={() => setStep(3)}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition-transform active:scale-95"
            >
              Confirm Selection ({selectedDishes.length})
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl p-10 space-y-6">
            <img src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" alt="Catering" className="rounded-3xl h-64 w-full object-cover" />
            <h1 className="text-3xl font-bold text-orange-600">Gurukrupa Samrat Catering</h1>
            <p className="text-gray-600 italic">"Premium vegetarian catering with hygiene & tradition."</p>
            <ul className="space-y-4">
              {["25+ Expert Chefs", "500+ Events Served", "Custom Menus"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold text-lg">
                  <Star className="fill-orange-500 text-orange-500 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
        </div>
        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-orange-100">
          <h2 className="text-3xl font-extrabold text-orange-600 mb-8">Check Availability</h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="NAME" required onChange={handleInputChange} className="w-full p-4 rounded-xl border-2 border-gray-100 outline-none focus:border-orange-500" />
              <input type="tel" name="phone" placeholder="PHONE" required onChange={handleInputChange} className="w-full p-4 rounded-xl border-2 border-gray-100 outline-none focus:border-orange-500" />
            </div>
            <select name="eventType" required onChange={handleInputChange} className="w-full p-4 rounded-xl border-2 border-gray-100 bg-white text-gray-600">
              <option value="">Select Event Type</option>
              {EVENT_TYPES.map(event => (<option key={event} value={event}>{event}</option>))}
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" name="date" required onChange={handleInputChange} className="w-full p-4 rounded-xl border-2 border-gray-100 text-gray-500" />
              <input type="number" name="guests" placeholder="Guests" min="1" required onChange={handleInputChange} className="w-full p-4 rounded-xl border-2 border-gray-100 outline-none focus:border-orange-500" />
            </div>
            <div>
              <p className="text-orange-600 font-bold mb-4">Preferred Slot</p>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button key={time} type="button" onClick={() => setSelectedTime(time)} className={`py-3 rounded-xl border-2 text-sm font-bold transition-all ${selectedTime === time ? 'bg-orange-500 text-white border-orange-500' : 'text-orange-600 bg-gray-50 hover:bg-orange-50'}`}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-2xl text-xl uppercase tracking-widest shadow-lg transition-all">
              View Food Menu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;