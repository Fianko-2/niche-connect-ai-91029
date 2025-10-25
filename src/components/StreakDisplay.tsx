import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";

interface StreakDisplayProps {
  currentStreak: number;
  longestStreak: number;
}

const StreakDisplay = ({ currentStreak, longestStreak }: StreakDisplayProps) => {
  return (
    <Card className="p-6 bg-gradient-secondary border-secondary/30 relative overflow-hidden group hover:shadow-glow-secondary transition-all">
      <div className="absolute -right-8 -top-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Flame className="h-32 w-32 text-secondary-foreground" />
      </div>
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="h-6 w-6 text-secondary-foreground animate-pulse" />
          <h3 className="text-sm font-medium text-secondary-foreground/80">Daily Streak</h3>
        </div>
        
        <div className="flex items-baseline gap-4">
          <div>
            <div className="text-4xl font-bold text-secondary-foreground">
              {currentStreak}
            </div>
            <div className="text-xs text-secondary-foreground/70">days</div>
          </div>
          
          <div className="border-l border-secondary-foreground/20 pl-4">
            <div className="text-sm text-secondary-foreground/80">
              Best: <span className="font-semibold">{longestStreak}</span> days
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StreakDisplay;
