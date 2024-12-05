import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  //   const input = parseInput(`7 6 4 2 1
  // 1 2 7 8 9
  // 9 7 6 2 1
  // 1 3 2 4 5
  // 8 6 4 4 1
  // 1 3 6 7 9`);

  const lines: number[][] = [];
  input.split("\n").forEach((line) => {
    lines.push(line.split(/\s+/).map(Number));
  });

  let safe = 0;
  lines.forEach((line) => {
    if (isAscending(line) || isDescending(line)) {
      safe++;
    }
  });

  return safe;
};

function isAscending(arr: number[]) {
  return arr.every((current, index) => {
    if (index === 0) return true;
    const previous = arr[index - 1];
    const difference = Math.abs(current - previous);
    return current >= previous && difference >= 1 && difference <= 3;
  });
}

function isDescending(arr: number[]) {
  return arr.every((current, index) => {
    if (index === 0) return true;
    const previous = arr[index - 1];
    const difference = Math.abs(current - previous);
    return current <= previous && difference >= 1 && difference <= 3;
  });
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run(
  {
    part1: {
      tests: [
        {
          input: `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,
          expected: 2,
        },
      ],
      solution: part1,
    },
    part2: {
      tests: [
        // {
        //   input: ``,
        //   expected: "",
        // },
      ],
      solution: part2,
    },
    trimTestInputs: true,
    onlyTests: false,
  },
  "src/day02/input.txt",
);
