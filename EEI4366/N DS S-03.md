---
dg-publish: true
---
# Stored Procedure

A stored procedure is a <mark style="background: #FF5582A6;">precompiled and reusable database object</mark> in a relational database management system (RDBMS). It is a <mark style="background: #FFF3A3A6;">collection of one or more SQL statements and procedural logic that is stored on the database server</mark> for later execution.

Stored procedures are typically used to <mark style="background: #FF5582A6;">perform specific tasks or operations within a database</mark>, such as data manipulation, data retrieval, or data maintenance.

Key characteristics of stored procedures include:

1. Precompilation: Stored procedures are precompiled and optimized by the database management system, which can lead to improved performance because the SQL code doesn't need to be parsed and compiled each time it's executed.
    
2. Reusability: Stored procedures can be called multiple times from different parts of an application or by different users, promoting code reuse and consistency.
    
3. Encapsulation: They encapsulate a set of SQL statements and procedural logic into a single unit, allowing developers to hide the implementation details and provide a clean and well-defined interface for interacting with the database.
    
4. Security: Stored procedures can be used to control access to database tables by granting permissions to execute the procedure rather than directly accessing the tables, enhancing security.
    
5. Parameterization: Stored procedures often accept parameters, making them flexible and adaptable for various use cases by passing different values to the same procedure.
    
6. Transaction management: They can be used to group multiple SQL statements into a single transaction, ensuring data consistency and integrity.
    
7. Error handling: Stored procedures can include error handling code to deal with exceptions and errors that might occur during execution.

## Syntax

```mysql
DELIMITER //
CREATE PROCEDURE procedure_name(IN parameter1 datatype, IN parameter2 datatype, ...)
BEGIN
    -- SQL statements and procedural logic here
    select age from customer
    where employee_id = parmeter1
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
CREATE PROCEDURE ExampleProcedure(IN input_param INT)
BEGIN
    -- Use the input parameter in SQL statements within the procedure
    SELECT * FROM table_name WHERE column_name = input_param;
END;
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

Functions in MySQL are reusable blocks of code that accept parameters, perform calculations or operations, and return a single value. They are typically used to encapsulate complex logic and make it easier to work with databases.

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
CREATE FUNCTION function_name ([parameter1 datatype[, parameter2 datatype, ...]])
  RETURNS return_datatype
  [DETERMINISTIC | NOT DETERMINISTIC]
  [SQL DATA ACCESS {CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA}]
  BEGIN
    -- Function body: SQL statements
    -- Return a value using the RETURN statement
    RETURN return_value;
  END;
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

Key characteristics of NoSQL databases include:

1. **Schema flexibility:** Unlike traditional relational databases, which require a fixed schema (predefined structure) for data, NoSQL databases allow for dynamic and flexible schemas.
    
2. **Scalability:** NoSQL databases are often designed to scale out horizontally, making it easier to handle large amounts of data and high traffic loads.
    
3. **High performance:** Many NoSQL databases are optimized for specific use cases, such as read-heavy or write-heavy workloads, which can result in better performance for those specific tasks compared to traditional databases.
    
4. **Data model diversity:** NoSQL databases support various data models, including document-based (e.g., MongoDB), key-value (e.g., Redis), column-family (e.g., Apache Cassandra), and graph-based (e.g., Neo4j).
    
5. **No rigid ACID transactions:** NoSQL databases often prioritize performance and scalability over strict ACID (Atomicity, Consistency, Isolation, Durability) transactions found in traditional SQL databases.

