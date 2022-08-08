import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database Connect");
    app.listen(3000);
    console.log("Server is listening on port", 3000);
  } catch (error: any) {
    console.log(error);
  }
}

main();
