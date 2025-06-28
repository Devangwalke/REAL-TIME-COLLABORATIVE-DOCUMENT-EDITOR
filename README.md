# REAL-TIME COLLABORATIVE DOCUMENT EDITOR

Company- CODTECH IT SOLUTION

NAME - DEWANG SAMBHAJI WALKE

INTERN ID - CT1MTDF558

DOMAIN - Full Stack Web Development

DURATION - 4 WEEKS

MENTOR - NEELA SANTHOSH


This project is a Real-Time Collaborative Document Editor designed to enable multiple users to simultaneously edit a shared text document in real-time. Built using a modern web development stack, the application utilizes React.js on the frontend for a responsive, interactive user interface, while the backend is powered by Node.js with Express.js to handle HTTP requests and API endpoints. Socket.IO is integrated to enable real-time, bi-directional communication between the client and the server, allowing changes made by one user to instantly reflect across all other users connected to the same document session. The application also leverages MongoDB as the primary database for persistent storage of document data. This setup ensures that document content is both real-time synchronized and securely stored for future retrieval.

The core idea behind this project is to replicate the functionality seen in tools like Google Docs but in a simpler, self-hosted form. When a user opens the application, they can create a new document or open an existing one using a unique document ID. As they type or edit the content, their changes are instantly broadcast to all other users connected to that document through web sockets. MongoDB is used in the backend to store each document with a unique identifier, ensuring that edits can be saved and resumed later. The server listens for incoming socket events such as “send-changes” and “save-document,” managing real-time data transmission and ensuring consistency across all clients.

The frontend React application is organized with clear components for ease of use and scalability. The main editor uses a content-editable area or a text editor library and connects to the backend using the socket.io-client library. When a user types or modifies text, changes are emitted through sockets and received by other users in the session, creating a seamless collaborative experience. On the backend, server.js initializes the Express server, connects to MongoDB using the Mongoose ORM, and sets up the Socket.IO server to handle real-time events. Additionally, API routes can be defined to handle basic document creation, retrieval, or updates using standard HTTP methods like GET and POST.

To run the project locally, users simply need to clone the repository, start a local instance of MongoDB, and then run the backend and frontend servers. Environment variables, such as the MongoDB connection string, are managed using a .env file for security and flexibility. The frontend can be started with npm start inside the client folder, and the backend runs via node server.js in the server folder. This modular structure makes the project easy to understand, maintain, and extend. Developers can add authentication, multiple document rooms, rich-text formatting, or version control as advanced features in future iterations.

In summary, this Real-Time Collaborative Document Editor demonstrates the practical application of full-stack web development skills using modern technologies. It shows how real-time communication, persistent data storage, and dynamic interfaces can be combined to build powerful collaborative tools. The project is ideal for students, developers, or teams interested in understanding how collaborative applications work under the hood. The entire source code is organized in a beginner-friendly manner, making it an excellent foundation for learning or future expansion.


OUTPUT- 
![Image](https://github.com/user-attachments/assets/96eff26b-2990-43fd-890d-5c69b86f83e0)
