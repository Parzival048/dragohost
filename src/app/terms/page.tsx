/**
 * Terms and Conditions Page
 * Legal terms governing the use of DragoHost services
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | DragoHost',
  description: 'Terms and Conditions for using DragoHost Minecraft server hosting services.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using DragoHost's services ("Services"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms and Conditions, please do not use our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="text-gray-300 mb-4">
              DragoHost provides Minecraft server hosting services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Game server hosting and management</li>
              <li>Access to Pterodactyl control panel</li>
              <li>DDoS protection</li>
              <li>24/7 server uptime (subject to maintenance)</li>
              <li>Technical support via Discord and email</li>
              <li>Automated backups (depending on plan)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
            <p className="text-gray-300 mb-4">
              To use our Services, you must:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Be at least 13 years of age (or have parental consent)</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-300 mb-4">
              You agree NOT to use our Services for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Any illegal activities or violation of applicable laws</li>
              <li>Distribution of malware, viruses, or malicious code</li>
              <li>Hosting content that infringes intellectual property rights</li>
              <li>Phishing, spamming, or fraudulent activities</li>
              <li>DDoS attacks or network disruption</li>
              <li>Mining cryptocurrencies without prior authorization</li>
              <li>Hosting adult content, hate speech, or harassment</li>
              <li>Reselling our services without authorization</li>
              <li>Excessive resource usage that affects other users</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Violation of this policy may result in immediate suspension or termination of your account without refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>

            <h3 className="text-xl font-semibold text-white mb-3">5.1 Billing</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>All prices are listed in Indian Rupees (INR) unless otherwise stated</li>
              <li>Services are billed in advance on a monthly or custom billing cycle</li>
              <li>Payments are processed through secure payment gateways (Razorpay, etc.)</li>
              <li>All fees are non-refundable except as stated in our Refund Policy</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 Auto-Renewal</h3>
            <p className="text-gray-300 mb-4">
              Services automatically renew at the end of each billing period unless you cancel before the renewal date. You will be charged using your selected payment method.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.3 Late Payment</h3>
            <p className="text-gray-300 mb-4">
              Failure to pay on time may result in service suspension. If payment is not received within 7 days of the due date, your account and data may be permanently deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Service Level Agreement (SLA)</h2>

            <h3 className="text-xl font-semibold text-white mb-3">6.1 Uptime Guarantee</h3>
            <p className="text-gray-300 mb-4">
              We strive to maintain 99.9% uptime. Planned maintenance will be announced in advance via Discord. SLA does not cover:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Issues caused by factors beyond our control (ISP outages, natural disasters, etc.)</li>
              <li>Client-side network or hardware issues</li>
              <li>Service suspension due to violation of our terms</li>
              <li>DDoS attacks targeting your server specifically</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">6.2 Support Response Times</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Critical issues: Response within 2-4 hours</li>
              <li>General inquiries: Response within 24 hours</li>
              <li>Billing questions: Response within 12 hours</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Data and Backups</h2>
            <p className="text-gray-300 mb-4">
              While we provide automated backups for certain plans, you are responsible for maintaining your own backups. We are not liable for any data loss, regardless of the cause.
            </p>
            <p className="text-gray-300 mb-4">
              Backups are retained for a limited time and may be deleted without notice. We recommend downloading important data regularly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Suspension and Termination</h2>

            <h3 className="text-xl font-semibold text-white mb-3">8.1 By DragoHost</h3>
            <p className="text-gray-300 mb-4">
              We reserve the right to suspend or terminate your account immediately if:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>You violate these Terms and Conditions</li>
              <li>Payment is not received</li>
              <li>Your server is causing technical issues for other users</li>
              <li>We are required to do so by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">8.2 By Customer</h3>
            <p className="text-gray-300 mb-4">
              You may cancel your service at any time through the billing panel. Cancellation takes effect at the end of your current billing period. No partial refunds are provided for unused time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by law, DragoHost shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Service interruptions or data loss</li>
              <li>Actions of third parties or force majeure events</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Our total liability shall not exceed the amount you paid for the service in the past 3 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content on our website, including text, graphics, logos, and software, is the property of DragoHost or its licensors and is protected by copyright and intellectual property laws.
            </p>
            <p className="text-gray-300 mb-4">
              You retain ownership of content you upload to your server but grant us a license to host and transmit it as necessary to provide the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">11. Privacy</h2>
            <p className="text-gray-300 mb-4">
              Your use of our Services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect and use your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these Terms and Conditions at any time. We will notify you of significant changes via email or Discord. Continued use of our Services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-none text-gray-300 space-y-2">
              <li><strong className="text-white">Email:</strong> support@dragohost.cloud</li>
              <li><strong className="text-white">Discord:</strong> https://discord.gg/dragohost</li>
              <li><strong className="text-white">Website:</strong> https://dragohost.cloud</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
