export function fullPathMatchesItemHref(
  fullPath: string,
  itemHref: string
): Boolean {
  if (itemHref === "/") {
    return fullPath === "/" || fullPath === "";
  }
  return fullPath.startsWith(itemHref);
}
