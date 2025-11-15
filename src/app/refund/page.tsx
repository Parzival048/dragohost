/**
 * Cancellation and Refund Policy Page
 * Information about cancellations and refund eligibility
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | DragoHost',
  description: 'Cancellation and Refund Policy for DragoHost Minecraft server hosting services.',
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Cancellation and Refund Policy
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p className="text-gray-300 mb-4">
              At DragoHost, we strive to provide the best Minecraft server hosting experience. This policy outlines our cancellation and refund procedures to ensure transparency and fairness for all customers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Money-Back Guarantee</h2>
            <p className="text-gray-300 mb-4">
              We offer a <strong className="text-white">7-day money-back guarantee</strong> for first-time customers on select plans.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Eligibility for Money-Back Guarantee</h3>
            <p className="text-gray-300 mb-4">You are eligible for a full refund if:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>You request a refund within 7 days of your initial purchase</li>
              <li>This is your first purchase with DragoHost</li>
              <li>You have not violated our Terms of Service</li>
              <li>Your account has not been suspended for abuse</li>
              <li>Less than 100GB of bandwidth has been used</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Non-Refundable Items</h3>
            <p className="text-gray-300 mb-4">The following are NOT eligible for refunds:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Renewals and upgrades</li>
              <li>Domain registrations and transfers</li>
              <li>Setup fees or custom configuration charges</li>
              <li>Dedicated IP addresses</li>
              <li>Third-party services or licenses</li>
              <li>Services purchased at promotional or discounted rates</li>
              <li>Add-ons and premium plugins</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Cancellation Policy</h2>

            <h3 className="text-xl font-semibold text-white mb-3">3.1 How to Cancel</h3>
            <p className="text-gray-300 mb-4">You can cancel your service at any time by:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Logging into your client area and submitting a cancellation request</li>
              <li>Contacting our support team via Discord or email</li>
              <li>Opening a support ticket through the Pterodactyl panel</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2 Cancellation Processing Time</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Immediate cancellations: Service terminates at the end of the current billing period</li>
              <li>End-of-period cancellations: Service continues until the paid period expires</li>
              <li>Cancellation requests are processed within 24 hours</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.3 Data Retention After Cancellation</h3>
            <p className="text-gray-300 mb-4">
              After cancellation:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Your server data will be retained for <strong className="text-white">7 days</strong> after service termination</li>
              <li>After 7 days, all data will be permanently deleted and cannot be recovered</li>
              <li>We strongly recommend downloading backups before canceling</li>
              <li>Account information may be retained for legal and billing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Refund Process</h2>

            <h3 className="text-xl font-semibold text-white mb-3">4.1 How to Request a Refund</h3>
            <p className="text-gray-300 mb-4">To request a refund:</p>
            <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
              <li>Contact our support team via email at billing@dragohost.cloud</li>
              <li>Provide your account email and invoice/order number</li>
              <li>State the reason for your refund request</li>
              <li>Wait for our team to review your request</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mb-3">4.2 Refund Processing Time</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Refund requests are reviewed within <strong className="text-white">1-2 business days</strong></li>
              <li>Approved refunds are processed within <strong className="text-white">5-7 business days</strong></li>
              <li>Refunds are issued to the original payment method</li>
              <li>Bank/card processing may take an additional 5-10 business days</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">4.3 Partial Refunds</h3>
            <p className="text-gray-300 mb-4">
              We do not offer pro-rated or partial refunds for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Unused time in a billing cycle</li>
              <li>Early cancellations</li>
              <li>Downgrades to lower-tier plans</li>
              <li>Services not used during the billing period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Service Interruptions and Compensation</h2>

            <h3 className="text-xl font-semibold text-white mb-3">5.1 Unscheduled Downtime</h3>
            <p className="text-gray-300 mb-4">
              If our service experiences unscheduled downtime exceeding our 99.9% uptime SLA, you may be eligible for service credit:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">99.0% - 99.9% uptime:</strong> 5% service credit</li>
              <li><strong className="text-white">95.0% - 99.0% uptime:</strong> 15% service credit</li>
              <li><strong className="text-white">Below 95.0% uptime:</strong> 30% service credit</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 Claiming Service Credits</h3>
            <p className="text-gray-300 mb-4">
              To claim service credits:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Submit a support ticket within 7 days of the incident</li>
              <li>Provide details about the downtime experienced</li>
              <li>Credits are applied to your account, not issued as cash refunds</li>
              <li>Credits must be used within 90 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Exceptions and Special Cases</h2>

            <h3 className="text-xl font-semibold text-white mb-3">6.1 Termination for Violation</h3>
            <p className="text-gray-300 mb-4">
              If your account is terminated due to violation of our Terms of Service or Acceptable Use Policy, you are <strong className="text-white">not eligible for any refund</strong>.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.2 Chargebacks</h3>
            <p className="text-gray-300 mb-4">
              Filing a chargeback instead of requesting a refund through proper channels will result in:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Immediate suspension of all services</li>
              <li>Permanent ban from using DragoHost services</li>
              <li>Deletion of all data without backup</li>
              <li>Potential legal action to recover costs</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">6.3 Force Majeure</h3>
            <p className="text-gray-300 mb-4">
              Refunds are not provided for service interruptions caused by events beyond our control, including but not limited to: natural disasters, government actions, ISP outages, DDoS attacks, or other force majeure events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Subscription Management</h2>

            <h3 className="text-xl font-semibold text-white mb-3">7.1 Auto-Renewal Cancellation</h3>
            <p className="text-gray-300 mb-4">
              To prevent auto-renewal:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Cancel your service at least 24 hours before the renewal date</li>
              <li>Disable auto-renewal in your billing panel</li>
              <li>Remove saved payment methods</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">7.2 Failed Payments</h3>
            <p className="text-gray-300 mb-4">
              If a renewal payment fails:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Your service will be suspended after 3 days</li>
              <li>Data will be retained for 7 days from suspension</li>
              <li>After 7 days, all data will be permanently deleted</li>
              <li>No refunds will be issued for data loss due to non-payment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Modifications to This Policy</h2>
            <p className="text-gray-300 mb-4">
              DragoHost reserves the right to modify this Cancellation and Refund Policy at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of the modified policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about cancellations or refunds, please contact us:
            </p>
            <ul className="list-none text-gray-300 space-y-2">
              <li><strong className="text-white">Billing Email:</strong> billing@dragohost.cloud</li>
              <li><strong className="text-white">Support Email:</strong> support@dragohost.cloud</li>
              <li><strong className="text-white">Discord:</strong> https://discord.gg/dragohost</li>
              <li><strong className="text-white">Website:</strong> https://dragohost.cloud</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
