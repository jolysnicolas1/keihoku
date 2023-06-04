import Link from "next/link";

export default function Studio() {
  const containerClasses = "flex justify-end flex-col items-end relative";
  const headingClasses =
    "text-3xl sm:text-4xl md:text-5xl text-neutral-600 font-thin -mb-2 sm-pl-20 md:pl-64 lg:pl-72 xl:pl-80 2xl:pl-96 pr-4";
  const textClasses =
    "px-4 md:px-6 md:px-10 lg:px-12 xl:px-14 2xl:px-16 text-neutral-400 inline-block -mb-1 text-lg";
  const beforeClasses = `
    relative
    before:absolute
    before:bg-transparent
    lg:before:bg-blue-500
    before:hover:top-0
    before:h-6
    before:lg:h-6
    before:w-6
    before:border-t-4
    before:border-blue-300
    lg:text-neutral-100
    hover:text-neutral-400
    hover:font-normal
    duration-500
    before:hover:h-1
    before:h-1
    before:border
    before:duration-500
    p-1
  `;
  const containerStyle = { paddingLeft: "24px", paddingRight: "24px" };
  const linkContainerStyle = {
    paddingLeft: "96px",
    paddingRight: "96px",
  };

  return (
    <div className={containerClasses}>
      <div className="flex w-fit border-b-8 border-blue-500 items-end">
        <h1 className={headingClasses}>KEIHOKU STUDIO</h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p className={textClasses}>Pratiques de CORPS/DANSE/SHIATSU/</p>
        <p className={textClasses}>à La Dérive</p>
      </div>
      <div
        className="flex flex-row space-x-5 text-2xl mt-5"
        style={linkContainerStyle}
      >
        <Link href="/shiatsu">
          <div className={beforeClasses}>Shiatsu</div>
        </Link>
        <Link href="/ca-se-fait">
          <div className={beforeClasses}>Ça se fait</div>
        </Link>
        <Link href="/butoh">
          <div className={beforeClasses}>Butoh</div>
        </Link>
        <Link href="/technique-alexander">
          <div className={beforeClasses}>Technique Alexander</div>
        </Link>
      </div>
    </div>
  );
}

