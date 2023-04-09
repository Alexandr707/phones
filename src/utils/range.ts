export const range = (from: number, to: number) => {
  const r: number[] = [];

  for (let i = from; i <= to; i += 1) {
    r.push(i);
  }

  return r;
};
