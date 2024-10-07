import React from "react";

const page = () => {
  return (
    <div className="px-4">
      <section className="container max-w-6xl px-5 mx-auto py-8 lg:py-10 bg-white rounded-lg shadow-md my-4 md:my-12">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        <p className="mb-4">
          Welcome to Tech Tips & Tricks. This Privacy Policy outlines how we
          collect, use, and protect your personal information when you use our
          platform. By accessing or using our services, you agree to the terms
          of this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect information that you provide directly to us when you
          register, create a profile, post content, or make a purchase. This
          includes your name, email address, and payment information for premium
          services.
        </p>
        <p className="mb-4">
          We may also collect information automatically, such as your IP
          address, browser type, operating system, and browsing behavior on our
          site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Provide, maintain, and improve our services.</li>
          <li>
            Process transactions and send relevant account or service-related
            notifications.
          </li>
          <li>Personalize your experience on the platform.</li>
          <li>Monitor and analyze trends to improve user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          3. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not share your personal information with third parties, except
          in the following circumstances:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>With your consent.</li>
          <li>To comply with legal obligations.</li>
          <li>To protect the security and integrity of our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to improve your
          experience on our platform and collect usage data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your personal information. However, no method of transmission
          over the Internet is 100% secure, and we cannot guarantee its absolute
          security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal
          information. If you wish to exercise these rights, please contact us
          at support@techtipsandtricks.com.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. If we make
          significant changes, we will notify you through our platform or via
          email.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at support@techtipsandtricks.com.
        </p>
      </section>
    </div>
  );
};

export default page;
