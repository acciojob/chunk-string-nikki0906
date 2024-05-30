function stringChop(str, size) {
  // your code here
	if (str === null) {
    return [];
  }

  const result = [];
  const strLength = str.length;

  for (let i = 0; i < strLength; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
