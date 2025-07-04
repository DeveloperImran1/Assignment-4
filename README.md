# Website Name: BOIPORIA

The Library Management System follows a layered architecture pattern with clear separation between the presentation layer, state management, and API communication. The system is built as a single-page application (SPA) with client-side routing and centralized state management.


## Live Site URL
Visit the live client site at [Client Side](https://library-management-client-lac.vercel.app/)
Visit the live server site at [Server Side](https://level2-assignment-2-azure.vercel.app/)

## System Purpose
The Library Management System provides a RESTful API for managing library operations including:
- **Book Management:** 
  Complete CRUD operations for books with metadata including title, author, genre, ISBN, and availability tracking

- **Borrowing Operations:** 
  Creating borrow records with automatic inventory management and due date tracking
  
- **Inventory Control:** 
  Automatic updates to book availability and copy counts during borrowing operations

The system is designed as a backend service that can be consumed by frontend applications, mobile apps, or other services requiring library management functionality.


## System Architecture
The following diagram illustrates the high-level architecture mapping to actual code entities:


![Architecture](https://i.postimg.cc/Jz67DSfs/Screenshot-1.png)


## Technology Stack
The system is built using modern JavaScript technologies with TypeScript for type safety:
- React.js
- Redux
- Shadcn UI Library
- Node.js
- Express
- MongoDB
- Mongoose
- Typescript
- ts-node-dev
- ESLint


## API Surface
The system exposes two main API categories through specific route patterns:
![API Interface](https://i.postimg.cc/L6JxFPmG/Screenshot-2.png)

## How to Start This Application

1. **Clone the Repositories:**
    ```sh
    # Client Side:
    git clone https://github.com/DeveloperImran1/Assignment-4.git
    cd Assignment-4
    ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```

3. **Start the Development Server:**
    ```sh
    npm run dev
    ```

4. **Build for Production:**
    ```sh
    npm run build
    ```

5. **Deploy to vercel:**
    ```sh
    vercel website to build and deploy
    ```

## Server Side Github Link
[Server Code](https://github.com/DeveloperImran1/Level2-assignment-2)


## Environment Variables:
  - Create a `.env` file in the root of your client project and add the following variables:

 <b> MongoDB Credentials <b/> <br /> <br />
   VITE_SERVER_API_URL=your_base_api <br />


## Folder Structure:
 ![Folder Structure](https://i.postimg.cc/BbHBYrWp/Screenshot-3.png)


## Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

