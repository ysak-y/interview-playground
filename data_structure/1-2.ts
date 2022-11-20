const input = "abc";
const another = "bca";

function validateSorted(input: string, another: string): boolean {
  if (input.length !== another.length) return false;
  const matchedIndex = new Array(input.length).fill(false);

  for (let i = 0; i < input.length; i++) {
    let matched = false;
    for (let j = 0; j < another.length; j++) {
      if (input[i] === another[j] && matchedIndex[j] === false) {
        matchedIndex[j] = true;
        matched = true;
        break;
      }
    }

    if (!matched) return false;
  }
  return matchedIndex.every((m) => m === true);
}

console.log(validateSorted(input, another));
