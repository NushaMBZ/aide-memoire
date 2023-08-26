# Design Patterns
Design patterns are <mark style="background: #ABF7F7A6;">reusable and proven solutions to commonly occurring design problems</mark> in software development.

## Elements of Design Patterns
1. **Pattern Name**: A descriptive name that represents the <mark style="background: #FFF3A3A6;">essence of the pattern.</mark> 
    
2. **Problem**: A <mark style="background: #FFF3A3A6;">description of the design problem</mark> or scenario that the pattern addresses. 
    
3. **Solution**: The actual <mark style="background: #FFF3A3A6;">design solution</mark> that addresses the problem.
    
4. **Intent**: The <mark style="background: #FFF3A3A6;">high-level purpose</mark> and goal of the pattern.
    
5. **Motivation**: A more <mark style="background: #FFF3A3A6;">detailed explanation</mark> of why the pattern is beneficial, including the trade-offs and advantages it offers compared to alternative approaches.
    
6. **Applicability**: The <mark style="background: #FFF3A3A6;">scenarios or conditions under which the pattern is applicable</mark> and useful. 
    
7. **Structure**: A <mark style="background: #FFF3A3A6;">visual representation of the key classes, objects, and relationships involved in the pattern.</mark>
    
8. **Participants**: A <mark style="background: #FFF3A3A6;">list of the classes and objects</mark> that play roles within the pattern, along with their responsibilities and interactions.
    
9. **Collaborations**: A description of how the <mark style="background: #FFF3A3A6;">participants collaborate and interact</mark> to implement the pattern.
    
10. **Consequences**: The <mark style="background: #FFF3A3A6;">results and implications of using the pattern.</mark>
    
11. **Implementation**: <mark style="background: #FFF3A3A6;">Guidelines and considerations for implementing the pattern</mark> in actual code. 
    
12. **Known Uses**: Examples of real-world scenarios or systems where the pattern has been successfully applied. 
    
13. **Related Patterns**: Links to other design patterns that are related to or often used in conjunction with the current pattern. 

## Classification of Design Patterns
- **Creational Patterns**: Creational patterns deal with the process of <mark style="background: #FF5582A6;">object creation.</mark> They provide ways to instantiate objects while hiding the exact logic of how objects are created and initialized.
- **Structural Patterns**: Structural patterns focus on the <mark style="background: #FF5582A6;">composition of classes and objects, helping to form larger structures</mark> while keeping the system flexible and efficient.
- **Behavioral Patterns**: Behavioral patterns are concerned with the <mark style="background: #FF5582A6;">interactions between objects and the distribution of responsibilities.</mark>

### Creational Design Patterns
#### Singleton Pattern
Ensures that a class has <mark style="background: #FF5582A6;">only one instance and provides a global point of access to that instance.</mark>

#### Factory Method Pattern
Defines <mark style="background: #FF5582A6;">an interface for creating objects but allows subclasses to decide which class to instantiate.</mark>

#### Abstract Factory Pattern
Provides <mark style="background: #FF5582A6;">an interface for creating families of related or dependent objects without specifying their concrete classes.</mark>

#### Builder Pattern
<mark style="background: #FF5582A6;">Separates the construction of a complex object from its representation</mark>, allowing the same construction process to create different representations.

### Structural Design Patterns
#### Composite Pattern 
The Composite Pattern is used to <mark style="background: #FF5582A6;">compose objects into tree structures to represent part-whole hierarchies.
</mark>
#### Adapter Pattern
The Adapter Pattern, also known as the Wrapper pattern, <mark style="background: #FF5582A6;">allows objects with incompatible interfaces to work together.</mark>

#### Proxy Pattern
The Proxy Pattern provides a <mark style="background: #FF5582A6;">surrogate or placeholder for another object to control access, add security, or provide additional functionality.</mark>

#### Facade Pattern
The Facade Pattern provides a <mark style="background: #FF5582A6;">simplified interface to a complex subsystem, making it easier to interact with and understand.</mark>


### Behavioral Design Patterns
#### Observer Pattern 
The Observer Pattern defines a <mark style="background: #FF5582A6;">one-to-many dependency between objects, where when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.</mark>

#### Template Pattern 
The Template Pattern defines the <mark style="background: #FF5582A6;">structure of an algorithm in a superclass but allows subclasses to override specific steps of the algorithm.</mark>

#### Strategy Pattern
The Strategy Pattern defines a <mark style="background: #FF5582A6;">family of interchangeable algorithms and allows them to be used interchangeably within a context.</mark>

#### Iterator Pattern 
The Iterator Pattern provides a way to <mark style="background: #FF5582A6;">access elements of a collection without exposing its underlying representation.</mark>

