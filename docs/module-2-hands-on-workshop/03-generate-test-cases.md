# 3. Generate Test Cases

The **Generate Test Cases** built-in agent, an Autopilot action in Test Manager, reads a requirement and proposes test cases with manual steps. It works from the requirement you improved in [2. Evaluate Requirements](02-evaluate-requirements.md). You review the test cases before they're saved. The project already has 6 test cases on this requirement. Generate once to see how the agent writes manual steps. You don't have to keep what it proposes.

## Generate them with a built-in agent

1. Open the **Submit Loan Request** requirement.
2. Click **Optimize coverage**, and choose **Generate tests**.
3. In **Provide additional context → Add documents**, select:

    ✅ **UiBank Security Guidelines.pdf** — input validation rules for the form fields

    ✅ **UiBank Accessibility Guidelines.docx** — form labels, error messages and keyboard access

    ??? tip "Add documents or Leverage RAG?"
        | | Add documents | Leverage RAG |
        |---|---|---|
        | **What the agent reads** | The documents you select, **in full** | Only the **relevant passages** from a Context Grounding index |
        | **Best for** | Requirements whose rules live in a few known documents | Requirements with ambiguous terms or abbreviations whose meaning is spread across many sources |

        In this workshop, use **Add documents**.

        See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/about-autopilot-chat" target="_blank">About Autopilot chat</a>.

4. On the next screen:
    1. **Select a prompt**: choose **Valid E2E Scenario Testing**.

        ??? info "Editing prompts and adding your own"
            ✅ **For this run only** — edit the prompt right here.

            ✅ **For the whole project** — create new prompts or edit existing ones in the **Prompt Library**, under **Project Settings**.

    2. At the end of the prompt text, on a new line, add these instructions:

        ```text
        Generate 5 test cases. Give every step one action and an expected result, and add preconditions and postconditions. Name every UI element exactly as it is labelled in UiBank. Start steps with Select, Type, Get Text, Check or Select item. Include at least 1 test case for applicants over 65.
        ```

    3. Choose a model.
    4. Click **Generate Tests**. The agent can take a few minutes. You can close the dialog while it works.

5. Under **Latest activity**, click **Generated test cases** to see the proposals.

    ![Generated test cases under Latest activity on the requirement](../assets/images/TM%20Generated%20test%20cases.png)

6. Expand each proposal and keep it only if it traces to one acceptance criterion, has one action per step, uses realistic data and expects what UiBank really shows. Otherwise sharpen the instructions and regenerate. Tick the ones you want to keep and click **Create tests** (with more proposals, the list can span more than one page).

    In production, turn on Testing Process Governance so a second reviewer signs off.

    !!! tip "Check approvals over $100,000"
        UiBank never approves a loan over $100,000, whatever the income. Don't keep a proposal that expects one: it fails in step 8 as a second UiBank defect.

7. Choose **at least 3** test cases on the requirement to use for the rest of the workshop: new ones, existing ones, or a mix. Note their names. You automate them in [6. Automate and Publish the Test Cases](06-automate-and-publish.md).

    !!! warning "You'll need this in step 8"
        Include **at least one** test case that submits a loan request for an applicant **over 65**, such as age 66, and expects it to be **rejected**. If none of yours does, regenerate with that instruction, or create one. Note its name: you'll look for it in steps 6, 7 and 8.

!!! success "Check it"
    You've noted the names of at least 3 test cases on **Submit Loan Request**, and one of them is an over-65 test case that expects a rejection. Each has manual steps with an expected result.

## Nice work!

You've gone from a requirement to reviewed, linked test cases in minutes.

---

[Next → 4. Run Manual Tests](04-run-manual-tests.md){: .md-button .md-button--primary}

---
