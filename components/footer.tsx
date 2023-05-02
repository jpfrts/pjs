import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import {
  TbBrandInstagram,
  TbBrandTwitch,
  TbBrandTwitter,
  TbBrandTiktok,
} from "react-icons/tb";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 italic">
            jp freitas — 2023.
          </h3>
          <div className="flex flex-row gap-10 justify-end lg:mb-0 lg:pr-4 lg:w-1/2 text-right">
            <Link
              href="https://www.instagram.com/jpfreitas_"
              target="_blank"
              rel="noopener"
            >
              <TbBrandInstagram size="3em" />
            </Link>
            <TbBrandTwitter size="3em" />
            <TbBrandTwitch size="3em" />
            <TbBrandTiktok size="3em" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
