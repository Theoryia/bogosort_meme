function randomizeString(str) {
  let randomized = "";
  while (str.length > 0) {
    const index = Math.floor(Math.random() * str.length);
    randomized += str.charAt(index);
    str = str.slice(0, index) + str.slice(index + 1);
  }
  return randomized;
}
let count = 0;
function bogosort(input, target, orgin) {
  
  console.log("bogosorting");
  const startTime = performance.now();
  while (input !== target) {
    console.log(`${input} (sort) count: ${count}`);
    input = randomizeString(input);
    count = count + 1;
    if (count % 1000000 == 0){
      console.log("sorting " + count)
    }
  }
  const endTime = performance.now();
  const elapsedTime = endTime - startTime;
  console.log(`${orgin} -> ${input} (sorted)`);
  console.log(`Elapsed time: ${elapsedTime.toFixed(4)}ms and Operations: ${count}`);
}

const target = "hello worlde";
const input = "worlde hello";
bogosort(input, target, input);
