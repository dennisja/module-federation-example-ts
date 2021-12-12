import path from "path";

export const PATHS = {
  src: path.resolve(process.cwd(), "src"),
  build: path.resolve(process.cwd(), "build"),
  public: path.resolve(process.cwd(), "public"),
};

type GetEnvironmentVariablesOptions = {
  /**
   * The name to use to scope the environment variables. Can be the name of the app.
   * If its say 'APP' only environment variables prefixed with 'APP_' will be returned.
   * @default ''
   */
  scope?: string;

  /**
   * A function to format the environment variable values.
   * @default JSON.stringify
   */
  formatEnvVarValue?: (value: string) => string;
};

type EnvironmentVariables = Record<string, string>;

/**
 * Gets the environment variables from the process.env object and formats them in away accepted by webpack.DefinePlugin
 * @param options The options to configure how the environment variables are returned.
 * @returns An object containing the environment variables
 */
export const getEnvironmentVariables = ({
  scope = "",
  formatEnvVarValue = JSON.stringify,
}: GetEnvironmentVariablesOptions = {}): EnvironmentVariables => {
  const envVarEntries = Object.entries(process.env);

  const environmentVariables = envVarEntries.reduce<EnvironmentVariables>(
    (allVariables, [currentKey, currentValue]) => {
      if (currentKey.startsWith(scope)) {
        const fullKey = `process.env.${currentKey}`;
        allVariables[fullKey] = formatEnvVarValue(currentValue as string);
      }
      return allVariables;
    },
    {}
  );

  return environmentVariables;
};
