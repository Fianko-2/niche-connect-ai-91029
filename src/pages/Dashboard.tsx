import Navigation from "@/components/Navigation";
import NicheScoreCard from "@/components/NicheScoreCard";
import ChallengeCard from "@/components/ChallengeCard";
import StreakDisplay from "@/components/StreakDisplay";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, Target } from "lucide-react";

const Dashboard = () => {
  const challenges = [
    {
      title: "Maritime Trade Basics",
      description: "Learn the fundamentals of international maritime commerce and shipping routes",
      points: 50,
      timeEstimate: "15 min",
      difficulty: "easy" as const,
      category: "Maritime"
    },
    {
      title: "AI Ethics Framework",
      description: "Explore ethical considerations in artificial intelligence development and deployment",
      points: 100,
      timeEstimate: "30 min",
      difficulty: "medium" as const,
      category: "AI Ethics"
    },
    {
      title: "Renewable Finance Models",
      description: "Deep dive into financial structures for renewable energy projects",
      points: 150,
      timeEstimate: "45 min",
      difficulty: "hard" as const,
      category: "Finance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="bg-gradient-primary bg-clip-text text-transparent">Alex</span>
            </h1>
            <p className="text-muted-foreground">Track your progress and continue your learning journey</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Streak Card */}
              <StreakDisplay currentStreak={12} longestStreak={28} />
              
              {/* Weekly Progress */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Weekly Goal</h2>
                  <span className="text-sm text-muted-foreground">3 of 5 challenges completed</span>
                </div>
                <Progress value={60} className="h-3 mb-2" />
                <p className="text-sm text-muted-foreground">Complete 2 more challenges to reach your weekly goal!</p>
              </Card>

              {/* Achievements */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Recent Achievements
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "First Challenge", icon: "🎯" },
                    { name: "7 Day Streak", icon: "🔥" },
                    { name: "Top 10%", icon: "🏆" }
                  ].map((achievement, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center hover:scale-105 transition-transform"
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <div className="text-xs font-medium">{achievement.name}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Niche Scores Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Your Niche Scores
                </h2>
                <div className="space-y-4">
                  <NicheScoreCard score={85} category="AI Ethics" trend={12} />
                  <NicheScoreCard score={72} category="Maritime Trade" trend={8} />
                  <NicheScoreCard score={68} category="Renewable Finance" trend={5} />
                </div>
              </Card>
            </div>
          </div>

          {/* Available Challenges */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Available Challenges
              </h2>
              <Button variant="outline">View All</Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <ChallengeCard key={index} {...challenge} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
