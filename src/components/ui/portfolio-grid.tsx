"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Expand, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  video: string;
  description: string;
}

const portfolioVideos: VideoItem[] = [
  {
    id: 1,
    title: "Premium Car Commercial",
    category: "Commercials",
    thumbnail: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=500",
    video: "https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4",
    description: "Luxury automotive commercial with AI-generated scenes"
  },
  {
    id: 2,
    title: "Fantasy Animation",
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    video: "https://videos.pexels.com/video-files/8313242/8313242-uhd_2560_1440_25fps.mp4",
    description: "Mystical character animation with AI enhancement"
  },
  {
    id: 3,
    title: "Movie Trailer",
    category: "Trailers",
    thumbnail: "https://images.unsplash.com/photo-1489599735734-79b4169c36e2?w=500",
    video: "https://videos.pexels.com/video-files/4725894/4725894-uhd_2560_1440_25fps.mp4",
    description: "Epic movie trailer with AI-generated effects"
  },
  {
    id: 4,
    title: "Tech Concept Video",
    category: "Concept",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
    video: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    description: "Futuristic technology concept visualization"
  },
  {
    id: 5,
    title: "Music Video",
    category: "Music Videos",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    video: "https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4",
    description: "AI-enhanced music video with dynamic visuals"
  },
  {
    id: 6,
    title: "Corporate B2B",
    category: "B2B",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500",
    video: "https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4",
    description: "Professional B2B presentation video"
  },
  {
    id: 7,
    title: "Fashion Commercial",
    category: "Commercials",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500",
    video: "https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4",
    description: "High-end fashion commercial with AI styling"
  },
  {
    id: 8,
    title: "Product Animation",
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
    video: "https://videos.pexels.com/video-files/8313242/8313242-uhd_2560_1440_25fps.mp4",
    description: "3D product animation with AI rendering"
  }
];

const categories = ["All Projects", "Commercials", "Animation", "Trailers", "Concept", "Music Videos", "B2B"];

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [fullscreenVideo, setFullscreenVideo] = useState<VideoItem | null>(null);

  const filteredVideos = selectedCategory === "All Projects" 
    ? portfolioVideos 
    : portfolioVideos.filter(video => video.category === selectedCategory);

  return (
    <div className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8 font-['Inter']">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-['Inter']">
            Explore our AI-generated content across various categories. Each piece is uniquely crafted using cutting-edge artificial intelligence technology.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={cn(
                "px-6 py-3 rounded-full font-['Inter'] transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-black hover:bg-primary/90"
                  : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setFullscreenVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-semibold font-['Inter'] mb-1">{video.title}</h3>
                  <p className="text-gray-300 text-sm font-['Inter']">{video.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Video Modal */}
        <AnimatePresence>
          {fullscreenVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setFullscreenVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-6xl aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  className="w-full h-full object-contain rounded-lg"
                  controls
                  autoPlay
                  src={fullscreenVideo.video}
                />
                
                {/* Close Button */}
                <Button
                  onClick={() => setFullscreenVideo(null)}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Video Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white text-xl font-semibold font-['Inter'] mb-2">
                    {fullscreenVideo.title}
                  </h3>
                  <p className="text-gray-300 font-['Inter']">
                    {fullscreenVideo.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}