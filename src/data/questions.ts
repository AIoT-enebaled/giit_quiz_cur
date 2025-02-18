export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  hint: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What is the type of 10 in Python?",
    options: ["int", "float", "str", "complex"],
    correctAnswer: 0,
    hint: "Whole numbers are integers. 🔢"
  },
  {
    id: 2,
    text: "What is the type of 3.14 in Python?",
    options: ["str", "complex", "float", "int"],
    correctAnswer: 2,
    hint: "It's a decimal number. 💫"
  },
  {
    id: 3,
    text: "What is the type of 'Hello, World!'?",
    options: ["float", "bool", "int", "str"],
    correctAnswer: 3,
    hint: "Strings store text enclosed in quotes. 📝"
  },
  {
    id: 4,
    text: "What is the type of True in Python?",
    options: ["str", "bool", "float", "int"],
    correctAnswer: 1,
    hint: "It's used to represent logical values (true or false). ✅"
  },
  {
    id: 5,
    text: "Which type does 1 + 2j belong to?",
    options: ["str", "float", "int", "complex"],
    correctAnswer: 3,
    hint: "Complex numbers have real and imaginary parts. 🌀"
  },
  {
    id: 6,
    text: "What is the type of None in Python?",
    options: ["undefined", "void", "null", "NoneType"],
    correctAnswer: 3,
    hint: "It's used to represent the absence of a value. ⭕"
  },
  {
    id: 7,
    text: "Which data type is immutable: list, tuple, or dict?",
    options: ["dict", "tuple", "list", "set"],
    correctAnswer: 1,
    hint: "Tuples cannot be changed once created. 🔒"
  },
  {
    id: 8,
    text: "What is the output of '5' + '5' in Python?",
    options: ["Error", "None", "10", "55"],
    correctAnswer: 3,
    hint: "Strings concatenate in Python. 🔤"
  },
  {
    id: 9,
    text: "What is the type of range(5) in Python?",
    options: ["sequence", "list", "range", "tuple"],
    correctAnswer: 2,
    hint: "It represents a sequence of numbers. 📊"
  },
  {
    id: 10,
    text: "What is the purpose of a for loop in Python?",
    options: ["To handle errors", "To iterate over an iterable", "To create variables", "To define functions"],
    correctAnswer: 1,
    hint: "Use for loops to traverse elements. 🔄"
  },
  {
    id: 11,
    text: "How do you create an infinite loop using while?",
    options: ["while(!false):", "while infinite:", "while(1):", "while True:"],
    correctAnswer: 3,
    hint: "True as the condition keeps the loop running forever. ♾️"
  },
  {
    id: 12,
    text: "What does the break keyword do in a loop?",
    options: ["Continues the loop", "Exits the loop", "Restarts the loop", "Pauses the loop"],
    correctAnswer: 1,
    hint: "It stops the loop immediately. 🛑"
  },
  {
    id: 13,
    text: "What is the purpose of the continue keyword?",
    options: ["Ends the program", "Exits the loop", "Skips to the next iteration", "Pauses the loop"],
    correctAnswer: 2,
    hint: "It bypasses the rest of the current loop. ⏭️"
  },
  {
    id: 14,
    text: "What is the syntax of an if statement in Python?",
    options: ["if: condition", "if condition then", "if condition:", "if (condition) {"],
    correctAnswer: 2,
    hint: "Conditions are followed by a colon (:). 🔍"
  },
  {
    id: 15,
    text: "What is the purpose of elif in Python?",
    options: ["Creates an else block", "Defines a function", "Ends the if statement", "Adds another condition"],
    correctAnswer: 3,
    hint: "Use elif for alternative conditions after if. 🔀"
  },
  {
    id: 16,
    text: "How do you write an if-else statement in Python?",
    options: ["if condition ... else ...", "if condition: ... else: ...", "if condition then ... else ...", "if (condition) { ... } else { ... }"],
    correctAnswer: 1,
    hint: "else executes when the if condition is false. ⚖️"
  },
  {
    id: 17,
    text: "What is the output of 'if 5 > 3: print(\"True\")'?",
    options: ["None", "Error", "False", "True"],
    correctAnswer: 3,
    hint: "The condition evaluates as true. ✨"
  },
  {
    id: 18,
    text: "What does the def keyword do in Python?",
    options: ["Creates a variable", "Imports a module", "Defines a function", "Declares a class"],
    correctAnswer: 2,
    hint: "It's used to create reusable blocks of code. 📦"
  },
  {
    id: 19,
    text: "What is the purpose of return in a function?",
    options: ["Creates a loop", "Returns a value to the caller", "Defines a variable", "Prints a value"],
    correctAnswer: 1,
    hint: "It provides the result of the function. 🎯"
  },
  {
    id: 20,
    text: "What is a lambda function in Python?",
    options: ["A module import", "A class method", "A multi-line function", "A single-line anonymous function"],
    correctAnswer: 3,
    hint: "It uses the lambda keyword. λ"
  },
  {
    id: 21,
    text: "How do you create a dictionary in Python?",
    options: ["Using set()", "Using {} with key-value pairs", "Using []", "Using ()"],
    correctAnswer: 1,
    hint: "Example: {\"key\": \"value\"}. 📚"
  },
  {
    id: 22,
    text: "What is the difference between a list and a tuple?",
    options: ["There is no difference", "Tuples can store more items", "Lists are mutable, tuples are immutable", "Lists are faster than tuples"],
    correctAnswer: 2,
    hint: "One can change, the other cannot. 🔄"
  },
  {
    id: 23,
    text: "How do you access the first element of a list?",
    options: ["list.get(0)", "list.first()", "list(1)", "list[0]"],
    correctAnswer: 3,
    hint: "Python uses zero-based indexing. 📍"
  },
  {
    id: 24,
    text: "What is the purpose of the update method in dictionaries?",
    options: ["Creates a new dictionary", "Updates the dictionary with key-value pairs", "Removes all items", "Sorts the dictionary"],
    correctAnswer: 1,
    hint: "It adds or modifies dictionary entries. 🔄"
  },
  {
    id: 25,
    text: "How do you remove an item from a list by its value?",
    options: ["Using list.delete(value)", "Using del list[value]", "Using list.pop(value)", "Using list.remove(value)"],
    correctAnswer: 3,
    hint: "It removes the first occurrence of the value. ❌"
  },
  {
    id: 26,
    text: "What does the try-except block do in Python?",
    options: ["Creates a loop", "Imports a module", "Handles exceptions (errors)", "Defines a function"],
    correctAnswer: 2,
    hint: "It's used to prevent program crashes. 🛡️"
  },
  {
    id: 27,
    text: "Which exception is raised for division by zero?",
    options: ["TypeError", "ValueError", "ZeroDivisionError", "ArithmeticError"],
    correctAnswer: 2,
    hint: "It's specific to division issues. ➗"
  },
  {
    id: 28,
    text: "What does the finally block do in Python?",
    options: ["Never executes", "Only executes if no error", "Only executes on error", "Executes no matter what"],
    correctAnswer: 3,
    hint: "It's guaranteed to run, even if there's an error. ✅"
  },
  {
    id: 29,
    text: "What is the output of try-except with division by zero?",
    options: ["Error", "None", "0", "Cannot divide by zero"],
    correctAnswer: 3,
    hint: "The except block catches the error. 🚫"
  },
  {
    id: 30,
    text: "How do you skip the rest of the code inside a loop and move to the next iteration?",
    options: ["Using return", "Using continue", "Using break", "Using pass"],
    correctAnswer: 1,
    hint: "It bypasses the current iteration. ⏭️"
  },
  {
    id: 31,
    text: "What is the output of this code?\n```python\nprint(3 * \"Hi \")\n```",
    options: ["Hi Hi Hi", "HiHiHi", "Hi Hi Hi ", "Error"],
    correctAnswer: 2,
    hint: "Strings can be multiplied to repeat them. 🔁"
  },
  {
    id: 32,
    text: "What is the output of this code?\n```python\nprint(len(\"Python\"))\n```",
    options: ["5", "6", "4", "7"],
    correctAnswer: 1,
    hint: "len() returns the number of characters in a string. 📏"
  },
  {
    id: 33,
    text: "What does this code output?\n```python\nx = [1, 2, 3]\nprint(x[-1])\n```",
    options: ["1", "2", "Error", "3"],
    correctAnswer: 3,
    hint: "Negative indexing accesses elements from the end of a list. 🔚"
  },
  {
    id: 34,
    text: "What is the result of this expression?\n```python\n5 // 2\n```",
    options: ["2.5", "2", "3", "2.0"],
    correctAnswer: 1,
    hint: "// performs floor division (no decimals). ⬇️"
  },
  {
    id: 35,
    text: "What does this code print?\n```python\nprint(\"apple\" in [\"apple\", \"banana\", \"cherry\"])\n```",
    options: ["False", "None", "Error", "True"],
    correctAnswer: 3,
    hint: "The in operator checks for membership in a list. 🔍"
  },
  {
    id: 36,
    text: "What is the output of this code?\n```python\nmy_dict = {\"name\": \"Alice\", \"age\": 25}\nprint(my_dict[\"name\"])\n```",
    options: ["25", "Alice", "name", "Error"],
    correctAnswer: 1,
    hint: "Access dictionary values using keys. 🔑"
  },
  {
    id: 37,
    text: "What does this code print?\n```python\nprint(type([1, 2, 3]))\n```",
    options: ["array", "<class 'list'>", "list", "type: list"],
    correctAnswer: 1,
    hint: "type() reveals the type of an object. 📋"
  },
  {
    id: 38,
    text: "What is the result of this operation?\n```python\n\"Python\".lower()\n```",
    options: ["PYTHON", "Python", "python", "None"],
    correctAnswer: 2,
    hint: "The .lower() method converts a string to lowercase. ⬇️"
  },
  {
    id: 39,
    text: "What is the output of this code?\n```python\nx = {1, 2, 3, 4}\nx.add(5)\nprint(x)\n```",
    options: ["{5, 1, 2, 3, 4}", "{1, 2, 3, 4, 5}", "Error", "[1, 2, 3, 4, 5]"],
    correctAnswer: 1,
    hint: "Sets are mutable and unordered. 🎲"
  },
  {
    id: 40,
    text: "What does this code print?\n```python\nnumbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)\n```",
    options: ["[4, 1, 2, 3]", "[1, 2, 3, 4]", "Error", "(1, 2, 3, 4)"],
    correctAnswer: 1,
    hint: "The .append() method adds an item to the end of the list. ➕"
  },
  {
    id: 41,
    text: "What does this print?\n```python\nfor i in range(2, 5):\n    print(i)\n```",
    options: ["2 3 4", "2 3 4 5", "2 3", "3 4 5"],
    correctAnswer: 0,
    hint: "range(start, stop) excludes the stop value. 🔢"
  },
  {
    id: 42,
    text: "What is the output of this code?\n```python\nprint(10 % 3)\n```",
    options: ["3", "1", "0.1", "3.33"],
    correctAnswer: 1,
    hint: "% returns the remainder of division. ➗"
  },
  {
    id: 43,
    text: "What does this code produce?\n```python\nx = [1, 2, 3]\nprint(x[1:])\n```",
    options: ["[1]", "[1, 2]", "[2, 3]", "[3]"],
    correctAnswer: 2,
    hint: "List slicing includes elements from the specified start index. ✂️"
  },
  {
    id: 44,
    text: "What is the result of this code?\n```python\nprint(\" \".join([\"Python\", \"is\", \"fun\"]))\n```",
    options: ["Pythonisfun", "Python is fun", "Python,is,fun", "Python-is-fun"],
    correctAnswer: 1,
    hint: ".join() combines list elements into a string with a separator. 🔗"
  },
  {
    id: 45,
    text: "What is the output of this loop?\n```python\nfor char in \"abc\":\n    print(char)\n```",
    options: ["abc", "a\nb\nc", "a b c", "[a, b, c]"],
    correctAnswer: 1,
    hint: "Strings are iterable in Python. 🔤"
  },
  {
    id: 46,
    text: "What is the output of this code?\n```python\nx = [1, 2, 3]\nx.remove(2)\nprint(x)\n```",
    options: ["[2, 3]", "[1, 3]", "[1, 2]", "Error"],
    correctAnswer: 1,
    hint: ".remove(value) deletes the first occurrence of the value. ❌"
  },
  {
    id: 47,
    text: "What is the result of this comparison?\n```python\nprint(5 > 3 and 2 < 4)\n```",
    options: ["5", "False", "True", "None"],
    correctAnswer: 2,
    hint: "Both conditions evaluate as true. ✅"
  },
  {
    id: 48,
    text: "What does this code output?\n```python\nprint(\"Python\"[::-1])\n```",
    options: ["Python", "PYTHON", "nohtyP", "Error"],
    correctAnswer: 2,
    hint: "[::-1] reverses a string. 🔄"
  },
  {
    id: 49,
    text: "What is the output of this code?\n```python\nprint({1, 2, 3} | {3, 4, 5})\n```",
    options: ["{1, 2, 3, 4, 5}", "{1, 2, 3}", "{3, 4, 5}", "{3}"],
    correctAnswer: 0,
    hint: "The | operator performs a union on sets. 🔗"
  },
  {
    id: 50,
    text: "What does this print?\n```python\nprint(bool([]))\n```",
    options: ["True", "[]", "False", "None"],
    correctAnswer: 2,
    hint: "Empty containers evaluate as False. 🚫"
  },
  {
    id: 51,
    text: "What is the default type of data returned by input()?",
    options: ["int", "bool", "float", "str"],
    correctAnswer: 3,
    hint: "input() always returns a string, regardless of what the user enters. 📝"
  },
  {
    id: 52,
    text: "What does this code do?\n```python\nname = input('Enter your name: ')\nprint(name)\n```",
    options: ["Raises an error", "Prints the user's input", "Returns None", "Exits the program"],
    correctAnswer: 1,
    hint: "The input() function displays a message and waits for user input. 💭"
  },
  {
    id: 53,
    text: "How do you convert user input to an integer?",
    options: ["str(input())", "float(input())", "int(input())", "bool(input())"],
    correctAnswer: 2,
    hint: "Use int() to cast the string input to an integer. 🔢"
  },
  {
    id: 54,
    text: "What happens if you try to convert a non-numeric input to an integer?",
    options: ["Returns 0", "Returns None", "Prints an error", "Raises ValueError"],
    correctAnswer: 3,
    hint: "Input like 'abc' cannot be converted to a number. ⚠️"
  },
  {
    id: 55,
    text: "What does this code output if the user enters '25'?\n```python\nx = input('Enter a number: ')\nprint(type(x))\n```",
    options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
    correctAnswer: 1,
    hint: "The input remains a string unless explicitly converted. 📝"
  },
  {
    id: 56,
    text: "What is the output if user enters 'Python'?\n```python\nuser_input = input('Type something: ')\nprint(user_input.upper())\n```",
    options: ["python", "Python", "PYTHON", "Error"],
    correctAnswer: 2,
    hint: "The .upper() method converts strings to uppercase. ⬆️"
  },
  {
    id: 57,
    text: "What does input() return when the user presses Enter without typing?",
    options: ["None", "0", "Empty string", "Raises error"],
    correctAnswer: 2,
    hint: "Hitting Enter without entering any text gives an empty string. 🚫"
  },
  {
    id: 58,
    text: "What's the output if user hits Enter?\n```python\nvalue = input('Enter value: ') or 'Hello'\nprint(value)\n```",
    options: ["Empty string", "None", "Hello", "Error"],
    correctAnswer: 2,
    hint: "The 'or' operator helps set a default value. 🎯"
  },
  {
    id: 59,
    text: "What does this code do?\n```python\nwhile True:\n    if input() == 'exit': break\n```",
    options: ["Runs forever", "Exits immediately", "Loops until 'exit' entered", "Raises error"],
    correctAnswer: 2,
    hint: "The loop continues until the user types 'exit'. 🔄"
  },
  {
    id: 60,
    text: "How to handle multiple inputs in one line?\n```python\nx, y = input().split()\n```",
    options: ["Raises error", "Takes two inputs", "Splits space-separated input", "Returns tuple"],
    correctAnswer: 2,
    hint: "split() separates the input string based on spaces. ✂️"
  },
  {
    id: 61,
    text: "What will be the output of this code?\n```python\nx = 10\ny = 0\nresult = x or y\nprint(result)\n```",
    options: ["0", "10", "False", "None"],
    correctAnswer: 1,
    hint: "Logical operators (or) return the first truthy value. 🤔"
  },
  {
    id: 62,
    text: "What is the output of this code?\n```python\nmy_list = [1, 2, 3]\nprint(my_list * 2)\n```",
    options: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "Error", "[1, 2, 3, 2, 4, 6]"],
    correctAnswer: 1,
    hint: "Multiplying a list duplicates its contents. 🔄"
  },
  {
    id: 63,
    text: "What does this code produce?\n```python\na = 'Hello'\nb = 'World'\nc = a, b\nprint(c)\n```",
    options: ["HelloWorld", "('Hello', 'World')", "['Hello', 'World']", "Error"],
    correctAnswer: 1,
    hint: "Commas in an assignment create tuples. 📦"
  },
  {
    id: 64,
    text: "What happens when you execute this code?\n```python\nx = 5\ny = '5'\nprint(x + y)\n```",
    options: ["10", "55", "TypeError", "5"],
    correctAnswer: 2,
    hint: "Python doesn't implicitly convert types for incompatible operations. ⚠️"
  },
  {
    id: 65,
    text: "What will be the result of this code?\n```python\nmy_dict = {1: 'one', 2: 'two', 3: 'three'}\nprint(my_dict[4])\n```",
    options: ["None", "Error", "KeyError", "undefined"],
    correctAnswer: 2,
    hint: "Accessing a nonexistent key in a dictionary raises an exception. 🔑"
  },
  {
    id: 66,
    text: "What will this code output?\n```python\nprint(2 ** 3 ** 2)\n```",
    options: ["64", "512", "36", "None"],
    correctAnswer: 1,
    hint: "Exponentiation is right-associative. 🔢"
  },
  {
    id: 67,
    text: "How will this loop behave?\n```python\ni = 0\nwhile i < 5:\n    print(i)\n    i -= 1\n```",
    options: ["Prints 0 to 4", "Prints negative numbers", "Infinite loop", "Raises error"],
    correctAnswer: 2,
    hint: "The loop condition may never change to False. ♾️"
  },
  {
    id: 68,
    text: "What happens when you run this code?\n```python\ndef func(a=[]):\n    a.append(1)\n    return a\n\nprint(func())\nprint(func())\n```",
    options: ["[1] [1]", "[1] [1, 1]", "Error", "None None"],
    correctAnswer: 1,
    hint: "Default mutable arguments retain their state across calls. 🔄"
  },
  {
    id: 69,
    text: "What does this snippet output?\n```python\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n```",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "[4]"],
    correctAnswer: 1,
    hint: "Lists are mutable and reference-based. 🔗"
  },
  {
    id: 70,
    text: "What is printed here?\n```python\ndef test():\n    try:\n        return 1\n    finally:\n        return 2\n\nprint(test())\n```",
    options: ["1", "2", "None", "Error"],
    correctAnswer: 1,
    hint: "The finally block always executes, even after a return. 🔚"
  },
  {
    id: 71,
    text: "What happens when you run this code?\n```python\nx = 5\ndef test():\n    global x\n    x = x + 1\n\ntest()\nprint(x)\n```",
    options: ["5", "6", "Error", "None"],
    correctAnswer: 1,
    hint: "Modifying global variables requires explicit declaration. 🌍"
  },
  {
    id: 72,
    text: "What will this produce?\n```python\ndef my_func(x=[]):\n    x.append(len(x))\n    return x\n\nprint(my_func())\nprint(my_func())\n```",
    options: ["[0] [0]", "[0] [0, 1]", "[0] [1]", "[0, 1] [0, 1, 2]"],
    correctAnswer: 3,
    hint: "Default mutable arguments may lead to unintended behavior. 🎭"
  },
  {
    id: 73,
    text: "What will this print?\n```python\na = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b, a is b)\n```",
    options: ["True True", "False False", "True False", "False True"],
    correctAnswer: 2,
    hint: "Equality (==) and identity (is) are not the same. 🎯"
  },
  {
    id: 74,
    text: "What is the output of this function?\n```python\ndef mystery_func(a, b=[]):\n    b.append(a)\n    return b\n\nprint(mystery_func(1))\nprint(mystery_func(2))\n```",
    options: ["[1] [2]", "[1] [1, 2]", "Error", "[1, 2] [1, 2, 3]"],
    correctAnswer: 1,
    hint: "Default lists persist between calls. 📝"
  },
  {
    id: 75,
    text: "How will Python evaluate this code?\n```python\nprint('5' > 3)\n```",
    options: ["True", "False", "TypeError", "ValueError"],
    correctAnswer: 2,
    hint: "Comparing different data types results in a specific error. ⚠️"
  },
  {
    id: 76,
    text: "What is the behavior of this code?\n```python\nfor i in range(3):\n    try:\n        if i % 2 == 0: raise ValueError\n    except ValueError:\n        print('Error!')\n    finally:\n        print('Finally!')\n```",
    options: ["Prints Finally! three times", "Raises ValueError", "Prints Error! and Finally! alternately", "Infinite loop"],
    correctAnswer: 2,
    hint: "The finally block always runs. 🔄"
  },
  {
    id: 77,
    text: "What will this code produce?\n```python\nx = [1, 2, 3]\ny = [4, 5]\nprint(x + y * 2)\n```",
    options: ["[1, 2, 3, 4, 5, 4, 5]", "[1, 2, 3, 8, 10]", "Error", "[1, 2, 3, 4, 5]"],
    correctAnswer: 0,
    hint: "+ concatenates lists, while * duplicates them. 🔗"
  },
  {
    id: 78,
    text: "What does this function do?\n```python\ndef func(x=[]):\n    x.append(len(x) + 1)\n    return sum(x)\n\nprint(func())\nprint(func())\n```",
    options: ["1 2", "1 3", "1 1", "1 4"],
    correctAnswer: 1,
    hint: "The default list persists across calls. 🔢"
  },
  {
    id: 79,
    text: "What happens in this snippet?\n```python\na = 10\nb = 0 if a > 5 else 1\nprint(b)\n```",
    options: ["1", "0", "10", "Error"],
    correctAnswer: 1,
    hint: "This is a ternary conditional operator. 🤔"
  },
  {
    id: 80,
    text: "What will this print?\n```python\ndef test():\n    try:\n        return 'try'\n    except:\n        return 'except'\n    else:\n        return 'else'\n    finally:\n        return 'finally'\n\nprint(test())\n```",
    options: ["try", "except", "else", "finally"],
    correctAnswer: 3,
    hint: "The finally block overrides all other return statements. 🔚"
  }
];