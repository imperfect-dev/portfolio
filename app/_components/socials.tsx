import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Socials() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://github.com/rahul-9429"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <Github className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://linkedin.com/in/santhosh-rahul"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <Linkedin className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="mailto:santhoshrahul9429@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <span className="sr-only">Email</span>
          <Mail className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://twitter.com/rahul_9429"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter (opens in a new tab)"
          title="Twitter"
        >
          <span className="sr-only">Twitter</span>
          <Twitter className="h-6 w-6" />
        </a>
      </li>
    </ul>
  );
}