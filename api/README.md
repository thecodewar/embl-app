# EMBL Application

There are two different projects "api" (Backend - contains person API) and "embl-ui" (Front-end - contains project UI to interact with person API)

## Requirements

For building and running the application you need:

- [JDK 11](http://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-2133151.html)
- [Maven 3](https://maven.apache.org)
- [NodeJS 10.16.0](https://nodejs.org/)

## Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `com.embl.api.App` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```
The above command can be executed under api folder.

When the application is running you can execute the following into the browser to verify if the application is running successfully:

```shell
http://localhost:8080/api/persons
```

OR

```shell
http://localhost:8080/swagger-ui.html
```

OR from the command line you can execute the following and expects a JSON return:

```shell
curl -X GET "http://localhost:8080/api/persons" -H "accept: */*"
```

To run "embl-ui" project, go to the root directory of embl-ui and execute the following command:

```shell
npm start
```

Once the application is started, it can be access as:

```shell
http://localhost:3000/
```

Add, update, delete and List all persons can be done from the application.

##Technology Stack
- Spring boot 2
- ReactJS
- Maven
- RSQL Parser
- Swagger2
- NodeJS
