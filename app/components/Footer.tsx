import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { cn } from "@/utils/cn";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 py-8 rounded-t-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className={cn(
                "text-white hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 transition-colors duration-300"
              )}
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={cn(
                "text-white hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 transition-colors duration-300"
              )}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={cn(
                "text-white hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 transition-colors duration-300"
              )}
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className={cn(
                "text-white hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 transition-colors duration-300"
              )}
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </li>
        </ul>
        <p className="text-white dark:text-gray-300 text-sm">
          Made with ❤️ by DM NIHAL
        </p>
        <p className="text-white dark:text-gray-300 text-sm">
          2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
