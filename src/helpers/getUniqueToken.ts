export const getUniqueToken = (): string => {
  const head = Date.now().toString(32);
  const body = Math.random().toString(32);

  return head + body;
};
