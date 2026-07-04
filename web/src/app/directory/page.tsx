import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";
import directoryVector from "@/../public/images/DirectoryVector.png";
import directoryChildren from "@/../public/images/Frame 1000012073.png";
import directoryChildrenMobile from "@/../public/images/DirVector.png";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "Find a food allergy certified childcare center near you. We're building a national directory of FAC Certified centers, launching when our first certified centers are ready to be found.",
};

export default function DirectoryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white sm:hidden">
        <Image
          src={directoryVector}
          alt=""
          priority
          sizes="100vw"
          data-testid="directory-vector"
          className="block h-auto w-full"
        />

        <div className="-mt-[13vw] bg-brand-blush pb-14">
          <div className="relative mx-auto max-w-[350px] px-4 pt-5 text-center">
            <h1 className="font-serif text-[31px] font-extrabold leading-[1.08] text-brand-orange">
              Find a food allergy certified childcare center near you.
            </h1>

            <p className="mt-7 text-[16px] font-semibold leading-[1.1] text-ink">
              COMING SOON
            </p>

            <p className="mx-auto mt-5 max-w-[300px] text-[15px] leading-[1.18] text-ink">
              We&rsquo;re building a national directory of FAC Certified centers.
              It launches when our first certified centers are ready to be found.
            </p>

            <div className="mt-7 flex flex-col items-center gap-4">
              <Button
                href="/for-parents"
                variant="outline"
                className="h-[47px] w-[278px] whitespace-nowrap !bg-transparent !px-3 !py-0 !text-[16px] !font-medium hover:!bg-ink"
              >
                I&rsquo;m a parent, keep me posted
              </Button>
              <Button
                href="/certification"
                className="h-[47px] w-[278px] whitespace-nowrap !px-3 !py-0 !text-[16px] !font-medium"
              >
                Get your center certified
              </Button>
            </div>
          </div>
        </div>

        <section
          aria-label="Children enjoying bubbles"
          className="bg-brand-blush pb-10"
        >
          <Image
            src={directoryChildrenMobile}
            alt="Two children blowing bubbles together outdoors"
            sizes="100vw"
            data-testid="directory-children-mobile"
            className="block h-auto w-full"
          />
        </section>
      </section>

      <section className="relative hidden min-h-[500px] overflow-hidden bg-white sm:block sm:min-h-0">
        <Image
          src={directoryVector}
          alt=""
          priority
          sizes="100vw"
          data-testid="directory-vector"
          className="absolute inset-0 h-full w-full object-cover object-top sm:static sm:block sm:h-auto"
        />

        <Container className="absolute inset-0 z-10 pt-[118px] text-center sm:pt-[145px]">
          <h1 className="mx-auto max-w-[590px] font-serif text-[40px] font-extrabold leading-[1.04] text-brand-orange sm:text-[50px]">
            Find a food allergy certified childcare center near you.
          </h1>

          <p className="mx-auto mt-7 max-w-[820px] text-[17px] leading-[1.35] text-ink sm:text-[19px]">
            We&rsquo;re building a national directory of FAC Certified centers.
            It launches when our first certified centers are ready to be found.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <Button
              href="/for-parents"
              variant="outline"
              className="h-[44px] w-[255px] whitespace-nowrap !bg-transparent !px-3 !py-0 !text-[15px] !font-medium hover:!bg-ink"
            >
              I&rsquo;m a parent, keep me posted
            </Button>
            <Button
              href="/certification"
              className="h-[44px] w-[255px] whitespace-nowrap !px-3 !py-0 !text-[15px] !font-medium"
            >
              Get your center certified
            </Button>
          </div>
        </Container>
      </section>

      <section
        aria-label="Children enjoying bubbles"
        className="hidden bg-brand-blush sm:block"
      >
        <Image
          src={directoryChildren}
          alt="Two children blowing bubbles together outdoors"
          sizes="100vw"
          data-testid="directory-children"
          className="block h-[360px] w-full object-cover object-top sm:h-auto"
        />
      </section>

      <JoinCommunity />
      <LetsGetSocial />
    </>
  );
}
