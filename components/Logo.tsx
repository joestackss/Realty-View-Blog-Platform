import React from "react";
import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="mr-20"
        width={150}
        height={40}
        src="/realtyview-logo-white.svg"
        alt="realty-logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
