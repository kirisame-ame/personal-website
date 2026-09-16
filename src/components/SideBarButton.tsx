export default function SideBarButton({
  label,
  onClick,
  isLight,
}: {
  label: string;
  onClick: () => void;
  isLight: boolean;
}) {
  return (
    <button
      className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 ${isLight ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}
      onClick={onClick}
    >
      <span className="text-xs sm:text-sm">{label}</span>
    </button>
  );
}
