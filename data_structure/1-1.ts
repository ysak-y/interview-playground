const input = "abc";

function validateUniq(input: string): boolean {
  const stringMap = {};
  for (let i = 0; 0 < input.length; i++) {
    const char = input[i];
    if (stringMap[char]) {
      return true;
    } else {
      stringMap[char] = true;
    }
  }

  return false;
}

function validateUniqWithoutNewDataStructure(input: string) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(validateUniq(input));
