# Security Policy

The security of SWE Index and its users is taken seriously.

SWE Index is a community-maintained open-source project. If you discover a
security vulnerability in the website, repository, dependencies, GitHub
workflows, or other project infrastructure, please report it responsibly.

## Supported Versions

Security fixes are applied to the latest version of SWE Index.

| Version | Supported |
| --- | --- |
| Latest `main` | ✅ |
| Older versions | ❌ |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub
issues, pull requests, or discussions.**

Instead, report them privately by emailing:

**neelamnagaraj99@gmail.com**

When reporting a vulnerability, please provide as much of the following
information as possible:

- A clear description of the vulnerability
- The affected component, file, page, or workflow
- Steps required to reproduce the issue
- The potential security impact
- A proof of concept, if applicable
- Relevant screenshots, logs, or error messages
- A suggested remediation, if you have one

Providing detailed reproduction steps helps us investigate and address the
issue more quickly.

## What Should Be Reported?

Examples of security vulnerabilities include:

- Cross-site scripting (XSS)
- Injection vulnerabilities
- Authentication or authorization issues
- Server-side vulnerabilities
- Exposure of secrets, API keys, or credentials
- Accidental exposure of private or sensitive information
- Vulnerable or compromised dependencies
- Security issues in GitHub Actions or CI/CD workflows
- Unsafe handling of user-controlled input
- Unauthorized access to project infrastructure
- Other vulnerabilities that could compromise the security or integrity of
  the project or its users

If you are unsure whether an issue is security-related, please contact us
privately rather than publicly disclosing potentially sensitive information.

## What Does Not Require a Security Report?

The following issues should generally be reported through GitHub Issues or
Pull Requests instead:

- Broken links
- Outdated opportunity information
- Incorrect deadlines
- Incorrect eligibility information
- Formatting problems
- Documentation improvements
- Feature requests
- General bugs that do not have a security impact
- Suggestions for new resources or opportunities

Please use the appropriate issue template when available.

## Responsible Disclosure

Please avoid publicly disclosing a security vulnerability before the issue
has been investigated and, where appropriate, resolved.

We ask security researchers and contributors to give the maintainers a
reasonable opportunity to investigate and address reported vulnerabilities
before sharing the details publicly.

Please do not access, modify, delete, or expose data that does not belong to
you while investigating a potential vulnerability.

## Scope

This policy applies to security issues affecting:

- The SWE Index website
- The SWE Index GitHub repository
- Repository configuration
- GitHub Actions and workflows
- Dependencies used by the project
- Project-related infrastructure under the maintainers' control

Third-party websites, services, and external opportunities listed in SWE
Index are not controlled by this project.

Security issues affecting a third-party service should be reported to the
respective service or organization according to its own security policy.

## Security of Listed Opportunities

SWE Index contains links to external hackathons, internships, hiring
programs, open-source programs, competitions, and other resources.

The presence of a link in SWE Index does not constitute an endorsement or
guarantee of the security, legitimacy, availability, or reliability of that
external service.

Contributors should prefer official sources when adding opportunities and
should report suspicious or misleading links through the appropriate GitHub
issue.

## Response Process

After receiving a security report, the maintainers will:

1. Review the report.
2. Attempt to reproduce and assess the reported issue.
3. Determine its severity and potential impact.
4. Work on an appropriate fix or mitigation when necessary.
5. Release or deploy the fix where applicable.
6. Communicate relevant information to the reporter when appropriate.

Response times may vary depending on the severity and complexity of the
reported issue.

## Disclosure of Resolved Issues

Once a security issue has been addressed, the maintainers may publicly
disclose relevant information about the vulnerability when appropriate.

Disclosure will be handled in a way that avoids unnecessarily exposing users
to an unresolved vulnerability.

## Security Best Practices for Contributors

Contributors should:

- Never commit API keys, passwords, tokens, or other secrets.
- Avoid including personal or sensitive information in issues and pull
  requests.
- Keep project dependencies reasonably up to date.
- Review GitHub Actions changes carefully.
- Avoid introducing unnecessary dependencies.
- Validate and sanitize untrusted input where applicable.
- Follow the project's contribution guidelines.

If a secret is accidentally committed, treat it as compromised and revoke or
rotate it immediately.

## Contact

For security-related reports:

**Email:** neelamnagaraj99@gmail.com

For general issues, contributions, broken links, or content corrections,
please use the GitHub Issues and Pull Request system provided by the
repository.

Thank you for helping keep SWE Index secure.