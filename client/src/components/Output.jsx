// import { useState } from "react";
// import { Box, Button, Text, useToast } from "@chakra-ui/react";
// import { executeCode } from "../api";

// const Output = ({ editorRef, language }) => {
//   const toast = useToast();
//   const [output, setOutput] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const runCode = async () => {
//     const sourceCode = editorRef.current.getValue();//contents of the editor
//     if (!sourceCode) return;
//     try {
//       setIsLoading(true);
//       const { run: result } = await executeCode(language, sourceCode);//will send to piston api to execute the code
//       setOutput(result.output.split("\n"));//this will set the output of piston api
//       result.stderr ? setIsError(true) : setIsError(false);
//     } catch (error) {
//       console.log(error);
//       toast({
//         title: "An error occurred.",
//         description: error.message || "Unable to run code",
//         status: "error",
//         duration: 6000,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Box w="50%">
//       <Text mb={2} fontSize="lg">Output</Text>
//       <Button variant="outline" colorScheme="green" mb={4} isLoading={isLoading} onClick={runCode}>Run Code</Button>
//       <Box height="75vh" p={2} color={isError ? "red.400" : ""} border="1px solid" borderRadius={4} borderColor={isError ? "red.500" : "#333"}>
//         {output
//           ? output.map((line, i) => <Text key={i}>{line}</Text>)
//           : 'Click "Run Code" to see the output here'}
//       </Box>
//     </Box>
//   );
// };
// export default Output;



// import { useState } from "react";
// import { Box, Button, Text, Input, useToast } from "@chakra-ui/react";
// import { executeCode } from "../api"; // Assuming this is the function to execute code via Piston API


// const Output = ({ editorRef, language }) => {
//   const toast = useToast();
//   const [output, setOutput] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [userInput, setUserInput] = useState(""); // State to store user input

//   const runCode = async () => {
//     const sourceCode = editorRef.current.getValue(); // Get contents of the editor
//     if (!sourceCode) {
//       toast({
//         title: "No code to run",
//         description: "Please write some code in the editor before running.",
//         status: "warning",
//         duration: 5000,
//       });
//       return;
//     }

//     try {
//       setIsLoading(true); // Show loading state
//       const { run: result } = await executeCode(language, sourceCode, userInput); // Execute code using API and user input
//       setOutput(result.output.split("\n")); // Set the output (splitting by newline)
//       setIsError(!!result.stderr); // If stderr exists, it's an error
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "An error occurred.",
//         description: error.message || "Unable to run code",
//         status: "error",
//         duration: 6000,
//       });
//       setIsError(true); // Mark as error if exception occurs
//     } finally {
//       setIsLoading(false); // Hide loading state
//     }
//   };

//   return (
//     <Box w="50%">
//       <Text mb={2} fontSize="lg" fontWeight="bold">Output</Text>
//       <Button
//         variant="outline"
//         colorScheme="green"
//         mb={4}
//         isLoading={isLoading}
//         onClick={runCode}
//       >
//         Run Code
//       </Button>
      
//       {/* Input box for user to provide input */}
//       <Input
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)} // Update userInput state
//         placeholder="Enter input for your program"
//         mb={4}
//       />
      
//       <Box
//         height="75vh"
//         p={2}
//         color={isError ? "red.400" : "white"}
//         border="1px solid"
//         borderRadius={4}
//         borderColor={isError ? "red.500" : "#333"}
//         overflowY="auto" // Make it scrollable if the output is long
//       >
//         {output
//           ? output.map((line, i) => <Text key={i}>{line}</Text>) // Map output lines to Text elements
//           : 'Click "Run Code" to see the output here'}
//       </Box>
//     </Box>
//   );
// };

// export default Output;



// import { useState } from "react";
// import { Box, Button, Text, Input, useToast } from "@chakra-ui/react";
// import { executeCode } from "../api"; // Importing the updated executeCode function

// const Output = ({ editorRef, language }) => {
//   const toast = useToast();
//   const [output, setOutput] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [userInput, setUserInput] = useState(""); // State for storing user input

//   const runCode = async () => {
//     const sourceCode = editorRef.current.getValue(); // Get the code from the editor
//     if (!sourceCode) {
//       toast({
//         title: "No code to run",
//         description: "Please write some code in the editor before running.",
//         status: "warning",
//         duration: 5000,
//       });
//       return;
//     }

//     try {
//       setIsLoading(true); // Show loading spinner
//       const { run: result } = await executeCode(language, sourceCode, userInput); // Execute code and pass user input

//       setOutput(result.output.split("\n")); // Set the output (split into lines)
//       setIsError(!!result.stderr); // If there’s an error (stderr), set isError to true
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "An error occurred.",
//         description: error.message || "Unable to run code",
//         status: "error",
//         duration: 6000,
//       });
//       setIsError(true); // Mark as error if there's an issue
//     } finally {
//       setIsLoading(false); // Hide loading spinner
//     }
//   };

//   return (
//     <Box w="50%">
//       <Text mb={2} fontSize="lg" fontWeight="bold">Output</Text>
      
//       {/* Button to execute code */}
//       <Button
//         variant="outline"
//         colorScheme="green"
//         mb={4}
//         isLoading={isLoading}
//         onClick={runCode}
//       >
//         Run Code
//       </Button>
      
//       {/* Input field for user to provide input */}
//       <Input
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)} // Update user input as the user types
//         placeholder="Enter input for your program"
//         mb={4}
//       />
      
//       {/* Display the output from the executed code */}
//       <Box
//         height="75vh"
//         p={2}
//         color={isError ? "red.400" : "white"}
//         border="1px solid"
//         borderRadius={4}
//         borderColor={isError ? "red.500" : "#333"}
//         overflowY="auto" // Ensure the box is scrollable if the output is large
//       >
//         {output
//           ? output.map((line, i) => <Text key={i}>{line}</Text>) // Display each line of the output
//           : 'Click "Run Code" to see the output here'}
//       </Box>
//     </Box>
//   );
// };

// export default Output;


import { useState } from "react";
import { Box, Button, Text, Input, useToast } from "@chakra-ui/react";
import { executeCode } from "../api"; // Importing the executeCode function

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userInput, setUserInput] = useState(""); // State to hold user input

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue(); // Get the code from the editor
    if (!sourceCode) {
      toast({
        title: "No code to run",
        description: "Please write some code in the editor before running.",
        status: "warning",
        duration: 5000,
      });
      return;
    }

    try {
      setIsLoading(true); // Show loading spinner while code is executing
      const { run: result } = await executeCode(language, sourceCode, userInput); // Pass the code and user input to the API

      setOutput(result.output.split("\n")); // Display the output of the code execution
      setIsError(!!result.stderr); // If there's an error in stderr, set isError to true
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
      setIsError(true); // Set error state if API request fails
    } finally {
      setIsLoading(false); // Hide loading spinner after execution
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg" fontWeight="bold">Output</Text>
      
      {/* Button to execute code */}
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      
      {/* Input field for user to provide input */}
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} // Update user input state on change
        placeholder="Enter input for your program"
        mb={4}
      />
      
      {/* Display the output from the executed code */}
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : "white"}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowY="auto" // Enable scrolling for output if it's too large
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>) // Display each line of the output
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;

