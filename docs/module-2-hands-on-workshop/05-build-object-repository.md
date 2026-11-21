# 5. Set Up Studio and Build the Object Repository

Set up a Studio Test Automation project with Delegate, link it to Test Manager, and build the Object Repository that your coding agent uses in the next step.

!!! warning "Access required"
    You need an **App Test Developer** license (Test Cloud) or an **Automation Developer** license (Automation Cloud) to create and publish Test Automation projects.

## What you'll do

<span class="tool-badge tool-badge--delegate">Delegate</span>

You work in **Delegate** on this page: paste each prompt, then wait and watch it build in Studio. Click a step to jump to it.

No Delegate? Look for the **No Delegate?** tips: one prompt sets up the project, package and link, and another builds the Object Repository, with a **coding agent** – Autopilot or Claude Code. Pick yours in the tabs; your choice is remembered on every page.

On a Mac, Studio on macOS (Preview) creates and opens only **Cross-platform** projects. Pick **macOS** in the tabs below.

<div class="flow">
  <div class="flow-part flow-part--delegate" style="--steps: 4">
    <span class="flow-part-label">Delegate</span>
    <div class="flow-part-steps">
      <a class="flow-step" href="#create-a-test-automation-project">Create a Test Automation project</a>
      <span class="flow-arrow"></span>
      <a class="flow-step" href="#install-the-ui-automation-package">Install the UI Automation package</a>
      <span class="flow-arrow"></span>
      <a class="flow-step" href="#link-studio-to-your-test-manager-project">Link Studio to your Test Manager project</a>
      <span class="flow-arrow"></span>
      <a class="flow-step" href="#build-the-object-repository">Build the Object Repository</a>
    </div>
  </div>
</div>

## Create a Test Automation project

<span class="tool-badge tool-badge--delegate">Delegate</span>

Replace `<YOUR_NAME>` with your name, for example `AlexS`, so your package is unique on the shared tenant. Then paste:

=== "Windows"

    ```text
    Create a blank Studio Test Automation project named <YOUR_NAME>_UiBank Tests, with Windows compatibility and VB as the language, in Documents\UiPath.
    ```

=== "macOS"

    ```text
    Create a blank Studio Test Automation project named <YOUR_NAME>_UiBank Tests, with Cross-platform compatibility and VB as the language, in Documents/UiPath in my home folder.
    ```

    Delegate for macOS (Preview) and Studio on macOS (Preview): not yet rehearsed for this workshop – if it doesn't work, use the Claude Code tab in the tip below.

It takes about 5 minutes.

!!! success "Check it"
    === "Windows"

        Delegate reports the project in `Documents\UiPath\<YOUR_NAME>_UiBank Tests`.

    === "macOS"

        Delegate reports the project in `~/Documents/UiPath/<YOUR_NAME>_UiBank Tests`.

    It works in the background, so Studio doesn't open the project yet. It opens when you link it to Test Manager. Its package name is the project name with the space replaced by a dot: `<YOUR_NAME>_UiBank.Tests`.

??? tip "Running your tests on Cloud - Serverless or a Mac?"
    Ask for **Cross-platform** compatibility instead of Windows. Serverless robots and Mac robots run only cross-platform projects (<a href="https://docs.uipath.com/robot/automation-cloud/latest/user-guide/frequently-asked-questions-cloud-robots-serverless" target="_blank">Serverless robots FAQ</a>). In a cross-platform project:

    ✅ Use **Verify Expression with Operator** instead of **Verify Control Attribute**.

    ✅ Build the Object Repository with the prompt below. The backup libraries are Windows only.

??? tip "Do it by hand in Studio"
    1. In Studio, go to **Home → New Project → Test Automation**.

        ![New Project → Test Automation in Studio](../assets/images/New%20Test%20Automation%20Project.png)

    2. Name it `<YOUR_NAME>_UiBank Tests` and choose the compatibility:

        === "Windows"

            Choose **Windows** compatibility, and create the project.

        === "macOS"

            Choose **Cross-platform** – Studio on macOS (Preview) creates only cross-platform projects – and create the project. The first time Studio works with the UI, macOS asks you to allow **UiPath UIAutomation** in **System Settings > Privacy & Security** (Accessibility and Screen Recording).

