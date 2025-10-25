import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, Trophy, Zap, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Matching</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Perfect Match
                </span>{" "}
                in Niche Learning
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with mentors, peers, and professionals who share your unique interests. 
                Build personalized learning communities through gamified challenges and AI-driven matching.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="xl">
                  See How It Works
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">10k+</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-muted-foreground">Niche Topics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-muted-foreground">Match Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="AI-powered learning platform" 
                className="relative rounded-2xl shadow-glow w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">NicheNet</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our AI-powered platform transforms niche learning into an engaging, collaborative experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.02] group">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform shadow-glow">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart AI Matching</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your interests and knowledge to connect you with perfectly compatible mentors and peers
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.02] group">
              <div className="bg-gradient-secondary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform shadow-glow-secondary">
                <Zap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gamified Challenges</h3>
              <p className="text-muted-foreground">
                Engage with micro-challenges and assessments that make learning fun while building your niche score
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.02] group">
              <div className="bg-gradient-accent p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Rewards</h3>
              <p className="text-muted-foreground">
                Track your progress with streaks, leaderboards, and achievements that celebrate your learning journey
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.02] group">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform shadow-glow">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
              <p className="text-muted-foreground">
                Connect with industry professionals and thought leaders in your niche for personalized guidance
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.02] group">
              <div className="bg-gradient-accent p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Niche Score System</h3>
              <p className="text-muted-foreground">
                Build credibility with a dynamic score that reflects your expertise and engagement in specific topics
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.02] group">
              <div className="bg-gradient-secondary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform shadow-glow-secondary">
                <TrendingUp className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Growth</h3>
              <p className="text-muted-foreground">
                Improve matching accuracy through feedback loops and ratings that evolve with your learning path
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="bg-gradient-primary bg-clip-text text-transparent">NicheNet</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to find your learning community
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Create Profile", desc: "Share your interests and learning goals" },
              { step: "2", title: "Take Challenges", desc: "Complete gamified assessments to build your niche score" },
              { step: "3", title: "Get Matched", desc: "AI connects you with compatible mentors and peers" },
              { step: "4", title: "Grow Together", desc: "Collaborate, learn, and achieve your goals" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Niche Community
            </span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners discovering personalized mentorship and collaborative growth
          </p>
          <Button variant="hero" size="xl" className="text-lg">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
