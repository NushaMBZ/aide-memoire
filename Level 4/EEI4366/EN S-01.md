---
tags:
  - eei4366
---
## The File-based Approach
The file-based approach, also known as a file-based system or file-oriented approach, is a method of organizing and managing data in a computer system.
### Features

1. Files: Files are used to store data and information. Each file typically corresponds to a specific type of data or record. 
    
2. Directories: Files are organized into directories or folders. 
    
3. Data Redundancy: In a file-based approach, data redundancy is common.
    
4. Data Independence: Data and the programs that manipulate it are closely linked.
    
5. Limited Data Sharing: Sharing data between different applications can be challenging in a file-based system. 
    
6. Lack of Data Integrity: Maintaining data integrity and enforcing data validation rules can be complex in a file-based system. 

## **Logical data independence**

#Q #AOSR/4hgb6
Logical data independence :: is the ability to change the <mark style="background: #FF5582A6;">logical schema of a database without affecting the external schema or the application programs that use the database.</mark> #AOSR/4hgb6/s/69fd
#/Q 

Each entity would have a set of attributes, such as:

- Customer: customer ID, name, address, phone number
- Order: order ID, customer ID, order date, total amount
- Product: product ID, name, description, price

We could also have relationships between entities, such as:

- A customer can place many orders.
- An order can have many products.

## **Physical data independence**

#Q #AOSR/5saq4
Physical data independence :: is the <mark style="background: #FF5582A6;">ability to change the physical schema of a database without affecting the logical schema or the application programs that use the database.</mark>  #AOSR/5saq4/s/7d7d #AOSR/4hgb6/s/7geu

**Benefits of logical and physical data independence**

Logical and physical data independence offer a number of benefits, including:
- Increased flexibility: Logical and physical data independence make it easier to change the database structure without affecting the application programs that use the database.
- Improved maintainability: Logical and physical data independence can make it easier to maintain the database.
- Increased performance: Logical and physical data independence can help to improve the performance of the database by allowing the DBMS to choose the most efficient way to store and retrieve data.


# Three-tier architecture

#Q #AOSR/5evq0
Three-tier architecture :: is a <mark style="background: #FF5582A6;">client-server architecture that separates the user interface, application processing, and data management</mark> into three distinct tiers or layers: #AOSR/5evq0/s/5hua #AOSR/4hgb6/s/2bpd
#/Q 
#Q
- Presentation tier:: The presentation tier is the user interface or client layer of the application. It is responsible for <mark style="background: #FF5582A6;">presenting data to the user and receiving input from the user.</mark> #AOSR/5evq0/s/28eu #AOSR/4hgb6/s/1e87
#/Q 
#Q
- Application tier:: The application tier is the business logic layer. It is responsible for <mark style="background: #FF5582A6;">processing user requests and generating responses. </mark>The application tier also interacts with the database tier to retrieve and store data. #AOSR/5evq0/s/7rji
#Q
- Database tier:: The database tier is the data storage layer. It is responsible for <mark style="background: #FF5582A6;">storing and managing the data that the application uses.</mark> #AOSR/5evq0/s/190o


## Direct File Organization

#Q #AOSR/6knhc
Direct file organization :: is a file organization method in which each <mark style="background: #FF5582A6;">record in a file is directly mapped to a specific storage location</mark> on the disk. #AOSR/6knhc/s/370f #AOSR/4hgb6/s/v5g6

#Q
Advantages of direct file organization
- **Fast access:** Direct file organization allows ==for very fast access to individual records,== since the storage location of each record is known in advance.
- **Simple implementation:** Direct file organization is ==relatively simple to implement and use.==

#Q #AOSR/t80p3
Disadvantages of direct file organization:
- **Inefficient space usage:** Direct file organization can be ==inefficient in terms of space usage== #AOSR/t80p3/c/37nc , since the file must be large enough to store all of the possible records, even if some of them are not actually present.
- **Susceptibility to fragmentation:** Direct file organization is ==susceptible to fragmentation==, which can occur when records are deleted and inserted from the file.

### **Heap Files**

Heap Files, also known as unordered files or unordered data files, are a type of primary file organization used in database systems. In a heap file organization:

- <mark style="background: #FFF3A3A6;">Data records are inserted into the file in no particular order.</mark> They are appended to the end of the file as they arrive, and no specific sorting or order is enforced.
- There is no structure to optimize retrieval or access, so searching for a specific record can be inefficient. You may need to scan the entire file to find the desired data.
- It is a simple and efficient method for inserting new records since no sorting is required, and it's fast for write operations.

### **Hashing Techniques:**

Hashing is a method used to organize and access data in a database quickly. Hashing techniques involve<mark style="background: #FFF3A3A6;"> the use of a hash function to map a data item's key (or some other attribute) to an address (location) within a data structure, </mark>typically a hash table or hash file. 

### Sequential File Organization 

It is one of the easiest methods in which the <mark style="background: #FFF3A3A6;">files are stored one after the other</mark> as the name suggests in a sequential manner. 

### B+ Tree File Organization

It is an advanced method of an indexed sequential method which is uses the<mark style="background: #FFF3A3A6;"> same techniques like the tree structure in order to store the records in the file. </mark>

