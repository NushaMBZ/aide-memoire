---
tags:
  - eei4366
dg-publish: true
---
# Stored Procedure

A stored procedure is a <mark style="background: #FF5582A6;">precompiled and reusable database object</mark> in a relational database management system (RDBMS). It is a <mark style="background: #FFF3A3A6;">collection of one or more SQL statements and procedural logic that is stored on the database server</mark> for later execution.

Stored procedures are typically used to <mark style="background: #FF5582A6;">perform specific tasks or operations within a database</mark>, such as data manipulation, data retrieval, or data maintenance.

Key characteristics of stored procedures include:

1. <mark style="background: #FFF3A3A6;">Precompilation</mark>: Stored procedures are precompiled and optimized by the database management system, which can lead to improved performance because the SQL code doesn't need to be parsed and compiled each time it's executed.
    
2. <mark style="background: #FFF3A3A6;">Reusability</mark>: Stored procedures can be called multiple times from different parts of an application or by different users, promoting code reuse and consistency.
    
3. <mark style="background: #FFF3A3A6;">Encapsulation</mark>: They encapsulate a set of SQL statements and procedural logic into a single unit, allowing developers to hide the implementation details and provide a clean and well-defined interface for interacting with the database.
    
4. Security: Stored procedures can be used to control access to database tables by granting permissions to execute the procedure rather than directly accessing the tables, enhancing security.
    
5. <mark style="background: #FFF3A3A6;">Parameterization</mark>: Stored procedures often <mark style="background: #BBFABBA6;">accept parameters, making them flexible and adaptable for various use cases</mark> by passing different values to the same procedure.
    
6. <mark style="background: #FFF3A3A6;">Transaction management</mark>: They can be used to group multiple SQL statements into a single transaction, ensuring data consistency and integrity.
    
7. <mark style="background: #FFF3A3A6;">Error handling</mark>: Stored procedures can include error handling code to deal with exceptions and errors that might occur during execution.

## Syntax

```mysql
DELIMITER //
CREATE PROCEDURE procedure_name(IN parameter1 datatype, IN parameter2 datatype, ...)
BEGIN
    -- SQL statements and procedural logic here
    select age from customer
    where employee_id = parmeter1;
    -- You can use parameters in your SQL statements
    -- For example:
    -- SELECT * FROM table_name WHERE column_name = parameter1;

    -- Additional SQL statements and logic as needed

END //
DELIMITER ;
```

- `DELIMITER //`: MySQL uses a <mark style="background: #FFF3A3A6;">delimiter to distinguish between the end of the CREATE PROCEDURE statement and the end of the procedure's body.</mark> By default, the delimiter is a semicolon (`;`), but when creating stored procedures, you need to change it to a different character (in this case, `//`) using the `DELIMITER` command. This allows you to include semicolons within the stored procedure without prematurely ending the CREATE PROCEDURE statement.
    
- `CREATE PROCEDURE`: This SQL statement creates a new stored procedure in MySQL. `procedure_name` is the name of your stored procedure.
    
- `IN parameter1 datatype, IN parameter2 datatype, ...`: These are the input parameters for the stored procedure. You specify the parameter name followed by its data type. You can have zero or more input parameters.
    
- `BEGIN` and `END`: These keywords enclose the body of the stored procedure, which contains the actual SQL statements and procedural logic.

## Parameterized Stored Procedure

There are typically three types of parameters: input parameters, output parameters, and input/output parameters.

**Input Parameters (IN)**:

- Input parameters are used to pass data from the calling code (e.g., an application or another SQL statement) into the stored procedure.
- They are prefixed with `IN` in the parameter declaration.
- Input parameters are read-only within the stored procedure, meaning you can use their values but cannot modify them.
- These parameters are commonly used for filtering data or passing values for processing within the procedure.

```mysql
DELIMITER //
CREATE PROCEDURE finddoctor(IN doctorid INT)
BEGIN
  SELECT * FROM Doctor WHERE Doctor.staff_id = doctorid;
END //
DELIMITER ;
```

**Output Parameters (OUT)**:

- Output parameters are used to return a single value or result from the stored procedure back to the calling code.
- They are prefixed with `OUT` in the parameter declaration.
- Output parameters are write-only within the stored procedure, meaning you can assign a value to them within the procedure, which will then be returned to the caller.
- These parameters are commonly used when you need to return a specific value or result, such as the count of records or an error code.

```mysql
CREATE PROCEDURE ExampleProcedure(OUT output_param INT)
BEGIN
    -- Assign a value to the output parameter
    SET output_param = 42;
END;
```

**Input/Output Parameters (INOUT or IN OUT)**:

- Input/output parameters combine the characteristics of both input and output parameters.
- They allow you to pass data into the stored procedure and receive modified data back from the procedure.
- They are prefixed with either `INOUT` or `IN OUT` in the parameter declaration, depending on the database system.
- These parameters are used when you need to pass data into the procedure for processing and then return modified data to the caller.

```mysql
CREATE PROCEDURE ExampleProcedure(INOUT inout_param INT)
BEGIN
    -- Modify the value of the inout parameter
    SET inout_param = inout_param * 2;
END;
```

## Execution

The `CALL` or `EXECUTE` keyword followed by the name of the stored procedure and any required parameters.

```mysql
CALL GetEmployeeByID(123);
```

## Drop

