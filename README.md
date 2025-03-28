# 📋 A simple user system API

## 🚀 Description
This API allows managing a **USER** and to authenticate them. It is built with **Node.js, Express.js, jsonwebtoken, and MongoDB**.

## 📌 Features
✅ Create user
✅ Login user
✅ Athenticate user
✅ Refresh token to add more security
✅ Log out user

## 🛠️ Technologies Used
- **🟢 Node.js** - JavaScript runtime environment
- **⚡ Express.js** - Web framework for Node.js
- **🔒 Jsonwebtoken** - Authentication
- **🗄️ MongoDB** - NoSQL database
- **🔗 Mongoose** - ODM for MongoDB

## 📦 Installation
### 📥 Clone the repository
```bash
git clone https://github.com/StyvenManaja/user-system.git
cd user-system
```

### 📌 Install dependencies
```bash
npm install express cors helmet dotenv morgan bcryptjs jsonwebtoken cookie-parser
```

### 🛠️ Configure the database
Create a `.env` file at the root of the project and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
ACCESS_TOKEN_KEY=your_access_token_secret_key
REFRESH_TOKEN_KEY=your_refresh_token_secret_key
```

### ▶️ Start the server
```bash
node server.js
```

## 📡 API Routes
| Method | Endpoint | Description |
|---------|---------|-------------|
| **POST** | `/signup` | Create user |
| **POST** | `/login` | login |
| **POST** | `/logout` | Logout |
| **POST** | `/refresh` | Refresh token |
| **GET** | `/` | To access to the protected route |

## 🛠 Usage Examples
### ➕ Create user
```json
POST /signup
{
  "name": "User_name",
  "email": "user.user@email.com",
  "password": "user_password123"
}
```

###  Login
```json
POST /login
{
    "email": "65a1b2c3d4e5f67890",
    "password": "user_password123"
}
```

### Access to the protected route
```json
GET /
{
    "message": "Hello, User_name"
}

```

## 📜 License
This project is under the **MIT** license. Feel free to use it. 🚀

---
🔥 **Created by [StyvenManaja](https://github.com/StyvenManaja)** 🔥

