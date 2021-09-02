# Adventure Time

*By: Paul Chang. --  [Adventrure_Time](https://adventure--time.herokuapp.com/ "Named link title")*

[Adventrure_Time](https://adventure--time.herokuapp.com/ "Named link title") is an [Eventbrite](https://eventbrite.com/ "Named link title") clone with a theme of the cartoon *[Adventure Time](https://en.wikipedia.org/wiki/Adventure_Time "Named link title")*. It is a platform where users can search and purchase tickets to exciting events across the nation or create their own event within their own community. [Adventrure_Time](https://adventure--time.herokuapp.com/ "Named link title") is a fullstack React Redux application with a Python backend incorporating FLask & SQL-Alchemy with a PostgresSQL database system and Heroku to host. 

### Table of Contents:
 - [Application Features](#application-features)
 - [Installation](#installation)
 - [Technologies Used](#technologies-used)
 - [Wiki Documentation](#wiki-documentation)
 - Frontend Overview
 - Backend Overview
 - [Future Plans](#future-plans)
 - [Conclusion](#conclusion)


# Application Features 

## Sign up 
![Screen Shot 2021-09-02 at 1 05 13 PM](https://user-images.githubusercontent.com/79543569/131886888-89bb6ade-f977-4711-9630-e251033c3731.png)

## Log in
![Screen Shot 2021-09-02 at 1 06 19 PM](https://user-images.githubusercontent.com/79543569/131887167-fe08f25b-32d0-43f4-a314-49801e05974f.png)

## Home page
*Event feed will feature all events in dated order; users may view event information along with selecting favorites (hearts).*
![Screen Shot 2021-09-02 at 11 29 00 AM](https://user-images.githubusercontent.com/79543569/131872600-ee2197f6-9dcf-4a39-8762-6343ab5b69e6.png)

## Search panel
*Search will use the input value and search through by event names.*
![Screen Shot 2021-09-02 at 11 30 30 AM](https://user-images.githubusercontent.com/79543569/131872883-89b3ce92-67e2-4a40-a15d-f9224551c521.png)

## Edit events
*Users may edit the event they previously created.*
![Screen Shot 2021-09-02 at 1 39 11 PM](https://user-images.githubusercontent.com/79543569/131891369-a4dc9c2a-867b-42a6-b640-62286b18c38d.png)

## Delete created event
![Screen Shot 2021-09-02 at 1 42 33 PM](https://user-images.githubusercontent.com/79543569/131891640-6354b40e-e44e-44ab-ada8-6348c718f3d1.png)


## Event page
*Event feed will displays all pertinent information about the event and users may also follow the event promoter (creater of event)*
![Screen Shot 2021-09-02 at 11 31 41 AM](https://user-images.githubusercontent.com/79543569/131873111-08565672-38ca-4bef-bb95-41ddb0fbb0bd.png)
![Screen Shot 2021-09-02 at 1 22 02 PM](https://user-images.githubusercontent.com/79543569/131888946-cf3c8d31-5c8a-4588-8cd8-555112b54e77.png)


### Ticket registration 
*Ticket registeration is only valid for users not already registered or if the user owns that specific event.*
![Screen Shot 2021-09-02 at 11 33 10 AM](https://user-images.githubusercontent.com/79543569/131873319-52eba421-e06b-4235-b8f5-8ad38e364052.png)

### Ticket / User page
*Users may view favorited events & registered tickets. Users may also unregister for tickets on this page.*
![Screen Shot 2021-09-02 at 1 45 27 PM](https://user-images.githubusercontent.com/79543569/131892047-e54129c8-b36c-49b5-8405-dc65f43817f3.png)
![Screen Shot 2021-09-02 at 1 10 23 PM](https://user-images.githubusercontent.com/79543569/131892098-2d99cf83-4f3a-43ea-bbf2-f184b7d02885.png)


### Create event page
*Users can create an event to share with their community.*
![Screen Shot 2021-09-02 at 1 08 18 PM](https://user-images.githubusercontent.com/79543569/131887359-e30a864f-b4f6-4adf-9aa4-0a4b012ba1ff.png)
![Screen Shot 2021-09-02 at 1 08 47 PM](https://user-images.githubusercontent.com/79543569/131887363-9fe30ae9-72b2-4c4a-a1fe-4563d05a0af7.png)

### Create a venue
*Users can create a venue if they do not see theirs on the list.*
![Screen Shot 2021-09-02 at 1 48 10 PM](https://user-images.githubusercontent.com/79543569/131892421-64970fd7-913e-4fd2-8e1b-5e742c987ebf.png)


# Installation

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/88joonyc/Adventure_time.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
6. Start your flask backend in the root ```/``` directory
   ```bash
   flask run
   ```
8. start your frontend in your ```/react-app``` directory
   ```bash
   npm start
   ```
# Technologies used
- Python
- Javascript
- React
- Redux
- Flask
- SQL Alchemy
- PosgreSQL
- GoogleMaps JavaScript API
- Heroku
- Git
- Docker
# Wiki Documentation
- ### [Home](https://github.com/88joonyc/Adventure_time/wiki "Named link title")
- ### [Feature List](https://github.com/88joonyc/Adventure_time/wiki/MVP-Feature-List "Named link title")
- ### [API Docs](https://github.com/88joonyc/Adventure_time/wiki/API-Documentation "Named link title")
- ### [Database Schema](https://github.com/88joonyc/Adventure_time/wiki/Database-Schema "Named link title")
- ### [User stories](https://github.com/88joonyc/Adventure_time/wiki/User-Stories "Named link title")
# Frontend Overview

# Backend Overview

# Future Plans
 - [ ] Implement an AWS photo bucket to allow users to add additional photos to end of descriptions on the event page 
 - [ ] Chatroom messaging feature to allow users to connect with promoters for potential business opportunities
# Conclusion

# Contact



Visit the live app powered by Heroku [here](https://adventure--time.herokuapp.com/ "Named link title")
