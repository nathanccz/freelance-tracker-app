export default function SkeletonSidebar() {
  return (
    <aside className="flex w-80 flex-col">
      <div className="flex w-52 flex-col gap-4 mt-4 mb-8 p-2">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-32"></div>
          </div>
        </div>
      </div>
      <ul className="menu bg-base-200 rounded-box w-full gap-3 text-lg font-bold">
        <li>
          <div className="skeleton h-12 w-full"></div>
        </li>
        <li>
          <div className="skeleton h-12 w-full"></div>
        </li>
        <li>
          <div className="skeleton h-12 w-full"></div>
        </li>
        <li>
          <div className="skeleton h-12 w-full"></div>
        </li>
        <li>
          <div className="skeleton h-12 w-full"></div>
        </li>
        <li>
          <div className="skeleton h-12 w-full"></div>
        </li>
        <li>
          <div className="skeleton h-12 w-full"></div>
        </li>
      </ul>
      <div className="skeleton h-12 w-full mt-8"></div>
    </aside>
  );
}
