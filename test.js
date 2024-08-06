var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
    }
    // Main method to add numbers from the input string
    StringCalculator.add = function (numbers) {
        if (numbers === "")
            return 0;
        // Handle custom delimiters
        var delimiter = /[,\n]/;
        var inputNumbers = numbers;
        if (numbers.startsWith("//")) {
            var delimiterEndIndex = numbers.indexOf('\n');
            delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
            inputNumbers = numbers.substring(delimiterEndIndex + 1);
        }
        // Split the numbers using the determined delimiter
        var numberArray = inputNumbers.split(delimiter);
        // Parse numbers and check for negative numbers
        var sum = 0;
        var negatives = [];
        for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
            var numStr = numberArray_1[_i];
            var num = parseInt(numStr, 10);
            if (isNaN(num))
                continue; // Ignore invalid numbers
            if (num < 0) {
                negatives.push(num);
            }
            else {
                sum += num;
            }
        }
        // Throw exception if there are negative numbers
        if (negatives.length > 0) {
            throw new Error("Negative numbers not allowed: ".concat(negatives.join(', ')));
        }
        return sum;
    };
    return StringCalculator;
}());
