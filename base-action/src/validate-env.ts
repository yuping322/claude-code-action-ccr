/**
 * Validates the environment variables required for running CCR Code
 * CCR uses its own configuration file (config.json) for API keys and settings
 */
export function validateEnvironmentVariables() {
  // CCR uses config.json for configuration, so we mainly check for GITHUB_TOKEN
  // which is needed for GitHub operations
  const githubToken = process.env.GITHUB_TOKEN;

  const errors: string[] = [];

  if (!githubToken) {
    errors.push("GITHUB_TOKEN is required for GitHub operations.");
  }

  if (errors.length > 0) {
    const errorMessage = `Environment variable validation failed:\n${errors.map((e) => `  - ${e}`).join("\n")}`;
    throw new Error(errorMessage);
  }
}
