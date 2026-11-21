# 6. Automate and Publish the Test Cases

Turn your manual test cases into automations with a coding agent – **Autopilot for Testers** in Studio, or Claude Code – then publish them. Each automation stays **linked** to its test case in Test Manager.

!!! info "Before you start"
    ✅ Your Studio project is linked to Test Manager, and the **UiPath Banking App** Object Repository is built, from [5. Set Up Studio and Build the Object Repository](05-build-object-repository.md).

## What you'll do

This step uses a **coding agent** – Autopilot or Claude Code. Pick yours in the tabs; your choice is remembered on every page.

With Autopilot on Windows, you work in **Studio Desktop** the whole time:

| Tool | What you do |
|---|---|
| <span class="tool-badge tool-badge--studio">Studio Desktop</span> | Generate each test case with **Autopilot for Testers**, then review it and publish with the **Autopilot** panel |
| <span class="tool-badge tool-badge--delegate">Delegate</span> | Optional: Delegate can do the review and the publish instead. Look for the **Prefer Delegate?** tips |

With Autopilot on a Mac, you use the Autopilot chat in VS Code. With Claude Code, you paste every prompt in Claude Code.

Click a step to jump to it.

<div class="flow">
  <div class="flow-part flow-part--studio" style="--steps: 3">
    <span class="flow-part-label">Studio Desktop</span>
    <div class="flow-part-steps">
      <a class="flow-step" href="#automate-the-test-cases">Automate the test cases with Autopilot</a>
      <a class="flow-step" href="#automate-the-test-cases">Review each test case with Autopilot</a>
      <a class="flow-step" href="#publish-the-test-cases">Publish the test cases</a>
    </div>
  </div>
</div>

## Automate the test cases

<span class="tool-badge tool-badge--studio">Studio Desktop</span>

Automate **every** test case you chose in [3. Generate Test Cases](03-generate-test-cases.md).

After a test case is generated, you review and fix it with the prompt below. Review it like a pull request: you're checking structure, not just whether it runs.

Replace `<TEST_CASE_KEY>` (the test case key in Test Manager, such as `UIBAS:3`) and `<YOUR_NAME>` each time you paste it:

```text
Review and fix the automated test case <TEST_CASE_KEY> in the <YOUR_NAME>_UiBank Tests project in Studio.
# Ensure all UI activities use Object Repository elements only
# No fixed Delay activities – wait for the app state instead (for example, Check App State)
# No empty or extra activities
# Structure the test case as Given / When / Then sections: Given prepares the app state, When performs the actions, Then verifies the result.
# Check the Use Application/Browser activity cards. Ensure
    - First card: set 'Open' property to Always.
    - Last card: set 'Close' property to Always.
    - Cards in between: keep Open and Close property as Never.
    - Only one card: set both Open and Close to Always.
# Give each activity a short, clear display name without test data.
# Use the manual test case as reference and add the data to all the Type Into and Select Item activities.
# End with one Verify activity that checks the result message (approval or rejection) expected by the manual test case. Check a key phrase with Contains, not an exact match: UiBank's result block also holds the rate, loan ID and button labels.
# Before the Verify activity, add a Log Message that writes the text it checks.
# On the Verify activity, turn on Take screenshot if failed.
```

