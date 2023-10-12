## **Logical data independence**

Logical data independence is the ability to change the <mark style="background: #FF5582A6;">logical schema of a database without affecting the external schema or the application programs that use the database.</mark>

**Example:**

Suppose we have a database of customer information. The logical schema might include the following entities:

- Customer
- Order
- Product

Each entity would have a set of attributes, such as:

- Customer: customer ID, name, address, phone number
- Order: order ID, customer ID, order date, total amount
- Product: product ID, name, description, price

We could also have relationships between entities, such as:

- A customer can place many orders.
- An order can have many products.

## **Physical data independence**

Physical data independence is the <mark style="background: #FF5582A6;">ability to change the physical schema of a database without affecting the logical schema or the application programs that use the database.</mark> 

**Example:**

Suppose we have a database of customer information and we store the data in a set of flat files. If we decide to change the way the data is stored, such as using a relational database or a NoSQL database, we should be able to do so without affecting the logical schema or the application programs that use the database.

This is possible because the DBMS provides a layer of abstraction between the physical schema and the logical schema. The DBMS automatically translates queries from the logical schema to the physical schema and vice versa.

**Benefits of logical and physical data independence**

Logical and physical data independence offer a number of benefits, including:

- Increased flexibility: Logical and physical data independence make it easier to change the database structure without affecting the application programs that use the database.
- Improved maintainability: Logical and physical data independence can make it easier to maintain the database.
- Increased performance: Logical and physical data independence can help to improve the performance of the database by allowing the DBMS to choose the most efficient way to store and retrieve data.


# Three-tier architecture

Three-tier architecture is a <mark style="background: #FF5582A6;">client-server architecture that separates the user interface, application processing, and data management</mark> into three distinct tiers or layers:

- **Presentation tier:** The presentation tier is the user interface or client layer of the application. It is responsible for <mark style="background: #FF5582A6;">presenting data to the user and receiving input from the user.</mark>
  
- **Application tier:** The application tier is the business logic layer. It is responsible for <mark style="background: #FF5582A6;">processing user requests and generating responses. </mark>The application tier also interacts with the database tier to retrieve and store data.
  
- **Database tier:** The database tier is the data storage layer. It is responsible for <mark style="background: #FF5582A6;">storing and managing the data that the application uses.</mark>


## Direct File Organization
**Direct file organization** is a file organization method in which each <mark style="background: #FF5582A6;">record in a file is directly mapped to a specific storage location</mark> on the disk.

**Advantages of direct file organization:**

- **Fast access:** Direct file organization allows for very fast access to individual records, since the storage location of each record is known in advance.
- **Simple implementation:** Direct file organization is relatively simple to implement and use.

**Disadvantages of direct file organization:**

- **Inefficient space usage:** Direct file organization can be inefficient in terms of space usage, since the file must be large enough to store all of the possible records, even if some of them are not actually present.
- **Susceptibility to fragmentation:** Direct file organization is susceptible to fragmentation, which can occur when records are deleted and inserted from the file.


### In-Direct File Organization
**Indirect file organization** is a file organization method in which each record in a file is mapped to a storage location indirectly through an index table.

**Advantages of indirect file organization:**

- **Efficient space usage:** Indirect file organization is more efficient in terms of space usage than direct file organization, since the file only needs to be large enough to store the actual records, not all of the possible records.
- **Less susceptible to fragmentation:** Indirect file organization is less susceptible to fragmentation than direct file organization, since records can be inserted and deleted without affecting the storage locations of other records.

**Disadvantages of indirect file organization:**

- **Slower access:** Indirect file organization is slower than direct file organization, since the storage location of each record must be looked up in the index table before the record can be accessed.
- **More complex implementation:** Indirect file organization is more complex to implement and use than direct file organization.

> [!note]
> Spanning Tree Protocol (STP) is a network protocol used in Ethernet networks to prevent loops in the network topology.
## Standards for Ethernet Networks


1. **10Base-T Ethernet:**
    
    - **Media:** 10Base-T Ethernet uses twisted-pair copper cabling, typically employing either Category 3 or Category 5 UTP (Unshielded Twisted Pair) cables.
    - **Topology:** It's commonly used in star topologies, where devices are connected to a central hub or switch.
    - **Bit Rate:** 10Base-T Ethernet provides a maximum bit rate of 10 Mbps (megabits per second). This is a relatively slower data transfer speed by modern standards but was common in the early days of Ethernet.
2. **10Base-F Ethernet (or 10Base-FL for Fiber-Optic):**
    
    - **Media:** 10Base-F Ethernet uses fiber-optic cables for data transmission, which are made of glass or plastic and use light signals to transmit data.
    - **Topology:** It's commonly used in point-to-point connections or as part of a bus topology.
    - **Bit Rate:** 10Base-F Ethernet also provides a maximum bit rate of 10 Mbps. While it has the same bit rate as 10Base-T, it offers the advantages of fiber optics, including longer distance capabilities, immunity to electromagnetic interference, and higher security.