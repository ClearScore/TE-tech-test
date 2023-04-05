import { sum, clamp } from "ramda";

export function getStaticScoreByName(name: string): number {
  const score = name
    .split("")
    .map((letter) => letter.codePointAt(0)) as number[];
  return clamp(0, sum(score), 1_000);
}
