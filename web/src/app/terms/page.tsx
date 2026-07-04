import type { Metadata } from "next";
import { LegalDoc } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing Food Allergy Certified LLC's website, certification programs, training, and services.",
};

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="July 1, 2026"
      documentLabel="Food Allergy Certified LLC · foodallergycertified.com"
      intro="Please read these Terms of Service carefully before using our website or services. By accessing foodallergycertified.com or purchasing any FAC certification, you agree to be bound by these terms. If you do not agree, please do not use our site or services."
      showTemplateDisclaimer={false}
      sections={[
        {
          heading: "1. About Food Allergy Certified",
          body: [
            'Food Allergy Certified LLC ("FAC") is a certification and training company registered in California (EIN: 42-2259156). We provide food allergy safety training and certification programs for childcare centers. FAC is not a medical provider, healthcare organization, or regulatory body. Our registered address is 2108 N St, Ste N, Sacramento, CA 95816.',
          ],
        },
        {
          heading: "2. Our Services",
          body: ["FAC offers the following services:"],
          list: [
            "Online certification training for childcare center staff through our LearnWorlds learning portal",
            "Center-wide food allergy safety certification programs",
            "The FAC certification badge awarded to centers that complete our program",
            "Discovery calls to help childcare directors understand our certification options",
            "Supporting resources including the Allergy Action Plan generator tool",
          ],
        },
        {
          heading: "3. Important Disclaimer: Not Medical Advice",
          body: [
            "FAC's certification programs, curriculum, resources, and tools are for educational and operational purposes only. Nothing in our training, website content, or certification program constitutes medical advice, diagnosis, or treatment. Our certification is a training and operational standard, not a guarantee that an allergic incident will not occur.",
            "FAC certification does not substitute for a child's individual allergy action plan provided by their physician, emergency medical care, or compliance with applicable state and local childcare regulations. Childcare centers are responsible for following all applicable laws and regulations regarding food allergy management in addition to completing FAC certification.",
            "Always follow the instructions of the child's licensed physician for any individual child's allergy management.",
          ],
        },
        {
          heading: "4. Certification Terms",
          blocks: [
            {
              type: "subheading",
              text: "Who may purchase:",
            },
            {
              type: "paragraph",
              text: "FAC certifications are sold to childcare center directors and authorized representatives of childcare organizations. By purchasing, you represent that you are authorized to make this purchase on behalf of your organization.",
            },
            {
              type: "subheading",
              text: "What certification includes:",
            },
            {
              type: "paragraph",
              text: "Each FAC certification covers the entire staff of one childcare center location. The specific inclusions vary by certification tier (Aware, Prepared, or Trusted) and are detailed in your purchase agreement or confirmed during your discovery call.",
            },
            {
              type: "subheading",
              text: "Annual renewal:",
            },
            {
              type: "paragraph",
              text: "FAC certifications are valid for one year from the date of completion. Renewal is required annually to maintain certified status and display the FAC badge.",
            },
            {
              type: "subheading",
              text: "Badge use:",
            },
            {
              type: "paragraph",
              text: "The FAC certification badge may only be displayed by centers with an active, current certification. Display of the badge by non-certified centers is prohibited.",
            },
            {
              type: "subheading",
              text: "Revocation:",
            },
            {
              type: "paragraph",
              text: "FAC reserves the right to revoke a certification and require removal of the badge if a certified center misrepresents its certification status, misuses FAC materials, or violates these Terms of Service.",
            },
          ],
        },
        {
          heading: "5. Payments and Refunds",
          blocks: [
            {
              type: "subheading",
              text: "Pricing:",
            },
            {
              type: "paragraph",
              text: "Pricing for FAC certification is not listed publicly on our website. All pricing is provided during a discovery call and confirmed in writing before any payment is processed.",
            },
            {
              type: "subheading",
              text: "Payment:",
            },
            {
              type: "paragraph",
              text: "Payment is due before certification training access is granted. We accept payment via Stripe (credit or debit card) or by invoice. If paying by invoice, payment terms will be specified in your purchase agreement.",
            },
            {
              type: "subheading",
              text: "Refunds:",
            },
            {
              type: "paragraph",
              text: "Because FAC certification involves immediate access to digital training content, all sales are final once training portal access has been granted. If you experience a technical issue that prevents access, please contact us at info@foodallergycertified.com and we will work to resolve it promptly. Refund requests for other reasons will be considered on a case-by-case basis at FAC's sole discretion.",
            },
            {
              type: "subheading",
              text: "California consumer note:",
            },
            {
              type: "paragraph",
              text: "California residents have certain rights under the Consumer Legal Remedies Act (CLRA) and related statutes. If you believe a transaction violates California consumer protection law, please contact us first at info@foodallergycertified.com so we have the opportunity to resolve the issue.",
            },
          ],
        },
        {
          heading: "6. Your Account",
          body: [
            "To access FAC training, your center's staff members will receive individual login credentials through our LearnWorlds portal. You are responsible for maintaining the security of those credentials. Please notify us immediately at info@foodallergycertified.com if you believe an account has been compromised. FAC is not responsible for unauthorized access resulting from a failure to secure account credentials.",
          ],
        },
        {
          heading: "7. Intellectual Property",
          body: [
            "All content on foodallergycertified.com and within the FAC training portal, including course videos, lesson scripts, written materials, graphics, the FAC logo and badge, and the FAC certification methodology, is the intellectual property of Food Allergy Certified LLC. You may not copy, reproduce, distribute, modify, or create derivative works from any FAC content without our prior written permission.",
            "FAC grants certified centers a limited, non-exclusive, non-transferable license to display the FAC certification badge solely to communicate their certified status to parents and the public. This license terminates when the certification lapses or is revoked.",
          ],
        },
        {
          heading: "8. Accessibility Commitment",
          body: [
            "FAC is committed to ensuring that foodallergycertified.com and our digital training content are accessible to all users, including people with disabilities, in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and applicable requirements under the Americans with Disabilities Act (ADA) and California's Unruh Civil Rights Act.",
            "If you encounter an accessibility barrier on our website or within our training portal, please contact us at info@foodallergycertified.com. We will do our best to provide the information or functionality you need in an accessible format. We are continuously working to improve the accessibility of our digital content.",
          ],
        },
        {
          heading: "9. Limitation of Liability",
          body: [
            "To the fullest extent permitted by law, FAC and its owners, officers, employees, and contractors shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of our website or certification programs, including but not limited to:",
          ],
          list: [
            "Any allergic incident or food allergy reaction occurring at your facility",
            "Reliance on any content, curriculum, or guidance provided by FAC",
            "Technical issues with the website or learning portal",
            "Any third-party actions or omissions",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "FAC's total liability to you for any claim shall not exceed the amount you paid to FAC in the twelve months preceding the claim.",
            },
            {
              type: "paragraph",
              text: "Some jurisdictions do not allow the limitation of certain liabilities. In those jurisdictions, FAC's liability is limited to the greatest extent permitted by law. Nothing in these terms limits FAC's liability for fraud, gross negligence, or intentional misconduct.",
            },
          ],
        },
        {
          heading: "10. Indemnification",
          body: [
            "You agree to indemnify and hold harmless Food Allergy Certified LLC and its members, officers, employees, and agents from any claims, losses, damages, liabilities, and expenses (including reasonable attorney fees) arising from your use of our services, your violation of these Terms, your violation of any third-party rights, or any allergic incident at your facility.",
          ],
        },
        {
          heading: "11. Third-Party Services",
          body: [
            "Our website and training portal integrate with third-party services including Calendly, Stripe, Google, Meta, and LearnWorlds. Your use of these services is governed by their own terms of service and privacy policies. FAC is not responsible for the actions or policies of these third parties.",
          ],
        },
        {
          heading: "12. Governing Law and Disputes",
          body: [
            "These Terms are governed by the laws of the State of California, without regard to its conflict-of-law provisions. Any dispute arising under these Terms shall first be addressed through good-faith discussion. If we cannot resolve a dispute informally, it shall be submitted to binding arbitration in California under the rules of the American Arbitration Association, except that either party may seek injunctive or equitable relief in court for intellectual property violations.",
            "California residents: You may also have the right to bring certain claims in small claims court. Nothing in these Terms is intended to waive rights that cannot be waived under California law.",
          ],
        },
        {
          heading: "13. Changes to These Terms",
          body: [
            "We may update these Terms from time to time. We will notify active clients by email of any material changes. Your continued use of our services after changes are posted constitutes acceptance of the updated Terms.",
          ],
        },
        {
          heading: "14. Contact Us",
          body: [
            "Questions about these Terms? We are happy to talk them through.",
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
