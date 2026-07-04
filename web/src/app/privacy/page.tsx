import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Food Allergy Certified LLC collects, uses, shares, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="July 1, 2026"
      documentLabel="Food Allergy Certified LLC · foodallergycertified.com"
      intro={`Food Allergy Certified LLC ("FAC," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the rights you have as a user. By using foodallergycertified.com or any of our services, you agree to the practices described here.`}
      showTemplateDisclaimer={false}
      sections={[
        {
          heading: "1. Who We Are",
          body: [
            "Food Allergy Certified LLC is a certification and training company registered in California (EIN: 42-2259156). We certify childcare centers in food allergy recognition, prevention, and emergency response. Our registered address is 2108 N St, Ste N, Sacramento, CA 95816. For privacy-related questions, contact us at info@foodallergycertified.com.",
          ],
        },
        {
          heading: "2. Information We Collect",
          blocks: [
            {
              type: "paragraph",
              text: "Information you give us directly:",
            },
            {
              type: "list",
              items: [
                "Contact form submissions (name, email, phone number, organization name)",
                "Discovery call booking information submitted through Calendly",
                "Parent waitlist sign-up information (name, email, zip code)",
                "Payment information submitted through Stripe (FAC does not store card details; Stripe processes and stores payment data on our behalf as a PCI DSS-compliant processor)",
                "Course enrollment and account information through the LearnWorlds training portal",
                "Communications you send us by email or phone",
                "Allergy Action Plan data submitted through our web tool, which may include health-related information about a child submitted by a parent or medical provider",
              ],
            },
            {
              type: "paragraph",
              text: "Information collected automatically:",
            },
            {
              type: "list",
              items: [
                "Browser type, device type, and operating system",
                "Pages visited, time on site, and referring URLs",
                "IP address (anonymized where possible)",
                "Cookie and tracking data, including data collected through advertising pixels (see our Cookie Policy)",
              ],
            },
            {
              type: "paragraph",
              text: "Information collected through third-party tools we use:",
            },
            {
              type: "list",
              items: [
                "Google Analytics 4: aggregated traffic and behavior data",
                "Google Ads: conversion tracking and remarketing audience data",
                "Meta Pixel (Facebook/Instagram): conversion tracking and remarketing audience data",
                "Google Search Console: search performance data",
                "Calendly: booking details and scheduling preferences",
                "Behold.so: Instagram feed display",
                "Stripe: payment processing",
                "LearnWorlds: course completion, quiz results, and learning activity",
              ],
            },
          ],
        },
        {
          heading: "3. How We Use Your Information",
          blocks: [
            {
              type: "paragraph",
              text: "We use the information we collect to:",
            },
            {
              type: "list",
              items: [
                "Respond to your inquiry or discovery call request",
                "Schedule and conduct discovery calls with childcare directors",
                "Process payments and deliver certification training",
                "Send you information you requested about FAC certification",
                "Maintain your course account and track your certification progress",
                "Show you relevant FAC content on platforms you already use, such as Instagram, Facebook, and Google, through remarketing campaigns",
                "Improve our website, content, and training materials",
                "Send email updates you have opted into (you can unsubscribe at any time)",
                "Analyze how our site is used so we can serve visitors better",
                "Comply with legal obligations",
              ],
            },
            {
              type: "paragraph",
              text: 'We do not sell your personal information to data brokers or third-party advertisers. Sharing data with advertising platforms (Google, Meta) for remarketing purposes is considered "sharing" under California law, not selling. You have the right to opt out of this sharing. See Section 9 for how to do so.',
            },
          ],
        },
        {
          heading: "4. Remarketing and Cross-Site Tracking",
          blocks: [
            {
              type: "paragraph",
              text: "We use remarketing tools to show FAC content to people who have previously visited our website. This means that after you visit foodallergycertified.com, you may see FAC advertisements on other websites and platforms, including Google, Instagram, and Facebook.",
            },
            {
              type: "paragraph",
              text: "To make this possible, advertising platforms we work with (Google and Meta) place cookies and pixels on our site that recognize your browser or device across different websites. This is sometimes called cross-site tracking.",
            },
            {
              type: "paragraph",
              text: "We want to be transparent: this tracking is a deliberate part of how we market FAC. Here is what you can do about it:",
            },
            {
              type: "list",
              items: [
                "Opt out of Google Ads personalization at adssettings.google.com",
                "Opt out of Meta advertising at facebook.com/ads/preferences",
                "Use the Digital Advertising Alliance opt-out tool at optout.aboutads.info",
                'Enable a "Do Not Sell or Share My Personal Information" request by contacting us at info@foodallergycertified.com (California residents, see Section 9)',
                "Use browser privacy settings or a tool like Privacy Badger to block tracking pixels",
              ],
            },
            {
              type: "paragraph",
              text: "We do not use this data to build profiles unrelated to FAC, and we do not share your information with any advertiser beyond what is needed to show you FAC content.",
            },
          ],
        },
        {
          heading: "5. How We Share Your Information",
          blocks: [
            {
              type: "paragraph",
              text: "We only share your information in the following circumstances:",
            },
            {
              type: "list",
              items: [
                "Service providers: Trusted vendors who help us operate, including Google, Meta, Calendly, Stripe, LearnWorlds, and Netlify. These providers are contractually required to protect your data and may not use it for their own independent purposes.",
                "Advertising platforms: Google and Meta receive data through pixels and cookies on our site for remarketing purposes. See Section 4 above.",
                "Legal requirements: We may disclose information if required by law, court order, or to protect the rights and safety of FAC, our clients, or the public.",
                "Business transfers: If FAC is acquired or merges with another company, your information may be transferred. We will notify you before that happens.",
                "With your consent: In any other circumstance, we will share information only with your explicit permission.",
              ],
            },
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "Our website uses cookies and similar tracking technologies, including advertising pixels. For a full breakdown of every cookie we use and how to manage them, please see our Cookie Policy at foodallergycertified.com/cookie-policy.",
          ],
        },
        {
          heading: "7. Health Information",
          body: [
            "FAC is a training and certification company. We are not a healthcare provider and our certification does not constitute medical advice. If you submit health-related information about a child through our Allergy Action Plan tool, we treat that information with the highest level of care. We use it only to generate and deliver the requested document. We do not share it with advertisers, include it in remarketing audiences, or retain it beyond the time needed to deliver the service.",
          ],
        },
        {
          heading: "8. Children's Privacy",
          body: [
            "Our website and services are directed at childcare professionals and parents, not at children. We do not knowingly collect personal information from anyone under the age of 13. Health-related information about children submitted through our Allergy Action Plan tool is treated under Section 7 above and is never used for advertising or remarketing purposes. If you believe we have inadvertently collected personal information from a child under 13 for any other purpose, please contact us immediately at info@foodallergycertified.com.",
          ],
        },
        {
          heading: "9. Your California Privacy Rights (CCPA/CPRA)",
          blocks: [
            {
              type: "paragraph",
              text: "If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):",
            },
            {
              type: "list",
              items: [
                "Right to Know: You may request a list of the personal information we have collected about you and the categories of third parties with whom we have shared it.",
                "Right to Delete: You may request that we delete your personal information, subject to certain exceptions.",
                "Right to Correct: You may request that we correct inaccurate personal information we hold about you.",
                'Right to Opt Out of Sharing: You may direct us to stop sharing your personal information with advertising platforms (Google, Meta) for cross-context behavioral advertising. Contact us at info@foodallergycertified.com with the subject line "Do Not Share My Information."',
                "Right to Limit Use of Sensitive Personal Information: If we process sensitive personal information (such as health data submitted through our Allergy Action Plan tool), you may request that we limit its use to what is necessary to provide the service you requested.",
                "Right to Non-Discrimination: We will never discriminate against you for exercising any of these rights.",
              ],
            },
            {
              type: "paragraph",
              text: "To make a request, email info@foodallergycertified.com. We will respond within 45 days as required by law. We may ask you to verify your identity before processing your request.",
            },
            {
              type: "paragraph",
              text: `California's "Shine the Light" law (Civil Code Section 1798.83) also allows California residents to request information about personal information shared with third parties for their direct marketing purposes. To make a Shine the Light request, contact us at info@foodallergycertified.com.`,
            },
          ],
        },
        {
          heading: "10. Accessibility",
          body: [
            "FAC is committed to making our website accessible to everyone, including people with disabilities. Foodallergycertified.com is designed to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. If you experience any difficulty accessing information on our website or need this Privacy Policy in an alternative format, please contact us at info@foodallergycertified.com and we will do our best to assist you promptly.",
          ],
        },
        {
          heading: "11. Data Retention",
          body: [
            "We keep your information for as long as necessary to fulfill the purpose for which it was collected, including legal, accounting, or reporting requirements. If you would like us to delete your data, please contact us at info@foodallergycertified.com and we will respond within 30 days.",
          ],
        },
        {
          heading: "12. Security",
          body: [
            "We take reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or loss. Our website uses HTTPS encryption. Payments are processed by Stripe, which is PCI DSS compliant. No method of transmission over the internet is 100% secure. If you believe your information has been compromised, please contact us immediately at info@foodallergycertified.com.",
          ],
        },
        {
          heading: "13. Third-Party Links",
          body: [
            "Our website may contain links to external sites such as Calendly or LearnWorlds. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies before submitting any personal information.",
          ],
        },
        {
          heading: "14. Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. When we do, we will update the Last Updated date at the top of this page. If the changes are significant, we will notify you by email or by posting a prominent notice on our site. Your continued use of the site after changes are posted constitutes acceptance of the updated policy.",
          ],
        },
        {
          heading: "15. Contact Us",
          body: [
            "Food Allergy Certified LLC",
            "Email: info@foodallergycertified.com",
            "Website: foodallergycertified.com",
            "Mailing address: 2108 N St, Ste N, Sacramento, CA 95816",
          ],
        },
      ]}
    />
  );
}
