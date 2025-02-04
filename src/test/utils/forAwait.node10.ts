export async function forAwaitUntil<T = unknown>(
  iterable: AsyncIterable<T>,
  limit: number,
) {
  const items: Array<T> = [];
  for await (const item of iterable) {
    items.push(item);
    if (items.length === limit) {
      break;
    }
    if (items.length > limit) {
      throw Error('Kept iterating after break.');
    }
  }
  return items;
};
