import React from 'react';
import styles from './privacy.module.css';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Privacy Policy for Tarot AI</h1>
                <p><strong>Effective Date:</strong> August 17, 2025</p>

                <p>
                    Welcome to Tarot AI. This Privacy Policy is designed to help you understand how we collect, use, and safeguard your information. By using our application, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    When you register for our service using Google or Facebook, we collect the following personal information to create and manage your account:
                </p>
                <ul>
                    <li><strong>Name:</strong> To personalize your experience.</li>
                    <li><strong>Email Address:</strong> To communicate with you and for account verification.</li>
                    <li><strong>Profile Picture:</strong> To display in your user profile within the app.</li>
                </ul>
                <p>
                    This information is collected solely for the purpose of providing and improving the service, and is not shared with any third parties.
                </p>

                <h2>2. How We Use Your Information</h2>
                <p>
                    Your data is used exclusively for the following purposes:
                </p>
                <ul>
                    <li>To create and secure your user account.</li>
                    <li>To provide a personalized experience within the app.</li>
                    <li>To communicate important updates or information regarding your account.</li>
                </ul>

                {/* --- הסעיף החדש שהוספנו --- */}
                <h2>3. User Data Deletion</h2>
                <p>
                    In accordance with Meta Platform's policy, we provide a straightforward way for you to request the deletion of your data.
                </p>
                <p>
                    To delete your account and all associated data from Tarot AI, please send an email to <strong>amosbahar@gmail.com</strong> with the subject line "User Data Deletion Request". We will process your request and permanently delete your data within 7 business days.
                </p>
                {/* --- סוף הסעיף החדש --- */}

                <h2>4. Data Security</h2>
                <p>
                    We are committed to protecting your information. We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
                </p>

                <h2>5. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>

                <h2>6. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    <a href="mailto:amosbahar@gmail.com" className={styles.link}>amosbahar@gmail.com</a>
                </p>

                <div className={styles.homeLink}>
                    <Link href="/">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;