??? tip "No Delegate? Set up the project with a coding agent"
    One prompt does this section and the next two: it creates the project, installs the UI Automation package, and links the project to Test Manager. Replace `<YOUR_NAME>` and paste:

    ```text
    Create a blank Studio Test Automation project named <YOUR_NAME>_UiBank Tests in Documents/UiPath, with Cross-platform compatibility, .NET 8 and VB as the language. Install the latest stable UiPath.UIAutomation.Activities package. Then connect the project to Test Manager on my tenant, and set my Test Manager project (the one whose name contains <YOUR_NAME>) as its default project.
    ```

    Cross-platform runs on Windows, Mac and Cloud - Serverless robots. On Windows, you can ask for Windows compatibility instead if you want to keep the backup Object Repository library as an option.

    === "Autopilot"

        On Windows, open the **Autopilot** panel in Studio (Studio 2026.10 LTS or a current STS, 2026.0.195 or later) and paste the prompt.

        On a Mac, open your `Documents/UiPath` folder in VS Code with the **UiPath Autopilot** extension and paste the prompt there. If your Studio on macOS (Preview) shows the Autopilot panel, you can use it instead. The Mac path is not yet rehearsed for this workshop – if it doesn't work, use the Claude Code tab.

    === "Claude Code"

        Any coding agent with the UiPath skills works the same way; the commands below are for Claude Code.

        In a terminal, go to your `Documents/UiPath` folder, run `claude`, and paste the prompt. It runs `uip rpa init` to create the project, installs the package, and links it with `uip rpa tm connect` and `uip rpa tm set-default-project`. It takes a few minutes.

        If a `uip` command fails with an authentication error, run `uip login` again: the sign-in expires within the hour.

    !!! success "Check it"
        The agent reports the project folder and that the package is installed. To check the link without Studio, ask it to run `uip rpa tm status`: it shows `connected: true` and `hasDefaultProject: true`.

## Install the UI Automation package

<span class="tool-badge tool-badge--delegate">Delegate</span>

```text
Install the latest stable UI Automation activities package in <YOUR_NAME>_UiBank Tests.
```

It takes about 1 minute.

!!! success "Check it"
    Delegate reports that **UiPath.UIAutomation.Activities** is installed. Once the project opens in Studio in the next section, **Manage Packages → Project Dependencies** lists it.

??? tip "Do it by hand in Studio"
    1. Select **Manage Packages** in the Studio ribbon.

        ![Manage Packages in the Studio ribbon](../assets/images/Studio%20Manage%20Packages%20button.png)

    2. Select **All Packages** and search for `UiPath.UIAutomation.Activities`.

        ![Searching All Packages for UiPath.UIAutomation.Activities](../assets/images/Studio%20Manage%20Packages%20search.png)

    3. Select **UiPath.UIAutomation.Activities**, install the latest stable version, and select **Save**.

## Link Studio to your Test Manager project

<span class="tool-badge tool-badge--delegate">Delegate</span>

Paste:

```text
Connect this project to my Test Manager project, then open Test Explorer to show its test cases.
```

It takes about 6 minutes.

!!! success "Check it"
    In **Test Manager Settings**, the status is **Connected** and **Default Project** is your project. **Test Explorer** lists your test cases.

    Using a coding agent instead? It runs `uip rpa tm connect` and `uip rpa tm set-default-project`. Check the link with `uip rpa tm status`.

??? tip "Do it by hand in Studio"
    1. Select **Test Manager** in the Studio ribbon.

        ![Test Manager in the Studio ribbon](../assets/images/Studio%20Test%20Manager%20button.png)

    2. Select **Test Manager Settings**.

        ![Test Manager Settings in the Test Manager menu](../assets/images/Studio%20Test%20Manager%20Settings%20menu.png)

    3. Check that the URL is your tenant's Test Manager, and select **Connect**. The status changes to **Connected**.
    4. In **Default Project**, type your project key and select your project from the list.

        ![Test Manager Settings, Connected, with the UiBank project selected](../assets/images/Studio%20Test%20Manager%20connected.png)

    5. Select **OK**.

