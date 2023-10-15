---
tags:
  - eei4362
---
#Q #AOSR/36pp6
Discuss the _fundamental principles of object-oriented programming_ and how they relate to real-world concepts.
* OOP emphazises that the object as we methapohorize or translate into code from real life should have four characteristics, such as ==encapsulation, polymorphism, inheritence and abstraction== #AOSR/36pp6/c/16hf 
#/Q

#Q #AOSR/58jen
How does object-oriented programming promote code reusability and modularity?
* With certain characteristics such as inheritence and abstraction a developer will have the benefit of ==writing less code and making it less complicated.== #AOSR/58jen/c/6c0p #AOSR/36pp6/c/7cu4  
#/Q

#Q #AOSR/3q1na
Explain the concept of encapsulation in object-oriented programming. How does encapsulation contribute to the organization and security of code?
* Encapsulation is about ==bundling certain data and methods into a object for code organization and security purposes.== #AOSR/3q1na/c/z341 
    * Code Organization: By encapsulating related data and behaviors within an object, code becomes more structured and easier to manage.
    * Data Security: By declaring data members as private or protected, direct access from outside the class is restricted. 
#/Q

#Q #AOSR/1ftu0
In what ways does inheritance facilitate code reuse and promote the concept of "is-a" relationships in object-oriented programming?
* Talking about inheritence it's way of ==allowing a class to inherit some features from another class and have uniqure features of itself== #AOSR/1ftu0/c/51v1 , this allows the developers spend less time on redifining the class on the account of multiple usage. Generally the subclass (one that inherits behaviour and attibutes from a parent class) has a unique relationship toawrds it's parent and this relationship could be represented in the following way

```
 Donkey <- (is a sub class) is a Animal  <- (A parent class)
```

* In this case the subclass Donkey shares all the characteristics of an animal therefore we can say that this donkey **is a** animal.
#/Q 

#Q #AOSR/1ir98
Describe the role of polymorphism in object-oriented programming and provide examples of how it can enhance code flexibility and extensibility.
* Polymorphism allows an ==individual object to exhibit different behaviors or be used interchangeably== #AOSR/1ir98/c/fn7b #AOSR/36pp6/c/3msg   so that it can take on different forms or behave in different ways.
* This could be viewed in two different aspects :
    * Compile-time Polymorphism (Static Polymorphism):
        * Method Overloading: In OOP, ==multiple methods with the same name but different parameter types or number of parameters== #AOSR/1ir98/c/2tpj #AOSR/36pp6/c/4ad9   can be defined within a class. This is known as method overloading.
    * Runtime Polymorphism (Dynamic Polymorphism):
        * Method Overriding:<mark style="background: #FFF3A3A6;"> Inheritance and polymorphism work together to enable method overriding</mark>. In ==a subclass, methods with the same signature as those in the superclass== #AOSR/1ir98/c/1bsk #AOSR/36pp6/c/5nbv   can be redefined to provide a specific implementation.
* Polymorphism enhances code flexibility and extensibility in several ways:
    * Allows the creation of generic code that can work with objects of different types, increasing code reuse.
    * New classes can be easily added without modifying existing code, as long as they adhere to the common interface or superclass contract.
    * It enables the use of inheritance hierarchies, where common behaviors can be defined in a superclass, and specific behaviors can be implemented in subclasses.
    * Polymorphism enables loose coupling between objects, as they interact based on common interfaces rather than concrete implementations.
#/Q

#Q
Discuss the concept of abstraction in object-oriented programming and its significance in simplifying complex systems.
* This involves **<mark style="background: #FF5582A6;">simplifying complex systems by focusing on essential features while hiding unnecessary details.</mark>**
* This is achieved through the creation of abstract classes or interfaces.
    * An abstract class defines common attributes and behaviors that are shared by a group of related objects. It serves as a blueprint for creating concrete subclasses that provide specific implementations.
        * An abstract class **cannot be instantiated**.
        * Abstract classes can be **used as the super classes of  inheritance**.
        * They may OR may not contain abstract methods.
        * Abstract **method is declared without a method body.**
        * The subclasses (Which are not abstract) of the abstract class should implement **all the abstract methods defined in  the parent class.**
        * If a class is not abstract, then it cannot hold any abstract  method.
    * An interface, on the other hand, defines a contract that specifies a set of methods that implementing classes must adhere to.
        * There are no attributes defined in the interfaces. If the  attributes are defined, they are implicitly ‘static’ and ‘final’.
        * If the interfaces  inherit with classes, the sub classes should implement all the methods defined in the  interface.
        *   A class can implements any number of interfaces.
        *   If the interfaces  inherit with classes, the sub classes should implement all the methods defined in the  interface.
        *   A class can implements any number of interfaces.
        *   When overriding methods defined in interfaces ,
            *   The signature of the interface method and the same return  type or subtype should be maintained when overriding the methods.
            *   An implementation class itself can be abstract and if so  interface methods need not be implemented.
        * When implementing interfaces,
            * A class can implement more than one interface at a time.
            * A	class can	extend	only	one class, but implement many interfaces.
            * An interface can extend another interface, similarly to the  way that a class can extend another class.
            * gmaAn interface can  extend more than one parent interface.
