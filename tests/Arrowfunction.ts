function removeDuplicates(nums: number[]): number[] | null {
  let seen = new Set<number>();
  for (let i of nums) {
    seen.add(i);
  }
  const newArray = Array.from(seen);
  return newArray;
}
import { Page } from "@playwright/test";

const showArgs = (...args: string[]) => {
  console.log(args);
};
interface User {
  id: number;
  name: string;
  role: Role;
  city?: string;
  readonly createdAt: Date;
}
type Role = "sdet" | "admin" | "viewer";
