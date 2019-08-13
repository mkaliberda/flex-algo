// console color
const FG_RED = '\x1b[31m';
const FG_GREEN = '\x1b[32m';
const FG_BLUE = '\x1b[34m';
const FG_YELLOW = "\x1b[33m"

const START_NBR = 1;
const END_NBR = 100;
const PRINT_NBR = 50;

const SAY_ONE = "Block";
const SAY_TWO = "Chain";
const SAY_THREE_FIVE = "BlockChain";

const resultToSwitch = {
    2: {
        color: FG_GREEN,
        text: SAY_TWO,
    },
    3: {
        color: FG_BLUE,
        text: SAY_THREE_FIVE,
    },
    5: {
        color: FG_BLUE,
        text: SAY_THREE_FIVE,
    },
    0: {
        color: FG_YELLOW,
        text: SAY_ONE,
    }
}

const checkerMultiply = (currentNumber) => {
    let foundToPrint = undefined;
    Object.keys(resultToSwitch).forEach((item) => {
        if (currentNumber % item === 0) {
            foundToPrint =  {
                color: resultToSwitch[item].color,
                text: resultToSwitch[item].text,
            };
        }
    })
    // if found in object that return this value
    if (foundToPrint) return foundToPrint;
    // if not found in object that 0 key default value
    return {
        color: resultToSwitch[0].color,
        text: resultToSwitch[0].text,
    }
}

const checkerNumber = (currentNumber) => {
    if (currentNumber <= PRINT_NBR) { 
        return {
            color: FG_RED,
            text: `The number is ${ currentNumber }`,
        };
    } else {
        return checkerMultiply(currentNumber);
    }
}

for (let i = 1; i <= END_NBR; i++) {
    const result = checkerNumber(i);
    console.log(result.color, result.text);
}