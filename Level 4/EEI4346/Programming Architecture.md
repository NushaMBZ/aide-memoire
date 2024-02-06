---
dg-publish: true
---


- Web Application architecture defines the interactions between applications, middleware systems and database to ensure multiple application work together

-> **MVC** (Model View Controller)
-> Onion

What is MVC Architecture

- stands for Model View Controller
- a design pattern for developing software application
- separates concerns and responsibilities into three distinct components


**Model Component**

- Represent the application's data and logic
- Handles data storage, retrieval and manipulation
- Independent of the user interface

EX- database, data structures, business logic


**View Component**

- Deals with the presentation and visualization of data
- Displays information to the user
- Receives input and sends it to the controller

EX- HTML, CSS, UI templates, User Interface


**Controller Component**

- Mediates between the model and view
- Receives user input from the view
- Manipulates the model based on the input
- Updates the view to reflect changes in the model

EX- Server side scripts, application logic


***MVC Interaction Flow***

- User interacts with the view
- View sends input to the controller
- Controller process the input and updates the model
- Model notifies the view of changes
- View updates its display based on the model's updates


***MVC Benefits***

- separation of concerns
- code reusability
- parallel development
- testability
- flexibility


***MVC Examples in Different Technologies***

- Web Development - ASP.NET MVC, Ruby on Rails, Django
- Desktop Application - Java swing, Qt, cocoa
- Mobile App Development - IOS, Android 


***Onion Architecture***

- The onion architecture also known as Hexagonal Architecture
- an architectural pattern that promotes the separation of concerns and focuses on the independence of business logic form external frameworks and dependencies 
- The onion architecture is layered architectural pattern that organizes the components of a software system into concentric layers, each with a specific responsibility and level of abstraction


Overview of the Onion Architecture Layers

***Presentation Layer***

- User Interfaces (UI) such as web interfaces, desktop application or APIs
- Handles user interactions and displays information to the user
- Communicates with the Application Layer
- 

	Responsibilities and Characteristic
	
	- Handles user input & output
	- Focuses on the user experience and presentation of data
	- Should be easily replaceable without affecting other players
	- Interaction with the Application Layer


**Application Layer**

- Contains application specific business logic and use cases
- Interaction between the presentation layer and the domain layer
- Defines the application's behavior and coordinates the flow of data and actions


	Responsibilities and Characteristic

	- Contains the application specific business logic
	- Defines use cases and orchestrates the flow of action
	- Implements the application's behavior and business rules
	- Business Logic


***Domain Layer***

- Core of the application containing the domain model and business logic
- Represents the fundamental concepts, rules and processes of the problem domain
- Encapsulates entities, value objects, domain services and aggregates


	Responsibilities and Characteristic

	- Contains the core business logic and domain model
	- Represents the fundamental concepts and rules of the problem domain
	- Encapsulates entities, value objects, domain services and aggregates
	- Independent of frameworks, technologies and infrastructure concerns 
	- Core Business Logic


***Infrastructure Layer***

- provides infrastructure related functionality such as data access, external services integration and persistence 
- Implements interfaces defined in the Application and Domain Layers
- Dependencies on external frameworks and libraries resides in this layer


	Responsibilities and Characteristic 

	- Provides infrastructure related functionality 
	- Deals with data access, external services integration and persistence concerns 
	- Implements interfaces defined in the application and Domain layers
	- Contains external dependencies and frameworks 
	- External Dependencies 


**Benefits of Onion Architecture**

- Modular and Maintainable Codebase
- Improved Testability
- Independence from Frameworks and External Dependencies 
- Flexibility and Extensibility 


**Real-World Examples**

E - Commerce 

- Presentation Layer : Web based UI with HTML, CSS and JavaScript 
- Application Layer : Implements use cases like product catalog management order processing and user authentication 
- Domain Layer : Defines entities like product, Order and user with associated business rules
- Infrastructure Layer : Integrates with external payment gateways, database systems and email services



