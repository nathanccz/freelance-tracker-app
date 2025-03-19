import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Notifications({ setActiveRoute }) {
  useEffect(() => {
    setActiveRoute("notifications");
  }, []);

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>
      <p className="mb-4">Here's some items that need your attention!</p>
      <div className="flex flex-col gap-3">
        <section>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
              This is not a real notification.
            </li>

            <li className="list-row">
              <div>
                <Icon icon="mingcute:notification-fill" className="text-3xl" />
              </div>
              <div>
                <div>Under construction</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Nothing here yet!
                </div>
              </div>
              <button className="btn btn-square btn-ghost">
                <Icon icon="ep:more" className="text-3xl" />
              </button>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
