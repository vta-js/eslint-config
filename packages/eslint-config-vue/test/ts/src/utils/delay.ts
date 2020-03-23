const d = Date.now(); // eslint-disable-line

export default function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
