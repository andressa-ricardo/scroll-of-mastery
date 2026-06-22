export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { id: "discover", title: "Discover", description: "Understand goals, audience and constraints." },
  { id: "plan", title: "Plan", description: "Roadmap, scope and measurable milestones." },
  { id: "build", title: "Build", description: "Design and development with iterative feedback." },
  { id: "grow", title: "Grow", description: "Launch, measure and optimize for scale." },
];

export default processSteps;
