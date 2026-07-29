import Layout from "../../components/layout/Layout";
import { Star, Send } from "lucide-react";
import { useState } from "react";

function Ratings() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <Layout role="freight-owner">
      <div className="min-h-screen bg-black text-white p-6 md:p-10">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="bg-[#EEF3F9] rounded-2xl p-8 text-neutral-900 mb-8">
            <h1 className="text-3xl font-bold">
              Rate Your Transporter
            </h1>

            <p className="text-neutral-500 mt-2">
              Your trip has been completed. Please rate your experience.
            </p>
          </div>

          {/* Rating Card */}
          <div className="bg-[#EEF3F9] rounded-2xl p-8 text-neutral-900">

            <h2 className="text-xl font-bold mb-6">
              Overall Rating
            </h2>

            <div className="flex gap-3 mb-8">
              {[1,2,3,4,5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                >
                  <Star
                    size={38}
                    className={
                      star <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-400"
                    }
                  />
                </button>
              ))}
            </div>

            <label className="font-semibold block mb-2">
              Comment (Optional)
            </label>

            <textarea
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us about your experience..."
              className="w-full rounded-xl border border-neutral-300 p-4 mb-8 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
              <Send size={18} />
              Submit Rating
            </button>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Ratings;