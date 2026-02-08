# VideoSphere-API

A comprehensive video sharing platform backend with YouTube-like features and integrated social media functionality.

## 🚀 Features

### Video Management
- Upload and manage videos with thumbnails
- Video metadata storage (title, description, duration, views)
- Video publishing and privacy controls
- Cloudinary integration for media storage

### User System
- User registration and authentication
- JWT-based secure authentication
- Profile management
- Password hashing with bcrypt

### Social Features
- Tweet functionality for micro-blogging
- Comment system on videos
- Like/unlike videos and comments
- Playlist creation and management
- User subscription system

### Technical Features
- RESTful API architecture
- File upload handling with Multer
- Database pagination with mongoose-aggregate-paginate-v2
- CORS enabled for cross-origin requests
- Environment-based configuration

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary
- **File Uploads**: Multer
- **Password Hashing**: bcrypt
- **Other**: Cookie-parser, CORS, dotenv

## 📁 Project Structure

```
src/
├── app.js              # Express app configuration
├── index.js            # Server entry point
├── constants.js        # Application constants
├── controllers/        # Route controllers
├── db/                 # Database connection
├── middlewares/        # Custom middlewares
├── models/             # Mongoose models
├── routes/             # API routes
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB database
- Cloudinary account (for media storage)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/viikasschauhann/VideoSphere-API.git
cd VideoSphere-API
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.sample .env
```
Update `.env` with your configuration:
- MONGODB_URL
- PORT
- CORS_ORIGIN
- Cloudinary credentials
- JWT secrets

4. Start the development server:
```bash
npm run dev
```

5. For production:
```bash
npm start
```

## 📚 API Endpoints

### User Routes
- `POST /api/v1/users/register` - Register new user
- `POST /api/v1/users/login` - User login
- `GET /api/v1/users/` - Get user details

### Video Routes
- `POST /api/v1/videos/publish-video` - Upload video
- `GET /api/v1/videos/` - Get all videos
- `GET /api/v1/videos/:videoId` - Get video by ID

## 🔐 Authentication

The API uses JWT-based authentication. Protected routes require a valid JWT token in the request headers or cookies.

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Vikas Chauhan**

- GitHub: [@viikasschauhann](https://github.com/viikasschauhann)


