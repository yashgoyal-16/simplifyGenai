
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
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
    title: "Tantrasur",
    category: "Trailers",
    thumbnail: "/images/trailer1.png",
    video: "https://player.vimeo.com/video/1064203189?h=1f0c862566&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Trailer"
  },
  {
    id: 2,
    title: "Prada",
    category: "Commercials",
    thumbnail: "/images/commercial1.jpg",
    video: "https://player.vimeo.com/video/1063422698?h=7c3c708deb&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Luxury fashion commercial with AI enhancement"
  },
  {
    id: 3,
    title: "Versace",
    category: "Commercials",
    thumbnail: "/images/commercial2.png",
    video: "https://player.vimeo.com/video/1063422717?h=73bc29f156&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "High-end fashion commercial with AI styling"
  },
  {
    id: 3,
    title: "Hero Homes",
    category: "Commercials",
    thumbnail: "/simplegenai/thumbnail.jpg",
    video: "https://pbwgakwdrtkvnmewsajp.supabase.co/storage/v1/object/public/simplifygenai-website/Hero%20Homes%20(happy%20Now%20instrumental).mp4",
    description: "High-end Homes commercial with AI styling"
  },
  
  {
    id: 4,
    title: "Lavendar",
    category: "Concept",
    thumbnail: "/images/concept1.png",
    video: "https://player.vimeo.com/video/1063422651?h=74c0c58fe4&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Creative concept visualization with AI"
  },
  {
    id: 5,
    title: "Heinz",
    category: "Commercials",
    thumbnail: "/images/commercial3.png",
    video: "https://player.vimeo.com/video/1063422742?h=dc0e0c7394&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Food commercial with AI-generated effects"
  },
  {
    id: 5,
    title: "Simply Lemonade",
    category: "Commercials",
    thumbnail: "/simplegenai/01.mp4.00_00_05_12.Still001 copy.jpg",
    video: "https://player.vimeo.com/video/1108367262?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description: "Food commercial with AI-generated effects"
  },
  // {
  //   id: 5,
  //   title: "Scone",
  //   category: "Commercials",
  //   thumbnail: "/images/commercial3.png",
  //   video: "https://player.vimeo.com/video/1108367045?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //   description: "Food commercial with AI-generated effects"
  // },
  // {
  //   id: 5,
  //   title: "Gates Foundation",
  //   category: "Commercials",
  //   thumbnail: "/images/commercial3.png",
  //   video: "https://player.vimeo.com/video/1108367002?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //   description: "Food commercial with AI-generated effects"
  // },
  {
    id: 6,
    title: "Spark",
    category: "Animation",
    thumbnail: "/images/animation1.png",
    video: "https://player.vimeo.com/video/1063422496?h=5b0f70c878&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Dynamic animation with AI enhancement"
  },
  {
    id: 6,
    title: "Mirai",
    category: "Animation",
    thumbnail: "/simplegenai/mirai.jpg",
    video: "https://player.vimeo.com/video/1108366833?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description: "Mirai is an AI assistant that answers inbound calls and captures leads seamlessly, 24/7."
  },
  {
    id: 6,
    title: "Coffee",
    category: "Animation",
    thumbnail: "/simplegenai/06.mp4.01_00_08_09.Still001.jpg",
    video: "https://player.vimeo.com/video/1108367209?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description: "Food commercial with AI-generated effects"
  },
  {
    id: 6,
    title: "Unsent",
    category: "Animation",
    thumbnail: "/simplegenai/Unsent_upscaled 1920_1080p.mp4.00_00_13_26.Still001.jpg",
    video: "https://player.vimeo.com/video/1108367169?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description: "Unsent — the message he never sent, and the love he never forgot."
  },
  {
    id: 7,
    title: "The Raboo List",
    category: "Trailers",
    thumbnail: "/images/trailer2.png",
    video: "https://player.vimeo.com/video/1063461864?h=a14dccb926&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Movie trailer with AI-generated effects"
  },
  // {
  //   id: 7,
  //   title: "Izee Sparking Juice",
  //   category: "Commercials",
  //   thumbnail: "/images/trailer2.png",
  //   video: "https://player.vimeo.com/video/1108366897?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  //   description: "Food commercial with AI-generated effects"
  // },
  {
    id: 8,
    title: "Citroën",
    category: "Commercials",
    thumbnail: "/images/commercial4.png",
    video: "https://player.vimeo.com/video/1063422733?h=1962df242e&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Automotive commercial with AI scenes"
  },
  // {
  //   id: 9,
  //   title: "C427",
  //   category: "Music Videos",
  //   thumbnail: "/images/music1.png",
  //   video: "https://player.vimeo.com/video/1063422585?h=49ac5fb07a&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
  //   description: "AI-enhanced music video with dynamic visuals"
  // },
  {
    id: 10,
    title: "Marshmellow",
    category: "Concept",
    thumbnail: "/images/concept2.png",
    video: "https://player.vimeo.com/video/1063422609?h=3515b7ea51&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Creative concept with AI visualization"
  },
  {
    id: 11,
    title: "Cartier",
    category: "Commercials",
    thumbnail: "/images/commercial5.png",
    video: "https://player.vimeo.com/video/1063422688?h=cb1c43d9f3&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Luxury jewelry commercial with AI enhancement"
  },
  {
    id: 12,
    title: "Gucci",
    category: "Commercials",
    thumbnail: "/images/commercial6.jpg",
    video: "https://player.vimeo.com/video/1063422659?h=b52a6f7f5b&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "High-end fashion commercial with AI styling"
  },
  {
    id: 13,
    title: "Sleep Token",
    category: "Music Videos",
    thumbnail: "/images/music3.png",
    video: "https://player.vimeo.com/video/1063422533?h=2692ad82ea&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "AI-enhanced music video with atmospheric visuals"
  },
  {
    id: 14,
    title: "Opti Plaza",
    category: "Commercials",
    thumbnail: "/images/commercial7.png",
    video: "https://player.vimeo.com/video/1063461945?h=95bb24498a&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
    description: "Commercial with AI-generated content"
  }
];

const categories = ["All Projects", "Commercials", "Concept", "Animation", "Trailers", "Music Videos"];

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
            Our Creative Harvest
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-['Inter']">
            Explore a selection of our AI-powered projects. From brand stories to cinematic shorts, each piece is a taste of the future, crafted with precision and flair.
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
                <iframe
                  src={fullscreenVideo.video}
                  className="w-full h-full object-contain rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
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