=== "Autopilot"

    === "Windows"

        1. In **Test Explorer**, find one of these test cases (use **Manual Test Cases** in the filter if the list is long), right-click it → **Generate Test Case with Autopilot**. It takes about 6 minutes.

            ![Generate Test Case with Autopilot in the Test Explorer right-click menu](../assets/images/testExplorer.png)

            Autopilot matches each step's target to an Object Repository element by name, so the names in the manual steps must be the ones captured in [5. Set Up Studio and Build the Object Repository](05-build-object-repository.md#build-the-object-repository). If a step doesn't map, fix the name in the test case and generate again.

        2. Review and fix it with the **Autopilot** panel.

            **Save** the test case first: until you save, the file doesn't exist. Open the **Autopilot** panel in Studio (2026.10 LTS or a current STS, 2026.0.195 or later) and paste the review prompt above. Autopilot edits the workflow in place. See <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-in-studio-desktop" target="_blank">Autopilot in Studio Desktop</a>.

            The Autopilot panel isn't yet rehearsed for this review. If it doesn't work, use Delegate:

            ??? tip "Prefer Delegate?"
                Delegate is the path rehearsed for this workshop.

                !!! warning "Save and close first"
                    **Save** the test case in Studio, then **close its tab**. Until you save, the file doesn't exist, so Delegate can't find it. If the tab stays open, Studio can save over Delegate's changes.

                Paste the review prompt above in Delegate. It takes about 3 minutes.

        3. When Autopilot (or Delegate) finishes, open the test case again and check the changes.
        4. **Run** it locally. It takes under a minute. Don't use your mouse or keyboard until the run finishes. On the robot, in steps 7 and 8, each test case takes seconds.
        5. Repeat steps 1–4 for each of your other chosen test cases.

    === "macOS"

        Studio on macOS (Preview) doesn't document **Test Explorer** or **Generate Test Case with Autopilot** yet, so you ask Autopilot in a prompt.

        1. Open your project folder in VS Code with the **UiPath Autopilot** extension. If your Studio on macOS (Preview) shows the Autopilot panel, you can use it instead.
        2. Replace `<TEST_CASE_KEY>` and `<YOUR_NAME>`, then paste:

            ```text
            Automate the manual test case <TEST_CASE_KEY> from my Test Manager project in the <YOUR_NAME>_UiBank Tests project. Read its manual steps from Test Manager and write it as a Studio test case that uses only the UiPath Banking App elements in the project's Object Repository.
            ```

        3. When it finishes, paste the review prompt above in the same chat.
        4. Ask it to run the test case locally and show the result of the Verify activity. A run takes 1–3 minutes. Don't use your mouse or keyboard until the run finishes.
        5. Repeat steps 2–4 for each of your other chosen test cases.

        Not yet rehearsed for this workshop – if it doesn't work, use the Claude Code tab.

=== "Claude Code"

    Any coding agent with the UiPath skills works the same way; the commands below are for Claude Code.

    1. Run `claude` in your project folder. A new session doesn't remember step 1, so paste the [step 1 prompt](01-import-tm-project.md#check-it-with-your-coding-agent) first, so it knows your project (or run `claude --continue` if you're in the same folder as in step 1). Replace `<TEST_CASE_KEY>` and `<YOUR_NAME>`, then paste:

        ```text
        Automate the manual test case <TEST_CASE_KEY> from my Test Manager project in the <YOUR_NAME>_UiBank Tests project. Read its manual steps from Test Manager and write it as a Studio test case that uses only the UiPath Banking App elements in the project's Object Repository.
        ```

        The agent reads the manual steps with `uip tm`, writes the test case and links its activities to the Object Repository elements. In a Cross-platform project there's no **Verify Control Attribute**, so it uses **Get Text**, **Log Message** and **Verify Expression with Operator** with the operator **Contains**.

    2. When it finishes, paste the review prompt above in the same session.
    3. Ask it to run the test case locally and show the Verify result from the run log. A run takes from about 15 seconds to 3 minutes. Don't use your mouse or keyboard until the run finishes. On the robot, in steps 7 and 8, each test case takes seconds.
    4. Repeat steps 1–3 for each of your other chosen test cases. In our rehearsal, writing and linking three test cases took about 3 minutes in all.

!!! success "Check it"
    Each test case passes locally, except the over-65 one. It **fails** on its Verify activity: the Output panel (or the run log) shows **Verification failed** with the text UiBank returned. In a Cross-platform project, the run itself still completes. Keep it: you triage it in [8. Run, Triage, and Report](08-run-and-report.md).

## Publish the test cases

<span class="tool-badge tool-badge--studio">Studio Desktop</span>

Replace `<TEST_CASE_NAME_1>`, `<TEST_CASE_NAME_2>`, `<TEST_CASE_NAME_3>` with the names of the test cases you automated (add more if you have them), and `<YOUR_NAME>` with your name:

```text
Set the test cases <TEST_CASE_NAME_1>, <TEST_CASE_NAME_2>, <TEST_CASE_NAME_3> in <YOUR_NAME>_UiBank Tests as publishable, and publish the project to the Orchestrator Tenant Processes Feed, not my Personal Workspace.
```

