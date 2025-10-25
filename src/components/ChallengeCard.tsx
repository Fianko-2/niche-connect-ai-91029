import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  description: string;
  points: number;
  timeEstimate: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
}

const ChallengeCard = ({ 
  title, 
  description, 
  points, 
  timeEstimate, 
  difficulty, 
  category 
}: ChallengeCardProps) => {
  const difficultyColors = {
    easy: "bg-accent/20 text-accent border-accent/30",
    medium: "bg-secondary/20 text-secondary-foreground border-secondary/30",
    hard: "bg-primary/20 text-primary border-primary/30"
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all hover:scale-[1.01] group">
      <div className="flex items-start justify-between mb-3">
        <Badge variant="outline" className="bg-muted/50">
          {category}
        </Badge>
        <div className="flex items-center gap-1 text-secondary font-bold text-lg">
          <Zap className="h-4 w-4" />
          {points}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {timeEstimate}
          </div>
          <Badge className={difficultyColors[difficulty]} variant="outline">
            {difficulty}
          </Badge>
        </div>
        
        <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
          Start
        </Button>
      </div>
    </Card>
  );
};

export default ChallengeCard;
