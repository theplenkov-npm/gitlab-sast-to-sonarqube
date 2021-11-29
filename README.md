# GitLab SAST Report convertor to SonarQube external issues report

## Global commands

### gitlab2sq

To convert gitlab SAST json artifact to sonarqube external format please use the following command:

```
gitlab2sq gl-sast-report.json > sonarqube-report.json
```

or

```
gitlab2sq gl-sast-report.json --target=sonarqube-report.json
```

where `gl-sast-report.json` is existing SAST pipeline artifact and `sonarqube-report.json` is a new file

## Useful links

- [Gitlab SAST reference](https://docs.gitlab.com/ee/user/application_security/sast/)
- [Gitlab SAST report schema](https://gitlab.com/gitlab-org/security-products/security-report-schemas/-/blob/master/dist/sast-report-format.json)
- [SonarQube generic issue format](https://docs.sonarqube.org/latest/analysis/generic-issue/)
