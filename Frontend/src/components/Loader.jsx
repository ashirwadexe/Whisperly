const Loader = ({ text = "Please wait..." }) => {
  return (
    <span className="flex items-center justify-center gap-2">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-zinc-700" />
      <span>{text}</span>
    </span>
  );
};

export default Loader;