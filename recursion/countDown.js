const countDown = (n) => {
  if (n <= 0) return console.log("All done!");
  console.log(n);
  countDown(n - 1);
};

countDown(5);
