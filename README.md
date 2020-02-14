# EMBL Application

There are two different projects "api" (Backend - contains person API) and "embl-ui" (Front-end - contains project UI to interact with person API)

## Requirements

Java 8 and maven is already installed into Vagrant, other than this follow the steps below:

Execute the following command on Vagrant instance:

```shell
 yum -y install nodejs
```
Then clone the repository:

```shell
git clone https://github.com/thecodewar/embl-app.git
```

## Running the Backend Application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `com.embl.api.App` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```
The above command can be executed under embl-api/api folder.

When the application is running you can execute the following into the browser to verify if the application is running successfully:

```shell
http://localhost:8080/api/persons
```
![PersonAPI](https://user-images.githubusercontent.com/18559069/74563405-8dbac780-4f8e-11ea-8cde-69db76b08d95.PNG)

OR

```shell
http://localhost:8080/swagger-ui.html
```

![API](https://user-images.githubusercontent.com/18559069/74563403-8d223100-4f8e-11ea-82eb-e3eaf940ef85.PNG)

OR from the command line you can execute the following and expects a JSON return:

```shell
curl -X GET "http://localhost:8080/api/persons" -H "accept: */*"
```

As RSQL parser is used into this project so you may look for the syntax how to make searches:

- [RSQL Syntax](https://aboullaite.me/rsql/)

For example the following url will return all results age greater than 30:

```shell
http://localhost:8080/api/persons?q=age=gt=30
```

The following command will return all users with first name as "Adarsh"

```shell
http://localhost:8080/api/persons?q=firstName==Adarsh
```

## Running the Front-end Application locally

To run "embl-ui" project, go to the root directory of embl-ui and execute the following command:

```shell
yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
sudo yum install -y nodejs
npm start
```

Once the application is started, it can be access as:

```shell
http://localhost:3000/
```

![ReacPersonList](https://user-images.githubusercontent.com/18559069/74563396-8a274080-4f8e-11ea-812a-6f5036439819.PNG)

Add, update, delete and List all persons can be done from the application.

## Technology Stack Used
- Spring boot 2
- ReactJS
- Maven
- RSQL Parser
- Swagger2
- NodeJS
