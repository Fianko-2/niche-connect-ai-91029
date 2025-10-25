import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface NicheScoreCardProps {
  score: number;
  category: string;
  trend?: number;
}

const NicheScoreCard = ({ score, category, trend = 0 }: NicheScoreCardProps) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{category}</h3>
        {trend > 0 && (
          <div className="flex items-center gap-1 text-accent text-sm font-semibold">
            <TrendingUp className="h-3 w-3" />
            +{trend}%
          </div>
        )}
      </div>
      
      <div className="relative flex items-center justify-center">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/20"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {score}
            </div>
            <div className="text-xs text-muted-foreground">Score</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NicheScoreCard;
