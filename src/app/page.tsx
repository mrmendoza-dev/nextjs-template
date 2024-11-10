import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@assets/icons";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/images/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </main>
  );
}
