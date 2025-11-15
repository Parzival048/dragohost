/**
 * Shipping and Delivery Policy Page
 * Information about service delivery for digital hosting services
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping and Delivery Policy | DragoHost',
  description: 'Shipping and Delivery Policy for DragoHost digital hosting services - instant automated delivery.',
};

export default function DeliveryPolicy() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Shipping and Delivery Policy
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Nature of Services</h2>
            <p className="text-gray-300 mb-4">
              DragoHost provides <strong className="text-white">digital hosting services</strong> for Minecraft game servers. As these are entirely digital services delivered electronically, there is no physical shipping involved. This policy explains how our services are delivered and activated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Instant Automated Delivery</h2>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Service Activation Timeline</h3>
            <p className="text-gray-300 mb-4">
              Upon successful payment verification, your hosting service is activated automatically:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Immediate:</strong> Most services are activated within 1-5 minutes of payment confirmation</li>
              <li><strong className="text-white">Standard Plans:</strong> Automated provisioning typically completes within 5-10 minutes</li>
              <li><strong className="text-white">Custom Plans:</strong> May require manual setup (up to 24 hours)</li>
              <li><strong className="text-white">Dedicated Servers:</strong> Setup time of 24-48 hours</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 What You Receive</h3>
            <p className="text-gray-300 mb-4">
              After your order is processed, you will receive:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Welcome email with account credentials</li>
              <li>Access to Pterodactyl control panel</li>
              <li>Server connection details (IP address and port)</li>
              <li>FTP/SFTP login information</li>
              <li>Getting started guide and documentation links</li>
              <li>Discord server invite for support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Delivery Methods</h2>

            <h3 className="text-xl font-semibold text-white mb-3">3.1 Email Delivery</h3>
            <p className="text-gray-300 mb-4">
              All service credentials and access information are delivered to the email address provided during registration. Please ensure:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Your email address is correct and accessible</li>
              <li>Check your spam/junk folder if you don't receive our email</li>
              <li>Add support@dragohost.cloud to your contacts to avoid filtering</li>
              <li>Our emails typically arrive within 5-15 minutes of purchase</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2 Client Area Access</h3>
            <p className="text-gray-300 mb-4">
              You can also access all service details through:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Pterodactyl Panel: https://console.dragohost.cloud</li>
              <li>Discord support channel</li>
              <li>Support ticket system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Service Availability</h2>

            <h3 className="text-xl font-semibold text-white mb-3">4.1 Geographic Availability</h3>
            <p className="text-gray-300 mb-4">
              Our services are available globally. However, server locations are currently limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Primary:</strong> Mumbai, India</li>
              <li><strong className="text-white">Coming Soon:</strong> Additional locations in Asia, Europe, and North America</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">4.2 Service Hours</h3>
            <p className="text-gray-300 mb-4">
              Our automated provisioning system operates 24/7/365. Orders are processed immediately regardless of the time of day.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Delivery Delays</h2>

            <h3 className="text-xl font-semibold text-white mb-3">5.1 Common Causes of Delays</h3>
            <p className="text-gray-300 mb-4">
              While rare, delivery delays may occur due to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Payment Verification:</strong> Additional verification required for fraud prevention (up to 2 hours)</li>
              <li><strong className="text-white">Bank Processing:</strong> Payment gateway delays (typically resolved within 24 hours)</li>
              <li><strong className="text-white">System Maintenance:</strong> Scheduled maintenance windows (announced in advance)</li>
              <li><strong className="text-white">High Demand:</strong> Unusual traffic spikes during promotions</li>
              <li><strong className="text-white">Manual Review:</strong> First-time customers or large orders may require verification</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 What to Do If You Experience Delays</h3>
            <p className="text-gray-300 mb-4">
              If your service is not activated within the expected timeframe:
            </p>
            <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
              <li>Check your email (including spam folder) for setup instructions</li>
              <li>Verify payment was successful in your bank/payment app</li>
              <li>Check your account on the Pterodactyl panel</li>
              <li>Contact our support team via Discord or email with your order details</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Order Tracking</h2>

            <h3 className="text-xl font-semibold text-white mb-3">6.1 Order Status</h3>
            <p className="text-gray-300 mb-4">
              You can track your order status through:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Order confirmation email with tracking details</li>
              <li>Pterodactyl control panel - Services section</li>
              <li>Support ticket updates</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">6.2 Order Statuses Explained</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Pending:</strong> Payment is being verified</li>
              <li><strong className="text-white">Processing:</strong> Server is being provisioned</li>
              <li><strong className="text-white">Active:</strong> Service is ready to use</li>
              <li><strong className="text-white">On Hold:</strong> Additional verification required</li>
              <li><strong className="text-white">Cancelled:</strong> Order was cancelled or payment failed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Failed Deliveries</h2>

            <h3 className="text-xl font-semibold text-white mb-3">7.1 Email Delivery Failures</h3>
            <p className="text-gray-300 mb-4">
              If our welcome email bounces back or is undeliverable:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>We will attempt to contact you via alternative methods</li>
              <li>You can access your service details through the Pterodactyl panel</li>
              <li>Contact support immediately to update your email address</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">7.2 Service Activation Failures</h3>
            <p className="text-gray-300 mb-4">
              If automatic provisioning fails:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Our system will automatically retry up to 3 times</li>
              <li>A support ticket will be automatically created</li>
              <li>Our team will manually intervene within 2-4 hours</li>
              <li>You will receive updates via email</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Upgrades and Modifications</h2>

            <h3 className="text-xl font-semibold text-white mb-3">8.1 Service Upgrades</h3>
            <p className="text-gray-300 mb-4">
              Upgrades to higher-tier plans are processed:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Immediately:</strong> For most standard upgrades</li>
              <li><strong className="text-white">Within 1 hour:</strong> For resource allocation changes</li>
              <li><strong className="text-white">Within 24 hours:</strong> For server migrations</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">8.2 Add-On Services</h3>
            <p className="text-gray-300 mb-4">
              Additional services (backup slots, dedicated IP, etc.) are typically activated within 5-15 minutes of purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Support and Assistance</h2>
            <p className="text-gray-300 mb-4">
              Our support team is available to assist with any delivery-related questions:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Response Time:</strong> Typically within 2-4 hours</li>
              <li><strong className="text-white">Emergency Issues:</strong> Priority support for payment/delivery problems</li>
              <li><strong className="text-white">Setup Assistance:</strong> Free help getting started with your server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              Delivery timelines may vary for third-party services or licenses purchased through DragoHost. We will communicate specific delivery times for such services at the time of purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about service delivery or activation, please contact us:
            </p>
            <ul className="list-none text-gray-300 space-y-2">
              <li><strong className="text-white">Support Email:</strong> support@dragohost.cloud</li>
              <li><strong className="text-white">Billing Email:</strong> billing@dragohost.cloud</li>
              <li><strong className="text-white">Discord:</strong> https://discord.gg/dragohost (Fastest response)</li>
              <li><strong className="text-white">Website:</strong> https://dragohost.cloud</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
