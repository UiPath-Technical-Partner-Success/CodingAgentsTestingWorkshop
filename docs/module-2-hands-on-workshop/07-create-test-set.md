# 7. Add Test Cases to the Smoke Test Set

A **test set** groups test cases that run together. Your project already has one: **UiBank Smoke Test Set**, with the existing loan test cases. Add the new test cases you automated, so the set runs them too.

## Add your test cases

1. In Test Manager, go to **Test Sets** and open **UiBank Smoke Test Set**.
2. Go to the **Test Cases** tab.

    ??? info "Static or Dynamic Assignment?"
        A test set gets its test cases in one of two ways:

        ✅ **Static Assignment** — pick test cases one by one. The set always runs exactly these.

        ✅ **Dynamic Assignment** — add labels. The set includes every test case with at least one of them.

        Use **Static Assignment** in this workshop. The set is already static, and the steps below assume it.

        See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/quickstart-assigning-test-cases-to-test-sets" target="_blank">Assigning test cases to test sets</a>.

3. Under **Static Assignment**, click **Add Test Cases** to see all the test cases in the project.
4. Select the test cases you automated in [6. Automate and Publish the Test Cases](06-automate-and-publish.md), and click **Assign**. They show your package, for example `AlexS_UiBank.Tests`, in the **Package Name** column. Test cases already in the set are ticked in grey and count in **selected**.

    ![Add Test Cases dialog: the automated test cases show their package in the Package Name column](../assets/images/TM%20Add%20Test%20Cases%20Static.png)

    ??? info "What about the other test cases in the set?"
        They stay. They're manual, so the automated run skips them.

!!! success "Check it"
    **UiBank Smoke Test Set** lists every test case you automated.

    Your automated test cases have a green tick in the **Automated** column.

## Configure the automation

1. Still on the set's **Test Cases** tab, click **Configure Automation**.

    ![Configure Automation on the test set's Test Cases tab](../assets/images/TM%20Test%20Set%20Configure%20Automation.png)

2. Check that **Execution folder** shows the folder you created in [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot) (named after you, not **My Workspace**). It's the one you set as **Default Folder** in [1. Import and Link the Test Manager Project](01-import-tm-project.md#link-the-project-to-your-folder), so it reads **Default (…)** with your folder's name.
3. Set **Runtime type**. Use your own machine. **Cloud - Serverless** is a fallback, only when your trainer has set it up for you.

    === "Your machine"

        Pick the runtime you set on your machine in [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot): **App Testing** or **Testing**. It may already be selected. The panel shows **1 Runtimes Available, 1 Connected**.

        Not **Cloud - Serverless Testing**: that runs in the cloud, not on your machine.

    === "Cloud - Serverless"

        Pick **Cloud - Serverless Testing**. Use it only if your trainer added a **Cloud Robot - Serverless** machine to your folder and your project is **Cross-platform**.

        The panel notes that serverless executions are limited to 15 minutes. The Smoke set needs far less.

    Leave **Robot account** on **Any User/Robot account** and **Machine template** on **Any machine template**.

4. Under **Automation packages**, select **Autoselect packages**. Check that it lists your package, for example **`<YOUR_NAME>_UiBank.Tests - 1.0`**, and click **Save**. Test Manager confirms with **Automation details for testset saved successfully!**

!!! warning "Do a test run"
    This is the first time Test Manager runs a test on your robot. It checks your robot setup from [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot), not just the test set, so a problem shows up here, not in step 8.

    Click **Execute → Automated**. Nothing pops up: the run appears in **Execution** as **Automated - UiBank Smoke Test Set -** followed by the date and time. Orchestrator starts one job per test case.

    === "Your machine"

        Your robot runs the test cases one after another, each in under a minute. The robot uses your desktop and browser, so don't use your mouse or keyboard until the run finishes. On a Mac, keep it signed in and unlocked, with Assistant connected.

    === "Cloud - Serverless"

        The test cases run in the cloud, in parallel, in about 30 seconds each. Nothing opens on your machine.

    ![Execute menu on the test set with Automated selected](../assets/images/TM%20Test%20Set%20Execute%20Automated.png)

!!! success "Check it"
    In **Execution**, every test case you automated has a result. The other test cases pass, and the over-65 test case fails on its Verify. That's expected: you triage it in [8. Run, Triage, and Report](08-run-and-report.md). The set's manual test cases show **None** (not executed).

    All of them failed? Open one result. A message such as **Failed to start browser** means a robot problem, not a test failure. See [Troubleshooting](../module-3-troubleshooting-and-next-steps/02-troubleshooting.md#execution).

    ![Automated execution of UiBank Smoke Test Set: the over-65 test case failed, the others passed](../assets/images/TM%20Smoke%20Set%20Execution%20Result.png)

## Nice work!

Everything is in place to run, triage, and report.

---

[Next → 8. Run, Triage, and Report](08-run-and-report.md){: .md-button .md-button--primary}

---
