// import axios from "axios";
// import { LANGUAGE_VERSIONS } from "./constants";

// const API = axios.create({
//   baseURL: "https://emkc.org/api/v2/piston",
// });//create a custom instance of axios with configuration

// export const executeCode = async (language, sourceCode) => {
//   const response = await API.post("/execute", {
//     language: language,
//     version: LANGUAGE_VERSIONS[language],
//     files: [
//       {
//         content: sourceCode,
//       },
//     ],
//   });
//   return response.data;
// };


import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, userInput) => {
  try {
    // Send the request to the Piston API with language, version, source code, and user input
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language], // Specify the version of the language
      files: [
        {
          content: sourceCode, // Source code to be executed
        },
      ],
      stdin: userInput, // Include the user input here
    });
    return response.data; // Return the response data from the API
  } catch (error) {
    console.error("Error executing code:", error);
    throw new Error(error.response?.data?.message || "Failed to execute code");
  }
};

