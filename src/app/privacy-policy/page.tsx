import { Footer } from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../public/logo.png";
import TreeFloat from "@/components/treeFloat";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Memobelc</title>
        <meta
          name="description"
          content="Memobelc is a platform that transforms learning with the power of spaced repetition and AI."
        />
      </Head>

      <header className="bg-[#219ae7] py-4">
        <div className="container mx-auto flex justify-center items-center">
          <Link href="/" target="_parent">
            <Image
              src={logo}
              alt="Logo Memobelc"
              className="h-32 object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="bg-gray-100 text-gray-800 px-5 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective Date: May 5, 2025</p>

        <p className="mb-4">
          Memobelc LTDA ({"us"}, {"we"}, or {"our"}) operates the Memobelc
          mobile application (the {"Service"})...
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Contact Information
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Email:{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:contato@memobelc.com"
            >
              contato@memobelc.com
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Password</li>
          <li>Phone number</li>
          <li>Uploaded content (images, audio files, PDFs)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Data</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow participation in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analysis to improve the Service</li>
          <li>To monitor usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
          <li>To send emails, promotions, tips, and suggestions</li>
          <li>
            For digital marketing and remarketing campaigns by Memobelc and its
            partners
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Advertising</h2>
        <p className="mb-4">
          We may use third-party service providers to show advertisements...
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Freemium Model, Subscriptions, and In-App Purchases
        </h2>
        <p className="mb-4">Our app offers both free and premium content...</p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Access to Device Features
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Access to media gallery for uploading images, audio, PDFs</li>
          <li>Push notifications</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Data Security</h2>
        <p className="mb-4">
          We strive to use commercially acceptable means to protect your data...
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Service Providers</h2>
        <p className="mb-4">
          We may employ third-party companies and individuals...
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Analytics</h2>
        <h3 className="text-xl font-semibold mb-1">Firebase Analytics</h3>
        <p className="mb-4">
          Firebase Analytics is provided by Google. More info:{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Firebase Privacy Policy
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Links to Other Sites
        </h2>
        <p className="mb-4">
          Our Service may contain links to other sites not operated by us...
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time...
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your data...
        </p>

        <section
          id="account-deletion"
          className="max-w-6xl mx-auto px-5 pb-32 pt-10"
        >
          <h2 className="text-2xl font-semibold mb-2">Account Deletion</h2>
          <p className="mb-4">
            To delete your account and all associated data, email{" "}
            <a
              href="mailto:contato@memobelc.com"
              className="text-blue-600 underline"
            >
              contato@memobelc.com
            </a>{" "}
            with the subject <em>&quot;Account Deletion Request&quot;</em>.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            What data will be deleted?
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Your name, email, and encrypted password</li>
            <li>
              All content you&apos;ve uploaded. Shared/duplicated content will
              not be deleted.
            </li>
            <li>Usage history and learning progress</li>
          </ul>
          <p className="mb-4">
            We do not retain any personal data after deletion.
          </p>
        </section>
      </main>
      <TreeFloat />
      <Footer />
    </>
  );
}