=== "Autopilot"

    On Windows, paste the prompt in the **Autopilot** panel, or do it by hand in Studio (tip below). On a Mac, paste it in the Autopilot chat you used above.

    Autopilot can publish from the command line, and a publish from the command line may not link the test cases: check the **Package Name** column below and, if it's empty, link each one (see **Automated, but the Package Name column is empty?** below). Publishing with the Autopilot panel isn't yet rehearsed for this workshop.

    ??? tip "Prefer Delegate?"
        On Windows, paste the prompt in Delegate, as for the review. It takes about 3 minutes. This is the path rehearsed for this workshop.

=== "Claude Code"

    Paste the prompt in Claude Code. It publishes the package with `uip rpa publish`.

    A publish from the command line doesn't link the test cases to Test Manager. Link each one in Test Manager: see **Automated, but the Package Name column is empty?** below. Or ask the agent to link them: it creates the process in your folder and runs `uip tm testcases link-automation`.

??? tip "Do it by hand in Studio"
    1. In the **Project Explorer**, right-click each automated test case → **Set as Publishable**.

        ![Set as Publishable in the Project Explorer's right-click menu](../assets/images/Studio%20Set%20As%20Publishable.png)

    2. Select **Publish** in the Studio ribbon.

        ![Publish in the Studio ribbon](../assets/images/Studio%20Publish%20button.jpg)

    3. In **Publish Test Cases**, check the **Package Name** and **New Version**, then select **Next**.

        ![Package properties in Publish Test Cases](../assets/images/Studio%20Publish%20TC%20Window.png)

    4. In **Publish options**, choose the **Orchestrator Tenant Processes Feed**, then select **Publish**.

!!! success "Check it"
    In Test Manager, open **Test Cases**. Each test case you automated shows your package, for example `AlexS_UiBank.Tests`, in the **Package Name** column. Linked from Studio, it also shows your project in the **Studio Project** column.

    ![Test Cases list; the automated test cases show their package in the Package Name column](../assets/images/TM%20Test%20Cases%20Studio%20Project.png)

??? tip "Optional: confirm the links with Delegate or your coding agent"
    Replace `<TEST_CASE_NAME_1>`, `<TEST_CASE_NAME_2>`, `<TEST_CASE_NAME_3>` and `<YOUR_NAME>` as before, then paste in Delegate or your coding agent:

    ```text
    Confirm that test cases <TEST_CASE_NAME_1>, <TEST_CASE_NAME_2>, <TEST_CASE_NAME_3> in my Test Manager project are linked to automations in the <YOUR_NAME>_UiBank.Tests package. List any that aren't.
    ```

!!! warning "Don't continue until every test case you chose is automated"
    The test set runs only automated test cases. A test case that isn't linked to your automation is left out of the run and the report.

    ??? tip "Automated, but the Package Name column is empty?"
        Link it yourself in Studio:

        1. In the **Project Explorer**, right-click the test case → **Link to Test Manager**.

            ![Link to Test Manager in the Project Explorer's right-click menu](../assets/images/Studio%20Link%20to%20Test%20Manager.png){ width="350" }

        2. Check **Project** shows your project. In **Test**, search for the test case by name and select it. Select **OK**.

            The screenshot shows a sample test case selected. Yours has its own key and name.

            ![Link to Test Manager dialog with a sample test case selected in the Test field](../assets/images/Studio%20Link%20to%20Test%20Manager%20dialog.png){ width="500" }

            !!! warning "Don't pick &lt;new test case&gt;"
                It creates a duplicate test case in Test Manager instead of linking the one you have.

        Or link it in Test Manager – this works on any OS and with any agent: open the test case → **Automation** tab → **Select Automation** (called **Configure Automation** in some tenants). In **Package Source**, keep **Tenant Package Feed**, select your test case from the list, and select **Save**. Test Manager shows "Automation updated successfully!". Your tenant may show slightly different labels.

## Nice work!

Your test cases are automated and published, ready to run from Test Manager.

---

[Next → 7. Add Test Cases to the Smoke Test Set](07-create-test-set.md){: .md-button .md-button--primary}

---
