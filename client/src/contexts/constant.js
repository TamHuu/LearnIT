export const apiUrl =
  process.env.Node_ENV !== "production"
    ? "http://localhost:5000/api"
    : "codedeploy";
export const LOCAL_STORAGE_TOKEN_NAME = "LearnIT MERN";
