# Contributing to SWE Index

Thanks for contributing! This project is a community-maintained directory of hackathons, open-source programs, hiring drives, competitions, internships, and job platforms for software engineers and students.

The goal is simple: **keep useful opportunities discoverable, accurate, and up to date.**

## What You Can Contribute

You can contribute by:

* Adding a legitimate hackathon or competition
* Adding an open-source program or mentorship opportunity
* Adding a fresher or mass-hiring program
* Adding a useful job or internship platform
* Updating outdated timelines, eligibility, prizes, or application details
* Fixing broken links
* Removing discontinued programs
* Improving descriptions or table formatting
* Improving the website or its code
* Reporting inaccurate or misleading information

## Before You Contribute

Please check whether the opportunity already exists in the repository before adding it.

For time-sensitive information, prefer the **official organizer or company website** as the source.

Avoid adding:

* Unverified opportunities
* Referral links
* Affiliate links
* Promotional links
* Paid services disguised as opportunities
* Duplicate entries
* Programs with no credible source

## Adding an Opportunity

When adding a new entry, provide as much of the following information as possible:

* Name
* Official link
* Organizer/company
* Timeline
* Eligibility
* Prize, stipend, or reward
* Mode (online, in-person, hybrid, etc.)

Use the existing table structure of the relevant section.

For example:

```md
| Program Name | [Official Link](https://example.com) | Organizer | Timeline | Eligibility | Reward | Mode |
|---|---|---|---|---|---|---|
| Example Program | [Website](https://example.com) | Example Org | May–July | Students | Stipend | Online |
```

Do not invent missing information. If a detail cannot be verified, leave it out or mark it appropriately.

## Updating Existing Information

If you find outdated information, please update it rather than creating a duplicate entry.

Examples:

* Old application deadline → New deadline
* Broken URL → Working official URL
* Changed eligibility → Current eligibility
* Discontinued program → Remove or mark it as discontinued

For significant changes, mention the source in your pull request.

## Links and Sources

Whenever possible, use the **official website** of the organizer or company.

For example:

```md
[Google Summer of Code](https://summerofcode.withgoogle.com/)
```

Avoid linking to third-party blogs when an official source is available.

Third-party sources can be useful for discovering opportunities, but the final entry should ideally be verified against the official source.

## Pull Requests

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b add-new-opportunity
```

3. Make your changes.
4. Review the changes locally.
5. Commit your changes.

```bash
git add .
git commit -m "Add <program name>"
```

6. Push your branch.

```bash
git push origin add-new-opportunity
```

7. Open a Pull Request against the `main` branch.

## Pull Request Guidelines

Keep each pull request focused.

Good:

```text
Add Outreachy December 2026 cohort
```

Good:

```text
Update GSoC 2027 application timeline
```

Good:

```text
Fix broken Devpost link
```

Avoid combining unrelated changes into one pull request.

For example, don't add three hiring programs, redesign the website, and rewrite the README in the same PR unless the changes are directly related.

## Commit Messages

Keep commit messages short and descriptive.

Recommended:

```text
Add <program name>
Update <program name>
Fix broken link for <program>
Remove discontinued <program>
Improve contribution guide
Update website styling
```

Avoid vague messages such as:

```text
update
changes
fix
stuff
final
```

## Website Contributions

The website is built with Next.js and renders the repository's `README.md`.

The README is the **single source of truth for the directory content**.

If you are only adding or updating an opportunity, you generally only need to modify:

```text
README.md
```

If you're modifying the website itself, you may need to work with the Next.js application.

Before submitting a website-related PR, run:

```bash
npm install
npm run dev
```

Make sure the site builds correctly and that your changes do not break the Markdown rendering.

## Accuracy Matters

This repository contains information that can change frequently.

Deadlines, eligibility requirements, prizes, stipends, and program availability can change without notice.

Before submitting time-sensitive information, verify it against the most recent official source available.

If you discover outdated information after a contribution has been merged, please open another pull request or issue.

## Reporting an Issue

If you find something incorrect but don't have time to fix it yourself, open an issue.

Useful issue reports include:

* The name of the affected program
* What is incorrect
* What the correct information should be
* A reliable source confirming the correction

## Code of Conduct

Please be respectful and constructive when interacting with contributors.

Harassment, personal attacks, spam, discrimination, and deliberately misleading contributions are not welcome.

Disagreements about contributions should be handled through technical discussion and evidence.

## License

By contributing to this repository, you agree that your contributions will be licensed under the repository's [GPL-3.0 license](LICENSE), unless otherwise stated.

Thank you for helping make software engineering opportunities easier to find. 🚀
