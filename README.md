# GitLab SAST Report convertor to SonarQube external issues report

## Installation
This command can be installed locally as a dependency or globally. Please notice that currently for global installation ts-node should be installed globally too.
```
npm install -g gitlab-sast-to-sonarqube ts-node
```
## How to use

To convert gitlab SAST json artifact to sonarqube external format please use the following command:
```
gitlab2sq gl-sast-report.json > sonarqube-report.json
```

or

```
gitlab2sq gl-sast-report.json --target=sonarqube-report.json
```

where `gl-sast-report.json` is existing SAST pipeline artifact and `sonarqube-report.json` is a new file

## Using in the code
You can also use gitlab2sq function in your code. Both import and return object types are declared according to Gitlab and SonarQube specs
```
import gitlab2sq from "gitlab-sast-to-sonarqube/src/functions/gitlab2sq";
```






## Useful links

- [Gitlab SAST reference](https://docs.gitlab.com/ee/user/application_security/sast/)
- [Gitlab SAST report schema](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/dist/sast-report-format.json)
- [SonarQube generic issue format](https://docs.sonarqube.org/latest/analysis/generic-issue/)
