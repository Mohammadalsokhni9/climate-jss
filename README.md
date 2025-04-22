🌱 <strong>climate-jss – Project</strong>


This project demonstrates how to set up and develop a Sitecore JSS application with a Next.js frontend, including dynamic content rendering, personalization, and form handling using Sitecore Headless Services.

⚙️ <strong>Setup</strong>

Begin by setting up a Sitecore JSS environment (if not already configured). This involves:

Installing and configuring the Sitecore backend.

Establishing communication between Sitecore and the Next.js frontend via Sitecore Headless Services.

Implementing proper error handling and logging following Sitecore best practices.

🧩 <strong>CMS-Enabled Components</strong>

All frontend components should be CMS-configurable through Sitecore’s Experience Editor or Content Hub:

Content elements (text, images, buttons, etc.) must be editable from the CMS.

Ensure full flexibility for content authors to manage and update components dynamically.

🔗 <strong>Using GraphQL or REST APIs</strong>

Utilize Sitecore Headless Services to fetch and send data via GraphQL or REST API:

GraphQL is preferred for dynamic content rendering due to its ability to query only the needed fields, optimizing performance.

Set up a GraphQL endpoint and define the schema based on your components' data needs.

🎯 <strong>Header Component Personalization</strong>

Objective: Deliver personalized content based on the user's context.
1. Browser-Based Personalization
Use Sitecore’s personalization features to detect the user's browser.

Create rules such as:

If the user is using Safari, display a custom message:

"You are viewing this from Safari."

2. Dynamic Data Source
Dynamically update the data source of the header component based on browser detection.

Ensure personalized content is reflected accordingly.

📝 <strong>Form Development Using a Form Builder</strong></br>
📌 <strong>Form Setup</strong></br>
Use Sitecore Forms or a custom-built form builder.

Include essential fields: Email, Subject, and Message (as per the design).

✅ <strong>Validation</strong>

Implement client-side validation:

Required fields

Valid email format

Add server-side validation for security and data integrity.

Apply rules for the message textarea (e.g., maximum character limit, disallowed symbols).

🛡️ CSRF Protection
Use Sitecore’s anti-CSRF token features to guard against cross-site request forgery attacks.

📬 Submission Handling
On successful submission, display a thank you message:

Via frontend state change

Or by redirecting to a Sitecore success page

📊 Data Capture
Sitecore moderators must be able to log in and download form submissions from the backend.
