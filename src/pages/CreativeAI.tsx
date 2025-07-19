const CreativeAI = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Creative AI
          </h1>
          <p className="text-xl md:text-2xl">
            The Future of Visual Effects
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeAI;