import { nanoid } from "nanoid";

export function generateAlias(size = 8) {
  return nanoid(size);
}
