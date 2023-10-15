
A technique used in web development involves employing scripts on a web server that produces a response customized for each user's request to the website


***PHP**

- Allows web developers to create dynamic content that interacts with database 
- PHP is used for developing web based software application
- Can be integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix and Microsoft SQL Server


***PHP Syntax***

	- PHP scripts starts with <?php and ends with ?>
	- File extension for PHP files is .php
	- PHP files normally contains HTML tags and some PHP scripting code
	- Keywords, classes, Functions and user defined functions are not case sensitive 
	- All variable names are case sensitive 


***PHP Comments***

- Single Line Comments
	// This is Comment
	#This is comment

- Multiple Line Comments
	/* This is a Comment*/


***PHP Variables***

- Used to store information to be referenced and manipulated in computer program
- Variable names are case sensitive
- PHP variable starts with the $ sign 

		<?php
			$name = "Amali";
			$value_01 = 5;
			$value_02 = 10.5;
		?>


***Conditional Statement***

- If else

```PHP

<?php
  $num = 10;
  if ($num > 5) {
    echo "The number is greater than 5.";
  } else {
    echo "The number is less than or equal to 5.";
  }
?>

```


- For loop

```PHP

<?php
  for ($i = 0; $i < 5; $i++) {
    echo "The number is: $i <br>";
  }
?>

```


- While loop

```PHP

<?php
  $i = 0;
  while ($i < 5) {
    echo "The number is: $i <br>";
    $i++;
  }
?>

```


- Do While loop

```PHP

<?php
  $i = 0;
  do {
    echo "The number is: $i <br>";
    $i++;
  } while ($i < 5);
?>

```


- PHP Function

-A block of statements that can be used repeatedly in a program 
-will not execute automatically when a page loads
-will be executed by a call to the function 

```PHP

<?php
function greet() {
    echo "Hello, welcome!";
}

// Calling the function
greet();
?>

```


***PHP GET METHOD***

- The GET method is restricted to sending up to 1024 characters only
- 


***PHP POST METHOD***

- The POST method does not have any restriction on the data size to be sent
- The POST method can be used to send ASCII as well as binary data
- The data sent by POST method goes through the HTTP header so security depends on HTTP protocol. 
- By using secure HTTP you can make that your information is secure
- The POST provides a $_POST associative array to access all the sent information using the POST method


