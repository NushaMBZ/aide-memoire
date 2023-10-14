# Object Oriented Programming

Object-oriented programming (OOP) is a programming paradigm that is centered around the concept of "objects." An object is a self-contained unit that represents a real-world entity or concept and contains both data (attributes) and the methods (functions) that operate on that data. 


## Inheritance

Inheritance allows a <mark style="background: #FF5582A6;">class to acquire the properties (attributes and methods) of another class.</mark> It establishes a hierarchical relationship between classes, where one class, known as the "subclass" or "derived class," can inherit the members of another class, known as the "superclass" or "base class."

### Key Points

1. **Code Reuse**: Inheritance enables the reuse of code.
    
2. **"is-a" Relationship**: Inheritance typically represents an "is-a" relationship between the subclass and the superclass.
    
3. **Inherited Members**: The subclass inherits all the attributes and methods of the superclass. It can use and extend them as needed.
    
4. **Method Overriding**: In some cases, a subclass may provide its own implementation of a method that is already defined in the superclass. 


```java
class Vehicle {
    String make;
    String model;

    public Vehicle(String make, String model) {
        this.make = make;
        this.model = model;
    }

    public void displayInfo() {
        System.out.println("Make: " + make + ", Model: " + model);
    }
}

class Car extends Vehicle {
    String color;

    public Car(String make, String model, String color) {
        super(make, model); // Call the superclass constructor
        this.color = color;
    }

    @Override
    public void displayInfo() {
        // Override the superclass method
        System.out.println("Make: " + make + ", Model: " + model + ", Color: " + color);
    }
}

public class InheritanceExample {
    public static void main(String[] args

```

## Polymorphism

Polymorphism allows <mark style="background: #FF5582A6;">objects of different classes to be treated as objects of a common superclass.</mark> It enables flexibility and extensibility in code by allowing multiple classes to be used interchangeably when they share a common interface or base class.

### Types

1. **Compile-Time (Static) Polymorphism**: This is achieved through method overloading or operator overloading. In this type of polymorphism, the method or operator to be invoked is determined at compile time based on the method or function signature.

```java
class Calculator {
    // Method to add two integers
    public int add(int num1, int num2) {
        return num1 + num2;
    }

    // Method to add three integers
    public int add(int num1, int num2, int num3) {
        return num1 + num2 + num3;
    }

    // Method to add two double values
    public double add(double num1, double num2) {
        return num1 + num2;
    }
}

public class CompileTimePolymorphismExample {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        int sum1 = calculator.add(5, 10);    // Calls the first add method
        int sum2 = calculator.add(5, 10, 15);// Calls the second add method
        double sum3 = calculator.add(3.5, 2.7);// Calls the third add method

        System.out.println("Sum1: " + sum1);
        System.out.println("Sum2: " + sum2);
        System.out.println("Sum3: " + sum3);
    }
}
```


2. **Run-Time (Dynamic) Polymorphism**: This is achieved through method overriding. In run-time polymorphism, the method to be executed is determined at runtime based on the actual object type rather than the reference type. 

```java
class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound(); // Calls Dog's makeSound() method
        myCat.makeSound(); // Calls Cat's makeSound() method
    }
}
```

## Encapsulation

This is a concept that involves <mark style="background: #FF5582A6;">bundling the data (attributes) and the methods (functions) that operate on that data into a single unit, known as an "object."</mark>

### Goals

1. **Data Protection**: Encapsulation helps protect the integrity of the data by preventing direct access or modification from outside the object. 
    
2. **Modularity**: Encapsulation promotes modular design, as objects can be treated as black boxes, with their internal details hidden. 
    
3. **Abstraction**: Encapsulation allows you to abstract the essential characteristics of an object, focusing on what an object does rather than how it does it. 


```java
public class Car {
    private String make;  // Private attribute
    private String model; // Private attribute

    public Car(String make, String model) {
        this.make = make;
        this.model = model;
    }

    // Public getter methods to access private attributes
    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    // Public setter methods to modify private attributes
    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
```
## Abstraction

Abstraction is the process of simplifying complex reality by modeling classes based on the essential attributes and behaviors while ignoring unnecessary details.

### Key Points

1. **Hiding Complex Implementation**: Abstraction involves hiding the complex implementation details of an object or system while exposing a simplified interface that is easy to use.
    
2. **Defining a Blueprint**: Abstraction often involves defining classes that serve as blueprints for objects.
    
3. **Focusing on Relevant Details**: Abstraction helps to concentrate on the aspects of an object that are relevant to the problem, and ignore or encapsulate away the less relevant details.
    
4. **Promoting Reusability**: By creating abstract classes and interfaces, we can create a foundation for similar objects with common characteristics, promoting code reusability. 
    
5. **Enhancing Maintainability**: Abstraction can make code more maintainable because it reduces complexity and provides a clear separation between what an object does and how it does it.

```java
abstract class Shape {
    abstract double calculateArea();
    abstract double calculatePerimeter();
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}
```

### Abstract Classes

An abstract class is a class that <mark style="background: #FF5582A6;">cannot be instantiated</mark> on its own. It serves as a blueprint for other classes and <mark style="background: #FF5582A6;">can contain a mix of abstract and concrete (implemented) methods.</mark>

They can be extended by other classes. A subclass that extends an abstract class is required to <mark style="background: #FF5582A6;">provide concrete implementations</mark> for all the abstract methods defined in the abstract class.



```java
abstract class Shape {
    abstract double calculateArea();
    abstract double calculatePerimeter();
}
```

### Interface

An interface is a <mark style="background: #FF5582A6;">collection of abstract methods</mark> that provide a <mark style="background: #FF5582A6;">contract that classes must adhere to.</mark> An interface cannot contain any implementation details; it defines the methods a class implementing the interface must have.

Classes can implement multiple interfaces. Implementing an interface means that the implementing class must provide concrete implementations for all the methods defined in the interface.

```java
interface Drawable {
    void draw();
}
```

# Multi-Threaded Programming

This is a programming technique that allows a computer program or process to execute multiple threads concurrently. A thread is the smallest unit of a CPU's execution that can be independently scheduled by the operating system. Multithreading enables a program to perform multiple tasks or operations in parallel, taking advantage of the available CPU cores and resources.