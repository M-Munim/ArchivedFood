import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Food Allergy Certified LLC uses essential, analytics, advertising, remarketing, and functional cookies.",
};

export default function CookiesPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Cookie Policy"
      lastUpdated="July 1, 2026"
      documentLabel="Food Allergy Certified LLC · foodallergycertified.com"
      intro="This Cookie Policy explains what cookies are, which ones we use on foodallergycertified.com, why we use them, and how you can control them. This policy is part of our Privacy Policy."
      showTemplateDisclaimer={false}
      sections={[
        {
          heading: "1. What Are Cookies?",
          body: [
            "Cookies are small text files placed on your device when you visit a website. They help the site remember information about your visit and are used for purposes ranging from keeping you logged in to delivering advertising.",
            "Cookies can be session cookies (deleted when you close your browser) or persistent cookies (stored on your device for a set period). They can be first-party (set by our site) or third-party (set by external services we use).",
            "We want to be upfront: we use cookies for analytics, advertising, and remarketing. If you visit our site, we may use that visit to show you FAC content later on other platforms like Google and Instagram. You have choices about this, which we explain in Section 6.",
          ],
        },
        {
          heading: "2. Essential Cookies",
          body: [
            "These cookies are strictly necessary for our website to function. They cannot be switched off. They do not collect information that could be used to identify you or track you for advertising.",
          ],
          list: [
            "Session state cookies that maintain your experience as you navigate the site",
            "Security cookies that protect against unauthorized activity and form submissions",
            "Load balancing cookies used by Netlify (our hosting provider)",
          ],
        },
        {
          heading: "3. Analytics Cookies",
          blocks: [
            {
              type: "paragraph",
              text: "We use Google Analytics 4 to understand how visitors use our site. This helps us improve our content, user experience, and marketing. Google Analytics collects data such as pages visited, time spent on site, device type, and general geographic region. This data is aggregated and does not directly identify you as an individual.",
            },
            {
              type: "subheading",
              text: "Cookies set by Google Analytics:",
            },
            {
              type: "list",
              items: [
                "_ga (Google Analytics) - persistent, expires after 2 years - identifies unique visitors",
                "_ga_XXXXXXXX (Google Analytics session) - persistent, expires after 2 years - tracks session activity",
                "_gid (Google Analytics) - expires after 24 hours - distinguishes users",
              ],
            },
            {
              type: "paragraph",
              text: "You can opt out of Google Analytics tracking by installing the browser add-on available at tools.google.com/dlpage/gaoptout.",
            },
          ],
        },
        {
          heading: "4. Advertising and Remarketing Cookies",
          blocks: [
            {
              type: "paragraph",
              text: "We use advertising pixels and cookies from Google and Meta to run remarketing campaigns. This means that after you visit foodallergycertified.com, you may see FAC content on other websites and apps, including Google Search, YouTube, Instagram, and Facebook.",
            },
            {
              type: "paragraph",
              text: "We use this capability intentionally. If you have visited our site, we think it is genuinely useful for you to see FAC content as you consider your options. We want to be transparent that this is happening.",
            },
            {
              type: "subheading",
              text: "Google Ads cookies:",
            },
            {
              type: "list",
              items: [
                "_gcl_au (Google Ads conversion linker) - persistent, expires after 90 days - measures ad conversions",
                "IDE (Google DoubleClick) - persistent, expires after 1 year - used for remarketing and ad targeting",
                "DSID (Google DoubleClick) - session - used to identify a signed-in Google user",
              ],
            },
            {
              type: "subheading",
              text: "Meta Pixel cookies (Facebook/Instagram):",
            },
            {
              type: "list",
              items: [
                "_fbp (Meta Pixel) - persistent, expires after 90 days - identifies browsers for ad delivery and measurement",
                "_fbc (Meta Pixel click ID) - persistent, expires after 90 days - tracks clicks from Meta ads",
              ],
            },
            {
              type: "paragraph",
              text: "These cookies may track your activity across websites and apps that are part of the Google and Meta advertising networks. This is what is known as cross-site tracking.",
            },
            {
              type: "paragraph",
              text: "We do not use this data to build profiles unrelated to FAC or share it with any advertiser other than Google and Meta for the purpose of showing FAC content. Health information submitted through our Allergy Action Plan tool is never included in remarketing audiences.",
            },
          ],
        },
        {
          heading: "5. Functional Cookies",
          body: [
            "These cookies enable enhanced functionality on our site or within tools we use. Disabling them may affect your experience.",
          ],
          list: [
            "Calendly: sets cookies to remember your scheduling preferences when you book a discovery call",
            "LearnWorlds: sets cookies to keep you logged in to the training portal and track your course progress",
            "Stripe: sets cookies to prevent fraud and support secure payment processing (if direct checkout is enabled)",
          ],
        },
        {
          heading: "6. Social Media Embed Cookies",
          body: [
            "Our site displays an Instagram feed powered by Behold.so. This embed may cause Instagram or Meta to set cookies on your device. We do not directly control these cookies. If you prefer to avoid them, you can disable third-party cookies in your browser settings.",
          ],
        },
        {
          heading: "7. Your Choices and How to Opt Out",
          blocks: [
            {
              type: "subheading",
              text: "Browser settings:",
            },
            {
              type: "paragraph",
              text: "Most browsers allow you to view, delete, and block cookies. Instructions vary by browser. You can find general guidance at allaboutcookies.org. Note that blocking all cookies may affect how some features on our site work.",
            },
            {
              type: "subheading",
              text: "Google Analytics opt-out:",
            },
            {
              type: "paragraph",
              text: "Install the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout.",
            },
            {
              type: "subheading",
              text: "Google Ads opt-out:",
            },
            {
              type: "paragraph",
              text: "Manage your Google ad personalization settings at adssettings.google.com. You can turn off personalized ads entirely or adjust preferences by topic and advertiser.",
            },
            {
              type: "subheading",
              text: "Meta/Facebook opt-out:",
            },
            {
              type: "paragraph",
              text: "Manage your Meta ad preferences at facebook.com/ads/preferences. You can turn off interest-based ads from FAC and other advertisers.",
            },
            {
              type: "subheading",
              text: "Industry opt-out tools:",
            },
            {
              type: "paragraph",
              text: "You can opt out of interest-based advertising from multiple companies at once using the Digital Advertising Alliance tool at optout.aboutads.info or the Network Advertising Initiative at optout.networkadvertising.org.",
            },
            {
              type: "subheading",
              text: "California residents (CCPA/CPRA):",
            },
            {
              type: "paragraph",
              text: 'You have the right to opt out of the "sharing" of your personal information for cross-context behavioral advertising. To exercise this right, email us at info@foodallergycertified.com with the subject line "Do Not Share My Information." We will process your request within 15 business days. You will not be treated differently for making this request.',
            },
            {
              type: "subheading",
              text: "Do Not Track:",
            },
            {
              type: "paragraph",
              text: "Our site does not currently respond to browser-level Do Not Track signals, because there is no universal standard for how they should be interpreted. We offer the opt-out mechanisms above as alternatives.",
            },
          ],
        },
        {
          heading: "8. Cookie Consent",
          body: [
            "When you first visit foodallergycertified.com, you will see a notice about our use of cookies. Continuing to use our site after seeing this notice constitutes consent to our use of essential and functional cookies. For advertising and remarketing cookies, you have the opt-out options described in Section 7.",
          ],
        },
        {
          heading: "9. Accessibility",
          body: [
            "If you need this Cookie Policy in an alternative format or have difficulty managing cookie settings due to a disability, please contact us at info@foodallergycertified.com and we will do our best to assist you.",
          ],
        },
        {
          heading: "10. Updates to This Policy",
          body: [
            "We may update this Cookie Policy as we add new features, tools, or advertising integrations. When we do, we will update the Last Updated date at the top of this page. We encourage you to review this policy periodically.",
          ],
        },
        {
          heading: "11. Contact Us",
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
