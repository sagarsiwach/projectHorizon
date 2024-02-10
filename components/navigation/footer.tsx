"use client";
import FooterSocialBar from "./FooterSocialBar";
import FooterSubscribe from "./FooterSubscribe";
import FooterNavigation from "./FooterNavigation";
import FooterCompanyInformation from "./FooterCompanyInformation";

import FooterKMLogo from "./footerKMLogo";

export default function FooterBar({ footer }) {
  return (
    <div className="p-10 bg-neutral-950 flex flex-col space-y-6 lg:space-y-10">
      <FooterKMLogo />
      <FooterSocialBar data={footer} />
      <FooterSubscribe data={footer} />
      <FooterNavigation data={footer} />
      <FooterCompanyInformation data={footer} />
    </div>
  );
}
