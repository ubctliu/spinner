const rotateSpinner = function(delay) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, delay += 200);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, delay += 200);
  
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, delay += 200);
  
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay += 200);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, delay += 200);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, delay += 200);
  
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, delay += 200);
  
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay += 200);
};

rotateSpinner(100);