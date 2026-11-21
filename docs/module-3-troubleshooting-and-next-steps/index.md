# Troubleshooting & Next Steps

You've built the full flow, from requirements to a go/no-go report. This section helps you go further and get unstuck.

You used two kinds of agent. **Delegate** is the desktop agent: it drove UiBank, ran your manual test and wrote the report. **Coding agents** – Autopilot or Claude Code – helped you build and run the automation with the UiPath skills and the `uip` CLI. See [Agents in this workshop](../module-1-introduction/index.md#agents-in-this-workshop) for the full picture.

## What's inside

✅ **[More Prompts to Try](01-more-agent-prompts.md)** – other everyday tasks you can hand to Delegate or your coding agent: standup summaries, coverage checks, rerunning failures, and more.

✅ **[Troubleshooting](02-troubleshooting.md)** – fixes for the most common problems with setup, login, coding agents, execution, and the report, on Windows and macOS.

## Taking this to your team

✅ **Approval mode:** the workshop uses Adaptive; in regulated environments, set Cautious and lock it centrally.

✅ **Secrets:** test-app logins go in Orchestrator Credential assets, never in prompts, steps or workflows.

✅ **Runs:** schedule test sets in Test Manager or run them from CI/CD on a dedicated test machine.

✅ **Your own coding agent:** the workshop uses Autopilot and Claude Code, but Cursor, GitHub Copilot, Codex and other coding agents run the same UiPath skills and `uip` CLI. See <a href="https://docs.uipath.com/coding-agents/standalone/latest/user-guide/choosing-your-agent" target="_blank">Choosing your agent</a> and <a href="https://docs.uipath.com/coding-agents/standalone/latest/user-guide/build-test" target="_blank">Build and test with coding agents</a>.

✅ **macOS:** Studio on macOS (Preview) isn't recommended for production use yet. Build team projects as **Cross-platform**, so the same package runs on Windows robots, Mac robots and Cloud - Serverless robots.

## Learn more

✅ <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/delegate-for-testing-overview" target="_blank">Delegate for Testing</a>

✅ <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/features-and-functions-for-testing" target="_blank">Delegate operations for testing</a>

✅ <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-for-testers" target="_blank">Autopilot for Testers</a>

✅ <a href="https://docs.uipath.com/coding-agents/standalone/latest/user-guide/install-and-set-up" target="_blank">Install and set up coding agents</a>

✅ <a href="https://docs.uipath.com/studio/standalone/latest/user-guide/studio-on-macos" target="_blank">Studio on macOS</a>

✅ <a href="https://docs.uipath.com/test-manager" target="_blank">Test Manager documentation</a>

---

[Next → More Prompts to Try](01-more-agent-prompts.md){: .md-button .md-button--primary}

---
