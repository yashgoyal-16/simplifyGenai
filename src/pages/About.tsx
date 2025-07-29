
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Sparkles, Users, Target, ArrowRight, Building2, Globe, Award, Star, Zap, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="mr-2 h-5 w-5 text-purple-400" />
              <span className="text-purple-200 font-medium">About SimplifygenAI</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8 leading-tight">
              Revolutionizing Business with 
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Excellence
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                We believe AI shouldn't be complex or intimidating. Our mission is to democratize artificial intelligence, 
                making it accessible and practical for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                    <p className="text-slate-300 leading-relaxed">Cutting-edge AI solutions that push the boundaries of what's possible in business automation</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative bg-gradient-to-br from-pink-900/50 to-purple-900/30 backdrop-blur-sm border border-pink-500/20 rounded-3xl p-8 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Accessibility</h3>
                    <p className="text-slate-300 leading-relaxed">Making AI simple and accessible for businesses worldwide, regardless of technical expertise</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative bg-gradient-to-br from-indigo-900/50 to-purple-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                    <p className="text-slate-300 leading-relaxed">Delivering measurable outcomes that transform businesses and drive real growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Visionary Founders</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Two exceptional entrepreneurs with a proven track record of building successful agencies and revolutionary AI solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Gurleen Khurana */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"></div>
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                          <img 
                            src="/lovable-uploads/ca7f499e-28e2-4c91-8fbe-e5af27808009.png" 
                            alt="Gurleen Khurana" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Gurleen Khurana</h3>
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                      <Brain className="mr-2 h-4 w-4 text-purple-400" />
                      <span className="text-purple-200 font-medium">Co-Founder & Chief AI Officer</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-white">Founder of Aitoflo</span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Gurleen is the AI visionary behind SimplifygenAI's revolutionary approach to conversational AI. 
                      As founder of Aitoflo, he has pioneered conversational AI voice assistants that integrate seamlessly 
                      with existing business workflows and CRM systems. Based in Vancouver, his expertise in AI automation 
                      and intelligent business solutions drives the core technology innovation at SimplifygenAI.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-purple-200 text-sm font-medium">Conversational AI</span>
                      <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-purple-200 text-sm font-medium">Voice Assistants</span>
                      <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-purple-200 text-sm font-medium">AI Automation</span>
                      <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-purple-200 text-sm font-medium">Workflow Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daksh Sharma */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-indigo-900/30 to-purple-900/20 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-400/40 transition-all duration-500 hover:transform hover:-translate-y-3">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent rounded-3xl"></div>
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                          <img 
                            src="/lovable-uploads/f3b24129-998e-4f6a-808e-71e684fbf5f3.png" 
                            alt="Daksh Sharma" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Daksh Sharma</h3>
                    <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
                      <Zap className="mr-2 h-4 w-4 text-indigo-400" />
                      <span className="text-indigo-200 font-medium">Co-Founder & Chief Technology Officer</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-white">Managing Partner at Iffort</span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Daksh is a first principles thinker, engineer, and global speaker with over 14 years of experience. 
                      As Managing Partner at Iffort, he has driven creative strategy for 100+ brands. A Forbes Agency 
                      Council member and technologist, he brings deep expertise in AI, growth marketing, and software development.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-2 text-indigo-200 text-sm font-medium">AI Technology</span>
                      <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-2 text-indigo-200 text-sm font-medium">Growth Marketing</span>
                      <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-2 text-indigo-200 text-sm font-medium">Software Engineering</span>
                      <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-2 text-indigo-200 text-sm font-medium">Global Speaking</span>
                    </div>
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
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-16">Why We Started SimplifygenAI</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="group">
                <div className="relative bg-gradient-to-br from-cyan-900/30 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 text-left hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">The Gap We Saw</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Through our agencies Aitoflo and Iffort, we witnessed businesses struggling with complex AI implementations. 
                      Despite the potential, most companies found AI intimidating and difficult to integrate into their operations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative bg-gradient-to-br from-emerald-900/30 to-teal-900/20 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 text-left hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      We combined our proven expertise in digital marketing, AI integration, and technology to create 
                      SimplifygenAI - a platform that makes AI accessible, practical, and results-driven for businesses 
                      of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-r from-purple-900/40 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"></div>
              <div className="relative">
                <blockquote className="text-2xl italic text-white mb-6 leading-relaxed">
                  "We didn't just want to build another AI company. We wanted to democratize AI and make it 
                  a practical tool that every business could leverage to grow and succeed."
                </blockquote>
                <cite className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  - Gurleen Khurana & Daksh Sharma, Co-Founders
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Join hundreds of businesses already leveraging our AI solutions to drive growth and innovation.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-6 text-xl rounded-2xl border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <StackedCircularFooter />
    </div>
  );
};

export default About;
