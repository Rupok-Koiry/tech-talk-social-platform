import React from "react";

const page = () => {
  return (
    <div className="px-5">
      <section className="container max-w-6xl px-5 mx-auto py-8 lg:py-10 bg-white rounded-lg shadow-md my-4 md:my-12">
        <h2 className="text-4xl font-bold mb-4">Terms of Service</h2>
        <p className="mb-6">Last updated: October 1, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the TechTalk platform (the “Service”), you
            agree to comply with and be bound by these Terms of Service. If you
            do not agree to these terms, you may not access the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            2. Changes to the Terms
          </h2>
          <p>
            We reserve the right to modify or replace these Terms at any time.
            Any changes will be effective upon posting to the Service. Continued
            use of the Service after any such changes constitutes your
            acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
          <p>
            To access certain features of the Service, you may be required to
            register an account. You agree to provide accurate information and
            to keep it up to date. You are responsible for safeguarding your
            account, including the confidentiality of your login details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            4. User-Generated Content
          </h2>
          <p>
            By submitting content (such as tips, reviews, or comments) to the
            platform, you grant us a non-exclusive, royalty-free, perpetual
            license to use, modify, and distribute your content. You are
            responsible for ensuring that your submissions do not violate any
            laws or third-party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            5. Payment and Premium Content
          </h2>
          <p>
            Some features of the Service may require payment. By purchasing
            access to premium content, you agree to the pricing and payment
            terms specified. Payments are processed securely via third-party
            payment processors. We do not store any payment information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            6. Prohibited Activities
          </h2>
          <p>
            You agree not to engage in any unlawful or unauthorized activities,
            including but not limited to: spamming, hacking, impersonation, or
            uploading malicious code. We reserve the right to terminate accounts
            and access to the Service for any violations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            7. Limitation of Liability
          </h2>
          <p>
            The Service is provided `as is` and `as available` without
            warranties of any kind. We will not be liable for any damages
            arising from the use of the platform, including but not limited to
            indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service
            at any time, without prior notice or liability, for any reason,
            including violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of [Your Jurisdiction], without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            10. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:support@techtalk.com"
              className="text-primary-blue hover:underline"
            >
              support@techtalk.com
            </a>
            .
          </p>
        </section>
      </section>
    </div>
  );
};

export default page;
