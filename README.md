# Seedling 
![seedlinglogo](https://user-images.githubusercontent.com/105940054/199861949-99a6a756-f7c8-454f-87e9-f31d5cdb185e.png)


There are countless books, resources, and online forums that a new gardener has access to, but the information can be overwhelming when creating a new project. What to plant, where to plant it, when to plant, what to place it next to, those are just the very basics when creating a garden bed. Even seasoned gardeners learn throughout the years, what works and what doesn’t, collecting this information to use for the next growing season. Seedling is a desktop application that allows users to plan their garden, collect notes and learn general gardening information. *It is interactive and intuitive, simple and complete, to make the process of getting started easier, and allow the user to get in the dirt sooner.*

## Approach
*Duration: Two Week Sprint*

As my first large project, I went through the process of pitching, [scoping](https://docs.google.com/document/d/1DJUJvsb5WAfi_C-UYYPF8dRWAuVBhAvRkxsgJV46Qfs/edit?usp=sharing), [wire-framing](https://www.figma.com/file/cT0CnWsJmUxcDQ2KdZbQwz/Seedling?node-id=0%3A1) and designing the ERD during the week before construction. With a lot of ideas and some courage, I managed to create an app that mirrored my vision. 

<img width="700" img height="600" alt="Screen Shot 2022-11-03 at 7 37 27 PM" src="https://user-images.githubusercontent.com/105940054/199869533-3a82055d-4e79-4305-924c-375e9df733c6.png">


## Demo

[Seedling](http://seedlings.herokuapp.com/#/home) is currently hosted on **Heroku**, under a free plan (expect a bit of lagging). An account with already populated plots for viewing can be seen when logging in as **`beet_root`** with the password **`12345`**.

https://user-images.githubusercontent.com/105940054/199867215-57c423e1-a782-4e70-9e7e-1f7f0e20fde0.mp4

https://user-images.githubusercontent.com/105940054/199869036-406caaf2-e522-4437-8fd1-9c37cfda4d7e.mp4

https://user-images.githubusercontent.com/105940054/199869854-80722937-40ce-4fa4-9b08-1b698620a190.mp4

## Getting Started
#### Prerequisites
- Key for Accuweather API which can be found [here](https://developer.accuweather.com/).

#### Installation 
- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
`
ACCUWEATHER_API_KEY='your_api_key_goes_here'
`
- Create a database named **`Seedling`**, create the tables and insert the data listed in the *database.sql* file.
- Start the server with the script: `npm run server`
- Start the client with the script: `npm run client`
- Navigate to `localhost:3000`

## Usage
This is a tool created for new and seasoned gardeners alike. 

1. Create an account using the `Registration` page.
2. From the `Splash` page, add a new plot using the indicated button.
3. On the `Shade` page, map out the sunny/shady parts of your garden bed, and set a month/year for that plot.
4. From the `Plant List` page, learn about plants and their growing seasons, growing conditions and companion plants. Add plants to your list and edit their subvarieties if desired. Make sure to have plants that match each shaded section of your garden ('Full Sun' plants for the sunny section).
5. On the `Garden Design` page, place your plants where you'd like and submit!
6. Back on the `Splash` page you can add `Notes` for that plot as well as tasks for your `Task List`. You can also edit your plot from this view, as well as toggle through the months when you have created multiple plots. 
7. That's it! You can keep a running track of what you've grown, where and how it went!

## Technologies 

React, Redux/Saga, Node, Express, PostgreSQL, HTML5, CSS3, Axios, Passport, [React Scroll Paralax](https://react-scroll-parallax.damnthat.tv/docs/intro), [Moment.js](https://momentjs.com/), [SweetAlerts](https://sweetalert2.github.io/), [Accuweather API](https://developer.accuweather.com/).

## Future Plans
My initial goal with creating this app was to utilize a larger plant API in order to tap into a large data-set. Unfortunately, I was unable to find one that was up-to-date and accessible in the ways that I needed. 

Therefore, **hardiness/growing season** data is hardcoded specifically for the Midwest, but the data architecture allows for further functionality. Ideally, when a user enters their zip code, it should register a certain hardiness zone, and then only display plants (and their growing seasons) specific to that hardiness zone. 

I would love to see this app have access to a **larger database of vegetables**, as well as fruits and herbs.

Current logic could allow for the user to **choose their own plot size**, if a component is created with that specific interface.

## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io/?utm_campaign=brand_search&utm_medium=cpc&utm_source=google&utm_medium=ppc&utm_campaign=Brand+Search&utm_term=prime%20digital%20academy&utm_source=adwords&hsa_mt=e&hsa_kw=prime%20digital%20academy&hsa_grp=34455376016&hsa_tgt=kwd-292678835500&hsa_ad=260264094213&hsa_ver=3&hsa_acc=5885076177&hsa_cam=670836869&hsa_src=g&hsa_net=adwords&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZnY0gTAT6HqS3icel3rL0HZw7EezhKpqo-iknTHknyD7NZkdjz-TuxoCCPYQAvD_BwE), my instructor Matt Black and my fellow classmates, whose encouragement, instruction, and collaboration helped me create this app. 

Thanks to [Accuweather](https://developer.accuweather.com/) for supplying access to real-time weather data.
