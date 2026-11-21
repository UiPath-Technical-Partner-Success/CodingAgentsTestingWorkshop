# 1. Import and Link the Test Manager Project

You start from a ready-made **UiBank** project: a requirement, test cases, a test set, results, and attachments.

## Download the project file

1. Download <a href="../../assets/Files/Test%20Manager%20Project/Agentic%20Testing%20Workshop%20-%20Sample%20Test%20Manager%20Project.zip" target="_blank">Agentic Testing Workshop - Sample Test Manager Project.zip</a>.
2. Unzip it. You'll import the `.tmh` file inside.

## Import it into Test Manager

1. Open **Test Manager** in the workshop tenant.
2. On **Projects**, select **Import project**, then **Add file** and select the `.tmh` file. Keep **Target: New project**.
3. Replace the **Name** and **Prefix** (project key) with your own, for example `UiBank_AlexS` and `UIBAS`, so your project is unique on the shared tenant.
4. Clear **Include automation information for test cases** (it's checked by default). Leave **Import governance information** and **Import project configuration** cleared.
5. Select **Import**, then **OK** when the upload completes.

!!! warning "Important"
    ✅ Clear **Include automation information for test cases** before you select **Import**.

    ✅ The import runs in the background and takes 3–15 minutes (about 3 minutes in rehearsal), longer when the whole class imports at once. Refresh **Projects** until your project card shows **Created on** instead of **Import in progress…**. Don't link the folder or run the project check before then.

    ✅ Don't see your card? Search for your project name on **Projects**. The project **Dashboard** may show **No results**: the imported results are older than its default date range.

## Link the project to your folder

To run tests automatically, Test Manager needs to know which **Orchestrator folder** to use: the folder you created in [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot), named after you – not **My Workspace**.

!!! example "It's your turn now!"
    In your Test Manager project, go to **Project Settings**, open the **Automation** tab, set **Default Folder** to the folder named after you (not **My Workspace**; type its name to filter the list), and click **Save**.

!!! failure "Skipped this step?"
    Runs fail with `HTTP 400: Please assign folder to project level before executing testcases.`

    Your folder isn't in the **Default Folder** list? You're not assigned to it. Ask your trainer.

## Check it with your coding agent

This step uses a **coding agent** – Autopilot or Claude Code. Pick yours in the tabs; your choice is remembered on every page.

Wait until your project card shows **Created on**, then paste this prompt into your coding agent:

```text
List my Test Manager projects whose name contains <YOUR_NAME>, with their details. If there's more than one, ask me which one to use for this workshop. Remember that project, and use it whenever I ask about my project in this session.
```

=== "Autopilot"

    === "Windows"

        Open the **Autopilot** panel in Studio and paste the prompt.

        No Autopilot panel without an open project? Run the check in Delegate instead (next box) – it lists the same projects.

    === "macOS"

        Open VS Code with the **UiPath Autopilot** extension, open the Autopilot chat and paste the prompt. If your Studio on macOS (Preview) shows the Autopilot panel, you can use it instead.

        Not yet rehearsed for this workshop – if it doesn't work, use the Claude Code tab.

=== "Claude Code"

    In a terminal, run `claude` and paste the prompt. Any coding agent with the UiPath skills works the same way; the steps here are for Claude Code. Not set up yet? See [Set up your coding agent](../module-0-prerequisites/index.md#set-up-your-coding-agent).

    If the agent reports an authentication error, run `uip login` again: the login can expire within the hour.

!!! success "Check it"
    The agent lists your Test Manager projects, including the one you just imported. If you have more than one, it asks which one to use. Your project has 1 requirement (**Submit Loan Request**), 6 test cases and 1 test set (**UiBank Smoke Test Set**).

!!! example "It's your turn now!"
    [Open Delegate](../module-0-prerequisites/index.md#connect-studio-and-delegate) and paste the same prompt. Steps 4, 5 and 8 use **Delegate**, the desktop agent (step 6 can too), and it only knows what you tell it.

    On a Mac without Delegate? Skip this, and use the **No Delegate?** tips in steps 4, 5 and 8.

## Nice work!

Your project is imported and linked to your folder, and your agents know which project is yours.

---

[Next → 2. Evaluate Requirements](02-evaluate-requirements.md){: .md-button .md-button--primary}

---
