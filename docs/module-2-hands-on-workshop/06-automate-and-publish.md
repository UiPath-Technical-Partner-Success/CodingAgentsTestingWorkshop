# 6. Automate and Publish the Test Cases

Turn your manual test cases into automations with **Autopilot for Testers** in Studio, then publish them with Delegate. Each automation stays **linked** to its test case in Test Manager.

!!! info "Before you start"
    ✅ Your Studio project is linked to Test Manager, and the **UiPath Banking App** Object Repository is built, from [5. Set Up Studio and Build the Object Repository](05-build-object-repository.md).

## What you'll do

You switch between **two tools** on this page. Each step is labeled with the one it uses:

| Tool | What you do |
|---|---|
| <span class="tool-badge tool-badge--studio">Studio Desktop</span> | Work in Studio Desktop yourself, with **Autopilot for Testers** |
| <span class="tool-badge tool-badge--delegate">Delegate</span> | Paste the prompt in Delegate, then wait and watch it work in Studio |

Click a step to jump to it.

<div class="flow">
  <div class="flow-part flow-part--studio" style="--steps: 1">
    <span class="flow-part-label">Studio Desktop</span>
    <div class="flow-part-steps">
      <a class="flow-step" href="#automate-the-test-cases-with-studio-desktop">Automate the test cases with Autopilot</a>
    </div>
  </div>
  <span class="flow-arrow"></span>
  <div class="flow-part flow-part--delegate" style="--steps: 1">
    <span class="flow-part-label">Delegate</span>
    <div class="flow-part-steps">
      <a class="flow-step" href="#publish-the-test-cases">Publish the test cases</a>
    </div>
  </div>
</div>

## Automate the test cases with Studio Desktop

<span class="tool-badge tool-badge--studio">Studio Desktop</span>

Automate **every** test case you chose in [3. Generate Test Cases](03-generate-test-cases.md). 


1. In **Test Explorer**, right-click one of these test cases → **Generate Test Case with Autopilot**.

    ![Generate Test Case with Autopilot in the Test Explorer right-click menu](../assets/images/testExplorer.png)

2. <span class="tool-badge tool-badge--delegate">Delegate</span> Review and fix it with Delegate.

    !!! warning "Save and close first"
        **Save** the test case in Studio, then **close its tab**. Until you save, the file doesn't exist, so Delegate can't find it. If the tab stays open, Studio can save over Delegate's changes.

    Replace `<TEST_CASE_KEY>` (the test case key in Test Manager, such as `UIBAS:3`) and `<YOUR_NAME>`, then paste:

    ```text
    Review and fix the automated test case <TEST_CASE_KEY> in the <YOUR_NAME>_UiBank Tests project in Studio.
    # Ensure all UI activities use Object Repository elements only
    # No fixed Delay activities
    # No empty or extra activities
    # Check the Use Application/Browser activity cards. Ensure
        - First card: set 'Open' property to Always.
        - Last card: set 'Close' property to Always.
        - Cards in between: keep Open and Close property as Never.
    # Give each activity a short, clear display name without test data.
    # Use the manual test case as reference and add the data to all the Type Into activities.
    # End with a Verify activity that checks the expected result from the manual test case.
    # Before the Verify activity, add a Log Message that writes the text it checks.
    # On the Verify activity, turn on Take screenshot if failed.
    ```

3. When Delegate finishes, open the test case again and check the changes.
4. **Run** it locally. Don't use your mouse or keyboard until the run finishes.
5. Repeat steps 1–4 for each of your other chosen test cases.

!!! success "Check it"
    Each test case passes locally, except the over-65 one. It **fails** on its Verify activity. Keep it: you triage it in [8. Run, Triage, and Report](08-run-and-report.md).

## Publish the test cases

<span class="tool-badge tool-badge--delegate">Delegate</span>

Replace `<TEST_CASE_1>`, `<TEST_CASE_2>`, `<TEST_CASE_3>` with the names of the test cases you automated (add more if you have them), then paste:

```text
Set the test cases <TEST_CASE_1>, <TEST_CASE_2>, <TEST_CASE_3> in <YOUR_NAME>_UiBank Tests as publishable, and publish the project to the Orchestrator Tenant Processes Feed, not my Personal Workspace.
```

??? tip "Do it by hand in Studio"
    1. In the **Project** panel, right-click each automated test case → **Set as Publishable**.

        ![Set as Publishable in the Project panel's right-click menu](../assets/images/Studio%20Set%20As%20Publishable.png)

    2. Select **Publish** in the Studio ribbon.

        ![Publish in the Studio ribbon](../assets/images/Studio%20Publish%20button.jpg)

    3. In **Publish Test Cases**, check the **Package Name** and **New Version**, then select **Next**.

        ![Package properties in Publish Test Cases](../assets/images/Studio%20Publish%20TC%20Window.png)

    4. In **Publish options**, choose the **Orchestrator Tenant Processes Feed**, then select **Publish**.

!!! success "Check it"
    In Test Manager, open **Test Cases**. Each test case you automated shows your Studio project in the **Studio Project** column.

    ![Test Cases list with the Studio Project column filled in for automated test cases](../assets/images/TM%20Test%20Cases%20Studio%20Project.png)

??? tip "Optional: confirm the links with Delegate"
    Replace `<TEST_CASE_1>`, `<TEST_CASE_2>`, `<TEST_CASE_3>` as before, then paste in Delegate:

    ```text
    Confirm that test cases <TEST_CASE_1>, <TEST_CASE_2>, <TEST_CASE_3> in my Test Manager project are linked to automations in the <YOUR_NAME>_UiBank Tests package. List any that aren't.
    ```

!!! warning "Don't continue until every test case you chose is automated"
    The test set runs only automated test cases. A test case that isn't linked to your automation is left out of the run and the report.

    ??? tip "Automated in Studio, but the Studio Project column is empty?"
        Link it yourself in Studio:

        1. In the **Explorer** panel, right-click the test case → **Link to Test Manager**.

            ![Link to Test Manager in the Explorer panel's right-click menu](../assets/images/Studio%20Link%20to%20Test%20Manager.png){ width="350" }

        2. Check **Project** shows your project. In **Test**, search for the test case by name and select it. Select **OK**.

            The screenshot shows a sample test case selected. Yours has its own key and name.

            ![Link to Test Manager dialog with a sample test case selected in the Test field](../assets/images/Studio%20Link%20to%20Test%20Manager%20dialog.png){ width="500" }

            !!! warning "Don't pick &lt;new test case&gt;"
                It creates a duplicate test case in Test Manager instead of linking the one you have.


## Nice work!

Your test cases are automated and published, ready to run from Test Manager.

---

[Next → 7. Add Test Cases to the Smoke Test Set](07-create-test-set.md){: .md-button .md-button--primary}

---
