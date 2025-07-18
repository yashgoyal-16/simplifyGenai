import { SplineSceneBasic } from "@/components/SplineDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Interactive 3D Experience</h1>
          <p className="text-xl text-muted-foreground">Powered by Spline and React</p>
        </div>
        <SplineSceneBasic />
      </div>
    </div>
  );
};

export default Index;
