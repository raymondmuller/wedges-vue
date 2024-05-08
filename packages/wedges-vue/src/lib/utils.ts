import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { Comment, Fragment, type Ref, type Slot, Text, type VNode } from "vue";

/**
 * twMerge with extended options.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      padding: ["2px", "4px", "6px", "8px", "12px", "14px", "16px"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates a 32-bit integer hash value for the given string using the djb2 algorithm.
 *
 * @param str - The input string to be hashed.
 * @returns A 32-bit integer hash value.
 */
export function stringToHash(str: string) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);

    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }

  return hash;
}

/**
 * Returns a string from array based on a given hash number.
 *
 * @param hash - The hash number to generate a color for.
 * @param strings - The array of strings to choose from.
 * @returns The color string generated from the hash.
 */
export function getElementFromHash(hash: number, strings: string[]) {
  const index = Math.abs(hash) % strings.length;

  return strings[index];
}

export function hasSlotContent(slot: Slot | undefined | null, props: any = {}) {
  return !isSlotEmpty(slot, props);
}

export function isSlotEmpty(slot: Slot | undefined | null, props: any = {}) {
  return isVNodeEmpty(slot?.(props));
}

export function isVNodeEmpty(vnode: VNode | VNode[] | undefined | null) {
  return (
    !vnode
    || asArray(vnode).every(
      vnode =>
        vnode.type === Comment
        || (vnode.type === Text && !vnode.children?.length)
        || (vnode.type === Fragment && !vnode.children?.length),
    )
  );
}

export function isAsyncPlaceholder(node: VNode): boolean {
  // @ts-expect-error not really boolean type
  return node.isComment && node.asyncFactory;
}

export function asArray<T>(arg: T | T[] | null) {
  return Array.isArray(arg) ? arg : arg !== null ? [arg] : [];
}

export function refHasTextNode(ref: Ref) {
  return ref.value.$el?.nodeName === "#text";
}
