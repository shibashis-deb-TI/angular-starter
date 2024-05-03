import { z } from 'zod';

export const isString = (x: string | null | undefined): x is string =>
  x !== undefined && x !== null && typeof x === 'string';

export const toString = (x: unknown): string => z.string().parse(x);