## Build the Object Repository

<span class="tool-badge tool-badge--delegate">Delegate</span>

The **Object Repository** stores the app's screens and UI elements for every test case to reuse.

Building it by hand is usually one of the slowest parts of test automation: you capture every screen and element yourself. Tell Delegate what to capture, and it builds the repository for you. To cover every screen and element the test cases need, use the prompt below.

!!! warning "This prompt is built for Chrome"
    Using Edge? Before you send the prompt, change **Chrome** to **Edge** in the two highlighted lines:

    ✅ The first sentence: **running in Chrome**

    ✅ Under **Application**: **Browser: Chrome**

    Keep the name **UiPath Banking App**, so the next steps still match.

!!! example "Delegate"
    1. Open UiBank in Chrome and attach only that window to the chat (the screen icon next to the chatbox). Delegate then sees nothing else on your screen.

    2. Prompt in Delegate:

        ```text hl_lines="1 5"
        Create an Object Repository in UiPath Studio Desktop for the UiBank web app running in Chrome.

        Application
        - Name: UiPath Banking App
        - Browser: Chrome
        - Capture each element live in the browser
        - Prefer stable selectors (id, name, aria-label, visible text) over index-based ones
        - Avoid dynamic values in selectors
        - Name each element exactly as listed below

        Screens and elements

        1. Screen: Home (https://uibank.uipath.com/welcome)
           - Username, Password, Sign In (only if UiBank shows the sign-in form; skip them if you are already signed in)
           - Products (dropdown menu)
           - Loans (menu item in the Products dropdown; open Products first so Loans is visible when you capture it)

        2. Screen: Selection (https://uibank.uipath.com/loans)
           - Apply For A Loan (button; the one on the Loans page, not the Apply For Loan button on the Welcome page)
           - Already Have A Loan? (button)

        3. Screen: Form (https://uibank.uipath.com/loans/apply)
           - Email (input)
           - Amount (input)
           - Term (dropdown)
           - Income (input)
           - Age (input)
           - Submit (button)

        4. Screen: Quote (the results view shown after you submit the loan application)
           - Result Text: the full text block of the response
           - Rate: only the number shown below "With a fantastic rate of:", without the "%" sign
           - Loan ID: the value shown below "Your new loan ID is:"
           Don't use the changing values in the selectors, so they work for any result. Use the element's id if it has one; otherwise anchor to its label text.
           To reach this screen, submit the form with sample valid values.

        Acceptance criteria
        - All 4 screens and 13–16 elements exist under UiPath Banking App, named as above (the three sign-in elements only if UiBank shows the sign-in form)
        - Every selector validates (highlights the correct element) on its live screen
        - Report any element you could not capture reliably, and why
        ```

    3. It takes about 7 minutes. Don't use your desktop or browser while it captures, except to approve when Delegate asks. It asks before it submits the sample loan application. If your screen locks, unlock it, and Delegate carries on.

    The prompt captures **Username**, **Password** and **Sign In** only when the sign-in form is shown. If a test signs in, read the login from a Credential asset with **Get Credential**.

??? tip "No Delegate? Build it with a coding agent"
    Use the same prompt. Keep UiBank open in Chrome, and don't use your mouse or keyboard while the agent captures. On a Mac, change **UiPath Studio Desktop** in the first line to **my UiPath Studio project**.

    === "Autopilot"

        On Windows, paste the prompt in the **Autopilot** panel in Studio, with your project open.

        On a Mac, paste it in the **UiPath Autopilot** extension in VS Code, with your project folder open. If your Studio on macOS (Preview) shows the Autopilot panel, you can use it instead. The Mac path is not yet rehearsed for this workshop – if it doesn't work, use the Claude Code tab.

    === "Claude Code"

        Any coding agent with the UiPath skills works the same way; the commands below are for Claude Code.

        Run `claude` in your project folder and paste the prompt. It captures each element live in Chrome with `uip rpa uia` and writes it into the project's Object Repository. It took 4–20 minutes in our rehearsals.

        Selection and Form share the same browser window, so the agent may need to narrow the Form screen to `/loans/apply` and the Quote screen to the result page. Let it.

