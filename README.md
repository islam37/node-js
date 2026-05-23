# Node.js File System (FS) Module Practice

This project contains my practice and learning journey with the Node.js built-in `fs` (File System) module.

I am learning how to work with files and folders using Node.js core modules.

---

# Topics Covered

- Read File
- Write File
- Append File
- Delete File
- Rename File
- Create Folder
- Delete Folder
- Read Directory
- Sync vs Async Methods
- Promises with FS Module

---

# Technologies Used

- Node.js
- JavaScript

---


# Installation

Clone the repository:

```bash
git clone <your-github-repo-link>
```

Go to project folder:

```bash
cd your-project-name
```

---

# Run the Project

```bash
node app.js
```

---

# Example Codes

## Read File

```js
const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
```

---

## Write File

```js
const fs = require("fs");

fs.writeFile("new.txt", "Learning Node.js FS Module", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File created");
});
```

---

## Append File

```js
const fs = require("fs");

fs.appendFile("new.txt", "\nNew Content", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Content Added");
});
```

---

# Learning Goals

The goal of this project is to:

- Understand Node.js core modules
- Learn backend file handling
- Practice asynchronous programming
- Build strong Node.js fundamentals

---

# Future Plans

I plan to learn next:

- Path Module
- HTTP Module
- Express.js
- Streams
- Authentication
- MongoDB Integration

---

# Author

Islam Uddin

CSE Student | Learning Backend Development 
