# Database Administration

> [!definition]
> A Database Administrator is a  professional responsible for managing and maintaining a database management system (DBMS).

Database administration involves a wide range of tasks aimed at ensuring the efficient and secure operation of a database management system (DBMS).

1. **Database Installation and Configuration:** DBAs are responsible for installing the DBMS software on servers and configuring it according to the organization's requirements and best practices.
    
2. **Data Modeling and Design:** They collaborate with data architects and developers to design and create the database schema, defining tables, relationships, constraints, and indexes.
    
3. **Security Management:** DBAs implement and manage access controls to ensure that only authorized users can access and modify data.
    
4. **Backup and Recovery:** DBAs establish and maintain regular backup and recovery procedures to safeguard data against loss, corruption, or system failures.
    
5. **Performance Monitoring and Tuning:** DBAs monitor the database's performance by tracking metrics such as query execution times, resource utilization, and disk space usage.

## Types of Database Adminstrators

1. **Database Administrator (General DBA):** This is the most common type of DBA responsible for the overall management of a database system. 
    
2. **Database Developer:** Database developers focus on designing and building the database schema, writing SQL queries, stored procedures, and triggers. 
    
3. **Data Architect:** Data architects are responsible for designing the overall data strategy and architecture of an organization. 
    
4. **Data Warehouse Administrator:** Data warehouse administrators specialize in managing data warehouses, which are optimized for analytical and reporting purposes. 
    
5. **Cloud Database Administrator:** With the increasing adoption of cloud computing, some DBAs specialize in managing databases hosted on cloud platforms like AWS, Azure, or Google Cloud. 

# Databases for Web Applications

## Structured Data
Highly organized and follows a well-defined, rigid structure.

## Unstructured Data
This type of data does not adhere to a fixed schema like structured data but still possesses some level of structure.

## XML
> [!XML]
This is a markup language designed to store, transport, and structure data in a human-readable and machine-readable format.

### Components
1. **Tags:** XML documents consist of text enclosed within markup tags
    
2. **Elements:** Elements are the building blocks of an XML document and represent individual pieces of data or content. 
    
3. **Attributes:** XML elements can have attributes, which provide additional information about the element.
    
4. **Hierarchy:** XML documents are organized hierarchically, with elements nested within other elements.
    
5. **Well-Formedness:** An XML document must adhere to certain rules to be considered well-formed. 
    
6. **Case Sensitivity:** XML is case-sensitive, meaning that element and attribute names are distinguished by case.
    
7. **Data Types:** XML does not enforce specific data types for content within elements, making it flexible for representing various types of data, including text, numbers, dates, and more.
    
8. **Character Encoding:** XML documents can specify their character encoding, allowing for the representation of non-ASCII characters and various character sets.
    
9. **Namespace Support:** XML supports the use of namespaces, which help avoid naming conflicts when multiple XML vocabularies are used within the same document or context.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
    <!-- This is a sample library -->
    <book genre="fiction">
        <title>The Great Gatsby</title>
        <author>F. Scott Fitzgerald</author>
        <publicationYear>1925</publicationYear>
        <price currency="USD">12.99</price>
    </book>
    <book genre="mystery">
        <title>Sherlock Holmes: The Hound of the Baskervilles</title>
        <author>Sir Arthur Conan Doyle</author>
        <publicationYear>1902</publicationYear>
        <price currency="GBP">9.99</price>
    </book>
    <book genre="science-fiction">
        <title>Dune</title>
        <author>Frank Herbert</author>
        <publicationYear>1965</publicationYear>
        <price currency="USD">14.95</price>
    </book>
    <magazine genre="entertainment">
        <title>Entertainment Weekly</title>
        <issueNumber>123</issueNumber>
        <publicationYear>2023</publicationYear>
        <price currency="USD">4.99</price>
    </magazine>