??? tip "Write your own Object Repository prompt"
    Describe what you need in plain language, such as the app, its screens, and the elements to capture. Delegate can also review and fine-tune your prompt, or fix it when something's missed.

??? tip "Backup: import a ready-made Object Repository"
    The backup libraries work only in a **Windows** project, with Studio and Robot 26.10 or later. In a Cross-platform project, they install without an error but stay empty.

    === "Windows"

        1. On your Desktop, create a folder named **Custom Library**.
        2. Download the library for your browser and move it into **Custom Library**:

            ✅ Chrome: <a href="../../assets/Files/Object%20Repository/UiBankORForChrome.Descriptors.1.0.3.nupkg" target="_blank">UiBankORForChrome.Descriptors.1.0.3.nupkg</a>

            ✅ Edge: <a href="../../assets/Files/Object%20Repository/UiPathBankingORForEdge.1.0.2.nupkg" target="_blank">UiPathBankingORForEdge.1.0.2.nupkg</a>

        3. In Studio, click **Manage Packages** from the top ribbon.
        4. Go to **Settings**.
        5. In **Name**, enter a unique name for the package source.
        6. Next to **Source**, click the ellipsis (**...**), browse to **Desktop\Custom Library**, and click **Add**.

            ![Manage Packages Settings](../assets/images/Manage%20packges%20settings.png)

        7. Select the new source in the left panel, select **UiBankORForChrome.Descriptors** or **UiPathBankingORForEdge**, click **Install**, then click **Save**.

            ![Custom Library Listing](../assets/images/custom%20library%20listing.png)

        In the **Object Repository** panel, find it under **UI Libraries → UiBankORForChrome.Descriptors** (or **UiPathBankingORForEdge**) **→ UiPath Banking App**.

    === "macOS"

        Windows only – on a Mac, watch the trainer's demo. Your project is Cross-platform, so build the Object Repository with the prompt above, with Delegate or a coding agent.

??? tip "Check it"
    1. In Studio's **Object Repository** panel, expand **UiPath Banking App**. It lists all 4 screens and their elements. If it's empty, reload the project.

        ![Object Repository panel](../assets/images/Object%20Repo.png){ width="300" }

        ??? info "Built by Delegate or a coding agent? Look under Project UI Descriptors"
            Delegate builds the Object Repository in your project, so **UiPath Banking App** is under **Project UI Descriptors**. An imported backup library is under **UI Libraries**.

            ![Object Repository built by Delegate, under Project UI Descriptors](../assets/images/Object%20Repo%20Project%20Descriptors.png){ width="300" }

    2. Open UiBank in your browser on the Home screen. Right-click an element, such as **Products**, and select **Highlight**.

        ![Highlight an element](../assets/images/Studio%20OR%20Highlight.png){ width="300" }

    3. In the browser, the element is outlined in **green**, and its anchor, if it has one, in **blue**. Repeat for a few elements on each screen.

        ![Highlighted element in UiBank](../assets/images/UiBank%20Highlight.png)

    If an element doesn't highlight, ask Delegate to recapture it.

    No Studio Desktop? Ask your coding agent to list the screens and elements under **UiPath Banking App**: 4 screens and 13–16 elements, named as in the prompt. Ask it to recapture any element it reported as unreliable.

!!! warning "Complete this step before you continue"
    Your coding agent builds your test cases from the Object Repository elements: **Autopilot for Testers** in Studio, or Claude Code. Without them, it can't automate the test cases in the next step.

## Nice work!

Your project is set up, linked to Test Manager, and the Object Repository is built. This is a good point for a break.

---

[Next → 6. Automate and Publish the Test Cases](06-automate-and-publish.md){: .md-button .md-button--primary}

---
