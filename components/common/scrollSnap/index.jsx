const ScrollSnap = ({ children }) => {
  return (
    <div className="overflow-y-scroll snap-mandatory snap-y w-full h-[calc(100vh-5em)]">
      {children}
    </div>
  );
};
export default ScrollSnap;
