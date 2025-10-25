import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const leaderboardData = [
    { name: "Emma Wilson", score: 2850, streak: 45, category: "AI Ethics", rank: 1, trend: "up" },
    { name: "Liam Chen", score: 2720, streak: 38, category: "Maritime Trade", rank: 2, trend: "up" },
    { name: "Sophia Martinez", score: 2680, streak: 42, category: "Renewable Finance", rank: 3, trend: "same" },
    { name: "Noah Johnson", score: 2540, streak: 35, category: "AI Ethics", rank: 4, trend: "down" },
    { name: "Olivia Brown", score: 2490, streak: 31, category: "Maritime Trade", rank: 5, trend: "up" },
    { name: "Ethan Davis", score: 2420, streak: 28, category: "Renewable Finance", rank: 6, trend: "up" },
    { name: "Ava Garcia", score: 2380, streak: 26, category: "AI Ethics", rank: 7, trend: "same" },
    { name: "Lucas Miller", score: 2340, streak: 24, category: "Maritime Trade", rank: 8, trend: "down" },
    { name: "Mia Anderson", score: 2310, streak: 22, category: "Renewable Finance", rank: 9, trend: "up" },
    { name: "Alex Kim", score: 2280, streak: 25, category: "AI Ethics", rank: 10, trend: "same" }
  ];

  const topCategories = [
    { name: "AI Ethics", participants: 1245, avgScore: 1820 },
    { name: "Maritime Trade", participants: 892, avgScore: 1650 },
    { name: "Renewable Finance", participants: 1056, avgScore: 1720 }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Medal className="h-6 w-6 text-amber-600" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-accent rotate-0" />;
    if (trend === "down") return <TrendingUp className="h-4 w-4 text-destructive rotate-180" />;
    return <div className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              Community <span className="bg-gradient-primary bg-clip-text text-transparent">Leaderboard</span>
            </h1>
            <p className="text-muted-foreground">See how you rank among fellow learners in your niche communities</p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {leaderboardData.slice(0, 3).map((user, index) => (
              <Card 
                key={index}
                className={`p-6 text-center relative overflow-hidden ${
                  index === 0 
                    ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/30 shadow-glow' 
                    : index === 1
                    ? 'bg-gradient-to-br from-gray-400/10 to-gray-500/5 border-gray-400/30'
                    : 'bg-gradient-to-br from-amber-600/10 to-amber-700/5 border-amber-600/30'
                }`}
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {getRankIcon(index + 1)}
                  </div>
                  
                  <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl font-bold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-bold text-lg mb-1">{user.name}</h3>
                  <Badge variant="outline" className="mb-3 bg-muted/50">
                    {user.category}
                  </Badge>
                  
                  <div className="space-y-2">
                    <div className="flex justify-center items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {user.score.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      🔥 {user.streak} day streak
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI Ethics</TabsTrigger>
              <TabsTrigger value="maritime">Maritime</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <Card className="divide-y divide-border/50 bg-card/50 backdrop-blur-sm">
                {leaderboardData.map((user, index) => (
                  <div 
                    key={index}
                    className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="w-12 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.category}</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-lg">{user.score.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">🔥 {user.streak} days</div>
                    </div>
                    
                    <div className="w-8">
                      {getTrendIcon(user.trend)}
                    </div>
                  </div>
                ))}
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card className="p-6 text-center text-muted-foreground">
                AI Ethics leaderboard coming soon...
              </Card>
            </TabsContent>

            <TabsContent value="maritime">
              <Card className="p-6 text-center text-muted-foreground">
                Maritime Trade leaderboard coming soon...
              </Card>
            </TabsContent>

            <TabsContent value="finance">
              <Card className="p-6 text-center text-muted-foreground">
                Renewable Finance leaderboard coming soon...
              </Card>
            </TabsContent>
          </Tabs>

          {/* Category Stats */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topCategories.map((category, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
                  <h3 className="font-semibold text-lg mb-4">{category.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="font-semibold">{category.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg. Score:</span>
                      <span className="font-semibold">{category.avgScore.toLocaleString()}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
