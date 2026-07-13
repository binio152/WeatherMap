import clsx from "clsx";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  className?: string;
  childrenClassName?: string;
};

const Card = ({ children, title, className, childrenClassName }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col gap-5 rounded-3xl bg-linear-to-br from-card to card/60 bg-card px-5 py-5 shadow-md sm:px-6 sm:py-6",
      )}
    >
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      )}
      <div
        className={clsx(
          childrenClassName,
          "animate-[fade-in_1s_ease-out_forwards]",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
