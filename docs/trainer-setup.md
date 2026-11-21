# Trainer Setup

Complete this checklist **before the workshop**, ideally a few days ahead.

## Organization and tenant

✅ Create the workshop **tenant** in an organization.

!!! info "Test Cloud only"
    **Run autonomously** and **Autonomous Exploration** are only available in Test Cloud.

✅ Make sure the tenant has **Test Manager** and **Orchestrator** enabled.

✅ Make sure an **AI Trust Layer policy that enables Autopilot** is active and deployed to the tenant, so **Autopilot for Testers** works in Test Manager and in Studio. See <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/autopilot-agent-test-manager" target="_blank">Autopilot agent in Test Manager</a> and <a href="https://docs.uipath.com/autopilot/other/latest/user-guide/enable-disable-functionality" target="_blank">Enabling/disabling Autopilot</a>.

!!! success "Check it"
    Open a requirement in Test Manager → **Optimize coverage**: **Evaluate quality** is available.

✅ Make sure learners can use **Delegate** in the organization: **Personal Automation** enabled and a **user license** for each learner. See <a href="https://docs.uipath.com/delegate/standalone/latest/user-guide/installation" target="_blank">Install and update</a>.

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
| Fallback robot (optional) | A **Cloud Robot - Serverless** machine in the learner's folder, with testing runtimes. The test set then runs on **Cloud - Serverless Testing**. Needs a Cross-platform project and an account in the folder that can run unattended jobs | Same |

!!! info "Optional: Run autonomously and Autonomous Exploration"
    To use Run autonomously and Autonomous Exploration in step 4, make sure a robot is available in each project's default folder. The robot machine must run Windows, and its UiPath browser extension must have **Allow in Incognito** turned on.

## Test Manager

✅ Give the group the **Project Creator** tenant role.

!!! info "Tenant role, not a project role"
    **Project Creator** is a **tenant** role. No Test Manager project role can create projects, so the **Test Manager** project role doesn't cover the step 1 import. In our rehearsal, the learner who imported the project could open **Project Settings** (Default Folder, step 1) and create custom fields (Test Tier, step 4) without extra grants.

    See <a href="https://docs.uipath.com/test-manager/automation-cloud/latest/user-guide/tenant-roles-and-project-roles" target="_blank">Tenant roles and project roles</a>.

!!! success "Check it"
    With a test learner account in the group: import the `.tmh` (step 1), set **Default Folder** under **Project Settings** → **Automation**, then create the **Test Tier** custom field (step 4). All three work without extra grants.

## Orchestrator

!!! info "Recommended"
    Do the Prerequisites folder and robot setup for each learner before the session, so learners don't need tenant-level rights.

    The access rules below are the fallback, for when learners do the setup themselves. If learners edit their own user, they also need **Users – View** and **Users – Edit** at the tenant level.

!!! tip "Orchestrator asks you to choose a layout?"
    This page and Prerequisites use the **New layout** paths: **Tenant → Infrastructure → Machines**, **Tenant → Access → Access rules** (called *Manage access* in the current (classic) layout) and **Tenant → Access → Folder management** (called *Folders*). See the <a href="https://docs.uipath.com/orchestrator/automation-cloud/latest/user-guide/new-layout-navigation-map" target="_blank">New layout navigation map</a>.

✅ At the **Tenant** level, go to **Access → Access rules** → **Assign access** → **Groups**, search for the group, and assign access rules to the group.

✅ Under **Roles**, add **Allow to be Folder Administrator**, **Allow to be Automation Developer** and **Allow to be Automation Publisher**.

✅ Under **Settings**, set:

<div class="indent" markdown>

✅ **UI Profile:** Standard

✅ **Personal automation setup:** Enable personal automation + Personal workspace

</div>

![Assign access rules for the group, with roles and settings](assets/images/OC%20Group%20access%20rules.png){ width="400" }

### Robot for each learner

Each learner's tests run on a robot in their folder. The learner's own machine is the main path; Cloud - Serverless is a fallback you enable.

=== "Your machine"

    Follow the Prerequisites *Trainer-led setup* for each learner: **App Testing** (or **Testing**) set to **1** on the learner's workspace machine, the machine in the learner's folder, and the learner listed in the folder with **Attended, Unattended**.

    ✅ **Windows:** the learner's unattended credentials are their `whoami` user name and their Windows password (or Windows Hello PIN with **Smart Card**).

    ✅ **macOS:** the robot runs in the learner's signed-in session. The Mac must stay signed in and unlocked, with Assistant signed in and connected.

    ✅ **Both:** the UiPath extension is on in the browser profile the learner uses for the workshop. On a Mac, the robot opens the last-used Chrome profile, and a profile without the extension gives "Failed to start browser. New browser window did not appear."

=== "Cloud - Serverless"

    Use it when a learner's machine can't run the robot (locked-down laptop, robot not connecting).

    1. At the **Tenant** level, go to **Infrastructure → Machines**, select **Add machine → Cloud Robot - Serverless**, enter a name, check that **Cloud - Serverless Testing** is offered as a runtime type, and select **Provision**. Your tenant may show slightly different labels.
    2. Open each learner's folder, go to **Machines** → **Manage Machines in Folder**, select the serverless machine, and click **Update**.
    3. Tell the learner to create a **Cross-platform** project in step 5. Serverless robots run only background, cross-platform automations.
    4. In step 7, the learner sets **Runtime type** to **Cloud - Serverless Testing**. The panel notes that serverless executions are limited to 15 minutes; one run of the Smoke set takes about 30 seconds per test case, in parallel.

    Serverless doesn't run **Run autonomously** or **Autonomous Exploration**. See <a href="https://docs.uipath.com/robot/automation-cloud/latest/user-guide/executing-unattended-automations-with-serverless-robots" target="_blank">Executing unattended automations with serverless robots</a>.