</library>
```

```xquery
for $person in /AutoLoans/person
for $loan in $person/loan
where $loan/amout>75000
return ($person/name, $loan/payoutdata, $loan/amount)
```


## XPath

> [!Definition]
> XML Path Language, is a query language used for navigating and selecting elements or nodes from an XML (eXtensible Markup Language) document.

1. **Location Paths:** XPath expressions are constructed using location paths that define the path to a particular element or set of elements within an XML document. Location paths consist of a series of steps separated by slashes ("/").
    
2. **Node Types:** XPath recognizes various types of nodes in an XML document, including elements, attributes, text nodes, comments, and processing instructions.
    
3. **Predicates:** XPath allows you to apply conditions or filters, known as predicates, to select specific nodes that meet certain criteria. Predicates are enclosed in square brackets "[]" and are used to refine node selection.
    
4. **Axes:** XPath provides axes that define the direction of navigation within the XML document. Common axes include child, parent, descendant, ancestor, sibling, and self.
    
5. **Functions:** XPath includes a set of built-in functions that can be used in expressions to manipulate and evaluate data. 
    
6. **Wildcards:** XPath supports wildcards such as "\*" and "@" to represent elements and attributes with variable names.

### Examples
1. **Select All Book Titles:**
    
    - XPath Expression: `/library/book/title`
2. **Select Books Published Before 2000:**
    
    - XPath Expression: `/library/book[publicationYear < 2000]`
3. **Select the Price of the Mystery Book:**
    
    - XPath Expression: `/library/book[@genre='mystery']/price`
4. **Select All Elements with the Attribute 'currency':**
    
    - XPath Expression: `//*[@currency]`
5. **Select the First Book in the Document:**
    
    - XPath Expression: `/library/book[1]`
6. **Select All Elements with the Text "F. Scott Fitzgerald":**
    
    - XPath Expression: `//*[text()='F. Scott Fitzgerald']`

## XQuery

This is a powerful and expressive query language designed for querying and transforming XML (eXtensible Markup Language) data.

### Features

1. **XML-Centric:** XQuery can query and manipulate XML documents, extract specific elements or attributes, and navigate the hierarchical structure of XML.
    
2. **Expression-Based:** XQuery uses expressions and functions to specify what data to retrieve, transform, or construct. 
    
3. **Support for Navigation:** XQuery provides various functions and operators for navigating XML hierarchies, such as `element()`, `attribute()`, `child`, `descendant`, and `ancestor` axes.
    
4. **Data Extraction:** XQuery allows you to extract data from XML documents using path expressions, predicates, and filters. 
    
5. **Filtering and Sorting:** XQuery provides mechanisms for filtering and sorting XML data.
    
6. **Aggregation:** XQuery supports aggregation functions similar to SQL, allowing to perform calculations on grouped XML data.
    
7. **Joins:** XQuery can perform joins between XML documents or between elements within a single document, enabling data integration from multiple sources.
    
8. **Full-Text Search:** XQuery includes full-text search capabilities, allowing to search for text patterns within XML documents.
    
9. **Updates:** XQuery supports XML updates, allowing to modify, insert, or delete elements and attributes within XML documents.
    
10. **FLWOR Expressions:** XQuery features FLWOR (For-Let-Where-Order by-Return) expressions, which provide a flexible and powerful way to construct complex queries and transformations.
    
11. **XQuery Functions and Libraries:** XQuery includes a wide range of built-in functions and libraries for common XML operations, string manipulation, date and time handling, and more.
    
12. **XPath Compatibility:** XQuery is closely related to XPath, another W3C recommendation for XML navigation. XPath expressions are often used within XQuery queries.

### Examples

- **Select All Book Titles**
```xquery
for $title in /library/book/title
return $title 
```

- **Select Books Published Before 2000
```xquery
for $title in /library/book
where $book/publicationYear < 2000
return $book
```

- **Select the price of the Mystery Book**
```xquery
for $price in /library/book[@genre="mystery"]/price
return $price
```

- Select All elements with the Attribute `currency`
```xquery
for $element in //@currency
return $element
```

- **Select the first book in the document
```xquery
for $book in /library/book[1]
return $book
```

- **Select All Elements with the Text "F. Scott Fitzgerald":**
```xquery
for $details in //*[text()="F. Scott Fitzgerald"]
return $details
```


```xquery

```