#/Q

#Q
Discuss the concept of multi-threading in Java and its significance in developing concurrent programs.
- It's the ability of the language to execute multiple threads simultaneously, Each thread reperesents an independant flow of control, allowing different parts of a program to run concurrenntl. The reason why concurrency is so important is beacuse it enables the program to effectively utilize avaialbe resources such as multiple CPUs.
#/Q

#Q
How does Java support multi-threading, and what are the key features or constructs provided by the language for managing threads?
- Java provides comprehensive support for multi-threading through its Thread class and related constructs. Developers can create threads by extending the Thread class or implementing the Runnable interface.
- Key features for managing threads include synchronized blocks/methods for thread synchronization, wait() and notify() methods for inter-thread communication, and the join() method for thread coordination.
#/Q

#Q
Explain the life cycle of a thread in Java and the different states it goes through.
-  The thread starts in the "New" state, where it is created but not yet started. Once started, it enters the "Runnable" state, where it is considered actively executing its task. From the "Runnable" state, a thread can transition to the "Waiting" state, where it waits for another thread to perform a specific task or signal it to continue execution. The thread can also enter the "Timed Waiting" state, where it waits for a specified interval of time or for a particular event to occur. Finally, a thread enters the "Terminated" or "Dead" state when it completes its task or is terminated by another mechanism.
#/Q

#Q
What is the significance of the "New" state in the life cycle of a thread? How does a thread transition from the "New" state to the "Runnable" state?
- The "New" state represents a newly created thread that has not yet started executing. In this state, the thread's resources, such as memory and program counter, are allocated but not yet utilized. 
#/Q

#Q
Discuss the characteristics and behaviors of a thread in the "Runnable" state. What does it mean for a thread to be executing its task?
- In the "Runnable" state, a thread is actively executing its task. It is ready to run, and the thread scheduler determines when it gets CPU time for execution. Threads in this state can be executing concurrently with other threads, making progress toward completing their tasks. The behavior of a thread in the "Runnable" state depends on factors such as thread priority and CPU scheduling algorithms, which determine the order and duration of execution.
#/Q

#Q
When and why does a thread transition to the "Waiting" state? How does it transition back to the "Runnable" state?
- A thread transitions to the "Waiting" state when it waits for another thread to perform a specific task or to signal it to continue execution. This typically occurs when a thread encounters a situation where it cannot proceed until a certain condition is met. To transition back to the "Runnable" state, another thread must explicitly signal the waiting thread by invoking the notify() or notifyAll() methods. When the waiting thread receives the signal, it leaves the "Waiting" state and enters the "Runnable" state, resuming its execution.
#/Q

#Q
Describe the concept of `Timed Waiting` in the thread life cycle. When and how does a thread enter this state? How does it transition back to the "Runnable" state?
- "Timed Waiting" refers to a state where a thread waits for a specified interval of time or for a particular event to occur. A thread enters the "Timed Waiting" state by invoking methods like sleep(milliseconds) or wait(milliseconds). It remains in this state until either the specified time interval elapses or the event it is waiting for occurs. Once the time interval expires or the event happens, the thread transitions back to the "Runnable" state and resumes execution.
#/Q

#Q
Explain the circumstances under which a thread enters the "Terminated" or "Dead" state. What are the possible reasons for a thread to reach this state?
- A thread enters the "Terminated" or "Dead" state when it completes its task or is terminated by other means. The completion of the task can occur when the thread finishes executing its code or reaches a designated exit point.
- Additionally, a thread can be terminated forcefully by invoking the stop() method, although this method is deprecated due to potential thread corruption issues. Other reasons for thread termination include encountering an uncaught exception or being interrupted by another thread using the interrupt() method.
#/Q

#Q
What is thread scheduling in Java, and why is it necessary?
-  This is the process of determining the order in which threads are executed on a single CPU. It is necessary because multiple threads can be contending for CPU time, and an efficient scheduling algorithm ensures fair and optimal utilization of the available resources.
#/Q

#Q
Explain the concept of fixed-priority scheduling in Java. How does it determine the order in which threads are scheduled?
- In fixed-priority scheduling, each thread is assigned a priority value, ranging from Thread.MIN_PRIORITY to Thread.MAX_PRIORITY. The thread scheduler uses these priorities to determine the execution order. Threads with higher priorities have a greater chance of being scheduled to run, while threads with lower priorities may experience less CPU time.
#/Q 

#Q
Discuss the important methods provided by the Thread class in Java for managing and controlling threads. Explain their purposes and provide examples of their usage in multi-threaded programming.
* start(): The start() method is used to begin the execution of a thread. When called, it allocates system resources and initializes the thread, enabling it to run concurrently.
* sleep(long millis): The sleep() method pauses the execution of the current thread for the specified number of milliseconds.
* join(): The join() method allows one thread to wait for the completion of another thread. 
* interrupt(): The interrupt() method interrupts a thread that is currently sleeping, waiting, or in a blocked state. 
* isAlive(): The isAlive() method checks whether a thread is still alive or has completed its execution.
#/Q