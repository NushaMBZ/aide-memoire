# Types of Variables

Variables are used to store and manipulate data. There are several types of variables in Java, which can be categorized into three main groups:
#Q
Instance Variables (Non-Static Variables) ::
- These variables are <mark style="background: #FF5582A6;">associated with an instance of a class</mark> and are <mark style="background: #FF5582A6;">declared within the class but outside of any method or constructor.</mark>
- They are also known as object-level variables because their values are unique to each instance of the class.
- Instance variables are created when an object is instantiated from a class and destroyed when the object is garbage collected.
- They have default values based on their data type (e.g., 0 for numeric types, false for boolean, and null for reference types).
- Example:
```java
public class MyClass {
    int instanceVar; // instance variable
}
```
#/Q 

#Q
Static Variables (Class Variables)::
- Static variables are associated with<mark style="background: #FF5582A6;"> the class itself rather than with instances of the class.</mark>
- They are declared using the `static` keyword and are shared among all instances of the class.
- Static variables are created when the class is loaded and are destroyed when the class is unloaded.
- They are often used to store constants or shared data among class instances.
- Static variables also have default values based on their data type.
- Example:
```java
public class MyClass {
    static int staticVar; // static variable
}
```
#/Q 

#Q
Local Variables::
- Local variables are declared within a method, constructor, or block of code and are used to store temporary data that is only accessible within that method or block.
- They must be initialized before they are used and do not have default values.
- Local variables are destroyed once the method or block of code in which they are declared exits.
- Example:
```java
public void myMethod() {
    int localVar; // local variable
}
```
#/Q 

#Q
Parameters (Method or Constructor Parameters)::
- Method parameters are similar to local variables, and they are declared as part of a method's signature.
- They receive values when the method is called and are used within the method's scope.
- Constructor parameters serve a similar purpose but are used for initializing object instances.
- Example:
```java
public void myMethod(int parameter) {
    // 'parameter' is a method parameter
}
```
#/Q 

#Q
Array Elements::
- Elements of an array are variables that store values and can be accessed using array indexing.
- Array elements can be of any data type and are declared as part of the array declaration.
- Example:
```java
int[] numbers = {1, 2, 3}; // Array elements are variables
int value = numbers[0]; // Accessing an array element
```
#/Q 

> [!tip]
> Static method means that it can be accessed without creating an object of the class.