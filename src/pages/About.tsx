
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn more about our story, mission, and the team behind this amazing project.
            </p>
          </div>
        </div>
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default About;
