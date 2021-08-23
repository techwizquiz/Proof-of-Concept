const questionRandomizer = (arr) => {
  // pick random object from array depending on length of array
  return Math.floor(Math.random() * arr.length);
};

export default questionRandomizer;
