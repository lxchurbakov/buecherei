import React from 'react';

export type PropsOf<T> = T extends React.FC<infer A> ? A : never;

export type Predicate<A extends any[], R> = (...args: A) => R;
export type ArgumentsOf<P> = P extends Predicate<infer A, any> ? A : never;
export type ResultOf<P> = P extends Predicate<any[], infer A> ? A : never;

export type FirstOf<C> = C extends [first: infer A, ...rest: any] ? A : never;
export type AfterFirst<C> = C extends [first: any, ...rest: infer A] ? A : never;
export type ItemOf<C> = C extends (infer A)[] ? A : never;
export type KeyOf<T> = T extends Record<infer A, any> ? A : never;

export class HttpError<T = any>  extends Error {
  public statusCode: number;
  public body: T | undefined;

  constructor (statusCode, body?: T, ...args: any) {
    super(...args)

    this.statusCode = statusCode;
    this.body = body;
  }
};

// Cache the function (can accept promisified functions as well)
export const memoize = <P extends Predicate<any[], any>>(predicate: P, keyer: (...args: ArgumentsOf<P>) => string = (...args) => JSON.stringify(args), timeout: number = 0) => {
  const cache = new Map<string, ResultOf<P>>();

  return (...args: ArgumentsOf<P>) => {
    const key = keyer(...args);

    if (!cache.has(key)) {
      cache.set(key, predicate(...args));
    }

    if (timeout > 0) {
      setTimeout(() => {
        cache.delete(key);
      }, timeout);
    }

    return cache.get(key) as ResultOf<P>;
  };
};
