import { brandName } from "@/constants/constants";
import Link from "next/link";

const FooterCopyRight = () => {
  const date = new Date();
  return (
    <section className="space-y-4" aria-label="copyright">
      <p className="text-muted-foreground text-center text-sm">
        © {date.getFullYear()}{" "}
        <span className="text-brand font-semibold">{brandName}</span>. All
        rights reserved.
      </p>
    </section>
  );
};

export default FooterCopyRight;
