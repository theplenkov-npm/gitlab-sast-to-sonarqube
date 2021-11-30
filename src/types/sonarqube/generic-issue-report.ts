type SonarQubeGenericIssueLocation = {
  message: string;
  filePath: string;
  textRange: {
    startLine: number;
    endLine?: number;
    startColumn?: number;
    endColumn?: number;
  };
};

export type SonarQubeGenericIssueImportFormat = {
  issues: {
    engineId: string;
    ruleId: string;
    primaryLocation: SonarQubeGenericIssueLocation;
    type: "BUG" | "VULNERABILITY" | "CODE_SMELL";
    severity: "BLOCKER" | "CRITICAL" | "MAJOR" | "MINOR" | "INFO";
    effortMinutes?: number;
    secondaryLocations?: SonarQubeGenericIssueLocation[];
  }[];
};
