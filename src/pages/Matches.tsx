import Navigation from "@/components/Navigation";
import MatchCard from "@/components/MatchCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, SlidersHorizontal } from "lucide-react";
import matchingNetwork from "@/assets/matching-network.jpg";

const Matches = () => {
  const matches = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Ethics Researcher",
      expertise: ["AI Ethics", "Machine Learning", "Policy Development", "Research"],
      matchScore: 94,
      bio: "Leading researcher in AI ethics with 10+ years experience in developing ethical frameworks for autonomous systems."
    },
    {
      name: "James Rodriguez",
      role: "Maritime Trade Consultant",
      expertise: ["International Trade", "Shipping Routes", "Logistics", "Supply Chain"],
      matchScore: 89,
      bio: "Senior consultant specializing in maritime commerce with expertise in global shipping and trade regulations."
    },
    {
      name: "Maria Santos",
      role: "Renewable Energy Analyst",
      expertise: ["Renewable Finance", "Project Analysis", "Green Bonds", "ESG"],
      matchScore: 87,
      bio: "Financial analyst focused on renewable energy investments and sustainable finance models."
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      expertise: ["AI Development", "Ethics", "Open Source", "Education"],
      matchScore: 85,
      bio: "Full-stack developer passionate about ethical AI and creating accessible educational technology."
    },
    {
      name: "Dr. Priya Patel",
      role: "Climate Finance Expert",
      expertise: ["Climate Finance", "Carbon Markets", "ESG Investing", "Policy"],
      matchScore: 83,
      bio: "Expert in climate finance mechanisms and carbon credit markets with a focus on emerging economies."
    },
    {
      name: "Michael Wong",
      role: "Maritime Engineer",
      expertise: ["Ship Design", "Maritime Tech", "Sustainability", "Innovation"],
      matchScore: 81,
      bio: "Naval architect working on sustainable shipping solutions and green maritime technologies."
    }
  ];

  const topInterests = ["AI Ethics", "Maritime Trade", "Renewable Finance", "Sustainability"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              Find Your <span className="bg-gradient-primary bg-clip-text text-transparent">Perfect Match</span>
            </h1>
            <p className="text-muted-foreground">Connect with mentors and peers who share your niche interests</p>
          </div>

          {/* Featured Banner */}
          <Card className="mb-8 overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3">AI-Powered Matching</h2>
                <p className="text-muted-foreground mb-4">
                  Our intelligent algorithm analyzes your niche scores, interests, and learning goals to find the most compatible mentors and peers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {topInterests.map((interest, index) => (
                    <Badge key={index} className="bg-primary/20 text-primary border-primary/30">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={matchingNetwork} 
                  alt="AI matching network" 
                  className="rounded-lg shadow-elegant w-full h-64 object-cover"
                />
              </div>
            </div>
          </Card>

          {/* Search and Filters */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by name, expertise, or interest..." 
                className="pl-10 bg-card/50 backdrop-blur-sm"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Matches Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Matches
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
