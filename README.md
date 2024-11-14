
# DevQAPI

DevQAPI is a lightweight API designed to provide interview questions and answers categorized into three levels: Beginner, Intermediate, and Advanced. This API is perfect for developers preparing for interviews or creating quiz apps.

## Features

- **Categorized Questions**: Fetch questions based on skill level.
- **Answers Included**: Each question comes with a corresponding answer.
- **Simple and Easy to Use**: Designed for quick integration.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Charmingdc/DevQAPI.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd DevQAPI
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the server**:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

2. **API Endpoints**:

   - **Get all questions**:
     ```
     GET /api/questions
     ```
     Returns all questions across all categories.

   - **Get questions by category**:
     ```
     GET /api/questions/:category
     ```
     Replace `:category` with one of the following:
     - `beginner`
     - `intermediate`
     - `advanced`

     Example response for `GET /api/questions/beginner`:
     ```json
     [
       {
         "question": "What is JavaScript?",
         "answer": "JavaScript is a scripting language used to create and control dynamic web content."
       },
       {
         "question": "What are variables in JavaScript?",
         "answer": "Variables are containers for storing data values."
       }
     ]
     ```

3. **Test the API**:
   Use tools like [Postman](https://www.postman.com/) or your browser to interact with the endpoints.

## Data Structure

The questions are stored in a JSON format with the following structure:
```json
{
  "beginner": [
    {
      "question": "What is JavaScript?",
      "answer": "JavaScript is a scripting language used to create and control dynamic web content."
    }
  ],
  "intermediate": [
    {
      "question": "What is the difference between `var`, `let`, and `const`?",
      "answer": "`var` has function scope, while `let` and `const` have block scope. `const` is used for constants."
    }
  ],
  "advanced": [
    {
      "question": "What is event delegation in JavaScript?",
      "answer": "Event delegation is a technique of using a single event listener to handle events for multiple elements."
    }
  ]
}
```

## Contributing

Contributions are welcome! If you have suggestions or want to add more questions, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-new-questions
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new questions"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-new-questions
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

For more details, visit the [GitHub repository](https://github.com/Charmingdc/DevQAPI).