### Clustered File Organization

It is a method that uses two or more records that is stored in the same file which are known as clusters. These files are kept in two or more tables in the same data block and the key attributes which are used to map these are stored in the tables together are stored only once.

## In-Direct File Organization

#Q #AOSR/7uvuu
**Indirect file organization** is a file organization method in which ==each record in a file is mapped to a storage location indirectly through an index table.== #AOSR/7uvuu/c/3d1c 

#Q #AOSR/1csgt
**Advantages of indirect file organization:**
- **Efficient space usage:** Indirect file organization is ==more efficient in terms of space usage== #AOSR/1csgt/c/55su  than direct file organization, since the file only needs to be large enough to store the actual records, not all of the possible records.
- **Less susceptible to fragmentation:** Indirect file organization is ==less susceptible to fragmentation than direct file organization==, since records can be inserted and deleted without affecting the storage locations of other records.

#Q
**Disadvantages of indirect file organization:**
- **Slower access:** Indirect file organization is ==slower than direct file organization,== since the storage location of each record must be looked up in the index table before the record can be accessed.
- **More complex implementation:** Indirect file organization is ==more complex to implement== and use than direct file organization.

## Indexing Structures

Indexing is a <mark style="background: #FFF3A3A6;">database optimization technique that improves the speed of data retrieval operations on a database table. </mark>Indexes are data structures that store a subset of the table data, along with pointers to the actual rows in the table.

### **Types of Single Level Ordered Indexes** 

Single level ordered indexes are indexes that provide a single level of indexing for a table. There are various types of single-level ordered indexes:

- **<mark style="background: #ADCCFFA6;">Primary Index</mark>:** <mark style="background: #BBFABBA6;">A primary index is typically created on the primary key of a table.</mark> It enforces the uniqueness of the primary key and sorts the table data based on the primary key values.
    
- **<mark style="background: #ADCCFFA6;">Secondary Index</mark>:** <mark style="background: #BBFABBA6;">A secondary index is created on non-primary key columns</mark> to speed up retrieval based on those columns. 
    
- **<mark style="background: #ADCCFFA6;">Clustering Index</mark>:** <mark style="background: #BBFABBA6;">A clustering index determines the physical order of the rows in the table.</mark> When a table has a clustering index, the rows are stored on disk in the same order as the index key. 
    
- **<mark style="background: #ADCCFFA6;">Dense Index</mark>:** <mark style="background: #BBFABBA6;">A dense index contains an entry for every data record in the table.</mark> This means it has an entry for each value of the indexed column.
    
- **<mark style="background: #ADCCFFA6;">Sparse Index</mark>:** <mark style="background: #BBFABBA6;">A sparse index contains entries only for some of the data records in the table.</mark> It is typically used for columns with many duplicate values.

### **Multilevel Indexes**

Multilevel indexes are used to <mark style="background: #BBFABBA6;">handle situations where a single-level index becomes too large to fit in memory or is too slow to access due to its size.</mark>

Common types of multilevel indexes include:

- **<mark style="background: #ADCCFFA6;">Two-Level Index</mark>:** In a two-level index, <mark style="background: #FFF3A3A6;">the first level is a root index, and the second level is a set of leaf indexes.</mark>
    
- **<mark style="background: #ADCCFFA6;">Three-Level Index</mark>:** This extends the concept of two-level indexing by <mark style="background: #BBFABBA6;">adding an intermediate level between the root index and the leaf indexes.</mark>

### **Dynamic Multilevel Indexes using B+ Trees and B- Trees**

B+ Trees and B- Trees are commonly used <mark style="background: #FFF3A3A6;">dynamic multilevel index structures in database management systems.</mark>

- **<mark style="background: #ADCCFFA6;">B-Tree (Balanced Tree)</mark>:** B-Trees are <mark style="background: #BBFABBA6;">self-balancing tree structures that maintain a balanced height as data is inserted or removed. </mark>
    
- **<mark style="background: #ADCCFFA6;">B+ Tree (Balanced Plus Tree)</mark>:** B+ Trees are similar to B-Trees but have some variations, such as storing data only in the leaf nodes and using pointers to navigate between leaf nodes. 

## ANSI/SPARC Architecture

The ANSI/SPARC architecture consists of three main levels or components:

1. External Schema (User View):
    
    - This is the highest level of the architecture and is concerned with how end-users interact with the database system. It defines the user's view of the data, including the structure of data, access rights, and user-specific queries.
    - The external schema allows for data abstraction, so different users or user groups can have customized and simplified views of the data, without needing to know the underlying database structure.
2. Conceptual Schema (Logical View):
    
    - The conceptual schema represents the logical view of the entire database. It defines the structure and organization of the data in a way that is independent of the physical storage and access methods.
    - It includes the data model, relationships between data entities, integrity constraints, and security specifications. This level abstracts the underlying data structure and provides a high-level description of the database's content.
3. Internal Schema (Physical View):
    
    - The internal schema represents the physical view of the database, focusing on how data is stored and accessed at the lowest level. It includes details about storage structures, access paths, indexing, and physical data representation.
    - Database administrators and system designers work with the internal schema to optimize database performance and manage storage resources.