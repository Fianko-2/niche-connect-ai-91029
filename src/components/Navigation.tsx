import { Button } from "@/components/ui/button";
import { Sparkles, Users, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-primary p-2 rounded-lg shadow-glow group-hover:scale-110 transition-transform">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            NicheNet
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Target className="h-4 w-4" />
            Dashboard
          </Link>
          <Link to="/matches" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Users className="h-4 w-4" />
            Find Mentors
          </Link>
          <Link to="/leaderboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Trophy className="h-4 w-4" />
            Leaderboard
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="hero" size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
