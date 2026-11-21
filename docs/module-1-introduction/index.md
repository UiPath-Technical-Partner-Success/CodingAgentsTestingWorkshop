# Test Cloud & Test Manager

!!! tip "Use the import time"
    The project import in step 1 takes a few minutes. Start it first: [download and import the project](../module-2-hands-on-workshop/01-import-tm-project.md#download-the-project-file), then come back and read this page while it runs.

## What is Test Cloud?

**Test Cloud** is UiPath's cloud platform for application testing. It brings together:

✅ **Test Manager** – plan, run, manage, and analyze testing

✅ **Studio** – build and automate test cases, on Windows or with Studio on macOS (Preview)

✅ **Orchestrator** – run test automation at scale

✅ **App Test Robot** – the robot that runs your automated test cases

✅ **Agentic Testing** – AI agents at every step: **Autopilot**, UiPath's native coding agent, and **Delegate**, the desktop agent

![Test Cloud Ecosystem](../assets/images/Test%20Cloud%20ecosystem.png)

## What is Test Manager?

**Test Manager** links requirements to test cases, test sets, and results, so you always know what's tested and what's failing.

![Test Manager](../assets/images/Test%20Manager_Full.png)

## Autopilot for Testers

**Autopilot** is UiPath's native coding agent. It comes in four current capability sets (Autopilot for Everyone is deprecated and left out):

| Capability set | What it does | In this workshop |
|---|---|---|
| **Autopilot** | Plans and runs a task end to end, such as building and fixing an automation | Steps 1, 6 and 8, if you pick the **Autopilot** tab |
| **Autopilot agent** | Works step by step in a chat while you direct it | Optional tip in step 8 (Autopilot chat in Test Manager) |
| **Autopilot search** | Answers a one-off question about your project | Optional tip in step 8 (inside Autopilot chat) |
| **Autopilot actions** | Runs one fixed action from a button | Steps 2, 3 and 6 |

See <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/about-autopilot" target="_blank">About Autopilot</a>.

**Autopilot for Testers** is its set of testing capabilities in Test Manager and Studio. Today you'll use two **Autopilot actions** built into Test Manager, and Autopilot in Studio:

✅ **Evaluate Requirement Quality** – finds gaps in requirements, such as undefined thresholds and missing edge cases, and suggests fixes

✅ **Generate Test Cases** – generates test cases from requirements

✅ **Autopilot for Testers in Studio** – <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/generate-coded-test-cases" target="_blank">turns a manual test case into an automated one</a>, low-code or coded (C#)

![Built-in agent type](../assets/images/Agent%20type%20OOTB.png)

**Autopilot for Testers can do more.** You don't use these today, but they work on any Test Manager project.

**In Test Manager**

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/import-manual-test-cases" target="_blank">Import manual test cases</a> – turn an Excel sheet into test cases

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/find-obsolete-tests" target="_blank">Find obsolete tests</a> – Test Cloud only

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/create-sap-transactions" target="_blank">Generate SAP transaction tests</a> – from Heatmap and Change Impact Analysis

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/test-result-analysis" target="_blank">Analyze test results</a> – an Execution Insights report with top failing tests, common errors and recommendations

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/search-test-manager-project" target="_blank">Search a Test Manager project</a> – ask Autopilot chat in plain language, for example "Find all test case logs which failed"

**In Studio**

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/generate-coded-test-cases" target="_blank">Generate coded test cases and coded API test cases</a> – from text, code comments, an existing manual test case, or an API

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/refactor-coded-automations" target="_blank">Refactor and improve coded automations</a>

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/generate-synthetic-test-data" target="_blank">Generate synthetic test data</a> – select **Generate with Autopilot** when you add test data to a test case

!!! info "Licensing and limits"
    A capability you start from its own button in Test Manager or Studio doesn't use the Autopilot usage pool. The same capability through Autopilot chat does. Requirement evaluation takes up to 128,000 tokens and returns up to 50 suggestions (15 by default). A generated test case has up to 50 steps.

    See <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-for-testers" target="_blank">Autopilot for Testers</a>, <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-usage-pool-for-testing" target="_blank">Autopilot usage pool for testing</a> and <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-for-testers-best-practices" target="_blank">Best practices and limitations</a>.

## Delegate for Testing

Delegate connects to Test Manager through the **Test Cloud** plugin, which comes on with the **QA / Testing** work profile. It uses the `uip` CLI behind the scenes, so you just ask in plain language. Delegate runs on Windows, and on Macs with Apple silicon as Delegate for macOS (Preview). Delegate can:

✅ **Run** manual tests on your desktop and publish the results to Test Manager

✅ **Manage** test cases, test sets, and executions

✅ **Report** on results, and triage failures

## Agents in this workshop

You'll work with two kinds of AI agent. They do different jobs.

✅ **Delegate** – a general-purpose desktop AI agent that runs on your machine. It drives your applications, documents and business systems the way you would, and can record a task into a reusable **Routine** or a knowledge skill. It's governed through the UiPath Platform. Today it runs your manual test, helps build the Object Repository, reproduces the defect and writes the report.

✅ **Coding agents** – AI tools you use to *build* UiPath automations, agents and solutions. They use the `uip` CLI and the UiPath skills to scaffold, edit, run and publish projects. **Autopilot** is UiPath's own coding agent and the default today: you'll find it in Studio and in VS Code. In Test Manager, you use its Autopilot actions and Autopilot chat. **Claude Code** is the alternative; Cursor, GitHub Copilot and other coding agents work the same way once the UiPath skills are installed.

In short: Delegate is an end-user desktop agent; coding agents are developer tools that help you build. See <a href="https://docs.uipath.com/coding-agents/standalone/latest/user-guide/choosing-your-agent" target="_blank">Choosing your agent</a> and the <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/introduction" target="_blank">Delegate user guide</a>.

### Which agent does what

| Step | Agent |
|---|---|
| 1 Import and link – project check | Coding agent: Autopilot or Claude Code |
| 2 Evaluate requirements, 3 Generate test cases | Autopilot actions built into Test Manager |
| 4 Run manual tests | **Delegate**; Run autonomously and Autonomous Exploration are Autopilot in Test Manager |
| 5 Studio project and Object Repository | Studio and **Delegate**, or Claude Code |
| 6 Automate and publish | Coding agent: Autopilot or Claude Code |
| 7 Add to the smoke test set | Test Manager in the browser, no agent |
| 8 Run and triage | Coding agent: Autopilot or Claude Code |
| 8 Reproduce the defect, screenshots, PDF report, routines | **Delegate** |

### Pick your tabs

Where a step differs by operating system or coding agent, the page shows tabs. Pick yours here: the guide remembers your choice on every page.

**Your operating system**

=== "Windows"

    You use Studio (2026.10 LTS or a current STS) with the Autopilot panel, and UiPath Assistant with Delegate.

=== "macOS"

    You use Studio on macOS (Preview), which opens only **Cross-platform** projects, and UiPath Assistant for macOS. Autopilot runs in VS Code with the **UiPath Autopilot** extension, and Delegate is Delegate for macOS (Preview). The Claude Code tab is the path that has been rehearsed end to end on a Mac.

**Your coding agent**

=== "Autopilot"

    The default. In Test Manager, Autopilot is built in. For coding-agent steps, you use the Autopilot panel in Studio, or the **UiPath Autopilot** extension in VS Code. See <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-in-studio-desktop" target="_blank">Autopilot in Studio Desktop</a> and <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-in-vs-code" target="_blank">Autopilot in VS Code</a>.

=== "Claude Code"

    The alternative. You run `claude` in a terminal, with the `uip` CLI and the UiPath skills installed (`uip skills install --agent claude`). Any coding agent with the UiPath skills works the same way; the commands in this guide are for Claude Code. See <a href="https://docs.uipath.com/coding-agents/standalone/latest/user-guide/install-and-set-up" target="_blank">Install and set up</a>.

!!! tip "Rule for today"
    Treat everything Autopilot, Delegate and Claude Code produce as a draft. Review generated test cases before you create them, and read what an agent is about to write or change before you approve it.

That's enough theory – let's build.

---

[Next → 1. Import and Link the Test Manager Project](../module-2-hands-on-workshop/01-import-tm-project.md){: .md-button .md-button--primary}

---
