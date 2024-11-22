import { execSync } from "child_process";

const args = process.argv.slice(2);

let currentKey = null;
const parsedArgs = args.reduce((acc, arg) => {
  if (!arg.includes("=") && currentKey) {
    acc[currentKey] = acc[currentKey] + " " + arg;
  } else {
    const [key, value] = arg.split("=");
    if (key.startsWith("--")) {
      currentKey = key.slice(2);
      acc[currentKey] = value;
    }
  }
  return acc;
}, {});

const commitMessage = parsedArgs.message || "🔥 build";
const branch = parsedArgs.branch || "master";

try {
  console.log("⚡ Adding changes...");
  execSync(`git add .`, { stdio: "inherit" });

  console.log("📦 Committing changes...");
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });

  console.log(`🚀 Pushing to branch ${branch}...`);
  execSync(`git push origin ${branch}`, { stdio: "inherit" });

  console.log("✔️ Publish completed!");
} catch (error) {
  console.error("❌ An error occurred:", error.message);
  process.exit(1);
}
