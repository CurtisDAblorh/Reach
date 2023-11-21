const SideNavItem = ({ src }: { src: string }) => {
  return (
    <button>
      <video
        src={src}
        width="550"
        height="310"
        controls
        className="mt-5 rounded-lg border-2 border-white-600 hover:border-blue-500 overflow-hidden"
      />
      <div className="font-semibold text-xs"> Sample Video</div>
    </button>
  );
};

export default SideNavItem;
