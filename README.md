
Sweets & More

Online shopping website for our family shop, which contains many
products to sell, devided by categories.


## Features

- React
- Axios
- CRUD functions
- UseState
- UseNavigate
- Toastify
- Material-UI library


## Documentation

- This project was built with React (npx create-react-app).
- All products details stored in a local server ("http://localhost:3000/"), There’s a local JSON file (user.json) where you can find 2 kind of users:
  - Admin user --> Admin (password: 12345)
  - Basic user --> user (password: 123)
- This project uses “Axios” to deal with the CRUD functions in the JSON file/server, and UseState to render the data every time the component has called.
- The project supports CRUD functions – Creating, Reading, Updating and Deleting products, which is allowed only for Admin user.
- Each user can update/remove his cart list, only admin can delete purchased orders.
- The project uses “React-Router” for page/component routing.
- The project includes a header (navbar) with links to navigate (using UseNavigate) to other pages/components, and a Footer where you can "contact" the shop owners / developer.
- The user can search for a product in the search bar and filter the result and navigate to the category of that product.
- All forms inside the project secured and checked by functions / form validation.
- Every action of CRUD function is notified with “Toastify” box to inform the user with successfully/unsuccessfully action.
- The project includes Icons from Material-UI library.

## Installation

Open the project folder in Visual Studio Code.

Open 2 terminals, in each terminal, run the following codes:

```bash
  json-server --watch allProducts.json
  npm start
```
    
## Author - Malek Butto

- [@Facebook](https://www.facebook.com/malek.butto/)
- [@Instagram](https://www.instagram.com/malekbutto/)
- [@LinkedIn](https://www.linkedin.com/in/malek-butto/)
- [@Github](https://github.com/malekbutto/)


## 🚀 About Me
A full stack developer Student...