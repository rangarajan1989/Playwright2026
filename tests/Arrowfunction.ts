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

async function rowCount(page: Page): Promise<number> {
  return page.locator(".row").count();
}

async function rowCountasif(page: Page): Promise<number> {
  return page.locator(".row").count();
}
const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(2, 3));
