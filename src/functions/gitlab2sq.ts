import { ReportFormatForGitLabSAST } from '../types/gitlab/sast-report-format';
import { SonarQubeGenericIssueImportFormat } from '../types/sonarqube/generic-issue-report';

const severity_map: Record<Exclude<ReportFormatForGitLabSAST["vulnerabilities"][0]["severity"], undefined>, SonarQubeGenericIssueImportFormat["issues"][0]["severity"]> = {
    Info: "INFO",
    Unknown: "INFO",
    Low: "MINOR",
    Medium: "MAJOR",
    High: "MAJOR",
    Critical: "CRITICAL",
};

export default ({ vulnerabilities }: ReportFormatForGitLabSAST) => ({
    issues: vulnerabilities.map(
        ({ scanner, name, message, location, severity }) => Object.assign({
            type: "VULNERABILITY",
            engineId: scanner?.id,
            ruleId: name,
            primaryLocation: {
                message,
                filePath: location.file,
                textRange: {
                    startLine: location.start_line,
                    endLine: location.end_line,
                }
            }
        }, severity && { severity: severity_map[severity] })
    ),
}) as SonarQubeGenericIssueImportFormat;
