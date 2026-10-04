# Portfolio Backend

This backend is ready to connect to MongoDB Atlas and deploy on Render or similar Node hosting.

## Setup

1. Copy `.env.example` to `.env`
2. Replace `<db_password>` with your actual Atlas database password
3. Install dependencies:

```bash
npm install
```

4. Run locally:

```bash
npm run dev
```

## MongoDB Atlas setup

- Create a MongoDB Atlas cluster
- Add your current IP to Network Access
- Create a database user
- Copy the connection string and replace the password in `.env`

Example:

```env
MONGODB_URI=mongodb+srv://suriasultana_db_user:YOUR_PASSWORD@cluster0.ym6lpxi.mongodb.net/portfolio?retryWrites=true&w=majority
DB_NAME=portfolio
```

## Deploy to Render

1. Push this backend to GitHub
2. Create a new Web Service on Render
3. Set the root directory to `backend`
4. Use the Node environment
5. Add environment variables:
   - `PORT`
   - `MONGODB_URI`
   - `DB_NAME`

This project is set up for a clean deployment workflow.
