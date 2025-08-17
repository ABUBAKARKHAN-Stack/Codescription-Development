import Link from "next/link";

const FooterCopyRight = () => {
  const date = new Date();
  return (
    <section className="space-y-4" aria-label="copyright">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="text-center sm:text-left text-sm text-gray-400">
          © {date.getFullYear()}{" "}
          <span className="font-semibold text-cyan-400">
            TechSoft Solutions
          </span>
          . All rights reserved.
        </p>
        <div className="flex justify-center sm:justify-end gap-4 text-sm">
          <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Terms
          </Link>
          <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterCopyRight