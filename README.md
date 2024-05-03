# airbnbClone

npm create vite@latest client
Select React as the Framework
Select JavaScript as the variant
cd client
npm install
npm run dev

Tailwind CSS (tailwindcss.com) - how to install for react app (read documentation on website)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Can define colors in tailwind.config.js - extends

heroicons.com

React Router
npm install react-router-dom

Creating a Layout file allows be to call constant imports like header, footer, sidebar, etc. one time in the App.jsx file for all pages that need it instead of calling it each time in each file. This uses Outlet function in the Layout file and Route in the App file from react-router-dom.

Create an api folder outside of client
cd api
npm install express (Installing express)
nodemon index.js (Runs api and reloads automatically when changes are made. Install with npm install -g nodemon)

cd client
npm install -g axios

cd api
npm init -y
npm install cors

Use to connect to MongoDB 
npm install -g mongodb
cd api
npm install mongoose


In order to use environment variables (Create .env file)
npm install dotenv --save


Used to encrypt passwords
npm install bcrypt

Used to create cookies
npm install jsonwebtoken

Used to read cookies
npm install cookie-parser