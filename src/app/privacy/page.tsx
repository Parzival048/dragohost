/**
 * Privacy Policy Page
 * Legal information about data collection and usage
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DragoHost',
  description: 'Privacy Policy for DragoHost - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to DragoHost ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://dragohost.cloud and use our Minecraft server hosting services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
            <p className="text-gray-300 mb-4">We collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Register for an account</li>
              <li>Purchase our services</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p className="text-gray-300 mb-4">This information may include:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Name and email address</li>
              <li>Phone number</li>
              <li>Billing and payment information</li>
              <li>Discord username (if provided)</li>
              <li>IP address and server location preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-300 mb-4">When you visit our website, we automatically collect certain information about your device, including:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Cookies and usage data</li>
              <li>Pages visited and time spent on pages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Provide, maintain, and improve our hosting services</li>
              <li>Process your transactions and manage your orders</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Monitor and analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">We do not sell your personal information. We may share your information with:</p>

            <h3 className="text-xl font-semibold text-white mb-3">4.1 Service Providers</h3>
            <p className="text-gray-300 mb-4">We may share your information with third-party service providers who perform services on our behalf, including:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Payment processors (Razorpay, Stripe, etc.)</li>
              <li>Cloud hosting providers</li>
              <li>Email service providers</li>
              <li>Analytics services</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">4.2 Legal Requirements</h3>
            <p className="text-gray-300 mb-4">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders or government agencies).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure server infrastructure with DDoS protection</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal information</li>
              <li>Encrypted payment processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">Access:</strong> Request a copy of your personal information</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate information</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
              <li><strong className="text-white">Objection:</strong> Object to processing of your information</li>
              <li><strong className="text-white">Data Portability:</strong> Request transfer of your data</li>
              <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-300 mb-4">
              To exercise these rights, please contact us at support@dragohost.cloud
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
            <p className="text-gray-300 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
