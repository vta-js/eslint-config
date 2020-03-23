const d = Date.now(); // eslint-disable-line

export default function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
