type BurstProps = {
  className?: string;
};

export default function Layout({ className = "" }: BurstProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M50 4
           L60 20
           L78 10
           L80 30
           L96 28
           L88 46
           L100 56
           L82 62
           L88 80
           L68 78
           L66 96
           L50 84
           L34 96
           L32 78
           L12 80
           L18 62
           L0 56
           L12 46
           L4 28
           L20 30
           L22 10
           L40 20
           Z"
        className="fill-[#5b3df5]"
      />
    </svg>
  );
}
