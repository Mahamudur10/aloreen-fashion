"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    oldPrice: "",
    category: "Saree",
    stock: "",
    status: "Published",
    discount: "",
  });

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ছবি আপলোড হ্যান্ডলার (Cloudinary)
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setImageUrl(data.url);
      } else {
        alert("ছবি আপলোড ব্যর্থ: " + data.error);
      }
    } catch (error) {
      alert("ছবি আপলোডে সমস্যা হয়েছে");
    } finally {
      setUploading(false);
    }
  };

  // ফর্ম সাবমিট হ্যান্ডলার (MongoDB)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) {
      alert("অনুগ্রহ করে একটি প্রোডাক্ট ছবি আপলোড করুন");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          oldPrice: formData.oldPrice ? Number(formData.oldPrice) : undefined,
          stock: Number(formData.stock),
          image: imageUrl,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert("প্রোডাক্ট সফলভাবে যোগ হয়েছে!");
        router.push("/admin");
      } else {
        alert("প্রোডাক্ট যোগ করতে সমস্যা হয়েছে: " + data.error);
      }
    } catch (error) {
      alert("সার্ভার এরর");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-5">
        
        {/* নাম ও ক্যাটাগরি */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
            <input type="text" name="name" required onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500" placeholder="যেমন: Elegant Saree" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
            <select name="category" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500">
              <option value="Saree">Saree</option>
              <option value="Three Piece">Three Piece</option>
              <option value="Western Wear">Western Wear</option>
              <option value="Unstitched">Unstitched</option>
              <option value="Kurti">Kurti</option>
              <option value="Hijab & More">Hijab & More</option>
            </select>
          </div>
        </div>

        {/* বর্ণনা */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea name="description" required rows={3} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500" placeholder="প্রোডাক্টের বিবরণ..."></textarea>
        </div>

        {/* দাম, পুরাতন দাম, স্টক, ডিসকাউন্ট */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (৳) *</label>
            <input type="number" name="price" required onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Old Price (৳)</label>
            <input type="number" name="oldPrice" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock *</label>
            <input type="number" name="stock" required onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
            <input type="text" name="discount" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500" placeholder="যেমন: 15%" />
          </div>
        </div>

        {/* স্ট্যাটাস */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select name="status" onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500">
            <option value="Published">Published</option>
            <option value="Inactive">Inactive</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        {/* ছবি আপলোড */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Image *</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          {uploading && <p className="text-sm text-pink-600 mt-2">আপলোড হচ্ছে...</p>}
          {imageUrl && (
            <div className="mt-3 w-32 h-32 relative rounded-lg overflow-hidden border">
              <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        <button type="submit" disabled={loading || uploading} className="w-full bg-pink-700 text-white py-3 rounded-lg font-semibold hover:bg-pink-800 transition disabled:opacity-50">
          {loading ? "সেভ হচ্ছে..." : "Save Product"}
        </button>
      </form>
    </div>
  );
}