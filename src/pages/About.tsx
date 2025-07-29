
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Sparkles, Users, Target, ArrowRight, Building2, Globe, Award, Star, Zap, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-12 animate-fade-in">
              <Sparkles className="mr-2 h-4 w-4 text-white/70" />
              <span className="text-white/90 text-sm font-medium">About SimplifygenAI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight animate-fade-in">
              Revolutionizing Business with
              <span className="block font-normal text-white/90 mt-2">
                AI Excellence
              </span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              Born from the vision of two successful entrepreneurs, SimplifygenAI bridges the gap between 
              cutting-edge artificial intelligence and practical business solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-12 h-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl mb-8">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-light text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
                We believe AI shouldn't be complex or intimidating. Our mission is to democratize artificial intelligence, 
                making it accessible and practical for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group cursor-pointer">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 animate-fade-in">
                  <div className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Innovation</h3>
                  <p className="text-white/70 leading-relaxed">Cutting-edge AI solutions that push the boundaries of what's possible in business automation</p>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 animate-fade-in">
                  <div className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Accessibility</h3>
                  <p className="text-white/70 leading-relaxed">Making AI simple and accessible for businesses worldwide, regardless of technical expertise</p>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 animate-fade-in">
                  <div className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Results</h3>
                  <p className="text-white/70 leading-relaxed">Delivering measurable outcomes that transform businesses and drive real growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-white mb-6">Meet Our Founders</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Two exceptional entrepreneurs with a proven track record of building successful agencies and revolutionary AI solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Gurleen Khurana */}
            <div className="group">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 animate-fade-in">
                <div className="text-center mb-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-full p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black/50">
                        <img 
                          src="/lovable-uploads/ca7f499e-28e2-4c91-8fbe-e5af27808009.png" 
                          alt="Gurleen Khurana" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Gurleen Khurana</h3>
                  <div className="inline-flex items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2">
                    <Brain className="mr-2 h-4 w-4 text-white/70" />
                    <span className="text-white/90 text-sm font-medium">Co-Founder & Chief AI Officer</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 backdrop-blur-md bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Founder of Aitoflo</span>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed">
                    Gurleen is the AI visionary behind SimplifygenAI's revolutionary approach to conversational AI. 
                    As founder of Aitoflo, he has pioneered conversational AI voice assistants that integrate seamlessly 
                    with existing business workflows and CRM systems. Based in Vancouver, his expertise in AI automation 
                    and intelligent business solutions drives the core technology innovation at SimplifygenAI.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Conversational AI</span>
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Voice Assistants</span>
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">AI Automation</span>
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Workflow Integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Daksh Sharma */}
            <div className="group">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 animate-fade-in">
                <div className="text-center mb-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-full p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black/50">
                        <img 
                          src="/lovable-uploads/f3b24129-998e-4f6a-808e-71e684fbf5f3.png" 
                          alt="Daksh Sharma" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Daksh Sharma</h3>
                  <div className="inline-flex items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2">
                    <Zap className="mr-2 h-4 w-4 text-white/70" />
                    <span className="text-white/90 text-sm font-medium">Co-Founder & Chief Technology Officer</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 backdrop-blur-md bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-medium">Managing Partner at Iffort</span>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed">
                    Daksh is a first principles thinker, engineer, and global speaker with over 14 years of experience. 
                    As Managing Partner at Iffort, he has driven creative strategy for 100+ brands. A Forbes Agency 
                    Council member and technologist, he brings deep expertise in AI, growth marketing, and software development.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">AI Technology</span>
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Growth Marketing</span>
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Software Engineering</span>
                    <span className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/90 text-xs">Global Speaking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Started Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-light text-white mb-16">Why We Started SimplifygenAI</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="group">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 animate-fade-in">
                  <div className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">The Gap We Saw</h3>
                  <p className="text-white/70 leading-relaxed">
                    Through our agencies Aitoflo and Iffort, we witnessed businesses struggling with complex AI implementations. 
                    Despite the potential, most companies found AI intimidating and difficult to integrate into their operations.
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1 animate-fade-in">
                  <div className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Our Solution</h3>
                  <p className="text-white/70 leading-relaxed">
                    We combined our proven expertise in digital marketing, AI integration, and technology to create 
                    SimplifygenAI - a platform that makes AI accessible, practical, and results-driven for businesses 
                    of all sizes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-12 animate-fade-in">
              <blockquote className="text-xl font-light text-white mb-6 leading-relaxed">
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
      <div className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-white/70 mb-12 leading-relaxed">
              Join hundreds of businesses already leveraging our AI solutions to drive growth and innovation.
            </p>
            <Button 
              size="lg" 
              className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/40 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1"
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
