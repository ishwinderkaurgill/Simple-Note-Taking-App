# Simple-Note-Taking-App

# 📝 Notes Manager API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)

![Express](https://img.shields.io/badge/Express-4.x-blue)

![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)

![Mongoose](https://img.shields.io/badge/Mongoose-7.x-red)

A REST API for managing personal notes with search and sorting capabilities. Built with Node.js, Express, MongoDB, and Mongoose.

## ✨ Features

### Core CRUD Operations
- ✅ **Create** - Add new notes with title and content
- ✅ **Read** - Get all notes or fetch a specific note by ID
- ✅ **Update** - Modify title and/or content of existing notes
- ✅ **Delete** - Remove notes from the database

### Advanced Features
- 🔍 **Search** - Find notes by title or content using regex (case-insensitive)
- 📊 **Sorting** - Sort notes by any field (createdAt, updatedAt, title, etc.)
- 🎯 **Partial Updates** - Update only title OR only content (not both required)

### Data Validation
- Title and content are required for creation
- Empty strings are rejected for updates
- Proper error handling for invalid ObjectId formats

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| dotenv | Environment variables |

## 📦 API Endpoints

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| GET | `/` | Get all notes | `?q=search&sort=field` |
| POST | `/` | Create a new note | - |
| GET | `/:id` | Get note by ID | - |
| PATCH | `/:id` | Update a note | - |
| DELETE | `/:id` | Delete a note | - |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/notes-manager-api.git
cd notes-manager-api

# Install dependencies
npm install

# Create environment file
echo "MONGO_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start the server
npm start

```


## 👨‍💻 Author

**Ishwinder Kaur**
- GitHub: [@ishwinderkaurgill](https://github.com/ishwinderkaurgill)
- LinkedIn: [ishwinder-kaur-gill-78b498232](https://linkedin.com/in/ishwinder-kaur-gill-78b498232)
