import { Icon } from "@iconify/react/dist/iconify.js";
import { formatDate } from "../../utils/helpers";
import { useAppwriteContext } from "./appwriteContext";
import { Link } from "react-router-dom";
import ProjectCardDropdown from "./ProjectCardDropdown";

export default function LeadList({ data }) {
  const icons = {
    Retail: "fluent:building-retail-20-filled",
    "E-commerce": "material-symbols:shopping-cart-outline",
    Manufacturing: "fluent-mdl2:manufacturing",
    "Hospitality & Tourism": "mdi:beach",
    "Healthcare & Wellness": "ix:health",
    "Restaurant Industry": "ion:restaurant",
    "Real Estate": "fluent:real-estate-20-filled",
    "Finance & Banking": "carbon:finance",
    "Entertainment & Media": "zondicons:film",
    "Web Services": "ph:code-fill",
    Other: "eos-icons:miscellaneous",
  };

  return (
    <ul className="list rounded-box shadow-md mb-4 gap-2">
      {data.map((lead) => (
        <li
          className="list-row hover:bg-slate-200 duration-300 odd:bg-gray-100 border border-gray-200"
          key={lead.$id}
        >
          <div>
            <Icon icon={icons[lead["business-type"]]} className="text-5xl" />
          </div>
          <div>
            <div className="text-lg font-bold">{lead["business-name"]}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {lead["business-type"]}
            </div>
          </div>
          <div className="list-col-wrap text-[16px]">
            <p>
              <span className="font-bold">Business type:</span>{" "}
              {lead["business-type"]}
            </p>
            <p>
              <span className="font-bold">Point of contact:</span>{" "}
              {lead["client-lead"]}
            </p>
            <p>
              <span className="font-bold">Business address:</span>{" "}
              {lead["business-address"]}
            </p>
            <p>
              <span className="font-bold">Email:</span> {lead["email"]}
            </p>
            <p>
              <span className="font-bold">Phone:</span> {lead["phone"]}
            </p>
            <p>
              <span className="font-bold">Website:</span> {lead["website"]}
            </p>
            <div className="text-right mt-3">
              <span className="italic">
                Date added: {formatDate(lead["created-at"])}
              </span>
            </div>
          </div>

          <ProjectCardDropdown data={lead} />
        </li>
      ))}
    </ul>
  );
}
