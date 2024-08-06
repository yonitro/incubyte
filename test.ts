class StringCalculator {
    // Main method to add numbers from the input string
    static add(numbers: string): number {
        if (numbers === "") return 0;

        // Handle custom delimiters
        let delimiter = /[,\n]/;
        let inputNumbers = numbers;

        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf('\n');
            delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
            inputNumbers = numbers.substring(delimiterEndIndex + 1);
        }

        // Split the numbers using the determined delimiter
        const numberArray = inputNumbers.split(delimiter);

        // Parse numbers and check for negative numbers
        let sum = 0;
        const negatives: number[] = [];

        for (const numStr of numberArray) {
            const num = parseInt(numStr, 10);
            if (isNaN(num)) continue; // Ignore invalid numbers

            if (num < 0) {
                negatives.push(num);
            } else {
                sum += num;
            }
        }

        // Throw exception if there are negative numbers
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        return sum;
    }
}
