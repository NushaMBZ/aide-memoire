# The Enhanced Entity–Relationship (EER) Model

An EER diagram is a visual representation used in database design to model the structure and relationships of data within a database. 

It is an extension of the traditional Entity-Relationship (ER) diagram, which is used to design relational databases.

**EER model includes all modeling concepts of the ER model In addition, EER includes:**
◦Subclasses and superclasses 
◦Specialization and generalization 
◦Category or union type 
◦Attribute and relationship inheritance

## Subclasses and Superclasses

Subclass entity inherits all attributes and relationships of superclass

An entity type may have additional meaningful subgroupings of its entities 
**Example: EMPLOYEE may be further grouped into:**
- SECRETARY, ENGINEER, TECHNICIAN, … 
- Based on the EMPLOYEE’s Job

![[Screenshot 2023-10-04 190313.png]]

- Each of these subgroupings is a subset of EMPLOYEE entities 
- Each is called a subclass of EMPLOYEE 
- EMPLOYEE is the superclass for each of these subclasses 
- These are called superclass/subclass relationships: 
   ◦ EMPLOYEE/SECRETARY 
   ◦ EMPLOYEE/TECHNICIAN 
   ◦ EMPLOYEE/MANAGER

- These are also called IS-A relationships 
   ◦ SECRETARY IS-A EMPLOYEE, TECHNICIAN IS-A EMPLOYEE, …

- Superclass/subclass relationship is one-to-one (1:1)

#### Examples:
A salaried employee who is also an engineer belongs to the two subclasses: 
◦ ENGINEER, and 
◦ SALARIED_EMPLOYEE 

A salaried employee who is also an engineering manager belongs to the three subclasses: 
◦ MANAGER, 
◦ ENGINEER, and 
◦ SALARIED_EMPLOYEE 

It is not necessary that every entity in a superclass be a member of some subclass

## Attribute Inheritance in Superclass / Subclass Relationships

- An entity that is member of a subclass inherits 
    ◦All attributes of the entity as a member of the superclass ◦All relationships of the entity as a member of the superclass
####   Examples:
 ◦SECRETARY (as well as TECHNICIAN and ENGINEER) inherit the attributes Name, SSN, …, from EMPLOYEE

 ◦Every SECRETARY entity will have values for the inherited attributes

