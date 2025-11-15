/**
 * Contact Us Page
 * Contact information and support channels for DragoHost
 */

import { Metadata } from 'next';
import { MessageCircle, Mail, Globe, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | DragoHost',
  description: 'Get in touch with DragoHost support team - Discord, email, and more contact options.',
};

export default function ContactUs() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Discord Community',
      description: 'Join our Discord server for instant support and community interaction',
      value: 'discord.gg/dragohost',
      link: 'https://discord.gg/dragohost',
      color: 'text-[#5865F2]',
      bgColor: 'bg-[#5865F2]/10',
      recommended: true,
    },
    {
      icon: Mail,
      title: 'Support Email',
      description: 'General support and technical inquiries',
      value: 'support@dragohost.cloud',
      link: 'mailto:support@dragohost.cloud',
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
    },
    {
      icon: Mail,
      title: 'Billing Email',
      description: 'Billing, payments, and refund inquiries',
      value: 'billing@dragohost.cloud',
      link: 'mailto:billing@dragohost.cloud',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10',
    },
    {
      icon: Globe,
      title: 'Client Panel',
      description: 'Access your server control panel',
      value: 'console.dragohost.cloud',
      link: 'https://console.dragohost.cloud',
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Contact{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have questions? Need support? We're here to help! Choose your preferred contact method below.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Link
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1">
                  {method.recommended && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-neon-blue text-white text-xs font-bold rounded-full">
                      Recommended
                    </div>
                  )}

                  <div className={`inline-flex p-3 rounded-lg ${method.bgColor} mb-4`}>
                    <Icon className={`w-6 h-6 ${method.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {method.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3">
                    {method.description}
                  </p>

                  <p className={`${method.color} font-mono text-sm`}>
                    {method.value}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Business Hours */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-neon-green/10">
                <Clock className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold text-white">Support Hours</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Discord Support:</span>
                <span className="text-neon-green font-semibold">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Email Support:</span>
                <span className="text-white">24-48 hours response</span>
              </li>
              <li className="flex justify-between">
                <span>Technical Issues:</span>
                <span className="text-white">2-4 hours response</span>
              </li>
              <li className="flex justify-between">
                <span>Billing Inquiries:</span>
                <span className="text-white">12-24 hours response</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-neon-purple/10">
                <MapPin className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white">Server Location</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="text-white font-semibold mb-1">Primary Datacenter</p>
                <p className="text-sm">Mumbai, India 🇮🇳</p>
                <p className="text-sm text-gray-500">Ultra-low latency for Asian players</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Network</p>
                <p className="text-sm">10 Gbps with DDoS Protection</p>
                <p className="text-sm text-gray-500">99.9% uptime guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                How do I get support?
                <span className="text-neon-blue group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-300 mt-4">
                The fastest way to get support is through our Discord server at discord.gg/dragohost. Our community and support team are active 24/7 to help you with any issues. You can also email us at support@dragohost.cloud or open a ticket through the Pterodactyl panel.
              </p>
            </details>

            <details className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                What are your response times?
                <span className="text-neon-blue group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-300 mt-4">
                Discord support typically responds within minutes. Email support responses are usually sent within 2-4 hours for technical issues and 12-24 hours for billing inquiries. Critical server issues are prioritized and handled immediately.
              </p>
            </details>

            <details className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                Do you offer phone support?
                <span className="text-neon-blue group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-300 mt-4">
                Currently, we do not offer phone support. We find that Discord and email support are more efficient for troubleshooting technical issues, as they allow us to share screenshots, logs, and code snippets easily. Our Discord support is available 24/7 for instant assistance.
              </p>
            </details>

            <details className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                How do I report abuse or violations?
                <span className="text-neon-blue group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-300 mt-4">
                To report Terms of Service violations, abuse, or security issues, please email abuse@dragohost.cloud with detailed information. We take all reports seriously and will investigate within 24 hours.
              </p>
            </details>

            <details className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                Where can I find documentation?
                <span className="text-neon-blue group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-300 mt-4">
                Our knowledge base and documentation are available in our Discord server. You'll find guides on server setup, plugin installation, troubleshooting, and more. We're constantly adding new tutorials based on user feedback.
              </p>
            </details>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mt-16 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Join our Discord community and get instant help from our support team and fellow gamers!
          </p>
          <Link
            href="https://discord.gg/dragohost"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand rounded-full font-bold text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Join Discord Community
          </Link>
        </div>
      </div>
    </div>
  );
}
