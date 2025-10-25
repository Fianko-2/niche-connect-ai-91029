import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, MessageCircle } from "lucide-react";

interface MatchCardProps {
  name: string;
  role: string;
  expertise: string[];
  matchScore: number;
  avatar?: string;
  bio: string;
}

const MatchCard = ({ name, role, expertise, matchScore, avatar, bio }: MatchCardProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all hover:scale-[1.01] group">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-16 w-16 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{role}</p>
          
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {matchScore}% Match
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {bio}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {expertise.slice(0, 3).map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-muted/50">
            {skill}
          </Badge>
        ))}
        {expertise.length > 3 && (
          <Badge variant="outline" className="bg-muted/50">
            +{expertise.length - 3} more
          </Badge>
        )}
      </div>
      
      <div className="flex gap-2">
        <Button className="flex-1" variant="default">
          <MessageCircle className="h-4 w-4 mr-2" />
          Connect
        </Button>
        <Button variant="outline">View Profile</Button>
      </div>
    </Card>
  );
};

export default MatchCard;
