
// Going to use this array for displaying in the browser as a learning tool

let nameTxt = null; 
let descriptionTxt = null;
let linkTxt = null;
let typeTxt = null;

let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");

nameTxt = document.getElementById("name");
descriptionTxt = document.getElementById("description");
linkTxt = document.getElementById("link");
typeTxt = document.getElementById("type");

SetButtons();

let researchedTerms = 
    [{
        "name" : "REST API",
        "description" : "REST API is a set of functions that developers can perform requests and receive responses via HTTP protocol such as GET and POST.",
        "link" : "https://www.redhat.com/en/topics/api/what-is-a-rest-api",
        "type" : "API"
    },
        {  "name" : "GraphQL",
            "description" : "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
            "link" : "https://graphql.org/",
            "type" : "API"
        },
        {   
            "name" : "Docker",
            "description" : "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers.",
            "link" : "https://www.docker.com/",
            "type" : "DevOps"
        },
        {
            "name" : "Kubernetes",
            "description" : "Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers.",
            "link" : "https://kubernetes.io/",
            "type" : "DevOps"
        },
        {
            "name" : "Spring Boot",
            "description" : "Spring Boot is an open-source Java-based framework used to create micro-services.",
            "link" : "https://spring.io/projects/spring-boot",
            "type" : "Framework"
        },
        {
            "name" : "React",
            "description" : "React is an open-source JavaScript library used to build user interfaces.",
            "link" : "https://reactjs.org/",
            "type" : "Library"
        },
        {   "name" : "Angular",
            "description" : "Angular is an open-source front-end web application framework.",
            "link" : "https://angular.io/",
            "type" : "Framework"
        },
        {   "name" : "Vue.js",
            "description" : "Vue.js is an open-source JavaScript framework used to build user interfaces and single-page applications.",
            "link" : "https://vuejs.org/",
            "type" : "Framework"
        },
        {
            "name" : "Node.js",
            "description" : "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
            "link" : "https://nodejs.org/",
            "type" : "Runtime"
        },
        {
            "name" : "Express.js",
            "description" : "Express.js is a web application framework for Node.js.",
            "link" : "https://expressjs.com/",
            "type" : "Framework"
        },
        {
            "name" : "MongoDB",
            "description" : "MongoDB is a cross-platform document-oriented database program.",
            "link" : "https://www.mongodb.com/",
            "type" : "Database"
        },
        {
            "name" : "MySQL",
            "description" : "MySQL is an open-source relational database management system.",
            "link" : "https://www.mysql.com/",
            "type" : "Database"
        },
        {
            "name" : "PostgreSQL",
            "description" : "PostgreSQL is a powerful, open-source object-relational database system.",
            "link" : "https://www.postgresql.org/",
            "type" : "Database"
        },
        {
            "name" : "Java",
            "description" : "Java is a high-level, class-based, object-oriented programming language.",
            "link" : "https://www.java.com/",
            "type" : "Language"
        },
        {
            "name" : "Python",
            "description" : "Python is an interpreted, high-level, general-purpose programming language.",
            "link" : "https://www.python.org/",
            "type" : "Language"
        },
        {
            "name" : "JavaScript",
            "description" : "JavaScript is a high-level, interpreted programming language.",
            "link" : "https://www.javascript.com/",
            "type" : "Language"
        },
        {
            "name" : "TypeScript",
            "description" : "TypeScript is an open-source programming language developed and maintained by Microsoft.",
            "link" : "https://www.typescriptlang.org/",
            "type" : "Language"
        },
        {
            "name" : "ASP.NET",
            "description" : "ASP.NET is an open-source server-side web application framework.",
            "link" : "https://dotnet.microsoft.com/apps/aspnet",
            "type" : "Framework"
        },
        {
            "name" : "Spring",
            "description" : "Spring is an open-source application framework and inversion of control container for the Java platform.",
            "link" : "https://spring.io/",
            "type" : "Framework"
        },
        {   "name" : "Ruby on Rails",
            "description" : "Ruby on Rails is a server-side web application framework written in Ruby.",
            "link" : "https://rubyonrails.org/",
            "type" : "Framework"
        },
        {
            "name" : "Flask",
            "description" : "Flask is a lightweight WSGI web application framework.",
            "link" : "https://palletsprojects.com/p/flask/",
            "type" : "Framework"
        },
        {
            "name" : "Django",
            "description" : "Django is a high-level Python web framework.",
            "link" : "https://www.djangoproject.com/",
            "type" : "Framework"
        },
        {
            "name" : "Ruby",
            "description" : "Ruby is an open-source programming language.",
            "link" : "https://www.ruby-lang.org/en/",
            "type" : "Language"
        },
        {
            "name" : "C#",
            "description" : "C# is a general-purpose, multi-paradigm programming language.",
            "link" : "https://docs.microsoft.com/en-us/dotnet/csharp/",
            "type" : "Language"
        },
        {
            "name" : "Go",
            "description" : "Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software.",
            "link" : "https://golang.org/",
            "type" : "Language"
        },
        {
            "name" : "Rust",
            "description" : "Rust is a systems programming language focused on safety, speed, and concurrency.",
            "link" : "https://www.rust-lang.org/",
            "type" : "Language"
        },
        {
            "name" : "C++",
            "description" : "C++ is a general-purpose programming language created as an extension of the C programming language.",
            "link" : "http://www.cplusplus.com/",
            "type" : "Language"
        },
        {
            "name" : "C",
            "description" : "C is a general-purpose, procedural computer programming language.",
            "link" : "https://www.cprogramming.com/",
            "type" : "Language"
        },
        {
            "name" : "Scala",
            "description" : "Scala is a high-level programming language that combines object-oriented and functional programming.",
            "link" : "https://www.scala-lang.org/",
            "type" : "Language"
        },
        {
            "name" : "Hibernate",
            "description" : "Hibernate is an open-source object-relational mapping tool for Java.",
            "link" : "https://hibernate.org/",
            "type" : "Framework"
        },
        {
            "name" : "SPA",
            "description" : "SPA stands for Single Page Application, a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.",
            "link" : "https://en.wikipedia.org/wiki/Single-page_application",
            "type" : "Architecture"
        },
        {
            "name" : "Microservices",
            "description" : "Microservices is an architectural style that structures an application as a collection of services.",
            "link" : "https://microservices.io/",
            "type" : "Architecture"
        },
        {
            "name" : "CI/CD",
            "description" : "CI/CD stands for Continuous Integration/Continuous Deployment, a method to frequently deliver apps to customers by introducing automation into the stages of app development.",
            "link" : "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
            "type" : "DevOps"
        },
        {
            "name" : "Agile",
            "description" : "Agile is a project management methodology that promotes frequent inspection and adaptation.",
            "link" : "https://www.agilealliance.org/agile101/",
            "type" : "Methodology"
        },
        {
            "name" : "Scrum",
            "description" : "Scrum is a framework that helps teams work together.",
            "link" : "https://www.scrum.org/resources/what-is-scrum",
            "type" : "Methodology"
        },
        {
            "name" : "Kanban",
            "description" : "Kanban is a method for managing knowledge work with an emphasis on just-in-time delivery while not overloading the team members.",
            "link" : "https://www.atlassian.com/agile/kanban",
            "type" : "Methodology"
        },
        {
            "name" : "TDD",
            "description" : "TDD stands for Test-Driven Development, a software development process relying on the repetition of a very short development cycle.",
            "link" : "https://en.wikipedia.org/wiki/Test-driven_development",
            "type" : "Methodology"
        },
        {
            "name" : "BDD",
            "description" : "BDD stands for Behavior-Driven Development, a software development process that encourages collaboration among developers, QA, and non-technical business participants in a software project.",
            "link" : "https://en.wikipedia.org/wiki/Behavior-driven_development",
            "type" : "Methodology"
        },
        {
            "name" : "Jira",
            "description" : "Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.",
            "link" : "https://www.atlassian.com/software/jira",
            "type" : "Tool"
        },
        {
            "name" : "Confluence",
            "description" : "Confluence is a proprietary collaboration tool developed by Atlassian that allows teams to collaborate and share knowledge efficiently.",
            "link" : "https://www.atlassian.com/software/confluence",
            "type" : "Tool"
        },
        {   "name" : "Swagger",
            "description" : "Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document, and consume REST APIs.",    
            "link" : "https://swagger.io/",
            "type" : "Tool"
        },
        {
            "name" : "Postman",
            "description" : "Postman is a collaboration platform for API development.",
            "link" : "https://www.postman.com/",
            "type" : "Tool"
        },
        {
            "name" : "Git",
            "description" : "Git is a distributed version-control system for tracking changes in source code during software development.",
            "link" : "https://git-scm.com/",
            "type" : "Tool"
        },
        {
            "name" : "Jenkins",
            "description" : "Jenkins is an open-source automation server that helps to automate the parts of software development related to building, testing, and delivering, facilitating continuous integration and continuous delivery.",
            "link" : "https://www.jenkins.io/",
            "type" : "Tool"
        },
        {
            "name" : "SonarQube",
            "description" : "SonarQube is an open-source platform developed by SonarSource for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities.",
            "link" : "https://www.sonarqube.org/",
            "type" : "Tool"
        },
        {
            "name" : "AWS",
            "description" : "AWS stands for Amazon Web Services, a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments.",
            "link" : "https://aws.amazon.com/",
            "type" : "Cloud"
        },
        {
            "name" : "Azure",
            "description" : "Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services",
            "link" : "https://azure.microsoft.com/",
            "type" : "Cloud"
        },
        { "name" : "O/RM",
            "description" : "O/RM stands for Object-Relational Mapping, a programming technique for converting data between incompatible type systems using object-oriented programming languages.",
            "link" : "https://en.wikipedia.org/wiki/Object-relational_mapping",
            "type" : "Concept"
        },
        {
            "name" : "MVC",
            "description" : "MVC stands for Model-View-Controller, a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements.",
            "link" : "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller",
            "type" : "Concept"
        },
        {
            "name" : "ML",
            "description" : "ML stands for Machine Learning, a method of data analysis that automates analytical model building.",
            "link" : "https://en.wikipedia.org/wiki/Machine_learning",
            "type" : "Concept"
        },
        {
            "name" : "AI",
            "description" : "AI stands for Artificial Intelligence, the simulation of human intelligence processes by machines.",
            "link" : "https://en.wikipedia.org/wiki/Artificial_intelligence",
            "type" : "Concept"
        },
        {
            "name" : "Gaussian Distribution",
            "description" : "Gaussian Distribution is a continuous probability distribution that is symmetric about the mean.",
            "link" : "https://en.wikipedia.org/wiki/Normal_distribution",
            "type" : "Concept"
        },
        {
            "name" : "Nvidia CUDA",
            "description" : "Nvidia CUDA is a parallel computing platform and application programming interface model created by Nvidia.",
            "link" : "https://developer.nvidia.com/cuda-zone",
            "type" : "Concept"
        },
        {
            "name" : "Deno",
            "description" : "Deno is a simple, modern, and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.", 
            "link" : "https://deno.land/",
            "type" : "Runtime"
        },
        {
            "name" : "RabbitMQ",
            "description" : "RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, MQ Telemetry Transport, and other protocols.",
            "link" : "https://www.rabbitmq.com/",
            "type" : "Tool"
        },
        {
            "name" : "Kafka",
            "description" : "Kafka is an open-source stream-processing software platform developed by LinkedIn and donated to the Apache Software Foundation, written in Scala and Java.",
            "link" : "https://kafka.apache.org/",
            "type" : "Tool"
        },
        {
            "name" : "Elasticsearch",
            "description" : "Elasticsearch is a search engine based on the Lucene library.",
            "link" : "https://www.elastic.co/elasticsearch/",
            "type" : "Tool"
        },
        {       "name" : "Redis",
            "description" : "Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker.",
            "link" : "https://redis.io/",
            "type" : "Tool"
        },
        {    "name" : "Nginx",
            "description" : "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy, and HTTP cache.",
            "link" : "https://www.nginx.com/",
            "type" : "Tool"
        },
        {
            "name" : "bun",
            "description" : "Bun is a simple, lightweight, and fast ORM for Go.",
            "link" : "https://bun.uptrace.dev/",
            "type" : "Tool"
        },
        {   "name" : "Bun (JavaScript Runtime Environment)",
            "description" : "Bun is a simple, lightweight, and fast JavaScript runtime environment.",
            "link" : "https://bun.sh",
            "type" : "Runtime"
        }   
    ];

function SetButtons() {
    nextBtn.addEventListener("click", function() {
        nextTerm();
    });

    previousBtn.addEventListener("click", function() {
        previousTerm();
    });
}

function nextTerm() {
    let currentTerm = researchedTerms.shift();
    researchedTerms.push(currentTerm);
    displayTerm();
}

function previousTerm() {
    let currentTerm = researchedTerms.pop();
    researchedTerms.unshift(currentTerm);
    displayTerm();
}

function displayTerm() {
    let currentTerm = researchedTerms[0];
    nameTxt.innerHTML = `Name: ${currentTerm.name}`;
    descriptionTxt.innerHTML = `Description: ${currentTerm.description}`;

    linkTxt.innerHTML = `${currentTerm.link}`;
    link.setAttribute("href", "#");
    link.onclick = function() 
    {
        window.open(currentTerm.link);
    }

    typeTxt.innerHTML = `Type: ${currentTerm.type}`;
}
