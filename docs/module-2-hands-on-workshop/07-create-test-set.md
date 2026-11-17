# 7. Add Test Cases to the Smoke Test Set

A **test set** groups test cases that run together. Your project already has one: **UiBank Smoke Test Set**, with the existing loan test cases. Add the new test cases you automated, so the set runs them too.

## Add your test cases

1. In Test Manager, go to **Test Sets** and open **UiBank Smoke Test Set**.
2. Go to the **Test Cases** tab.

    ??? info "Static or Dynamic Assignment?"
        A test set gets its test cases in one of two ways:

        ✅ **Static Assignment** — pick test cases one by one. The set always runs exactly these.

        ✅ **Dynamic Assignment** — add labels. The set includes every test case with at least one of them.

        See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/quickstart-assigning-test-cases-to-test-sets" target="_blank">Assigning test cases to test sets</a>.

3. Click **Add Test Cases** to see all the test cases in the project.
4. Select the test cases you automated in [6. Automate and Publish the Test Cases](06-automate-and-publish.md), and click **Assign**. They show your project in the **Studio Project** column. Test cases already in the set are ticked in grey.

    ![Add Test Cases with automated test cases showing a Studio Project and Package Name](../assets/images/TM%20Add%20Test%20Cases%20Static.png)

    ??? info "What about the other test cases in the set?"
        They stay. They're manual, so the automated run skips them.

## Configure the automation

1. Still on the set's **Test Cases** tab, click **Configure Automation**.

    ![Configure Automation on the test set's Test Cases tab](../assets/images/TM%20Test%20Set%20Configure%20Automation.png)

2. Check that the execution is set to your personal folder, the one you set as **Default Folder** in [1. Import and Link the Test Manager Project](01-import-tm-project.md#link-the-project-to-your-folder).
3. Set **Runtime Type** to the runtime you set on your machine: **App Testing** or **Testing**. The panel shows **1 Runtimes Available, 1 Connected**.
4. Under **Automation Packages**, select **Autoselect Packages**. Check that it lists your `<YOUR_NAME>_UiBank Tests` package, and click **Save**.

!!! success "Check it"
    **UiBank Smoke Test Set** lists every test case you automated.

!!! warning "Do a test run"
    This is the first time Test Manager runs a test on your machine. It checks your robot setup from [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot), not just the test set, so a problem shows up here, not in step 8.

    Click **Execute → Automated**. The robot uses your desktop and browser, so don't use your mouse or keyboard until the run finishes.

    ![Execute menu on the test set with Automated selected](../assets/images/TM%20Test%20Set%20Execute%20Automated.png)

!!! success "Check it"
    In **Execution**, every test case you automated has a result. The over-65 test case fails. That's expected: you triage it in [8. Run, Triage, and Report](08-run-and-report.md). The set's manual test cases count as **not executed**.

    ![Automated execution of UiBank Smoke Test Set: the over-65 test case failed, the others passed](../assets/images/TM%20Smoke%20Set%20Execution%20Result.png)

## Nice work!

Everything is in place to run, triage, and report.

---

[Next → 08. Run, Triage, and Report](08-run-and-report.md){: .md-button .md-button--primary}

---
