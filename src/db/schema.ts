import {
    pgTable,
    text, 
  } from "drizzle-orm/pg-core"; // Import the table and column types from drizzle-orm
 
  
  export const testing = pgTable("testing", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    
  });