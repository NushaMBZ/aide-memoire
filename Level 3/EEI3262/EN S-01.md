# Integrated Development Environment (IDE)

This is a software application or platform that provides <mark style="background: #FFF3A3A6;">comprehensive tools and features</mark> to help software developers <mark style="background: #FFB8EBA6;">create, edit, debug, and manage computer programs</mark> and applications.

# Constructor

A constructor is a special type of <mark style="background: #FF5582A6;">method that is used to initialize objects of classes when they are created.</mark> 

# Java Virtual Machine (JVM)

The JVM is a software-based execution environment that <mark style="background: #FF5582A6;">interprets or compiles Java bytecode into machine code</mark> and provides essential features like memory management, security, and platform independence.

# The Java Development Kit (JDK)

The Java Development Kit (JDK) is a <mark style="background: #FF5582A6;">software development environment that offers a collection of tools and libraries necessary for developing Java applications.</mark>
# Refactoring

This is the process of <mark style="background: #FF5582A6;">improving and restructuring existing code to make it cleaner, more maintainable, and efficient</mark> without changing its external behavior.

# Object Oriented Programming

It is a approach that structures code around objects, which are <mark style="background: #FF5582A6;">instances of classes, and defines their attributes and behaviors</mark>, promoting code organization, reusability, and modeling of real-world entities.


# Just in Time

A Just-In-Time (JIT) compiler is a part of the Java Virtual Machine (JVM) that <mark style="background: #FF5582A6;">translates Java bytecode (an intermediate representation of Java code) into machine code right before the code is executed.</mark>

# Bytecode

Bytecode is like a set of <mark style="background: #FF5582A6;">instructions written in a special language that's used as an intermediary step between Java source code and the computer's native language.</mark>

# Method Overriding

Method overriding means there are <mark style="background: #FF5582A6;">two methods with the same name - one in the parent class and another in the child class.</mark>

# Method Overloading

Method overloading is a feature that allows <mark style="background: #FF5582A6;">a class to have multiple methods with the same name but different parameters.</mark>

# Interfaces

An interface is like <mark style="background: #FF5582A6;">a contract or a set of rules that a class must follow.</mark> It defines a list of methods that a class that implements the interface must provide.

# Access Modifiers

Access modifiers are <mark style="background: #FF5582A6;">keywords used to control the visibility or accessibility of classes, methods, variables,</mark> and other class members. 

# Compiler

A compiler translates code from a<mark style="background: #FF5582A6;"> high-level programming language into machine code before the program runs. </mark>

# Interpreter

An interpreter <mark style="background: #FF5582A6;">translates code written in a high-level programming language into machine code line-by-line as the code runs.</mark>

# Variable

Variables are the<mark style="background: #FF5582A6;"> data containers that save the data values during Java program execution.
</mark>
# Object

An object is <mark style="background: #FF5582A6;">an instance of a Java class, meaning it is a copy of a specific class.</mark>

```java
Car car = new Car("Toyota");
```

# Attribute

An attribute is a<mark style="background: #FF5582A6;"> named object with associated value</mark>s. Each value in the attribute corresponds to a Java object of some type.

```java
private String window;
```

# Class

A Class is like an object constructor, or a "blueprint" for creating objects

```java
public class MyClass { int x=5; }
```


# Method

- A <mark style="background: #FF5582A6;">set of instructions that can be called for execution using the method name.</mark>
- A method is a block of code which only runs when it is called.

# Syntax

The <mark style="background: #FF5582A6;">syntax of a programming language describes which strings of of characters comprise a valid program.</mark>

# Semantics

The semantics of a programming language<mark style="background: #FF5582A6;"> describes what syntactically valid programs mean, what they do.
</mark>
# OOP Principles
## <mark style="background: #BBFABBA6;">Inheritance</mark>

Inheritance :: allows a <mark style="background: #FF5582A6;">class to acquire the properties (attributes and methods) of another class.</mark> It establishes a hierarchical relationship between classes, where one class, known as the "subclass" or "derived class," can inherit the members of another class, known as the "superclass" or "base class." 

```java
class Vehicle {
    String make;
    String model;
    String type;

    public Vehicle(String make, String model, String type) {
        this.make = make;
        this.model = model;
        this.type = type;
    }
    

    public void displayInfo() {
        System.out.println("Make: " + make + ", Model: " + model + "Type: " + type);
    }
    
}

class Car extends Vehicle {
    String color;

    public Car(String make, String model, String type,String color) {
        super(make, model,type); // Call the superclass constructor
        this.color = color;
    }
   

    @Override
    public void displayInfo() {
        // Override the superclass method
        System.out.println("Make: " + make + ", Model: " + model + "Type:" + type + ", Color: " + color);
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Car car = new Car("Toyota", "Camry","Meow", "Blue"); // This is where we instantiate the object car
        car.displayInfo();  // Calls the overridden method in the Car class
    }
}
```
## <mark style="background: #BBFABBA6;">Polymorphism</mark>

Polymorphism :: is the task that performs <mark style="background: #FF5582A6;">a single action in different ways</mark>.  

It enables flexibility and extensibility in code by allowing multiple classes to be used interchangeably when they share a common interface or base class.

### Types

