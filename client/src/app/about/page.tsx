import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { GiLightBulb } from "react-icons/gi";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-5">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold mb-4 text-primary-text">
            About TechTalk
          </h1>
          <p className="text-xl text-secondary-text">
            Empowering Tech Enthusiasts Worldwide
          </p>
        </div>

        <main className="container mx-auto px-4 py-5">
          <section className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-12">
            <h2 className="text-3xl font-semibold mb-2 md:mb-4 text-primary-text">
              Our Story
            </h2>
            <p className="text-lg mb-2 text-secondary-text">
              TechTalk was created from a deep passion for technology and the
              desire to build a community where tech enthusiasts can come
              together to share knowledge, exchange experiences, and stay
              updated on the latest innovations. Launched in 2024, TechTalk has
              quickly gained recognition as a comprehensive platform for
              practical tech solutions, expert insights, and innovative trends.
              Our mission is to empower individuals to navigate the
              ever-changing tech landscape by providing a space where everyone
              from beginners to seasoned professionals can access valuable
              resources. We cover everything from troubleshooting common tech
              issues to exploring new software, gadgets, and digital tools.
              Whether you&apos;re looking for product reviews, tutorials, or
              hands-on advice from industry experts, TechTalk has something for
              everyone. What sets TechTalk apart is our commitment to fostering
              a vibrant, interactive community. Users can not only learn but
              also contribute their own insights and experiences, enriching the
              platform with diverse perspectives. Additionally, TechTalk offers
              personalized content, user-generated discussions, and premium
              features for those who want to delve deeper into specific tech
              topics. With a focus on collaboration, innovation, and education,
              TechTalk is your go-to destination for staying ahead in the
              fast-paced world of technology.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-4 md:mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUserSecret className="w-12 h-12 text-primary-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-text">
                Our Team
              </h3>
              <p className="text-secondary-text">
                Our team consists of passionate tech enthusiasts, developers,
                and industry experts dedicated to making technology accessible
                to everyone. Together, we work to simplify tech, share
                knowledge, and empower users to navigate the ever-evolving
                digital landscape with confidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <GiLightBulb className="w-12 h-12 text-primary-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-text">
                Our Mission
              </h3>
              <p className="text-secondary-text">
                Our mission is to equip individuals with the knowledge and tools
                to confidently navigate and succeed in the digital world,
                empowering them to stay informed, solve problems, and embrace
                new technologies with ease.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FiTarget className="w-12 h-12 text-primary-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-text">
                Our Vision
              </h3>
              <p className="text-secondary-text">
                Our vision is to be the world’s leading platform for tech
                education, problem-solving, and community-driven innovation,
                creating a space where individuals collaborate, learn, and
                advance together in the ever-evolving technology landscape.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md mb-4 md:mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-primary-text">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-secondary-text marker:text-primary-blue">
              <li>Expert advice on a wide range of tech topics</li>
              <li>User-generated content and personal experiences</li>
              <li>Tutorials and guides for common tech issues</li>
              <li>
                Reviews and recommendations for the latest gadgets and software
              </li>
              <li>A vibrant community of tech enthusiasts</li>
              <li>Premium content for those seeking in-depth knowledge</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
