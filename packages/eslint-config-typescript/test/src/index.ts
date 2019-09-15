const d = ""; // eslint-disable-line

export default (): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, 3000));
};
