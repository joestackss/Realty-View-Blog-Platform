import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

function StudiosNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <BsArrowLeft className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Back to RealtyView Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudiosNavbar;
