import { PropsWithChildren } from "react";

export function propsAreEqual<P>(fn: (pre: Readonly<PropsWithChildren<P>>, next: Readonly<PropsWithChildren<P>>) => boolean) {
  return fn
}