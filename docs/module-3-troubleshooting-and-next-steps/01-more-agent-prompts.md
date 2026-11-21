# More Prompts to Try

Try these in Delegate or in your coding agent, in the same session, so it knows your project. Ask for outcomes, not commands. The prompts are the same for every agent; only where you paste them differs.

=== "Autopilot"

    Paste them into the **Autopilot** panel in Studio, or into the **UiPath Autopilot** extension in VS Code. For a quick read-only question in Test Manager, click **Autopilot** (sparkle icon, top right): it answers with **Autopilot Search**. Compare its counts with **Execution** before you rely on them.

=== "Claude Code"

    In a terminal, run `claude` in your project folder and paste the prompt. Any coding agent with the UiPath skills works the same way; the steps here are for Claude Code.

## Morning standup brief

```text
Summarize today's test runs in my project: how many passed, failed, had no result, or were restricted?
```

In daily use, ask for yesterday's runs instead.

## Morning recap (ready-made routine)

Delegate's Test Cloud plugin includes a ready-made routine, **Summarize last night's execution of a test set**, in the **Not scheduled** list. See the routines box in [8. Run, Triage, and Report](../module-2-hands-on-workshop/08-run-and-report.md#write-the-report). It returns results only after the test set has run overnight, so on workshop day it finds nothing. To try the same summary now, ask:

```text
Summarize the latest execution of UiBank Smoke Test Set in my project.
```

## Coverage check before a release

```text
In my project, what percentage of requirements are covered by test cases, and which requirements have no test cases at all?
```

## Rerun only the failures

```text
Rerun only the failed test cases from the latest run of the UiBank Smoke Test Set in my project, as an automated run on my robot, and tell me whether they pass now.
```

The rerun updates the same execution in Test Manager: the new results replace the failed ones. Write your report before you rerun if you need the original numbers.

## Flaky or recurring failures

```text
For the failed test cases in the latest run of the UiBank Smoke Test Set in my project, look at their last 10 results and tell me which ones are new regressions and which keep failing.
```

## Read-only exploration

```text
List the test sets in my project and the test cases in each one. Don't change anything.
```

!!! warning "Prompts that write"
    Triggering runs or updating test cases changes Test Manager. Read each approval request before you approve it.

---

[Next → Troubleshooting](02-troubleshooting.md){: .md-button .md-button--primary}

---
