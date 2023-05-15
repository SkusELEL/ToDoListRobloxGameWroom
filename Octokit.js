const Octokit = require("@octokit/rest");

const octokit = new Octokit({
  auth: "YOUR_PERSONAL_ACCESS_TOKEN",
});

async function addFileToRepo(content, filePath) {
  try {
    const response = await octokit.repos.createOrUpdateFileContents({
      owner: "YOUR_GITHUB_USERNAME",
      repo: "YOUR_REPO_NAME",
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
