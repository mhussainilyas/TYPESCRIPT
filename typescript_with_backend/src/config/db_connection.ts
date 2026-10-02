import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const dbConnect = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;

    if (!MONGODB_URL) {
      process.exit(1);
    }

    const connectionInstance = await mongoose.connect(MONGODB_URL);

    console.log(connectionInstance.connection.name, "Database Connected");
  } catch (error) {
    if (error instanceof Error) {
      console.error("MongoDB Connection Error:", error.message);
      process.exit(1);
    } else {
      console.error("MongoDB Connection Unknown Error:", error);
      process.exit(1);
    }
  }
};
