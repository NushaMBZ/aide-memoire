---
{"dg-publish":true,"permalink":"/eei-4362/n-ds-s-03/"}
---

# Design Patterns
Design patterns are <mark style="background: #ABF7F7A6;">reusable  to commonly occurring design problems</mark> in software development.

## Advantages
Here are some of the key benefits.

1. **Reusability:** Design patterns provide reusable solutions to common problems in software design.
    
2. **Maintainability:** Design patterns promote clean and organized code structures.
    
3. **Scalability:** Design patterns help create flexible and extensible code. 
    
4. **Abstraction:** Patterns abstract common design principles into well-defined templates. 
    
5. **Communication:** Design patterns provide a common vocabulary for developers to discuss and communicate design decisions.
    
6. **Testability:** Code structured using design patterns often leads to more testable software. 
    
7. **Performance Optimization:** Some design patterns, such as the Singleton pattern, can help optimize performance by ensuring that specific objects are instantiated only once. 


## Elements of Design Patterns
1. **Pattern Name**: A descriptive name that represents the <mark style="background: #FFF3A3A6;">essence of the pattern.</mark> 
    
2. **Problem**: A <mark style="background: #FFF3A3A6;">description of the design problem</mark> or scenario that the pattern addresses. 
    
3. **Solution**: The actual <mark style="background: #FFF3A3A6;">design solution</mark> that addresses the problem.
	   
4. **Consequences and trade-offs of application**: Consequences are the outcomes or effects that result from applying a design pattern to your software design. Trade-offs are the compromises you make when choosing a particular design pattern.



## Design Patterns Templates
### Intent

A brief statement describing <mark style="background: #FFF3A3A6;">the purpose and goal of the design pattern.</mark>

### Motivation

Explain the problem or scenario the design pattern aims to address. Discuss the context and conditions under which the pattern becomes relevant.

### Applicability

Describe the situations where the design pattern is most appropriate. This includes scenarios where the pattern can be effectively used to improve the design, structure, or behavior of the software.

### Structure

Provide an overview of the components and relationships involved in the design pattern. You can use diagrams or textual descriptions to illustrate the structure.

### Participants

List the key elements or classes involved in the pattern and explain their roles.

### Collaborations

Explain how the participants interact and collaborate to achieve the pattern's goals.

### Consequences

Outline the positive and negative effects of applying the design pattern. This includes the benefits gained, as well as any trade-offs or drawbacks that need to be considered.

### Implementation

Provide guidance on how to implement the design pattern in code. This can include code snippets, code structures, and best practices for integrating the pattern into your software.

### Sample Code (Optional)

If appropriate, provide a complete or partial code example to showcase how the pattern can be implemented in a real-world scenario.

### Known Uses (Optional)

Highlight any well-known software systems or projects that utilize this design pattern.

### Related Patterns

Discuss any relationships between the current design pattern and other design patterns. This could include variations, alternatives, or complementary patterns.

### References

List any sources, books, articles, or online resources where readers can find more information about the design pattern.
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

