### Briefly describe the usage of the “final” keyword with respect to a variable, a method and a class.

The `final` keyword in Java is used to indicate that a variable, method, or class is not intended to be modified, overridden, or extended, respectively. Here's a brief description of its usage in these contexts:

1. **Variable**: When you declare a variable as `final`, it means that the variable's value cannot be changed after it is initialized. It is effectively a constant. For example:

```java
final int myConstant = 42;
// You cannot do this: myConstant = 24;

```

2. **Method**: When you declare a method as `final`, it means that the method cannot be overridden by subclasses. This is often used when you want to prevent further modification of a method in a subclass. For example:
	```java
	public final void myMethod() {
    // Method implementation
}

```

1. **Class**: When you declare a class as `final`, it means that the class cannot be subclassed (extended) by other classes. This is used when you want to create a class that should not have any subclasses. For example:
   ```java
   public final class MyFinalClass {
    // Class implementation
}

```
   
In summary, the `final` keyword provides immutability for variables, prevents method overriding, and restricts class inheritance to ensure that the marked element remains as is and cannot be further extended or modified.

### Briefly describe the usage of the “abstract” keyword

The `abstract` keyword in Java is used to define abstract classes and abstract methods. Here's a brief description of its usage:

1. **Abstract Class**:
    
    - An abstract class is a class that cannot be instantiated directly; it serves as a blueprint for other classes.
    - You declare a class as `abstract` by using the `abstract` keyword in the class declaration.
    - Abstract classes can contain both abstract and non-abstract (concrete) methods.
    - Subclasses that extend an abstract class must implement (override) all the abstract methods defined in the abstract class.
    - Abstract classes are often used when you want to create a common interface with some default behavior that should be shared by all subclasses.
    
    Example of an abstract class:
    
    ```java
    abstract class AbstractShape {     abstract double calculateArea(); }`
```
    
2. **Abstract Method**:
    
    - An abstract method is a method declared in an abstract class that does not have a method body (i.e., it has no implementation).
    - Abstract methods are marked with the `abstract` keyword in their method declaration.
    - Subclasses that extend an abstract class must provide a concrete implementation for all abstract methods in the superclass.
    
    Example of an abstract method within an abstract class:
    
    ```java
    abstract class AbstractShape {     abstract double calculateArea(); }
    ```
    

In summary, the `abstract` keyword is used to create abstract classes and abstract methods, which provide a way to define a common interface and ensure that specific behavior is implemented by subclasses.
### Write the two Java statements that are essential for taking input from a user.

To take input from a user in Java, you can use the `Scanner` class from the `java.util` package. Here are the two essential Java statements for taking input from a user:

1. Import the `Scanner` class:
   ```java
   import java.util.Scanner;

```
   
2. Create a `Scanner` object and use it to read input from the user:
   ```java
   Scanner scanner = new Scanner(System.in);

```

With these two statements, you can create a `Scanner` object (`scanner`) that allows you to read user input from the standard input (usually the keyboard). You can then use various methods provided by the `Scanner` class, such as `nextLine()`, `nextInt()`, `nextDouble()`, etc., to read different types of input

<hr>


```java
public interface Shapes {  
  public void printMessage(String s);  
  public double area();  
}  
``` 


```java  
public class Rectangle implements Shapes {  
  private int width;  
  private int length;  
  
  public Rectangle(int width, int length) {  
    this.width=width;  
    this.length=length;  
  }  
  
  @Override  
  public void printMessage(String s) {  
    System.out.println(this.width+"/"+this.legth);  
  }  
  
  @Override  
  public double area(){  
    return this.width*this.height;  
  }  
}  
```

<hr>

![[Pasted image 20231026213216.png]]

![[Pasted image 20231026213346.png]]

## Dividing a number by 0 is considered as a runtime error. Write a code snippet that would generate that error. (use two int variables and assign the division to a third variable). 
```java
public class DivideByZeroError {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        // Attempt to divide by zero, which will result in an ArithmeticException
        int result = a / b;

        // This code will not be reached because an exception will be thrown
        System.out.println("Result: " + result);
    }
}

```
## Rewrite the code in above with the exception handled.

```java
public class DivideByZeroErrorHandled {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}

```

