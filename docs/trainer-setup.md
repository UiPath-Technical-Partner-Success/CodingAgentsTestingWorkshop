# Trainer Setup

Complete this checklist **before the workshop**, ideally a few days ahead.

## Organization and tenant

✅ Create the workshop **tenant** in an organization.

!!! info "Test Cloud only"
    **Run autonomously** and **Autonomous Exploration** are only available in Test Cloud.

✅ Make sure the tenant has **Test Manager** and **Orchestrator** enabled.

✅ Make sure **Autopilot for Testers** is allowed for the tenant, in Test Manager and in Studio. Check that no AI Trust Layer or governance policy blocks it.

!!! success "Check it"
    Open a requirement in Test Manager → **Optimize Coverage**: **Evaluate Quality** is available.

✅ Make sure learners can use **Delegate** in the organization.

## Users and group

✅ Create a **group** for the workshop.

✅ Invite each learner to the organization, and add them to the group.

✅ Give permissions to the **group**, not to individual users, so late joiners get everything at once.

## Licenses and runtimes

Use the column for your organization type.

| | Test Cloud organization | Automation Cloud organization |
|---|---|---|
| Learner user license | **App Test Developer - Named User** (App Tester can't create or publish Test Automation projects) | **Automation Developer - Named User** (includes Tester for Test Manager) |
| Where to assign | Group | Group |
| Robot runtime for the tenant | **App Test Robot**: at least one per learner machine | **Testing**: at least one per learner machine |
| Run autonomously, Autonomous Exploration (step 4 tips) | Available | Not available |

!!! info "Optional: Run autonomously and Autonomous Exploration"
    To use Run autonomously and Autonomous Exploration in step 4, make sure a robot is available in each project's default folder. The robot machine must run Windows, and its UiPath browser extension must have **Allow in Incognito** turned on.

## Test Manager

✅ Give the group the **Project Creator** tenant role.

## Orchestrator

!!! info "Recommended"
    Do the Prerequisites folder and robot setup for each learner before the session, so learners don't need tenant-level rights.

✅ At the **Tenant** level, go to **Manage access** → **Assign access** → **Groups**, search for the group, and assign access rules to the group.

✅ Under **Roles**, add **Allow to be Folder Administrator**, **Allow to be Automation Developer** and **Allow to be Automation Publisher**.

✅ Under **Settings**, set:

<div class="indent" markdown>

✅ **UI Profile:** Standard

✅ **Personal automation setup:** Enable personal automation + Personal workspace

</div>

![Assign access rules for the group, with roles and settings](assets/images/OC%20Group%20access%20rules.png){ width="400" }

## Send learners the prerequisites

✅ Copy these prerequisites, replace `<ORG>` and `<TENANT>` with your organization and tenant names, and send them to learners.

!!! info "Prerequisites to send learners"
    <div class="rich-copy" markdown>

    ```text
    SYSTEM REQUIREMENTS
    --8<-- "system-requirements.md"
    ACCESS AND SETUP
    1. Sign in at https://cloud.uipath.com
       - Open the organization <ORG> and the tenant <TENANT>
       - Check that you can open Test Manager and Orchestrator
    2. Launch Studio, and sign in to <ORG> and <TENANT>

    VERIFICATION
    - Studio asked you to sign in to Automation Cloud, and you signed in
    - The UiPath extension is enabled in your browser
    ```

    </div>

??? note "Trainer notes: Delegate security questions"
    Use these if a customer's IT or security team asks about Delegate.

    ✅ **Data:** the task text and screenshots go to the AI model through the AI Trust Layer. UiPath is contractually barred from training on customer data.

    ✅ **Storage:** conversation history is stored in the tenant's region until the user deletes it. A local-only setting keeps history on the laptop.

    ✅ **Encryption:** TLS 1.2 or later in transit, AES-256 at rest.

    ✅ **Access:** Delegate runs as the signed-in user, without elevated rights. Entering a password always needs an explicit approval.

    ✅ **Network:** outbound HTTPS only, to UiPath domains. Delegate uses the system proxy and the company's root certificates.

    ✅ **Admin control:** Automation Ops can enforce and lock Delegate settings, including which models are allowed.

    ✅ **Compliance:** SOC 2 Type 2, ISO/IEC 27001, 27017, 27018 and 42001, HIPAA and others. Delegate falls under the existing Automation Cloud DPA.

    See <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/security-overview" target="_blank">Security overview</a>, <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/data-and-compliance" target="_blank">Data security and compliance</a> and <a href="https://docs.uipath.com/automation-cloud/automation-cloud/latest/admin-guide/configuring-firewall" target="_blank">Configuring the firewall</a>.

## After the workshop

✅ Clean up the imported projects, learner folders, and robot runtime assignments. Remove learners from the group, or delete the tenant.

---

[Back to Home](index.md){: .md-button .md-button--primary}
