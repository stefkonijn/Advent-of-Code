import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  // const input = parseInput(
  //   "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))", //should be 161
  // );

  const listOfMul = input.match(/mul\((\d+),(\d+)\)/g);
  let total = 0;
  listOfMul.forEach((mul) => {
    total += calculateMul(mul);
  });
  return total;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  // const input = parseInput(
  //   "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))", //should be 48
  // );

  const splittedOnDo = input.split(/do\(\)/g);

  const doMulList: string[] = [];
  splittedOnDo.forEach((str) => {
    const doStrings = str.split(/don't\(\)/g)[0];
    doMulList.push(doStrings);
  });
  let total = 0;

  doMulList.forEach((mulString) => {
    const listOfMuls = mulString.match(/mul\((\d+),(\d+)\)/g);
    listOfMuls.forEach((mul) => {
      total += calculateMul(mul);
    });
  });

  return total;
};

function calculateMul(str: string) {
  const numbers = str
    .replace("mul(", "")
    .replace(")", "")
    .split(",")
    .map(Number);
  return numbers[0] * numbers[1];
}
run(
  {
    part1: {
      tests: [
        // {
        //   input: ``,
        //   expected: "",
        // },
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
  "src/day03/input.txt",
);
