# Registration and Login application with Node server

1. Clone the repo: git clone https://github.com/kulkarnisanchit/nodeapp.git
2. Install packages: npm install
3. Edit the database configuration: config/keys.js
4. Launch: npm run server
6. Test with [Postman](https://www.getpostman.com/)

### Libraries used
1. "bcryptjs": "^2.4.3",
2. "body-parser": "^1.18.3",
3. "express": "^4.16.3",
4. "jsonwebtoken": "^8.3.0",
5. "mongoose": "^5.3.0",
6. "passport": "^0.4.0",
7. "passport-jwt": "^4.0.0",
8. "validator": "^10.8.0"

### Dependencies
1. MongoDB: Need to make the changes in the config/keys.js file (set the mongoURI with your databse)
2. Postman: Can chack the register and login routes. i.e.'localhost:5000/api/users/register'
