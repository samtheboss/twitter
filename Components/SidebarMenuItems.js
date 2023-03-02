export default function SidebarMenuItems({ title, Icon,iconHeight ,active}) {
  return (
    <div
      className="flex items-center
       text-gray-700 justify-center
     HoverEffect lg:justify-start text-lg sm:p-3 space-x-3"
    >
      <Icon className="h-7" size={25} />
      <span className={`${active && "font-bold"} hidden lg:inline`}>{title}</span>
    </div>
  );
}
