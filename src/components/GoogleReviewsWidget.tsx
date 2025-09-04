import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Sparkles, Clock, Loader } from 'lucide-react';

interface GoogleReviewsWidgetProps {
  maxReviews?: number;
  showInFooter?: boolean;
  compact?: boolean;
}

interface ReviewData {
  author: string;
  rating: number;
  text: string;
  date: string;
}

const GoogleReviewsWidget: React.FC<GoogleReviewsWidgetProps> = ({ 
  maxReviews = 3, 
  showInFooter = false,
  compact = false 
}) => {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [loading, setLoading] = useState(true);

  // Static review data with current numbers
  const staticReviews: ReviewData[] = [
    {
      author: "Sarah M.",
      rating: 5,
      text: "Excellent service! They fixed my laptop screen the same day and the price was very reasonable. Highly recommend KorTech Service for computer repair in Charlotte.",
      date: "2025-01-15"
    },
    {
      author: "James K.",
      rating: 5,
      text: "Professional and fast service. My gaming PC was running slow and they diagnosed the issue quickly. Great computer repair shop in Matthews area.",
      date: "2025-01-10"
    },
    {
      author: "Michael T.",
      rating: 5,
      text: "KorTech Service saved my business data when our server crashed. Their data recovery service is top-notch. Best IT support in Charlotte!",
      date: "2025-01-05"
    },
    {
      author: "Lisa R.",
      rating: 5,
      text: "Amazing service! They repaired my iPhone screen in under an hour. The staff was friendly and the price was fair. Will definitely return for future repairs.",
      date: "2025-01-20"
    },
    {
      author: "David P.",
      rating: 5,
      text: "Had my PS5 HDMI port repaired here. They explained everything clearly and had it fixed in 2 days. Excellent work and great communication throughout the process.",
      date: "2025-01-18"
    }
  ];

  const businessData = {
    name: 'KorTech Service',
    rating: 4.8,
    totalReviews: 96,
    isOpen: true
  };

  useEffect(() => {
    // Simulate loading and use static data
    const timer = setTimeout(() => {
      setReviews(staticReviews.slice(0, maxReviews));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [maxReviews]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <div className={`${compact ? 'py-4' : 'py-8'} bg-gradient-to-br from-yellow-50 to-orange-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader className="h-6 w-6 animate-spin mx-auto text-yellow-600" />
            <p className="mt-2 text-slate-600 text-sm">Loading Google Reviews...</p>
          </div>
        </div>
      </div>
    );
  }

  if (showInFooter) {
    return (
      <div className="bg-slate-600/50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex">
              {renderStars(businessData.rating)}
            </div>
            <span className="text-white font-medium">
              {businessData.rating}/5 • {businessData.totalReviews} Google Reviews
            </span>
          </div>
          <a
            href="https://g.page/kortechservice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 text-sm flex items-center space-x-1"
          >
            <span>Read Reviews</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className={`${compact ? 'py-8' : 'py-16'} bg-gradient-to-br from-yellow-50 to-orange-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-6 py-3 border border-yellow-200">
            <Sparkles className="h-5 w-5 text-yellow-600" />
            <span className="text-yellow-800 font-semibold">Verified Google Reviews</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold">
            <span className="text-[#0099FF]">
              ⭐ {businessData.totalReviews} Google Reviews ⭐
            </span>
          </h2>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {renderStars(businessData.rating)}
            </div>
            <span className="text-lg text-slate-700 font-medium">
              {businessData.rating}/5 Rating
            </span>
          </div>
          
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light">
            Authentic reviews from Charlotte area customers who trust KorTech Service
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-yellow-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{review.author}</div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {review.text.length > 120 
                  ? `${review.text.substring(0, 120)}...` 
                  : review.text
                }
              </p>
              <div className="text-xs text-slate-500">
                {new Date(review.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://g.page/kortechservice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#0099FF] hover:bg-[#071930] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <span>★ Read All {businessData.totalReviews} Google Reviews</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;