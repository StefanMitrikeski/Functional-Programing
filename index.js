function binarConverter(no) {
    const result = [];

    while (no > 0) {
        const modulo = no % 2;
        const division = Math.floor(no / 2);
        no = division;
        result.push(modulo);
    }
    var results = parseInt(result.reverse().join(''));
    console.log(results);
};
binarConverter(1551003);

function Palindrome(word) {

    var reverseNumber = parseInt(word.toString().split("").reverse().join(""));
    var reverseWord = word.toString().split("").reverse().join("");
    if (word === reverseNumber || word === reverseWord) {
        console.log(`is plaindrome ${reverseWord}`)
    } else {
        console.log(`not palindrome ${reverseWord}`)
    }

}
Palindrome(1331);

// Write a JavaScript program to find the armstrong numbers of 3 digits. 
// Note : An Armstrong number of three digits is an integer such that the 
// sum of the cubes of its digits is equal to the number itself. 
// For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function ArmstrongNumber(num) {
    var result = 0;
    while (num > 0) {
        var digit = num % 10;
        var result = result + Math.pow(digit, 3);
        num = Math.floor(num / 10)
    }
    return result;
}
for (let i = 100; i < 999; i++) {
    var result = ArmstrongNumber(i);
    if (result === i) {
        console.log(i + " is amstrong number");
    }
// }
ArmstrongNumber(121);

function maxNumbers(a, b, c) {

    const num1 = a;
    const num2 = b;
    const num3 = c;

    if (a > b && a > c) {
        console.log(`max number is ${num1}`)
        return a;
    } else if (b < a && c < b) {
        console.log(`max number is ${num2}`)
        return b;
    } else {
        console.log(`max number is ${num3}`)
        return c;
    }

}
maxNumbers(123, 12312, 123123);

function getRandom(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function maxFromArr() {
    const niza = [];
    for (let i = 0; i < 10; i++) {
        const x = getRandom(0, 100);
        console.log(x);
        niza.push(x);
    }
    const neshto = Math.max(...niza);
    console.log(neshto, "is the biggest");
}
maxFromArr();

function maxFromArray() {
    const niza = [];
    var biggestNum = 0;
    for (let i = 0; i < 10; i++) {
        var x = getRandom(0, 100);
        niza.push(x);
        var num = niza[i];

        console.log("array number", num)

        if (num > biggestNum) {
            biggestNum = num;
        }
    }
    console.log(niza);
    console.log("biggest number", biggestNum);
};
maxFromArray();

// Calculate the tax that people need to pay for their salary. 
// Until they reach 1000 eur, they pay 11% tax, but when they go above 1000 eur, 
// they pay 18% for the sum above the threshold. 
// (Example: 1300 eur salary, 1000 eur get taxed 11%, 300 eur get taxed 18%, get the total tax). 
// Modify the function to check if the worker is a craftsman, 
// if he is, drop the taxes to 5% and 10% respectively

function Salary(num, type) {
    if (type === "craftsman") {
        if (num <= 1000) {
            const result = num * 0.05;
            console.log("the tax of the craftsman is ", result)
            return result;
        } else if (num > 1000) {
            const result = (num - 1000) * 0.1 + (1000 * 0.05);
            console.log("the tax of the craftsman is ", result)
            return result;
        }
    } else {
        if (num <= 1000) {
            const result = num * 0.11;
            console.log("the tax is ", result)
            return result;
        } else if (num > 1000) {
            const result = (num - 1000) * 0.18 + (1000 * 0.11);
            console.log("the tax is ", result)
            return result;
        }
    }
}
Salary(1300, "zero");

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} Fizz Buzz`);
        } else if (i % 5 === 0) {
            console.log(`${i} Buzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} Fizz`);
        } else {
            console.log(`${i} is not devidable`);
        }
    }
}
fizzBuzz(5);

function arrayInt(n) {
    const niza = [];
    for (let i = 0; i < n; i++) {
        niza.push(i);
    }
    console.log('osnovno sranje', niza)
}
arrayInt(10)
function fibonacci() {
    var array = [];
    array[0] = 0;
    array[1] = 1;
    for (let i = 2; i < 10; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    console.log(array)
}
fibonacci();

function sumOFNum(num) {
    var number = num.toString().split("").map(Number).reduce(function (a, b) { return a + b }, 0);
    console.log(number)
}
sumOFNum(123);

function removeDuplicates(data) {
    var result = '';
    for (let i = 0; i < data.length; i++) {
        if (result.indexOf(data[i]) < 0) {
            result += data[i]
        }
    }
    console.log(result)
}
removeDuplicates("baba");

function learnMapping() {
    var materials = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ];

    materials.map((str) => {
        const { length } = str;
        console.log(length)
        return length;
    });
};
learnMapping();

function findIndexOfArray(n) {
    console.log("N equals to " + n);
    const arr = [];
    const iterations = getRandom(9, 15);
    console.log("number of iterations " + iterations);
    for(i = 0; i < iterations; i++) {    
      arr.push(getRandom(0, 15));
    }
    console.log("array " + arr);
    const indexOfArray = arr[n];
      if(indexOfArray) {
      console.log(indexOfArray);
      const result = indexOfArray ** n;
      console.log(result);
      } else {
        console.log('Whatever')
      }
  };

  findIndexOfArray(getRandom(0, 15));
 
  function multiplyDigits(num) {
    const arr = num.toString().split("").filter(e => e != 0);
    let sum = 1;
    for(let i = 0; i < arr.length; i++) {
      sum = sum * arr[i];
    }
    console.log("result " + arr, sum);
  };
  multiplyDigits(2020202);

  function sumOFNum(num) {
    const number = num.toString().split("").map(Number).reduce(function (a, b) { return a * b });
    console.log("rezultat",number)
 };
 sumOFNum(123123);

function romanNumConverter(n){
    var singleDigits=[
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VI",
        "VIII",
        "IX",
        "X"
    ]
    for (let i = 0; i <= n; i++) {
        if(i === n-1){
            console.log("roman number is:",singleDigits[i]);
        }
    }
}
romanNumConverter(9);