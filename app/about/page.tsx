export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Aloreen Fashion</h1>
        <p className="text-pink-600 italic text-lg">Traditional Grace · Modern Style · Timeless Beauty</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-pink-100 h-80 rounded-2xl flex items-center justify-center text-pink-400 text-6xl">
          👗
        </div>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            <strong className="text-gray-800">Aloreen Fashion</strong> হলো একটি অনলাইন ফ্যাশন হাউস, যেখানে আপনি পাবেন ঐতিহ্যবাহী ও আধুনিক ডিজাইনের সেরা কালেকশন। 
            আমাদের লক্ষ্য হলো বাংলাদেশের নারীদের জন্য মানসম্মত, সাশ্রয়ী এবং ট্রেন্ডি পোশাক তৈরি করা।
          </p>
          <p>
            আমরা সরাসরি কারখানা থেকে পণ্য সংগ্রহ করি, তাই আমাদের দাম বাজারের চেয়ে অনেক কম এবং মান সর্বোচ্চ।
            সাড়ি, থ্রি-পিস, কুর্তি থেকে শুরু করে ওয়েস্টার্ন ওয়্যার—সবকিছুতেই আমরা দিচ্ছি সেরা সার্ভিস।
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-pink-700">১০ হাজার+</h3>
              <p className="text-sm text-gray-500">সন্তুষ্ট ক্রেতা</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-pink-700">৫০০+</h3>
              <p className="text-sm text-gray-500">প্রোডাক্ট কালেকশন</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}