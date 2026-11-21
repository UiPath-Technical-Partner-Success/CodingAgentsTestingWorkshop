# 4. Run Manual Tests

Run a manual test case with Delegate, and record its results in Test Manager.

## Run manual tests with Delegate

With Delegate, you can run a test case or create a new one from a business document. You review the work and decide what to save in Test Manager.

This step uses **Delegate**, the desktop agent: it works in your browser with your mouse and keyboard.

Go back to your Delegate session. Delegate is generally available on Windows. On a Mac, Delegate for macOS (Preview) runs the same prompts.

??? tip "No Delegate?"
    You can still run a manual test case and record its result in Test Manager:

    ✅ **Run it yourself** – use the [manual execution assistant](#other-ways-to-run-a-manual-test-case) in Test Manager, described further down this page.

    ✅ **Use a coding agent that can drive a browser** – for example Claude Code with the UiPath skills and a browser tool, such as Claude in Chrome. Paste the same prompt. The agent records the result with `uip tm` commands and names the execution itself, so look for the newest execution with your test case name. It attaches only what it chooses, not a trace file per step, and may save the screenshot in its working folder instead of your Desktop.

### 1 – Run a test case

!!! example "It's your turn now!"
    1. Keep only one UiBank tab open. Delegate finds the window by its title, and the prompt names UiBank.
    2. Before your first prompt, attach only the browser window with UiBank to the chat (the screen icon next to the chatbox). Delegate then sees nothing else on your screen.
    3. Replace `<TEST_CASE_KEY>` with the key of one of the test cases you chose in [3. Generate Test Cases](03-generate-test-cases.md), not the over-65 one. A key is your project prefix, a colon and a number, for example `UIBAS:43`. Then paste:

        ```text
        Run the manual test case <TEST_CASE_KEY>. Open UiBank at https://uibank.uipath.com, follow the test case's manual steps in the browser, and check every expected result. Take a screenshot at the final validation step and save it to my Desktop. Push the results to Test Manager. If any step failed, explain the reason.
        ```

        It takes about 10 minutes. Delegate uses your mouse and keyboard, so don't touch them until it reports back. Follow its progress in the task list. If your screen locks, unlock it, and Delegate carries on.

    4. If Delegate asks for permission to push the result, approve it. It records the result in a test set execution, which you'll find under **Execution**.
    5. For any failure, decide: **defect in UiBank**, or **problem with the test case**?

    On a Mac, Delegate for macOS (Preview) is not yet rehearsed for this workshop – if it doesn't work, use the **No Delegate?** tip above.

!!! success "Check it"
    **Execution** → open the newest execution with your test case name (Delegate names it **Delegate-** followed by the test case name and the date). It shows the test case result and each step's result, with a Delegate trace file attached to every step. The final screenshot is on your Desktop.

!!! question "Think about it"
    Did Delegate stumble on a step? Autopilot automates these same steps in [6. Automate and Publish the Test Cases](06-automate-and-publish.md), so fix them now:

    ```text
    Rewrite the steps of test case <TEST_CASE_KEY> that were unclear during this run, so each one has a single clear action and expected result. Show me the changes before you save them to Test Manager.
    ```

### 2 – Create a new requirement and test case (optional)

The business has documented a new process, **Loan lookup**, in a Process Design Document (PDD). It isn't in your requirements yet.

!!! example "It's your turn now!"
    1. Download the PDD, <a href="../../assets/Files/PDD/Loan%20lookup%20process%20to%20be%20tested.docx" target="_blank">Loan lookup process to be tested.docx</a>.
    2. Attach it in Delegate, then paste:

        ```text
        Analyze the attached PDD and create + save a requirement and a manual test case directly in UiPath Test Manager.

        Requirement: Create one new requirement for the process described in the PDD (don't create it if an existing requirement already covers this exact process – check first and tell me if you find one instead of creating a duplicate). Name it Loan Lookup. Its description should summarize the user flow (pages/actions) and any acceptance criteria from the PDD.
        Test case: Create one manual test case - infer name from the PDD, derived from the PDD's numbered steps/screenshots – one test step per documented UI action, each with an expected result. Don't use the loan ID shown in the PDD: the step that enters the loan ID should use a loan ID from a loan applied for today.
        Final step: After the PDD's last action, add a step that verifies the loan details page shows the same loan ID that was entered, along with the rest of the loan's details.
        Link: Link the new test case to the new requirement.
        Report back: give me the created requirement key and test case key when done.
        ```

    3. Paste:

        ```text
        Apply for a loan in UiBank at https://uibank.uipath.com, note the new loan ID it shows, then run the new Loan Lookup test case with that loan ID.
        ```

        UiBank's button for Loan Lookup is **Already Have A Loan?**.

        !!! info "The loan ID ages"
            UiBank may drop old loans. If you rerun this test case on another day, apply for a new loan first.

!!! success "Check it"
    A new **Loan Lookup** requirement, with a linked test case that has manual steps and a result in **Execution**. Don't check the email address on the loan details page: UiBank shows a sample address.

??? example "Not quite right? Talk to Delegate"
    Open the new requirement and test case in Test Manager. Check the title, description, acceptance criteria, steps, and expected results.

    Then tell Delegate what to fix, in your own words, just as you'd tell a colleague. For example:

    ✅ *"The test case must check that the loan ID is the same, and that the loan's other details are displayed"*

    ✅ *"Don't use the data from the PDD in the test case"*

    ✅ *"Add the label 'Delegate' to this test case and requirement"*

    Keep going until you're happy with both.

??? example "Go further – Organize test cases in bulk"
    Paste:

    ```text
    Create a custom field definition for test cases in my project:
    - Name: Test Tier
    - Description: How often this test should run: every build, daily, or before release.
    - Object type: Test Cases
    - Data type: Label
    - Suggested values: Smoke, Core, Extended

    Then set Test Tier to "Smoke" on every test case in UiBank Smoke Test Set.
    ```

    !!! success "Check it"
        Open any test case in **UiBank Smoke Test Set**. Its **Details** tab shows the **Test Tier** dropdown set to **Smoke** (not a second Test Tier line).

    **Test Tier** is only a field. It doesn't add test cases to **UiBank Smoke Test Set**.

??? info "Beyond running tests – Delegate across the whole manual testing cycle"
    Ideas to try on your own project, in your own words:

    ✅ **Find test ideas** – from a requirement's acceptance criteria, or from a screenshot of a screen, including boundary and negative cases.

    ✅ **Write the steps** – turn those ideas into manual test cases and link them to the requirement.

    ✅ **Run them with you** – Delegate runs the steps and stops to ask when it needs a decision from you. Don't paste passwords into the chat: keep test logins in an Orchestrator Credential asset and give Delegate the asset name.

    ✅ **Record the results** – create test results with screenshots of failed steps, and upload them to Test Manager.

## Other ways to run a manual test case

A **manual test case** is a test case with steps but no automation yet. A person can run it, or an agent can. There are three ways, and each records its results in Test Manager:

| | What it runs | Who runs the steps | Apps it can test | Setup needed |
|---|---|---|---|---|
| **Delegate** *(used in this workshop)* | One test case | Delegate, on your machine (Windows; macOS in Preview) | Web and desktop apps | None |
| **Manual execution assistant** | A whole test set | You | Any | None |
| **Run autonomously (Autonomous Test Execution)** | One test case | Autopilot, on a robot | Web apps | Preview, Test Cloud only. A robot in the project's default folder (set up in [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot)), not a serverless one, and App Test Platform Units |

See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/executing-manual-tests" target="_blank">Executing manual tests</a>.

??? tip "Manual execution assistant"
    You run every test case in a test set yourself, one after another.

    1. Go to **Test Sets**, open **UiBank Smoke Test Set**, and select **Execute → Manually**.

        The set holds the imported test cases. Your own test cases join it in [7. Add Test Cases to the Smoke Test Set](07-create-test-set.md).

        !!! info "Allow pop-ups for Test Manager"
            The manual execution assistant opens in a new window.

    2. If the test case has a precondition, the state the app must be in before the test, set up the app as it says.
    3. Perform each step, then select **Set Passed** or **Set Failed** (comment on failures).
    4. At any step, capture a screenshot or upload related files as attachments.

        !!! info "Pass several steps at once"
            Select **Set Passed Until Here**.

    5. If the test case has a postcondition, the state the app must be in after the test, check it. Select **Condition Met** if it holds.
    6. Select **Next** to run the next test case. After the last one, select **Done**.
    7. Check the results in the project's **Execution** section.

    See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/executing-test-sets-manually" target="_blank">Executing test sets manually</a>.

??? tip "Run autonomously (Preview, Test Cloud only)"
    **Autonomous Test Execution** runs one manual test case with Autopilot, in one click, on a robot. You start it from the test case, not from a test set. It needs a robot on a machine in your folder – serverless robots aren't supported. Mac robots aren't documented for it: on a Mac, watch your trainer's demo.

    1. Go to **Test Cases**, open a manual test case, and go to the **Manual Steps** tab. In the right-hand panel, select **Run autonomously**.

        ![Run Autonomously in the Manual Steps tab](../assets/images/TM%20Run%20autonomously.png)

    2. Enter the **Url**, `https://uibank.uipath.com`. Keep the recommended **Model**. Turn on **Enable live streaming** to watch Autopilot drive the browser, and take over if needed. Select **Next**.

        Your tenant may show slightly different labels.

    3. Check **Select folder** (your Default Folder) and set **Runtime type** to your machine's runtime, **App Testing** or **Testing** – change it if it shows a serverless runtime. The robot on your machine must also show as connected in UiPath Assistant. Select **Run**.

        Still **Pending** after 2 minutes? Check the runtime type is your machine's **App Testing** or **Testing**, not a serverless one, and that your user shows **Attended, Unattended** under **Robot Type** in your folder's **Manage access** tab ([Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot)).

    4. When it finishes, open the execution:

        ✅ **Logs** – each step's result, expected behavior, and screenshots. Expand a step to see what Autopilot did.

        ✅ **Execution Log** – Autopilot's reasoning, such as how it found an element or compared a result.

    See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/running-autonomous-test-execution" target="_blank">Running Autonomous Test Execution</a>.

## Explore without a test case

**Autonomous Exploration** doesn't run a test case. Autopilot explores the app from a requirement, designs tests and runs them within a time-box.

??? tip "No test case yet? Explore the requirement autonomously (Preview, Test Cloud only)"
    **Autonomous Exploration** is exploratory testing with Autopilot: it learns the app, designs tests, and runs them within a time-box. Windows only – on a Mac, watch the trainer's demo.

    1. Open a **requirement** → **+ Autonomous Exploration**.
    2. Enter the **Test URL**, a **Timebox (minutes)**, and select a **Model**. Enable live streaming to watch it explore. Select **Next**.

        Your tenant may show slightly different labels.

    3. Check the folder, set **Runtime type** to **App Testing** or **Testing**, and select **Start Autonomous Exploration**. When it's **Completed**, select **Show report**.

        Still **Pending** after 2 minutes? Use the same checks as in **Run autonomously** above.

    Needs a Windows robot in the project's default folder (set up in [Prerequisites](../module-0-prerequisites/index.md#orchestrator-folder-and-robot)), not a serverless one, with the UiPath browser extension set to **Allow in Incognito**, and App Test Platform Units. See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/running-autonomous-exploration" target="_blank">Running Autonomous Exploration</a>.

## Nice work!

You ran a test case against the real application, with its result in Test Manager. Next, you'll connect Studio to automate your test cases.

---

[Next → 5. Set Up Studio and Build the Object Repository](05-build-object-repository.md){: .md-button .md-button--primary}

---
