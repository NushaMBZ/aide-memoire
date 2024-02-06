---
dg-publish: true
---

# Exception Handling

`try`, `catch`, and `throw` statements are used for handling exceptions, which are unexpected events or errors that can occur during the execution of a program.

1. `try` statement: The `try` block is used to enclose a section of code where you expect an exception might occur. The syntax for a `try` block is as follows:

```java
try {
    // Code that may cause an exception
} 
```

2. `catch` statement: The `catch` block is used to handle exceptions that are thrown within the `try` block. It comes after the `try` block and specifies the type of exception it can handle. The syntax for a `catch` block is as follows:
```java
catch (ExceptionType e) {
    // Exception handling code
}
```
- `ExceptionType` is the type of exception to catch. It can be a specific exception class (e.g., `ArithmeticException`, `IOException`, or your custom exception) or a more general exception class, such as `Exception`, to catch any exception.
- `e` is a variable that holds the exception object when an exception is thrown. 

3. `throw` statement: The `throw` statement is used to manually throw an exception. The syntax for the `throw` statement is as follows:
```java
throw new ExceptionType("Exception message");
```

- `ExceptionType` is the type of exception to throw.
- `"Exception message"` is an optional message that provides additional information about the exception.

## Example
```java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = divide(10, 0);
        } catch (ArithmeticException e) {
            System.out.println("An arithmetic exception occurred: " + e.getMessage());
        }
    }

    public static int divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return a / b;
    }
}

```