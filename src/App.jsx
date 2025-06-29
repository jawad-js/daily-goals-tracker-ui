import React from "react";
import Header from "./components/Header";
import GoalCard from "./components/GoalCard";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Header />
      <GoalCard />
      <main className="cards">
        <Card
          title="Track Daily Goals"
          description="Log your daily progress and stay on top of your personal or professional targets with ease."
        />

        <Card
          title="Visualize Your Habits"
          description="Get a clear snapshot of your habits through organized cards to build discipline over time."
        />

        <Card
          title="Set Weekly Milestones"
          description="Break your goals into weekly milestones and track them one step at a time."
        />

        <Card
          title="Stay Motivated"
          description="Every card reminds you of your 'why'—keeping you focused and motivated throughout your journey."
        />
        <Card
          title="Track Daily Goals"
          description="Log your daily progress and stay on top of your personal or professional targets with ease."
        />

        <Card
          title="Visualize Your Habits"
          description="Get a clear snapshot of your habits through organized cards to build discipline over time."
        />

        <Card
          title="Set Weekly Milestones"
          description="Break your goals into weekly milestones and track them one step at a time."
        />

        <Card
          title="Stay Motivated"
          description="Every card reminds you of your 'why'—keeping you focused and motivated throughout your journey."
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
