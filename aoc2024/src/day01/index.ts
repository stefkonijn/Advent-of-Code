import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  //   const input = parseInput(`98442   10520
  // 15717   73514
  // 20342   72228
  // 13498   75812`);

  const leftValues: number[] = [];
  const rightValues: number[] = [];

  input.split("\n").forEach((line) => {
    const [left, right] = line.split(/\s+/).map(Number);

    leftValues.push(left);
    rightValues.push(right);
  });

  leftValues.sort((a, b) => a - b);
  rightValues.sort((a, b) => a - b);

  const diffList: number[] = [];

  leftValues.forEach((element) => {
    const index = leftValues.indexOf(element); //Goes bad with double values
    const diff = rightValues[index] - element;
    diffList.push(Math.abs(diff));
  });
  const sum = diffList.reduce((a, b) => a + b, 0);
  return sum;
};

const part2 = (rawInput: string) => {
  // const input = parseInput(rawInput);

  return;
};

run(
  {
    part1: {
      tests: [
        {
          input: ``,
          expected: "",
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
  "src/day01/input.txt",
);