1. **Compile-Time (Static) Polymorphism** :: This is achieved through <mark style="background: #FFB86CA6;">method overloading</mark> or operator overloading. In this type of polymorphism, the method or operator to be invoked is determined at compile time based on the method or function signature
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
3.  **Run-Time (Dynamic) Polymorphism** :: This is achieved through <mark style="background: #FFB86CA6;">method overriding.</mark> In run-time polymorphism, the method to be executed is determined at runtime based on the actual object type rather than the reference type. 
   ```java
   class Animal {
	String type;
	
	public Animal(String type) {
		this.type=type;
	}
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

class Dog extends Animal {
	
	public Dog(String type) {
		super(type);
	}
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
	
	public Cat(String type) {
		super(type);
	}
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

class Cow extends Animal {
	int age;
	String id;
	
	public Cow(int age, String id, String type) {
		super(type);
		this.age=age;
		this.id=id;
	}
	@Override
	public void makeSound() {
		System.out.println("Mooo Mooo");
	}
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Animal myDog = new Dog("big");
        Animal myCat = new Cat("small");
        Animal myCow = new Cow(15,"whatever","small");
        Animal myCow1 = new Cow(16,"whatever2","big");
        
        myDog.makeSound(); // Calls Dog's makeSound() method
        myCat.makeSound(); // Calls Cat's makeSound() method
	    myCow1.makeSound(); // Calls Cow's makeSound() method
    }
}
```
## <mark style="background: #BBFABBA6;">Encapsulation</mark>

Encapsulation :: This is a concept that involves <mark style="background: #FF5582A6;">bundling the data (attributes) and the methods (functions) that operate on that data into a single unit, known as an "object."</mark>


In encapsulation, <mark style="background: #FF5582A6;">the variables of a class will be hidden from other classes and can be accessed only through the methods of their class.</mark> Therefore, it is also known as <mark style="background: #BBFABBA6;">data/information hiding.</mark>

### Goals

Goals of encapsulation would be ::
1. <mark style="background: #FFB8EBA6;">Data Protection:</mark> Encapsulation helps protect the integrity of the data by preventing direct access or modification from outside the object. 
2. <mark style="background: #FFB8EBA6;"> Modularity: </mark> Encapsulation promotes modular design, as objects can be treated as black boxes, with their internal details hidden.
3. <mark style="background: #FFB8EBA6;">Abstraction:</mark> Encapsulation allows you to abstract the essential characteristics of an object, focusing on what an object does rather than how it does it. 

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


public class mainCar {
    public static void main(String[] args) {
	    Car car = new Car("Toyata","Car");
	    //System.out.println(car.make) // this is not possible with encapsulation
	    //System.out.println(car.getMake()); // this is  possible with encapsulation
	    
    }
}

```

## <mark style="background: #BBFABBA6;">Abstraction</mark>

- Abstraction :: is the process of <mark style="background: #FF5582A6;">simplifying complex reality by modeling classes based on the essential attributes and behaviors while ignoring unnecessary details.</mark> 

- Abstraction means ignoring irrelevant features, properties, or functions and emphasizing the relevant ones...

### Key Points

1. Hiding Complex Implementation :: Abstraction involves hiding the complex implementation details of an object or system while exposing a simplified interface that is easy to use.

2. Defining a Blueprint :: Abstraction often involves defining classes that serve as blueprints for objects.

3. Focusing on Relevant Details :: Abstraction helps to concentrate on the aspects of an object that are relevant to the problem, and ignore or encapsulate away the less relevant details.

4. Promoting Reusability :: By creating abstract classes and interfaces, we can create a foundation for similar objects with common characteristics, promoting code reusability. 

5. Enhancing Maintainability :: Abstraction can make code more maintainable because it reduces complexity and provides a clear separation between what an object does and how it does it.
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
class Rectanlge extends Shape {
    private double height;
    private double width;

    public Rectangle(double height,double width) {
        this.width = width;
        this.height = height;
    }

    @Override
    double calculateArea() {
        return width*height
    }

    @Override
    double calculatePerimeter() {
        return width*2+height*2
    }
}
```
### Abstract Classes

#Q #AOSR/3q01a
An abstract class :: is a class that <mark style="background: #FF5582A6;">cannot be instantiated</mark> on its own. It serves as a blueprint for other classes and <mark style="background: #FF5582A6;">can contain a mix of abstract and concrete (implemented) methods.</mark> #AOSR/3q01a/s/4jke
#/Q

They can be extended by other classes. A subclass that extends an abstract class is required to <mark style="background: #FF5582A6;">provide concrete implementations</mark> for all the abstract methods defined in the abstract class.

```java
abstract class Shape {
    abstract double calculateArea();
    abstract double calculatePerimeter();
}
class rectangle extends shape{
	///
}
```

### Interface

#Q  #AOSR/2onto
An interface :: is a <mark style="background: #FF5582A6;">collection of abstract methods</mark> that provide a <mark style="background: #FF5582A6;">contract that classes must adhere to.</mark> An interface cannot contain any implementation details; it defines the methods a class implementing the interface must have. #AOSR/2onto/s/z417
#/Q

Classes can implement multiple interfaces. Implementing an interface means that the implementing class must provide concrete implementations for all the methods defined in the interface.

```java
interface Drawable {
    void draw();
}

