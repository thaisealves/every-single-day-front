<div align="center">
<h1>1% Every Single Day</h1>
</div>

# Description

<div align="center">
<img src="https://raw.githubusercontent.com/thaisealves/every-single-day-front/main/src/assets/images/target.png?raw=true" height="200px" alt="1%ESD" title="1%ESD"/>

</div>
This is a project designed and developed by me. The idea is to have the user to improve himself, doing habits that I consider healthy, like drinking the correct amount of water, having a vision board to see his future plans. It's a place the user can keep on track on his habits in a way to see his improvement a litte bit every single day.

<div align="center">

  <h3>Built With</h3>
  
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" height="30px" alt="React" title="React"/>
  <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" height="30px" alt="Cypress" title="Cypress"/>
</div>

## Features:

- Sign up
- Login
- Post an image on a vision board
- Selecting what's the user humor for the day
- Get the track of how much water was drinked
- Having a place to post water and plans

# References

### Main Page

Page to redirects to Sing Up and Login, the main page from the app

```
/
```

### Sign Up

To add a new user on the application

```
/signup
```

####

---

### Login

Entering the application. The user is redirected to this page if there's no token

```
/login
```

####

---

### Vision Board

Where the vision board is setted, you can see the pictures that you added. In this same route, the user can set what is his mood of the day.

```
/home
```

####

### Adding picture to vision board

Where the user can put an url for the image he wants on the vision board

```
/vision
```

####

### Diary Page

Where the user can see his plans and diary for the day

```
/diary
```

####

### Adding a diary

Where the user can post a new diary if it doesn't exists yet

```
/newdiary
```

####

### Adding a plan

Where the user can post a new plan text if it doesn't exists yet

```
/newplan
```

####

### Water Page

Where the user can see the amount of water drinked and what's his goal

```
/water
```

####

### Adding water

Where the user can post a new amount of water drinked

```
/addwater
```

####

### Adding water

Where the user can post a new weight to see how much water should be drinked

```
/addweight
```

####

### Login Out

The user can log out from the plataform, this route is reached by clicking on the user icon on header

```
/logout
```

####

### Starting the application:

#### Clone application to machine

```
git clone git@github.com:thaisealves/every-single-day-front.git
```

#### Run application

```
npm start
```

#### Open cypress, on front end

```
npx cypress open
```
