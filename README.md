# App 🐳

Dockerized Full Stack Application with Angular, PHP, and MySQL.

**Frontend**: Utilize Angular's.

**Backend**: Leverage PHP and Apache to construct a simple CRUD API.

**Database**: Employ MySQL as the database management system.

## ⚙️How to run:

**Prerequisites**<br>
Make sure you have the following software installed:

Docker<br>
Git

Clone the repository using Git:
```
git clone git@github.com:queite/php-angular-mysql-docker.git
```
Navigate to the project's root directory::
```
cd php-angular-mysql-docker
```
Build and start the Docker containers using Docker Compose::
```
docker-compose up -d –build
```
Open your web browser and go to `localhost:4200` to access the Angular application. <br>

The Angular app communicates with the PHP and Apache backend, which in turn interacts with the MySQL database for data operations.
