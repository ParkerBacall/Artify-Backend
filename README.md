![Screen Shot 2020-03-05 at 9 51 12 AM](https://user-images.githubusercontent.com/17993120/76025035-5b471f00-5ee9-11ea-962c-2f75bdc9acaf.png)

This app uses Artsy's api and is an app for artists to explore new art and find inspiration\

if you are interested check out https://developers.artsy.net/

### Run Instructions and Overview:

1. This app is deployed!
    1. Navigate to [https://artify-frontend.firebaseapp.com/](url)
    1. When the page loads you will be on the login page
    1. Click the login text in the header and the login menu will open
    1. From here you can log in or make a new user
    1. Wether you log in or create a new user you will be logged in as you user and redirect to the genre page
1. Cloning
    1. If you want to clone this repo make sure you clone the frontend also
    1. Run npm install on the frontend and then run npm run serve to start the server on port 8080
    1. On the backend youu can run npm start

### Using Artify 

1. Genres and artists
    1. Once logged in you can view navigate using the links under the header
    1. From the genres page you can use the dropdown to increase the number of genres shown
    1. You can click on the about genre to be routed to a show page about that genre
    1. If you click anywhere else on the genre you will add it as a favorite for you user, this will change the content on your explore page, if you click it will be removed from your favorites
    1. On the artists page you can do all the same thing except for artists instead of genres
   
   ![Screen Shot 2020-03-05 at 2 48 20 PM](https://user-images.githubusercontent.com/17993120/76028891-b597ae00-5ef0-11ea-905b-cb5a81451362.png)

    
1. Show pages
    1. On a Genres show page you can read a description of that genre and view some artists that classify that genre
    1. Clicking on the about artists links on the genre artists will take you tok a show page for that artist
    1. On these pages you can read info on that artists as well as view similar artists
    1. Clicking on the about artists for those artists will take you to there show page
    1. This is a great way to find new artists that you might want to add to your favorites
    
![Screen Shot 2020-03-05 at 2 49 19 PM](https://user-images.githubusercontent.com/17993120/76028992-e4ae1f80-5ef0-11ea-97c4-848f7f77a6fd.png)
![Screen Shot 2020-03-05 at 2 49 41 PM](https://user-images.githubusercontent.com/17993120/76028997-e7a91000-5ef0-11ea-99ca-ab28e6b249a1.png)
    
1. Explore page
    1. Your explore page is unique to your user
    1. If it is empty try favoriting some artists and genres from their pages
    1. The explore page looks at artists in your favorite genres and artists that are similat to artists you like and displays some new artists you might like
    1. Your explore page will always be changing so make sure you check back in on it after favoriting some artists and genres

![Screen Shot 2020-03-05 at 2 48 36 PM](https://user-images.githubusercontent.com/17993120/76029054-fdb6d080-5ef0-11ea-89dc-cc402c4843f2.png)

1. Inpiration page
    1. Everytime you navigate to the inpiration page you will be shown a random artwork from the api
    1. The idea behind this page is that it could expand the art you are exposed to and you could use something from this art to expand yourself as an artist
    
    ![Screen Shot 2020-03-05 at 2 48 45 PM](https://user-images.githubusercontent.com/17993120/76029091-0d361980-5ef1-11ea-9499-3916053fc8ca.png)

    
