import Link from "next/link";
const Footer = () => {
  return (
    <footer className="pt-4 space-y-6 text-sm border-t md:py-10 st-container columns-1 md:columns-3 border-t-text-muted-secondary">
      <div className="space-y-4 break-inside-avoid text-[#656565]">
        <p className="text-[16px] text-white">Company</p>

        <p className="text-sm">@2022 all rights reserved.</p>
      </div>
      <div className="space-y-4 break-inside-avoid ">
        <p className="text-[16px]">Contact</p>
        <div className="text-[#656565]">
          <p className="mb-2 text-md">New York</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            molestiae, doloremque consequuntur.
          </p>
        </div>
      </div>
      <div className="space-y-4 break-inside-avoid">
        <p>Follow US</p>
        <ul className="my-4 space-y-1 text-[#656565]">
          <li className="grid grid-cols-[1fr_5px_4fr] gap-4">
            <span>Phone </span>
            <span>:</span>
            <span className="underline cursor-pointer hover:text-white">
              +55 (977) 2435 9372+55{" "}
            </span>
          </li>
          <li className="grid grid-cols-[1fr_5px_4fr] gap-4">
            <span>Email </span>
            <span>:</span>
            <span className="underline cursor-pointer hover:text-white">
              company@gmail.com
            </span>
          </li>
          <li className="grid grid-cols-[1fr_5px_4fr] gap-4">
            <span>LinkedIn </span>
            <span>:</span>
            <span className="underline cursor-pointer hover:text-white">
              company@linkedIn.com
            </span>
          </li>
          <li className="grid grid-cols-[1fr_5px_4fr] gap-4">
            <span>Github </span>
            <span>:</span>
            <span className="underline cursor-pointer hover:text-white">
              company@github.com
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
