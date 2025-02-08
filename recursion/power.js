const pow = (n, e) => {
  if (e < 1) return 1;
  return n * pow(n, e - 1);
};

console.log(pow(2, 3));

// pow(2,3) = 2*pow(2,2) = 2*2*pow(2,1) = 2*2*2*pow(2,0)  = 2*2*2*1
