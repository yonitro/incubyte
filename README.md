# incubyte

Explanation
Delimiter Handling:

The delimiter is set to a default regex that handles commas and new lines.
If the input starts with //, the custom delimiter is extracted from the string and used to split the numbers.

Number Parsing:

The input string is split based on the delimiter.
Numbers are parsed and summed if they are non-negative.
Negative numbers are collected and an exception is thrown if any are found.
Exception Handling:

The exception message lists all negative numbers encountered.
This implementation covers the requirements and can be tested using a TDD approach to ensure it handles various edge cases and input formats correctly.
