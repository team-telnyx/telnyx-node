export const awaitUntil = async function awaitUntil(
  iterator: AsyncIterator<unknown>,
  limit: number,
) {
  const items: Array<unknown> = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const {value, done} = await iterator.next();
    if (done) break;
    items.push(value);
    if (items.length === limit) {
      break;
    }
    if (items.length > limit) {
      throw Error('Kept iterating after break.');
    }
  }
  return items;
};
