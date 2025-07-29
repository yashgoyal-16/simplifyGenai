
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Target, ArrowRight, Building2, Globe, Award, Star, Zap, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-12">
              <Sparkles className="mr-2 h-4 w-4 text-white/70" />
              <span className="text-white/90 text-sm font-medium">About SimplifygenAI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
              Revolutionizing Business with
              <span className="block font-normal text-white/90 mt-2">
                AI Excellence
              </span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Born from the vision of two successful entrepreneurs, SimplifygenAI bridges the gap between 
              cutting-edge artificial intelligence and practical business solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 rounded-xl mb-8">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                We believe AI shouldn't be complex or intimidating. Our mission is to democratize artificial intelligence, 
                making it accessible and practical for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Innovation</h3>
                <p className="text-white/70">Cutting-edge AI solutions that push the boundaries of what's possible in business automation</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Accessibility</h3>
                <p className="text-white/70">Making AI simple and accessible for businesses worldwide, regardless of technical expertise</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Results</h3>
                <p className="text-white/70">Delivering measurable outcomes that transform businesses and drive real growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-white mb-6">Meet Our Founders</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Two exceptional entrepreneurs with a proven track record of building successful agencies and revolutionary AI solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Gurleen Khurana */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-colors duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black/50">
                    <img 
                      src="/lovable-uploads/ca7f499e-28e2-4c91-8fbe-e5af27808009.png" 
                      alt="Gurleen Khurana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">Gurleen Khurana</h3>
                <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2">
                  <Brain className="mr-2 h-4 w-4 text-white/70" />
                  <span className="text-white/90 text-sm font-medium">Co-Founder & Chief AI Officer</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Founder of Aitoflo</span>
                </div>
                
                <p className="text-white/70">
                  Gurleen is the AI visionary behind SimplifygenAI's revolutionary approach to conversational AI. 
                  As founder of Aitoflo, he has pioneered conversational AI voice assistants that integrate seamlessly 
                  with existing business workflows and CRM systems. Based in Vancouver, his expertise in AI automation 
                  and intelligent business solutions drives the core technology innovation at SimplifygenAI.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Conversational AI</span>
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Voice Assistants</span>
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">AI Automation</span>
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Workflow Integration</span>
                </div>
              </div>
            </div>

            {/* Daksh Sharma */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-colors duration-300">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black/50">
                    <img 
                      src="/lovable-uploads/f3b24129-998e-4f6a-808e-71e684fbf5f3.png" 
                      alt="Daksh Sharma" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">Daksh Sharma</h3>
                <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2">
                  <Zap className="mr-2 h-4 w-4 text-white/70" />
                  <span className="text-white/90 text-sm font-medium">Co-Founder & Chief Technology Officer</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Managing Partner at Iffort</span>
                </div>
                
                <p className="text-white/70">
                  Daksh is a first principles thinker, engineer, and global speaker with over 14 years of experience. 
                  As Managing Partner at Iffort, he has driven creative strategy for 100+ brands. A Forbes Agency 
                  Council member and technologist, he brings deep expertise in AI, growth marketing, and software development.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">AI Technology</span>
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Growth Marketing</span>
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Software Engineering</span>
                  <span className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Global Speaking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Started Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-light text-white mb-16">Why We Started SimplifygenAI</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/8 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">The Gap We Saw</h3>
                <p className="text-white/70">
                  Through our agencies Aitoflo and Iffort, we witnessed businesses struggling with complex AI implementations. 
                  Despite the potential, most companies found AI intimidating and difficult to integrate into their operations.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/8 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Our Solution</h3>
                <p className="text-white/70">
                  We combined our proven expertise in digital marketing, AI integration, and technology to create 
                  SimplifygenAI - a platform that makes AI accessible, practical, and results-driven for businesses 
                  of all sizes.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
              <blockquote className="text-xl font-light text-white mb-6">
                "We didn't just want to build another AI company. We wanted to democratize AI and make it 
                a practical tool that every business could leverage to grow and succeed."
              </blockquote>
              <cite className="text-white/80 font-medium">
                - Gurleen Khurana & Daksh Sharma, Co-Founders
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-white/70 mb-12">
              Join hundreds of businesses already leveraging our AI solutions to drive growth and innovation.
            </p>
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/40 px-8 py-6 text-lg rounded-xl transition-colors duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <StackedCircularFooter />
    </div>
  );
};

export default About;
