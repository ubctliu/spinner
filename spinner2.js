const rotateSpinner = function(delay, increase) {
  const spinnerPositions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  for (let i = 0; i < spinnerPositions.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerPositions[i]);
    }, delay += increase);
  }
};

rotateSpinner(100, 200);