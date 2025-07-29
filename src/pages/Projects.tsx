
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of innovative projects and creative solutions.
            </p>
          </div>
        </div>
      </div>
      <StackedCircularFooter />
    </div>
  );
};

export default Projects;
