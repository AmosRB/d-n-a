// app/privacy-policy/page.jsx
import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          
          <header className="text-center mb-8 border-b pb-4">
            <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-500 mt-2">Last updated: August 17, 2025</p>
          </header>

          <main className="prose prose-lg max-w-none">
            <p>
              D&A Code Design built the Tarot AI app as a Freemium app. This SERVICE is provided by D&A Code Design at no cost and is intended for use as is.
            </p>
            <p>
              This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
            </p>
            <p>
              If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Tarot AI unless otherwise defined in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8">Information Collection and Use</h2>
            <p>
              For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your questions and app usage data. The information that we request will be retained by us and used as described in this privacy policy.
            </p>
            <p>
              When you register using a third-party service like Google or Facebook, we collect your name, email address, and profile picture to create and manage your account.
            </p>
            <p>
              The app does use third-party services that may collect information used to identify you. Link to the privacy policy of third-party service providers used by the app:
            </p>
            <ul className="list-disc list-inside">
              <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Play Services</a></li>
              <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AdMob</a></li>
              <li><a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics for Firebase</a></li>
              <li><a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Firebase Crashlytics</a></li>
            </ul>

            {/* --- הסעיף החדש שהוספנו --- */}
            <h2 className="text-2xl font-bold mt-8">User Data Deletion</h2>
            <p>
              In accordance with platform policies (such as Meta/Facebook), we provide a way for you to request the deletion of your data. If you wish to delete your account and the associated data from the Tarot AI app, please send an email to <a href="mailto:amosbahar@gmail.com" className="text-blue-600 hover:underline">amosbahar@gmail.com</a> with the subject line "User Data Deletion Request".
            </p>
            <p>
              We will process your request and confirm the deletion of your data in a timely manner.
            </p>
            {/* --- סוף הסעיף החדש --- */}

            <h2 className="text-2xl font-bold mt-8">Log Data</h2>
            <p>
              We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
            </p>

            <h2 className="text-2xl font-bold mt-8">Security</h2>
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:amosbahar@gmail.com" className="text-blue-600 hover:underline">amosbahar@gmail.com</a>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}