## Mac learners

Learners on a Mac follow the **macOS** tabs in the guide. Check these before the session:

✅ **Machine:** Apple silicon (M1 or later), macOS 14 Sonoma or later. Intel Macs aren't supported.

✅ **Studio on macOS (Preview):** installed with the platform installer PKG. It opens only **Cross-platform** projects, so the backup Object Repository library in step 5 (a Windows project) doesn't work there.

✅ **Delegate for macOS (Preview):** DMG for Enterprise STS, PKG for Community. Not yet rehearsed for this workshop: Mac learners can use **Claude Code** with the `uip` CLI instead, the path that was rehearsed end to end on a Mac.

✅ **Robot:** the learner's Mac with Assistant signed in and connected (see *Robot for each learner*), or the Cloud - Serverless fallback.

✅ **Autonomous Exploration:** Windows only. Mac learners watch your demo.

## Suggested agenda

The step timings come from one rehearsal with Claude Code on a Mac, by a single learner on a quiet tenant; Delegate and Windows Studio times are the guide's estimates. Allow more time with a full class.

| Time | Block | Page | Rehearsal timing |
|---|---|---|---|
| 09:00–09:30 | Welcome and Test Cloud tour; learners start the project import | Home, Introduction, 1 | import ~3 min (guide says 3–15) |
| 09:30–09:45 | Environment check: Delegate opens, "List the tenant I am connected to", `uip login status`, coding agent skills | Prerequisites | <1 min check |
| 09:45–10:15 | Finish the import, link the folder, check folder and robot | 1, Prerequisites | link <1 min; project check ~1 min |
| 10:15–10:45 | Evaluate requirements | 2 | evaluation <1 min; step ~5 min |
| 10:45–11:00 | Break | | |
| 11:00–11:30 | Generate test cases (include the over-65 case) | 3 | generation ~2 min; step ~4 min |
| 11:30–12:15 | Delegate manual run (core); PDD exercise (optional) | 4 | Delegate about 10 min; Loan Lookup ~2 min |
| 12:15–13:00 | Project, package, link to Test Manager, **start the Object Repository prompt** | 5 | Delegate ~7 min for the Object Repository (guide, Windows); Claude Code ~22 min, of which ~19 min is the Object Repository (Mac) |
| 13:00–13:45 | Lunch | | |
| 13:45–14:00 | Check the Object Repository; backup import if it fails | 5 | |
| 14:00–15:00 | Coding agent: automate 3 test cases, run locally, publish | 6 | local run under a minute per test case in Windows Studio (guide), 2–3 min with Claude Code (Mac); publish seconds; link ~2 min |
| 15:00–15:15 | Break | | |
| 15:15–15:30 | Add test cases to the Smoke Test Set, test run | 7 | robot run seconds per test case (Mac 9–10 s, serverless ~30 s) |
| 15:30–16:15 | Run, triage and report (go/no-go PDF) | 8 | run + triage ~2 min; report ~4–5 min |
| 16:15–17:00 | Stretch, wrap-up, feedback | You did it! | |

!!! tip "4-hour version"
    Steps 1, 3, 5 (backup Object Repository), 6, 7 and 8, with each learner's folder and robot set up beforehand. Mac and Cloud - Serverless learners use a Cross-platform project and build the Object Repository with the coding-agent prompt instead (about 20 minutes).

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
    2. Launch Studio (Studio on macOS on a Mac), and sign in to <ORG> and <TENANT>

    VERIFICATION
    - Studio asked you to sign in to Automation Cloud, and you signed in
    - The UiPath extension is enabled in the browser profile you'll use for the workshop
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

## Before the session

✅ **Reference report:** run step 8 yourself and keep the go/no-go PDF, so learners can compare their report with it.

✅ **Check the failing test:** at <a href="https://uibank.uipath.com" target="_blank">UiBank</a>, apply for a loan with age 66. If UiBank rejects it, step 8 has no UiBank defect, so learners should expect **GO**. You can offer **Submit High-Volume Request** (already in the Smoke set) as a replacement failing test, but it isn't rehearsed yet: automate and run it yourself first, and check that it fails in UiBank before the session.

✅ **Loan Lookup:** submit one loan application and check that its loan ID opens in **Loan Lookup** (UiBank's **Already Have A Loan?** button). Steps 4 and 8 rely on it.

✅ **Report location:** on a lab machine, ask Delegate to save a test file on the Desktop and check where it lands. OneDrive can redirect the Desktop.

✅ **Fallback robot:** if you offer Cloud - Serverless, run one test set on it from a Cross-platform project.

## After the workshop

✅ Clean up the imported projects, learner folders, serverless machines and robot runtime assignments. Remove learners from the group, or delete the tenant.

---

[Back to Home](index.md){: .md-button .md-button--primary}
