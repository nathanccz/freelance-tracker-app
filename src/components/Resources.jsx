import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Resources({ setActiveRoute }) {
  useEffect(() => {
    setActiveRoute("resources");
  }, []);

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-4">Toolkit</h1>
      <p className="mb-4">
        Here’s a collection of helpful templates and docs to make your freelance
        web development life easier. Whether it’s proposals, contracts, or
        invoices, these resources keep you organized and looking professional.
      </p>
      <div className="flex flex-col gap-3">
        <section>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 font-bold text-xl opacity-60 tracking-wide">
              Client Agreements
            </li>

            <li className="list-row">
              <div>
                <Icon icon="ri:presentation-fill" className="text-4xl" />
              </div>
              <div>
                <div className="font-bold">Proposal Template</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Agreement
                </div>
              </div>
              <p className="list-col-wrap text-lf">
                A proposal template helps freelance clients understand the
                scope, pricing, and value of a project, ensuring clear
                expectations and a professional presentation.
              </p>
              <button className="btn btn-square btn-ghost">
                <Icon
                  icon="material-symbols:save-outline"
                  className="text-3xl"
                />
              </button>
            </li>

            <li className="list-row">
              <div>
                <Icon icon="clarity:contract-solid" className="text-4xl" />
              </div>
              <div>
                <div className="font-bold">California Contract Killer</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Agreement
                </div>
              </div>
              <p className="list-col-wrap text-lf">
                A contract written in Plain Language that outlines the terms,
                responsibilities, and protections for both the freelancer and
                client, ensuring a clear, legally binding agreement.
              </p>
              <button className="btn btn-square btn-ghost">
                <Icon
                  icon="material-symbols:save-outline"
                  className="text-3xl"
                />
              </button>
            </li>
          </ul>
        </section>
        <section>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 font-bold text-xl opacity-60 tracking-wide">
              Client Communication
            </li>

            <li className="list-row">
              <div>
                <Icon
                  icon="tdesign:questionnaire-double"
                  className="text-4xl"
                />
              </div>
              <div>
                <div className="font-bold">Client Discovery Questionnaire</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Communication
                </div>
              </div>
              <p className="list-col-wrap text-lf">
                A client discovery questionnaire helps gather essential details
                about a client’s needs, goals, and preferences to ensure a
                well-informed and tailored project approach.
              </p>
              <button className="btn btn-square btn-ghost">
                <Icon
                  icon="material-symbols:save-outline"
                  className="text-3xl"
                />
              </button>
            </li>

            <li className="list-row">
              <div>
                <Icon icon="fluent-mdl2:calendar-agenda" className="text-4xl" />
              </div>
              <div>
                <div className="font-bold">Meeting Agenda Template</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Communication
                </div>
              </div>
              <p className="list-col-wrap text-lf">
                A meeting agenda template helps structure discussions, keep
                meetings focused, and ensure all key topics are covered
                efficiently.
              </p>
              <button className="btn btn-square btn-ghost">
                <Icon
                  icon="material-symbols:save-outline"
                  className="text-3xl"
                />
              </button>
            </li>
          </ul>
        </section>
        <section>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 font-bold text-xl opacity-60 tracking-wide">
              Financial & Administrative
            </li>

            <li className="list-row">
              <div>
                <Icon icon="hugeicons:invoice" className="text-4xl" />
              </div>
              <div>
                <div className="font-bold">Invoice Template</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Financial
                </div>
              </div>
              <p className="list-col-wrap text-lf">
                An invoice template ensures clear, professional billing by
                standardizing payment details, due dates, and service
                descriptions.
              </p>
              <button className="btn btn-square btn-ghost">
                <Icon
                  icon="material-symbols:save-outline"
                  className="text-3xl"
                />
              </button>
            </li>

            <li className="list-row">
              <div>
                <Icon icon="carbon:reminder" className="text-4xl" />
              </div>
              <div>
                <div className="font-bold">Payment Reminder Template</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Financial
                </div>
              </div>
              <p className="list-col-wrap text-lf">
                A payment reminder template helps politely follow up on
                outstanding invoices, ensuring timely payments while maintaining
                a positive client relationship.
              </p>
              <button className="btn btn-square btn-ghost">
                <Icon
                  icon="material-symbols:save-outline"
                  className="text-3xl"
                />
              </button>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
