BoolBnB!
===================

<p align="center"><img src="https://www.boolean.careers/images/common/logo.png" width="400"></p>

## About BoolBnB

BoolBnB is a project created for Full Stack Dev Course by Boolean . 

It is inspired by the AirBnb portal and through the use of Laravel, My SQL, TomTom Api, Braintree Api, simulates a portal for the rental of apartments by private individuals. 

There are public  Homepage and results page that allow you to search by applying filters and view the featured apartments. There is also a part reserved for the admin in which the owner, after authentication, can access to create and manage his apartments. The owner can also, by paying an hourly rate, decide to increase the visibility of his apartments.

----------


Steps
-------------

> **Note:**

> - Create a TomTom dev account [1]
> - Create a Braintree dev account [2]


### <i class="icon-download"></i> Download or clone the project

Clone the HTTPS link and copy it on your Git Client (SmartGit, GotKraken, Sourcetree, etc)


### <i class="icon-file"></i> Create a database 

Create a database through your MySQL administration tool (phpMyAdmin)

### <i class="icon-pencil"></i> Duplicate .env.example file and rename it .env 

You have to duplicate .env.example, rename it with .env title and fill it with correct data about DB  and Braintree keys.

### <i class="icon-refresh"></i> Open PowerShell or Comand Prompt

Open your comand prompt and run the following commands, to populate DB tables and open correct route to see the project:

```
composer dump-autoload
composer require cyrildewit/eloquent-viewable
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve or php -S localhost:8000 -t public/
```

### <i class="icon-hdd"></i> Open a new tab on your Browser

Open a new tab on your browser and copy this into url

http://localhost:8000/


----------


Team components:
-------------------
Front developer :
- Federica Passanante - https://github.com/fedPass
- Luca Caputo - https://github.com/lucapu88
- Andrea Todesco - https://github.com/andretodee

Back developer :
- Ermanno Diana - https://github.com/ermannod
- Giovanni Di Guardi - https://github.com/giovdigua



  [1]: https://developer.tomtom.com/user/register
  [2]: https://www.braintreepayments.com/it/sandbox
