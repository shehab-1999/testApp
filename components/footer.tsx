import Link from "next/link";
import { Code2, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link href="/" className=" mb-5">
             <Logo/>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Transforming ideas into exceptional digital experiences through innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Services", "AI Solutions"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-3">
              <p>123 Innovation Drive</p>
              <p>Tech Valley, CA 94043</p>
              <p>hello@nidavi.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} NIDAVI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}