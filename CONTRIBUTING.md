# Contributing to SWE Index

Thanks for contributing to **SWE Index**! 🚀

SWE Index is a community-maintained directory of hackathons, open-source programs, hiring drives, competitions, internships, job platforms, learning resources, and other opportunities for software engineers and students.

The goal is simple:

> **Keep useful opportunities discoverable, accurate, and up to date.**

Every contribution helps make the software-engineering ecosystem easier to navigate.

---

## What You Can Contribute

You can contribute by:

* Adding a legitimate hackathon or competition
* Adding an open-source program or mentorship opportunity
* Adding a fresher or mass-hiring program
* Adding an internship or job platform
* Adding useful learning resources
* Updating outdated timelines, eligibility, prizes, or application details
* Fixing broken links
* Removing discontinued programs
* Improving descriptions or table formatting
* Improving the website or its code
* Improving documentation
* Reporting inaccurate or misleading information
* Suggesting new categories or useful resources

Small contributions are welcome. You don't need to make a large change to contribute.

---

## Before You Contribute

Before opening a pull request:

1. Check whether the resource or opportunity already exists.
2. Verify the information using a reliable source.
3. Prefer the official organizer, company, or program website.
4. Make sure the opportunity is relevant to software engineers or students.
5. Follow the existing structure and formatting of the relevant section.

Avoid adding:

* Unverified opportunities
* Duplicate entries
* Referral links
* Affiliate links
* Promotional links
* Spam
* Paid services disguised as opportunities
* Misleading claims
* Programs with no credible source
* Personal social-media profiles as the primary source when an official website exists

If you are unsure whether something belongs in SWE Index, open an issue first.

---

# Adding an Opportunity

When adding a new entry, provide as much of the following information as possible:

* Name
* Official link
* Organizer or company
* Timeline
* Eligibility
* Prize, stipend, or reward
* Mode — online, in-person, hybrid, etc.

Use the existing table structure of the relevant section.

For example:

```md
| Program Name | Official Link | Organizer | Timeline | Eligibility | Reward | Mode |
|---|---|---|---|---|---|---|
| Example Program | [Website](https://example.com) | Example Org | May–July | Students | Stipend | Online |
```

Do **not** invent missing information.

If a detail cannot be verified, leave it out rather than guessing.

---

# Links and Sources

Whenever possible, use the **official website** of the organizer, company, or program.

For example:

```md
[Google Summer of Code](https://summerofcode.withgoogle.com/)
```

Official sources should be preferred for:

* Application deadlines
* Eligibility
* Prizes
* Stipends
* Program dates
* Application requirements
* Program status

Third-party sources can be useful for discovering opportunities, but the final entry should ideally be verified against an official source.

### Avoid unnecessary tracking links

Prefer clean URLs.

Avoid links containing unnecessary referral, affiliate, or tracking parameters when a clean official URL is available.

---

# Updating Existing Information

If you find outdated information, **update the existing entry instead of creating a duplicate**.

Examples:

* Old application deadline → New deadline
* Broken URL → Working official URL
* Changed eligibility → Current eligibility
* Changed prize → Current prize
* Changed program format → Current format
* Discontinued program → Remove or mark it as discontinued

For significant changes, mention the source in your pull request.

If possible, include the date on which you verified time-sensitive information.

---

# Removing Opportunities

An opportunity should be removed when it is:

* Permanently discontinued
* No longer relevant to the repository
* Replaced by a newer official program
* Found to be fraudulent or misleading
* Repeatedly impossible to verify

Do not remove an opportunity simply because its current application period has ended if the program is expected to return.

For recurring programs, update the timeline for the next confirmed cycle when official information becomes available.

When uncertain, open an issue instead of deleting the entry.

---

# Pull Requests

## 1. Fork the repository

Create your own fork of SWE Index.

## 2. Create a branch

Use a descriptive branch name.

Examples:

```bash
git checkout -b add-new-opportunity
```

```bash
git checkout -b update-gsoc-timeline
```

```bash
git checkout -b fix-broken-link
```

```bash
git checkout -b improve-website-navigation
```

Avoid generic branch names such as:

```text
test
changes
update
branch1
new
```

## 3. Make your changes

Keep your changes focused on the purpose of the pull request.

## 4. Review your changes locally

Check:

* Links
* Spelling
* Markdown formatting
* Table formatting
* Duplicate entries
* Incorrect information
* Website behavior, if applicable

## 5. Commit your changes

```bash
git add .
git commit -m "Add <program name>"
```

## 6. Push your branch

```bash
git push origin add-new-opportunity
```

## 7. Open a Pull Request

Open a pull request against the `main` branch.

Clearly describe:

* What you changed
* Why you changed it
* Relevant source links
* Anything maintainers should verify

---

# Pull Request Guidelines

Keep each pull request focused.

### Good

```text
Add Outreachy December 2026 cohort
```

### Good

```text
Update GSoC 2027 application timeline
```

### Good

```text
Fix broken Devpost link
```

### Good

```text
Improve mobile navigation
```

Avoid combining unrelated changes into one pull request.

For example, don't:

