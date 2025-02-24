const func = () => {
  // Refactor this to be its own function
  const randomPercentage = `${newFunction().toFixed(2)}%`;
  console.log(randomPercentage);
};
function newFunction() {
  return Math.random() * 100;
}
