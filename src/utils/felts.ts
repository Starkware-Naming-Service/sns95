import { pedersen } from "starknet/dist/utils/hash";

export const charToFelt = (str: string): number => str.charCodeAt(0);

// export const encodeStrAsListOfFelts = (input: string): number[] => {
//   const inputList = input.split("");
//   const outputList = inputList.map(charToFelt);
//   return outputList;
// };

export const hashName = (name: string) : string => {
  if (name.length === 0) {
    return "0";
  }
  const recursiveHash = hashName(name.slice(1));
  return pedersen([charToFelt(name[0]), recursiveHash]);
};

/*
  There is an implied .stark. This hash function will only work for small strings.
*/
export const encodeNameAsFelt = (name: string) : string => {
  if (name.length > 30) {
    throw new Error("name too long")
  }
  let length = name.length < 16 ? `0${name.length.toString(16)}` : name.length.toString(16)
  return `0x${[length, ...name.split("").map(char => char.charCodeAt(0).toString(16))].join("")}`
};

export const decodeNameAsFelt = (name: string) : string => {
  // remove leading 0x
  name = name.slice(2)
  let length = parseInt(name.slice(0, 2), 16)
  let acc = ""
  for (let i = 0; i < length * 2; i += 2) {
    console.log(i)
    console.log(name.slice(i + 2, i + 4))
    acc = acc.concat(String.fromCharCode(parseInt(name.slice(i + 2, i + 4), 16)))
  }
  return acc
};