`DROP PROCEDURE` statement is used to To drop (delete) a stored procedure in a database.

```mysql
-- Syntax for dropping a stored procedure in SQL
DROP PROCEDURE [IF EXISTS] procedure_name;

```


# Functions

Functions in MySQL are <mark style="background: #FFF3A3A6;">reusable blocks of code that accept parameters, perform calculations or operations, and return a single value.</mark> They are typically used to encapsulate complex logic and make it easier to work with databases.

1. **User-Defined Functions (UDFs)**:
    
    - UDFs are custom functions created by users or database developers to extend the functionality of a database management system (DBMS).
    - These functions are defined by the user, and their behavior is often specific to the requirements of a particular database or application.
    - UDFs can accept parameters, perform calculations or operations, and return values just like built-in or system-defined functions.
    - Common types of UDFs include scalar functions (returning a single value), table-valued functions (returning a table-like result set), and aggregate functions (used in combination with the GROUP BY clause).
      
2. **System-Defined Functions (SDFs)**:
    
    - SDFs, also known as built-in functions or system functions, are functions provided by the database management system itself.
    - These functions are predefined and come with the DBMS to perform common operations like mathematical calculations, string manipulation, date and time functions, and more.
    - SDFs are not created by users but are available for use within SQL queries and stored procedures.
    - Examples of SDFs include functions like `COUNT()`, `SUM()`, `GETDATE()`, and `CONCAT()` in various SQL dialects.

To define and create functions use the `CREATE FUNCTION` statement.

```mysql
DELIMITER //
CREATE FUNCTION get_full_name(first_name VARCHAR(255), last_name VARCHAR(255)) RETURNS VARCHAR(255)
BEGIN
  DECLARE full_name VARCHAR(255);

  SET full_name = CONCAT(first_name, ' ', last_name);

  RETURN full_name;
END //
DELIMITER ;
```

- `function_name`: This is the name of the function.
- `parameter1`, `parameter2`, etc.: These are optional input parameters that the function can accept. Each parameter has a data type.
- `RETURNS return_datatype`: Specifies the data type of the value that the function will return.
- `DETERMINISTIC | NOT DETERMINISTIC`: can specify whether the function is deterministic (returns the same result for the same input) or not.
- `SQL DATA ACCESS`: This clause specifies the type of SQL statements the function can contain.

## Drop
Use the `DROP FUNCTION` statement to drop (delete) a SQL function.

```mysql
DROP FUNCTION [IF EXISTS] function_name;
```

## Execution

To call (invoke) a SQL function, one can use the function's name in a SQL statement, provide any required arguments or parameters.

```mysql
-- Calling a user-defined function 
SELECT function_name(argument1, argument2, ...);
```

# NoSQL

"Not Only SQL," is a term used to describe a category of database management systems that are designed to store, retrieve, and manage data in ways that differ from traditional relational databases (SQL databases). NoSQL databases are characterized by their ability to handle <mark style="background: #FF5582A6;">large volumes of unstructured or semi-structured data</mark> and their flexibility in accommodating various data models.

## Features

1. **<mark style="background: #ADCCFFA6;">Non-relational</mark>**: Unlike relational databases, which use tables and fixed schemas, NoSQL databases do not rely on a fixed structure for storing data. 
    
2. **<mark style="background: #ADCCFFA6;">Schema-flexible</mark>**: NoSQL databases are often schema-less or schema-agnostic, allowing for the storage of data with varying structures within the same database.
    
3. **<mark style="background: #ADCCFFA6;">Scalability</mark>**: NoSQL databases are designed for horizontal scalability, making it easy to distribute data across multiple servers or nodes.
    
4. **<mark style="background: #ADCCFFA6;">High Performance</mark>**: NoSQL databases are optimized for high-speed data read and write operations.
    
5. **<mark style="background: #ADCCFFA6;">Distributed Architecture</mark>**: Many NoSQL databases are distributed databases, meaning data is distributed across multiple servers or nodes. 

## **Advantages of NoSQL Databases**

1. **Flexible Data Models**: NoSQL databases can handle various data structures, such as semi-structured, unstructured, and structured data. 
    
2. **Scalability**: NoSQL databases are designed for horizontal scalability. 
    
3. **High Performance**: NoSQL databases are optimized for high-speed data read and write operations. 
    
4. **Schema-less or Schema-flexible**: Many NoSQL databases are schema-less or schema-agnostic, which means you can add, modify, or remove fields in your data without affecting existing data records. 
    
5. **Distributed Architecture**: NoSQL databases are often distributed databases, providing data redundancy, fault tolerance, and improved availability.

## **Disadvantages of NoSQL Databases:**

1. **Lack of ACID Compliance**: Many NoSQL databases prioritize availability and partition tolerance over strict consistency, which can lead to eventual consistency.
    
2. **Limited Query Capabilities**: NoSQL databases may have limited query capabilities compared to SQL databases. 
    
3. **Learning Curve**: Developers familiar with SQL databases may need to learn a new query language and understand the specific data model of the chosen NoSQL database.
    
4. **Data Integrity and Validation**: Ensuring data integrity and applying data validation rules can be more challenging in NoSQL databases, as there is often no centralized schema to enforce constraints.
    
5. **Not Suitable for All Use Cases**: While NoSQL databases are versatile, they are not a one-size-fits-all solution. 
