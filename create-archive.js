const fs = require("fs").promises;
const { exec } = require("child_process");

const exclude = [".github", ".env", ".git", "node_modules"];

const operation = async () => {
  try {
    const allFilesAndDirs = await fs.readdir(".");
    const validFilesAndDirs = allFilesAndDirs.filter(
      (file) => !exclude.includes(file)
    );
    const toBeArchived = validFilesAndDirs.join(" ");

    const tarCommand = `tar -czf ../docker-archive.tar.gz ${toBeArchived}; mv ../docker-archive.tar.gz docker-archive.tar.gz`;
    exec(tarCommand);
  } catch (error) {
    console.log(error);
  }
};

operation();
