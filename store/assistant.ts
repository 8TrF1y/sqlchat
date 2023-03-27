import { first } from "lodash-es";
import { Id, User } from "@/types";

// Assistant is a special user.
export const assistantList: User[] = [
  {
    id: "sql-assistant",
    name: "SQL Chat",
    description: "🤖️ I'm an expert in SQL. I can answer your questions about databases and SQL.",
    avatar: "",
  },
];

export const getAssistantById = (id: Id) => {
  const user = assistantList.find((user) => user.id === id);
  return user || (first(assistantList) as User);
};

// getPromptOfAssistant define the special prompt for each assistant.
export const getPromptGeneratorOfAssistant = (assistant: User) => {
  if (assistant.id === "sql-assistant") {
    return (schema: string) =>
      `This is my database schema"${schema}". You will see the tables and columns in the database. And please answer the following questions about the database.`;
  }
  return () => "";
};
