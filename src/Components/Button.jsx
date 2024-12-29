import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  // Inner structure shared between <a> and <button>
  const Inner = () => (
    <span className="flex items-center gap-2">
      {icon && (
        <img
          src={icon}
          alt="circle"
          className="size-6 object-contain z-10"
        />
      )}
      <span>Marker</span>
      {children}
    </span>
  );

  // Conditionally render as <a> or <button>
  return href ? (
    <a
      className={clsx(
        "relative px-4 py-2 g5 rounded-2xl shadow-500 group inline-flex items-center justify-center text-white font-bold hover:bg-opacity-90 transition-all",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative px-4 py-2 g5 rounded-2xl shadow-500 group inline-flex items-center justify-center text-white font-bold hover:bg-opacity-90 transition-all",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
