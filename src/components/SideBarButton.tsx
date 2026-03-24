export default function SideBarButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="flex w-full items-center gap-2 rounded p-2 hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <span className="text-xs sm:text-sm">{label}</span>
    </button>
  );
}
