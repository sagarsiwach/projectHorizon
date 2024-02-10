import Link from "next/link";

export default function FooterNavigation({ data }) {
  console.log(data);
  // Removed the console.log for cleaner code unless it's needed for debugging
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-x-2 gap-y-4 text-neutral-300">
      {data.navigationLinks.map((item) => (
        <div key={item.id}>
          <p className="text-[18px] text-neutral-400">{item.heading}</p>
          <ul>
            {item.subNavigationLinks.map((subItem) => (
              <li className="text-[14px] text-neutral-500" key={subItem.id}>
                <Link href="/">{subItem.name}</Link>
                {/* Assuming you want to use Link for navigation */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
