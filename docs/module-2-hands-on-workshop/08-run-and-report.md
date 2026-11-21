# 8. Run, Triage, and Report

It's release night, and the release manager wants to know: **can we ship?** Run the test set, check the results against the requirement, and write the go/no-go report, with evidence.

!!! info "Check these first"
    ✅ **Your robot is available** – connected and not busy, in your Orchestrator folder. Or the set uses **Cloud - Serverless Testing**, if your trainer set it up for you in step 7.

    ✅ **UiBank Smoke Test Set** has your automated test cases, from [7. Add Test Cases to the Smoke Test Set](07-create-test-set.md).

## Run and triage

A failed test doesn't always mean a broken app: the test itself can be wrong. You made this call by hand in [4. Run Manual Tests](04-run-manual-tests.md#1-run-a-test-case). Now a coding agent runs the set and checks every result against the requirement.

This step uses a **coding agent** – Autopilot or Claude Code. Pick yours in the tabs; your choice is remembered on every page.

Go back to the coding agent session that knows your project, from [1. Import and Link the Test Manager Project](01-import-tm-project.md#check-it-with-your-coding-agent):

=== "Autopilot"

    === "Windows"

        Open the **Autopilot** panel in Studio.

        If Autopilot can't start the run, use Delegate instead (see **Prefer Delegate?** below) – that's the rehearsed path.

    === "macOS"

        Open VS Code with the **UiPath Autopilot** extension and open the Autopilot chat. If your Studio on macOS (Preview) shows the Autopilot panel, you can use it instead.

        Not yet rehearsed for this workshop – if it doesn't work, use the Claude Code tab.

=== "Claude Code"

    Continue the step 1 session (`claude --continue` in the same folder), or run `claude` and paste the [step 1 prompt](01-import-tm-project.md#check-it-with-your-coding-agent) first, so it knows your project. Any coding agent with the UiPath skills works the same way; the steps here are for Claude Code.

    The agent runs `uip tm` commands and asks before each one. If it reports an authentication error, run `uip login` again: the login can expire within the hour.

!!! example "It's your turn now!"
    1. Paste:

        ```text
        Start the UiBank Smoke Test Set of my project in Test Manager as an automated run on my robot, the same as Execute → Automated. Don't run the test steps yourself. Wait for it to finish. Then, for this run only, not earlier executions:
        - Give me the totals: passed, failed, none (not executed), and restricted (0 if there are none).
        - For each failed test case, compare its input data and expected outcome with the acceptance criteria of the Submit Loan Request requirement. Classify it as a UiBank defect (the app breaks the requirement) or a test defect (the test expects the wrong result), and quote the criterion you used.
        - For each failed test case, show what UiBank actually returned: the actual value from the failed check.
        ```

    2. Approve each request when the agent asks. The important one is the run itself, a **real execution** on your robot.
    3. Wait 2–5 minutes while it runs the set and checks each result. If the robot runs on your machine, it uses your desktop and browser, so don't use your mouse or keyboard until the agent reports back.

!!! tip "Prefer Delegate?"
    Delegate can run and triage the set too. Go back to your Delegate session and paste:

    ```text
    Trigger the UiBank Smoke Test Set of my project in Test Manager and wait for it to finish. Then, for this run only, not earlier executions:
    - Give me the totals: passed, failed, none, and restricted.
    - For each failed test case, compare its input data and expected outcome with the acceptance criteria of the Submit Loan Request requirement. Classify it as a UiBank defect (the app breaks the requirement) or a test defect (the test expects the wrong result), and quote the criterion you used.
    - For each failed test case, show what UiBank actually returned: the actual value from the failed check.
    ```

    Approve each request when Delegate asks. The important one is the run itself, a **real execution** on your robot. Wait about 5 minutes, and don't use your mouse or keyboard until Delegate reports back.

??? tip "Run a single test case instead"
    Replace `<TEST_CASE_KEY>` with the key of one of your automated test cases, then paste:

    ```text
    Run test case <TEST_CASE_KEY> in my project in Test Manager as an automated run on my robot, wait for it to finish, and tell me whether it passed. If it failed, explain why.
    ```

!!! success "Check it"
    Compare the agent's totals with **Execution** in Test Manager. In **Execution**, the newest run is named *Automated - UiBank Smoke Test Set - …* and started after your step 7 test run. The agent can be wrong, so check its triage against the requirement yourself.

!!! info "What you should find"
    ✅ Your over-65 test case, from [3. Generate Test Cases](03-generate-test-cases.md), **fails**, because UiBank approves the loan. The requirement says applicants over 65 must not be approved, so the test is right and the app is wrong. That's a **UiBank defect**.

    ✅ Any other failure comes from your own test cases. Check how the agent classified it.

    The agent calls the over-65 failure a test defect? Ask it to check that test case against the age criterion again, and share what happened in the workshop chat.

    UiBank rejected the over-65 application? See [Troubleshooting](../module-3-troubleshooting-and-next-steps/02-troubleshooting.md#execution).

??? tip "Optional: cross-check the failures with Autopilot"
    The agent can be wrong, so ask a second tool. In Test Manager, open your project and click **Autopilot** (the sparkle icon, top right). Enter:

    ```text
    Find all failed test case logs from today's runs of UiBank Smoke Test Set
    ```

    Autopilot runs its **Autopilot Search** tool and lists the test case logs. Your over-65 test case should be there. Autopilot can miscount too: compare the list with **Execution**. See <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/search-test-manager-project" target="_blank">Search Test Manager project</a>.

## Write the report

This step uses **Delegate**, the desktop agent: it works in your browser with your mouse and keyboard.

A go/no-go call needs evidence. Delegate repeats the over-65 application in the browser, captures it, and puts it in the report.

!!! example "It's your turn now!"
    1. Copy the totals and the triage your coding agent gave you. Ran the set with Delegate? Skip this.
    2. Go back to your Delegate session. Paste the prompt below and, in the same message, paste the totals and triage under it:

        ```text
        Reproduce the UiBank defect in the browser: open https://uibank.uipath.com, apply for a loan with the data from the over-65 test case, and take a screenshot of the result. Then look up its loan ID on the Loan Lookup page, and take a screenshot. Then create a release manager report in PDF for this run, and save it on my Desktop. Cover this run only, not earlier executions. I need a go/no-go recommendation before tonight's sign-off meeting. Base it on UiBank defects only, and list test defects as follow-ups. Include the triage, and add both screenshots and the loan ID as evidence. Under each screenshot, add one line on what it proves against the requirement.
        ```

        It takes about 6 minutes.

    3. Approve when Delegate asks. Don't use your browser while it reproduces the defect.
    4. If Delegate asks where to save the report, choose your Desktop. Keep the default file name, and select **Submit**.

On a Mac, this uses Delegate for macOS (Preview). Not yet rehearsed for this workshop – if it doesn't work, use the tip below.

??? tip "No Delegate?"
    Ask your coding agent instead, in the same session as the triage. To reproduce the defect, it needs a tool that drives your browser. In rehearsal, Claude Code with the Claude in Chrome extension ran the same prompt in about 4 minutes and saved the PDF on the Desktop.

Delegate gives the path to the saved report and summarizes it in the chat. Always review its output before sharing. The report shows:

✅ **Scope** – the execution it covers

✅ **Totals** – passed, failed, none, and restricted

✅ **Success rate** – passed out of passed + failed (the manual test cases that didn't run don't count)

✅ **Triage** – each failure, whether it's a UiBank or a test defect, and the criterion it breaks

✅ **Evidence** – the approval and Loan Lookup screenshots, each with what it proves, and the loan ID

✅ **Recommendation** – GO or NO-GO, and why

!!! success "Check it"
    The right call is **NO-GO**, because UiBank breaks the age rule, not because of the success rate. Delegate recommends GO? Ask it why, against the over-65 criterion.

    Delegate may also list gaps in the requirement or other observations as follow-ups. Check its reasoning against the requirement before you pass them on. UiBank's Loan Lookup always shows the email someone@sample.com. That's how the demo app works, not a defect to report.

??? tip "Saved as .md instead of PDF?"
    Ask Delegate:

    ```text
    Create a PDF of the report and save it on my Desktop.
    ```

!!! question "Think about it"
    How did you tell a UiBank defect from a test defect? Would the success rate alone have told you to stop the release? What does a developer need to fix it? How long would this take you by hand?

??? example "Optional: Draft the defect"
    Works with Delegate or with your coding agent:

    ```text
    Draft a defect for the UiBank age defect: title, steps to reproduce, test data, expected and actual result, loan ID, and the screenshots. Save it on my Desktop.
    ```

    In a real project, log the defect before the go/no-go call: in your defect tracker, or from the failed result in Test Manager if it's linked to your ALM (Application Lifecycle Management) tool. See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/quickstart-analyzing-results" target="_blank">Analyzing results</a>.

??? example "Optional: Schedule the report as a routine"
    A routine suits a personal report. For the regression run itself, schedule the test set in Test Manager – on the set, **Execute → Create Schedule**, or **Execution → Schedules** – so it runs on an unattended robot (<a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/scheduling-test-executions" target="_blank">Scheduling test executions</a>), or trigger it from your CI/CD (continuous integration and delivery) pipeline. Let the routine only fetch and summarize the results. Routines are a Delegate feature.

    **Save it as a routine.** Ask Delegate, for example: *"Save the triage and report part of this task as a routine called UiBank Release Report. Include my Test Manager project in the routine, so it works when it runs on a schedule."* The routine appears under **Routines** in Delegate's left panel.

    **Put it on a schedule.** Under **Scheduled routines**, a Day / Week / Month calendar shows every routine with a time slot. New routines wait in the **Not scheduled** list below it. Drop one onto a time slot or set it to recur, for example weekdays at 8:00 AM.

    **Start from a ready-made routine.** The Test Cloud plugin includes **Summarize last night's execution of a test set**, already waiting in the **Not scheduled** list. It returns results only after the test set has run overnight, so on workshop day it finds nothing. To try the same summary now, ask: *"Summarize the latest execution of UiBank Smoke Test Set in my project."*

    A scheduled routine runs only if its machine is powered on and signed in at the scheduled time.

## Go further

Stay in the same Delegate session – it remembers the run and the report:

✅ *"Summarize the failures in three bullet points I can paste into Slack."*

✅ *"Add a section to the report with recommended next steps for the developers."*

✅ *"Regenerate the same report for a Developer, with failure details and stack traces."*

More ideas in **[More Prompts to Try](../module-3-troubleshooting-and-next-steps/01-more-agent-prompts.md)**.

## Nice work!

You ran the smoke test set, proved a real UiBank defect, and made the go/no-go call with evidence.

---

[Next → You did it!](you-did-it.md){: .md-button .md-button--primary}

---
