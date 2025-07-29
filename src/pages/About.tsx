
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Sparkles, Users, Target, ArrowRight, Building2, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              About SimplifygenAI
            </Badge>
            <GradientHeading size="xl" className="mb-6">
              Revolutionizing Business with AI Excellence
            </GradientHeading>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from the vision of two successful entrepreneurs, SimplifygenAI bridges the gap between 
              cutting-edge artificial intelligence and practical business solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe AI shouldn't be complex or intimidating. Our mission is to democratize artificial intelligence, 
              making it accessible and practical for businesses of all sizes. We transform complex AI capabilities into 
              simple, powerful tools that drive real results.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">Cutting-edge AI solutions that push the boundaries of what's possible</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <p className="text-muted-foreground">Making AI simple and accessible for businesses worldwide</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Results</h3>
                  <p className="text-muted-foreground">Delivering measurable outcomes that transform businesses</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground">
              Two visionary entrepreneurs with a proven track record of building successful agencies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Gurleen Khurana */}
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">GK</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Gurleen Khurana</h3>
                  <p className="text-primary font-semibold mb-4">Co-Founder & AI Strategist</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center mb-3">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    <span className="font-semibold">Founder of Aitoflo</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Gurleen is a visionary in AI integration and digital marketing. As the founder of Aitoflo and 
                    previously AImpactful Marketing Studio in Vancouver, she has revolutionized how businesses 
                    approach digital experiences. Her expertise in platforms like Webflow and her "work smart, 
                    not hard" philosophy drives innovation at SimplifygenAI.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">AI Integration</Badge>
                    <Badge variant="secondary">Digital Marketing</Badge>
                    <Badge variant="secondary">Web Design</Badge>
                    <Badge variant="secondary">E-commerce</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daksh Sharma */}
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">DS</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Daksh Sharma</h3>
                  <p className="text-primary font-semibold mb-4">Co-Founder & Technology Lead</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center mb-3">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    <span className="font-semibold">Managing Partner at Iffort</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Daksh is a first principles thinker, engineer, and global speaker with over 14 years of experience. 
                    As Managing Partner at Iffort, he has driven creative strategy for 100+ brands. A Forbes Agency 
                    Council member and technologist, he brings deep expertise in AI, growth marketing, and software development.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">AI Technology</Badge>
                    <Badge variant="secondary">Growth Marketing</Badge>
                    <Badge variant="secondary">Software Engineering</Badge>
                    <Badge variant="secondary">Global Speaking</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Why We Started Section */}
      <div className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why We Started SimplifygenAI</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">The Gap We Saw</h3>
                  <p className="text-muted-foreground">
                    Through our agencies Aitoflo and Iffort, we witnessed businesses struggling with complex AI implementations. 
                    Despite the potential, most companies found AI intimidating and difficult to integrate into their operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                  <p className="text-muted-foreground">
                    We combined our proven expertise in digital marketing, AI integration, and technology to create 
                    SimplifygenAI - a platform that makes AI accessible, practical, and results-driven for businesses 
                    of all sizes.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 p-8 bg-primary/10 rounded-2xl">
              <blockquote className="text-lg italic text-foreground mb-4">
                "We didn't just want to build another AI company. We wanted to democratize AI and make it 
                a practical tool that every business could leverage to grow and succeed."
              </blockquote>
              <cite className="text-primary font-semibold">- Gurleen Khurana & Daksh Sharma, Co-Founders</cite>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of businesses already leveraging our AI solutions to drive growth and innovation.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg">
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