* Add three unrelated hiring programs
* Redesign the website
* Rewrite the README
* Change the contribution guide

all in the same pull request unless the changes are directly related.

Focused pull requests are easier to review, discuss, and merge.

---

# Commit Messages

Keep commit messages short and descriptive.

Recommended:

```text
Add <program name>
```

```text
Update <program name>
```

```text
Fix broken link for <program>
```

```text
Remove discontinued <program>
```

```text
Improve contribution guide
```

```text
Update website styling
```

Avoid vague messages such as:

```text
update
changes
fix
stuff
final
asdf
```

---

# Website Contributions

The website is built with **Next.js** and renders the repository's `README.md`.

The README is the:

> **Single source of truth for directory content.**

If you are only adding or updating an opportunity, you generally only need to modify:

```text
README.md
```

If you're modifying the website itself, you may need to work with the Next.js application.

Before submitting a website-related pull request, install dependencies and run the project locally:

```bash
npm install
npm run dev
```

Then verify that:

* The website starts successfully
* Markdown renders correctly
* Tables work correctly
* Links work correctly
* Navigation works correctly
* Responsive layouts still work
* No obvious console errors are introduced

If the repository uses a different package manager or scripts in `package.json`, follow those instead.

---

# Markdown Guidelines

Keep the README consistent with the existing structure.

When adding or editing content:

* Preserve existing heading hierarchy
* Preserve table column order
* Use Markdown links consistently
* Avoid unnecessary formatting
* Keep descriptions concise
* Don't introduce unnecessary HTML
* Don't add emojis unless they fit the existing section
* Don't significantly restructure a section without discussing it first

Before opening a PR, preview the Markdown when possible.

---

# Accuracy Matters

SWE Index contains information that can change frequently.

Deadlines, eligibility requirements, prizes, stipends, application processes, and program availability can change without notice.

Before submitting time-sensitive information:

1. Check the official source.
2. Verify the information is current.
3. Make sure the link works.
4. Include the source in your pull request when appropriate.

If you discover outdated information after a contribution has been merged, please open another pull request or issue.

Keeping the index accurate is more important than keeping it large.

---

# Quality Over Quantity

SWE Index is not intended to become a dumping ground for every link on the internet.

A smaller list of useful, verified resources is better than a huge list filled with:

* Dead links
* Low-quality resources
* Duplicates
* Promotional content
* Unverified opportunities
* Irrelevant programs

Before adding something, ask:

> **Would this genuinely help someone pursuing software engineering?**

If the answer is yes and the information can be verified, it is likely a good contribution.

---

# Reporting an Issue

If you find something incorrect but don't have time to fix it yourself, open an issue.

Useful issue reports include:

* Name of the affected program or resource
* What is incorrect
* What the correct information should be
* Reliable source confirming the correction
* Relevant URL

For example:

```text
Title:
Incorrect deadline for Example Hackathon

Description:
The README currently lists the deadline as June 15.

The official website lists the deadline as June 30.

Official source:
https://example.com
```

Clear issue reports make it much easier for maintainers to act quickly.

---

# Suggesting New Categories

If you think SWE Index is missing an entire category of useful resources, open an issue before creating a large structural change.

Explain:

* What the category is
* Why it belongs in SWE Index
* What resources would belong there
* Examples of legitimate resources
* Where you think it should appear in the README

This helps avoid unnecessary duplication and keeps the information architecture consistent.

---

# Security Issues

Please **do not publicly disclose security vulnerabilities** in an issue if the issue could expose sensitive information, credentials, authentication weaknesses, or other exploitable details.

Instead, contact the repository maintainer privately through the contact method provided in the repository profile or security policy.

For normal website bugs or broken links, GitHub Issues are appropriate.

---

# Contribution Review

All contributions are reviewed by the maintainers.

A pull request may be:

* Merged as submitted
* Merged after requested changes
* Asked to provide additional verification
* Closed if it does not fit the project's scope

Maintainers may edit formatting, reorganize entries, request sources, or combine duplicate contributions to keep the repository consistent.

A requested change is not a rejection of the contributor. The goal is to maintain a reliable and useful resource.

---

# Code of Conduct

Please be respectful and constructive when interacting with contributors.

The project does not tolerate:

* Harassment
* Personal attacks
* Discrimination
* Spam
* Deliberately misleading contributions
* Malicious changes
* Repeated disruptive behavior

Disagreements about contributions should be handled through technical discussion, evidence, and respectful communication.

---

# License

By contributing to this repository, you agree that your contributions will be licensed under the repository's [GPL-3.0 license](LICENSE), unless otherwise stated.

Please make sure that any content you contribute is something you are permitted to submit under the project's licensing terms.

Do not copy substantial content from another website, repository, or proprietary resource without permission.

---

# Thank You

SWE Index is built to make the software-engineering journey easier to navigate.

Whether you:

* Fix a broken link
* Add one useful opportunity
* Update an outdated deadline
* Improve the website
* Add a learning resource
* Report an error
* Improve the documentation

your contribution helps someone else find something they may have otherwise missed.

**Thank you for helping keep SWE Index useful, accurate, and community-driven. 🚀**
