import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  mongo_db_uri: process.env.MONGODB_CONNECT,
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET,
};
