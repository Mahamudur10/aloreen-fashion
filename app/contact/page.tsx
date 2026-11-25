export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-500">আমরা আপনার প্রশ্নের উত্তর দিতে সবসময় প্রস্তুত।</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* যোগাযোগের তথ্য */}
        <div className="bg-pink-50 p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <h4 className="font-semibold text-gray-800">Address</h4>
              <p className="text-gray-600 text-sm">Kamrangirchar, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📞</span>
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600 text-sm">+880 1XXX-XXXXXX</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">✉️</span>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600 text-sm">aloreenfashion@gmail.com</p>
            </div>
          </div>
        </div>

        {/* মেসেজ ফর্ম */}
        <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="আপনার নাম" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="আপনার ইমেইল" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="আপনার মেসেজ লিখুন..."></textarea>
          </div>
          <button type="button" className="w-full bg-pink-700 text-white py-3 rounded-lg font-semibold hover:bg-pink-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}