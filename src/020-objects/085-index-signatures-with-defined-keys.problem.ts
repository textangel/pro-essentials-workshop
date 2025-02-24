interface Scores extends RequiredScores {
  [key: string]: number;
}
interface RequiredScores {
  math: number;
  english: number;
  science: number;
}
// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
  // science: 85,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
