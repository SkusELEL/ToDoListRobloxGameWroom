const Octokit = require("@octokit/rest");

const octokit = new Octokit({
  auth: "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",
});

async function addFileToRepo(content, filePath) {
  try {
    const response = await octokit.repos.createOrUpdateFileContents({
      owner: "SkusELEL",
      repo: "ToDoListRobloxGameWroom",
      path: filePath,
      message: "Dodanie pliku z rzeczami",
      content: Buffer.from(content).toString("base64"),
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

const content = "Przykładowy tekst rzeczy";
const filePath = "folder/nazwa_pliku.txt";

addFileToRepo(content, filePath);
