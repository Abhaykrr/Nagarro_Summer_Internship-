ShopKnow @AbhayKumar abhay80413@gmail.com
An E-commerce application built with CRUD functionality, and REST architechture.

Deployed at https://abhaykumar-ecommerce.herokuapp.com/

Tech Stack :-
EJS
Express
NodeJs
MongoDb


To run it locally on you machine you need to have a mongodb url,google auth key,razorpay key .If you have that , then clone/fork this repo and place all the key and mongo url in a .env file with respective key id as mentioned in the code


Open Terminal and write >
npm  install
After installation completes >
npm start
Navigate to localhost:3000 or the mentioned port .

Features :
Both Local login and Signup Authentication

stripe Pay Payment Gateway Integration

Uploading of File type Image as jpeg/png format.


Functionalities :

Products :
Adding a new product
Editing an existing Product
Delete an Existing Products

User :
Register a New User with or without a profile picture
Login/LogOut as an user
Review a product and edit or delete that review only
Add a item to cart / view carts Page
Place an Order and make payment with success / failure.
View Orders placed by the user.

Admin :
Access the Admin panel to get control over , Products, Orders and User.
View, Update or Delete all products
View all the Users Info along with Cart Information and Orders Information
View all the order information placed throughout the website.
The Admin Dashboard can only be accessed as an Admin user

Default Admin Credentials :

username : admin
password : admin