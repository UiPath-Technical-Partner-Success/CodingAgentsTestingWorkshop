# Troubleshooting

## Delegate

| Symptom | Likely cause / fix |
|---|---|
| Delegate isn't in UiPath Assistant's top ribbon | Your Studio version may be too old. Install the latest STS version from [Prerequisites](../module-0-prerequisites/index.md#your-machine), and ask your trainer to confirm your access. On a Mac, Delegate for macOS (Preview) needs Apple silicon and macOS 14 Sonoma or later. No Delegate at all? Use the coding-agent alternatives in [4. Run Test Cases with Agents](../module-2-hands-on-workshop/04-run-manual-tests.md). |
| Delegate asks for approval on every step | The approval mode is **Cautious**. Click your user name (bottom left) → **Settings** → **Security**, and switch it to **Adaptive**. Delegate still asks before high-impact actions, such as starting the run in step 8. That's expected. Still asked before every step? See <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/tasks-and-prompts-troubleshooting" target="_blank">Tasks and prompts troubleshooting</a>. |
| Delegate can't find your project | Delegate is signed in to the wrong tenant. Ask Delegate *"Run uip login status."* to see which tenant it uses. If it's wrong, ask *"Log me in with uip login."* and sign in to the tenant from your trainer. |
| `Authentication failed` or `401 Unauthorized` | Your `uip` sign-in has expired. Ask Delegate *"Log me in with uip login."* and sign in with your workshop account in the browser window that opens. |
| The Object Repository prompt stalls or misses elements | Import the backup in [5. Set Up Studio and Build the Object Repository](../module-2-hands-on-workshop/05-build-object-repository.md#build-the-object-repository) (*Backup: import a ready-made Object Repository*). The backup works only in a **Windows** project. In a **Cross-platform** project (for example on a Mac), build the Object Repository with the Claude Code tab in step 5 instead. |

## Coding agent

=== "Autopilot"

    | Symptom | Likely cause / fix |
    |---|---|
    | The **Autopilot** panel isn't in Studio | Your Studio is too old. You need Studio 2026.10 LTS or a current STS (2026.0.195 or later). If the version is right, ask your trainer to check that Autopilot is enabled for your tenant (an Autopilot or AI Trust Layer policy in Automation Ops). See <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/enable-disable-functionality" target="_blank">Enabling/disabling Autopilot</a>. |
    | On a Mac, there's no Autopilot in Studio | Use the **UiPath Autopilot** extension in VS Code 1.120.0 or later. Open your project folder and trust the workspace when VS Code asks. Still stuck? Use the Claude Code tab. |
    | Autopilot Search counts don't match Test Manager | Autopilot Search can miscount. Check the numbers in **Execution**. |

=== "Claude Code"

    | Symptom | Likely cause / fix |
    |---|---|
    | `uip: command not found` | The terminal started before the install finished. Open a new terminal and run `uip --help`. Still missing? Run the install one-liner from [Prerequisites](../module-0-prerequisites/index.md#install-the-uip-cli) again – it's safe to re-run. |
    | Claude Code doesn't know the UiPath commands | The UiPath skills aren't installed for Claude Code. Run `uip skills install --agent claude` (global only – `--local` doesn't work for Claude Code), restart `claude`, and ask *"What UiPath skills do you have installed?"* |
    | `uip` commands fail with an authentication error | Your `uip` sign-in expires within the hour. Run `uip login`, pick the workshop tenant in the browser, then check `uip login status` shows "Logged in". |
    | Your robot can't run the project built with `uip rpa` | `uip rpa init` may create a **net10.0** project, which needs a recent Robot (26.10 or later). Ask the agent to make the project **Cross-platform** on **net8.0**, then publish again. |

    Any coding agent with the UiPath skills works the same way; the commands above are for Claude Code.

## Execution

| Symptom | Likely cause / fix |
|---|---|
| *"We weren't able to locate a matching loan ID"* | The loan ID doesn't exist in UiBank. In <a href="https://uibank.uipath.com" target="_blank">UiBank</a>, go to **Products → Loans → Apply For A Loan**, submit an application, and use the new loan ID it shows. |
| Publishing fails | UiPath Assistant isn't connected to Orchestrator. In UiPath Assistant, go to **Preferences** → **Orchestrator connection** and reconnect to the workshop tenant, as in [Prerequisites](../module-0-prerequisites/index.md#connect-studio-and-delegate). Then [publish the test cases](../module-2-hands-on-workshop/06-automate-and-publish.md#publish-the-test-cases) again. |
| Publishing fails because the package already exists | Everyone publishes to the same tenant feed, so your package name must include your name, for example `AlexS_UiBank.Tests`. Publishing again? Use a higher version than the one already in the feed. |
| Delegate can't start the test set run, or **Execute → Automated** is unavailable | The test set has no automated test case. [Publish the test cases](../module-2-hands-on-workshop/06-automate-and-publish.md#publish-the-test-cases) again, then check that the set lists them in [7. Add Test Cases to the Smoke Test Set](../module-2-hands-on-workshop/07-create-test-set.md). |
| The run doesn't use the robot you expect | **Runtime type** isn't set to your machine's runtime. In the test set, click **Configure Automation**, set **Runtime type** to **App Testing** or **Testing**, check it shows **1 Runtimes Available, 1 Connected**, and click **Save**. Pick **Cloud - Serverless Testing** only when your trainer has enabled it as the fallback and your project is **Cross-platform**. See [7. Add Test Cases to the Smoke Test Set](../module-2-hands-on-workshop/07-create-test-set.md#configure-the-automation). |
| `HTTP 400: Please assign folder to project level before executing testcases.` | The project has no default folder. Complete [1. Import and Link the Test Manager Project](../module-2-hands-on-workshop/01-import-tm-project.md#link-the-project-to-your-folder). |
| **A test case you automated** is skipped with no result | It isn't linked to a published automation. Complete [Publish the test cases](../module-2-hands-on-workshop/06-automate-and-publish.md#publish-the-test-cases) and check it shows your package in the **Package Name** column of **Test Cases**. The set's imported manual test cases are always skipped; that's expected. |
| The run stays pending or hangs | The robot is busy or disconnected, or nobody in your folder can run unattended jobs. In Orchestrator, check the machine in your folder is connected and has an **App Testing** or **Testing** runtime, and that your user shows **Attended, Unattended** under **Robot Type** in your folder's **Manage access** tab (**Tenant → Access → Folder management**, then your folder; see [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot)). For **Run autonomously** and **Autonomous Exploration**, pick your machine's runtime: Cloud - Serverless isn't supported there. |
| A test fails at a Type Into step, and the result shows the whole page's text | A failed run left UiBank windows open, and the next run typed into one of them. Close all UiBank windows, then run again. |
| UiBank rejects the over-65 application | UiBank now rejects applicants over 65, so the age defect is fixed. Step 8 has no UiBank defect to triage, so expect **GO**. Tell your trainer. Optional: your trainer may give you a replacement failing test, such as **Submit High-Volume Request** (already in the Smoke set). Automate and publish it in [6. Automate and Publish the Test Cases](../module-2-hands-on-workshop/06-automate-and-publish.md), then rerun step 8. |
| Tests fail with "Cannot communicate with the browser" | A robot-side problem with the UiPath browser extension, not a product defect. Check the extension is installed and enabled on the robot machine. |
| Tests fail with "Failed to start browser. New browser window did not appear." | The robot opened Chrome in your last-used profile, where the UiPath extension is off. Use one Chrome profile for the workshop: open `chrome://extensions` in it, make sure **UiPath Studio Web Automation** is turned on (approve it if Chrome asks), then rerun the test set. This is a robot problem, not a test failure. |

### The robot can't sign in or start the run

=== "Windows"

    The Windows credentials in your folder setup don't match your machine. Check the username (run `whoami`) and password in [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot). Signed in with a PIN or no password? Ask your trainer.

=== "macOS"

    The robot runs your tests in your signed-in Mac session, so it doesn't use a Windows username or password. Keep the Mac signed in and unlocked, with UiPath Assistant signed in and connected, while the tests run. In Orchestrator, check your machine has an **App Testing** runtime and your user has **Unattended** enabled. See <a href="https://docs.uipath.com/robot/standalone/latest/admin-guide/mac-unattended-setup" target="_blank">Setting up unattended robots on macOS</a>.

## Report

| Symptom | Likely cause / fix |
|---|---|
| You can't find the report | Delegate shows the path when it finishes. If you chose **Current working directory**, the file is inside the Assistant install folder, which is hard to find. Ask Delegate *"Create a PDF of the report and copy to my Downloads folder"*. |
| The report numbers don't match Test Manager | Make sure you're comparing the **same execution**. Ask Delegate which execution ID it used. A rerun of the failures updates that execution, so its numbers change after a rerun. |

!!! info "Still stuck?"
    Ask your trainer, or ask your agent – Delegate, Autopilot or Claude Code. For example: *"Why did that last step fail, and how do I fix it?"*

---

[Back to Home](../index.md){: .md-button .md-button--primary}

---
