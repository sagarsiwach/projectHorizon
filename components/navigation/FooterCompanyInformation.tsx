export default function FooterCompanyInformation({ data }) {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h5 className="text-base text-white">
          {data.companyInformation.companyName}
        </h5>
        <ul className="text-white flex flex-col space-y-[6px] select-auto">
          {data.companyInformation.description.map((data) => (
            <li key={data._key}>
              <p className="text-[14px] font-semibold text-neutral-400">
                {data.title}
              </p>
              <p className="text-[12px] font-light text-neutral-400">
                {data.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y">
          <ul className="flex flex-row space-x">
            <li className="text-[12px] text-neutral-400">
              {data.companyInformation.telephoneTitle}
            </li>
            <li className="text-[12px] text-neutral-400">
              {data.companyInformation.telephoneNumber}
            </li>
          </ul>
          <ul className="flex flex-row space-x">
            <li className="text-[12px] text-neutral-400">
              {data.companyInformation.emailTitle}
            </li>
            <li className="text-[12px] text-neutral-400">
              {data.companyInformation.emailAddress}
            </li>
          </ul>
        </div>
        <p className="text-[12px] text-neutral-400">
          {data.companyInformation.bottomLineText}
        </p>
      </div>
    </>
  );
}
