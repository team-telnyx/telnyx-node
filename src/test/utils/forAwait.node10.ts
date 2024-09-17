export const forAwaitUntil = async function forAwaitUntil(
  iterable: AsyncIterable<unknown>,
  limit: number,
) {
  const items: Array<unknown> = [];
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
