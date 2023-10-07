# Object Oriented Programming

• Object Orientation is based on real world. 
• Programming model which is based upon the concept of objects, 
• It is an important approach in programming and program design.


# Fundamentals of OOP


## Encapsulation

<mark style="background: #CACFD9A6;">Encapsulation ensures that data are hidden from users. </mark>
- The variables of a class are only accessible through the methods of that class, making them hidden from other classes. This concept is known as data hiding. 
- To achieve encapsulation in Java, o declare the class variables as private o provide public setter and getter methods. 
- The setter methods allow modification of the variables' values, while the getter methods allow viewing of the variables' values.
  
## Inheritance

<mark style="background: #FFB8EBA6;">A class can extend another class, inheriting all its data members and methods while redefining some of them and/or adding its own.</mark>

Inheritance represents the is a relationship between entities.
For example: a FemaleDancer is a Dancer.

```java
public class FemaleDancer extends Dancer { 
... 
}
```



![[Pasted image 20231004203633.png]]
## Polymorphism

- **Polymorphism** is the ability of an object to take on many forms. In programming languages            polymorphism is the capability of an action or **method** to do different things based on the object that it is acting upon.
- In Java, we use method overloading and method overriding to achieve polymorphism.
##### Method Overloading 

When methods have the same name, but different parameters, it is known as method overloading. • This can be very useful when you need the same method functionality for different types of parameters. Example 
```java
public class OverLoadingExample{ 
public void add(int i, int j){
int k = i + j; 
	} 
public void add(String s, String t){ 
int k = Integer.parseInt(s) + Integer.parseInt(t);
	}
}
```

##### Method Overriding 

If a subclass can define a behaviour that's specific to the subclass type, meaning that a subclass can implement a parent class method based on its requirement, this feature is known as method overriding. Example 
```java
public class BaseClass{ public void methodToOverride(){ 
//Some code here 
}
	  } 
public class DerivedClass extends BaseClass{ 
public void methodToOverride() }
 //Some new code here 
	} 
}
```


| **Method Overloading**                                                   | **Method overriding**                                                                                                                         |     |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | 
| Method overloading is a compile-time polymorphism.                   | Method overriding is a run-time polymorphism.                                                                                             |     
| Method overloading helps to increase the readability of the program. | Method overriding is used to grant the specific implementation of the method which is already provided by its parent class or superclass. |     
| It occurs within the class.                                          | It is performed in two classes with inheritance relationships.                                                                            |     
| Method overloading may or may not require inheritance.               | Method overriding always needs inheritance.                                                                                               |     
|  In method overloading, methods must have the same name and different signatures.|In method overriding, methods must have the same name and same signature.                                                                 
## Abstraction

Abstraction in Java refers to<mark style="background: #FFB8EBA6;"> hiding the implementation details of a code and exposing only the necessary information to the user. </mark> It provides the ability to simplify complex systems by ignoring irrelevant details and reducing complexity.

There are two ways to achieve abstraction 
1. Abstract classes 
2. Interfaces 