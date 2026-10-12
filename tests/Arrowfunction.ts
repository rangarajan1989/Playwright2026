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
