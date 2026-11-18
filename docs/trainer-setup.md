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

✅ Copy and share these prerequisites with learners.

??? info "Prerequisites to send learners"
    ```text
    SYSTEM REQUIREMENTS
    - A Windows 10 or 11 laptop with local admin rights
    - Google Chrome or Microsoft Edge
    - UiPath Studio, latest STS version, installed.
      Install it even if you already have Studio, and select Studio and
      Assistant, Delegate & Cartographer in the installer:
      https://download.uipath.com/connected-installer/latest/sts/UiPathPlatformSTS.msi
    - Access to https://cloud.uipath.com and https://uibank.uipath.com,
      with no proxy or firewall blocking them. On a company laptop,
      check with your IT team first.
    - Your Windows sign-in password. Sign in with only a PIN, or no
      password? Tell your trainer before the workshop.
    - On the day: set your screen to never turn off and your laptop to
      never sleep while plugged in.

    ACCESS AND SETUP
    1. Sign in at https://cloud.uipath.com, and open the organization
       <ORG> and the tenant <TENANT>. Check that you can open
       Test Manager and Orchestrator.
    2. Launch Studio, and sign in to <ORG> and <TENANT>.

    VERIFICATION
    Studio shows you signed in to <TENANT>, and the UiPath extension is
    enabled in your browser.
    ```

## On the day

✅ Share the **organization name** and **tenant name** with learners.

## After the workshop

✅ Clean up the imported projects, learner folders, and robot runtime assignments. Remove learners from the group, or delete the tenant.
