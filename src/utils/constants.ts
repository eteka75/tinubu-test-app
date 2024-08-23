export const DEFAULT_LANGUAGE = "en";

export type ProductType = {
  name: string;
  origin: string;
  commercial_owner: string;
  create_date: string;
  updated_date: string;
  status: string;
};

export interface ProductProps {
  product: ProductType;
}

export interface Broker {
  id: number;
  legalName: string;
  address: string;
  city: string;
  country: string;
  commission?: number;
}
export interface ManagingBrokerDialogProps {
  open: boolean;
  onClose: () => void;
  newBroker: {
    legalName: string;
    address: string;
    city: string;
    country: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export interface BrokerDetailsProps {
  selectedBroker: {
    legalName: string;
    address: string;
    city: string;
    country: string;
    commission?: number;
  };
  onCommissionChange: (commission: number | undefined) => void;
}

export interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  type?: string;
  children?: ReactNode;
}

export type SubmissionType = {
  name: string;
  creation: string;
  status?: string;
};

export const MenuOptions = [
  "Issue the submissions",
  "Issue the proposal",
  "Issue the policies",
];

export interface SubmissionProps {
  submission: SubmissionType;
}

export const BROKER_FIELDS = {
  NAME: "legal_name",
  ADDRESS: "address",
  CITY: "city",
  COUNTRY: "country",
};

import { ReactNode } from "react";
import { IconType } from "react-icons";
import { BsClockHistory, BsFolderPlus, BsSpeedometer2 } from "react-icons/bs";
import { MdOutlineLocalPolice } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";

export const MENU_ITEMS: Array<{
  key: string;
  label: string;
  path: string;
  icon?: IconType;
}> = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: BsSpeedometer2,
  },
  {
    key: "submissions",
    label: "Submissions",
    path: "/dashboard/submissions",
    icon: BsFolderPlus,
  },
  {
    key: "quotations",
    label: "Quotations",
    path: "/dashboard/quotations",
    icon: RiFileList3Line,
  },
  {
    key: "policies",
    label: "Policies",
    path: "/dashboard/policies",
    icon: MdOutlineLocalPolice,
  },
  {
    key: "auditLogs",
    label: "Audit Logs",
    path: "/dashboard/audit-logs",
    icon: BsClockHistory,
  },
];

export const SelectedProduct: ProductType = {
  name: "Whole Turnover",
  origin: "USA",
  commercial_owner: "John Doe",
  create_date: "2024-08-23",
  updated_date: "2024-08-23",
  status: "In progress",
};
export const SelectedSubmission: SubmissionType = {
  name: "Richard ALDANA",
  creation: "2025-03-21",
  status: "Done",
};

export const brokersData: Broker[] = [
  {
    id: 0,
    legalName: "Robco Industries",
    address: "1785 Railway St, Kenora",
    city: "ON P9N 0B5",
    country: "Canada",
  },
  {
    id: 1,
    legalName: "Broker 1",
    address: "123 Street",
    city: "City A",
    country: "Country A",
  },
  {
    id: 2,
    legalName: "Broker 2",
    address: "456 Avenue",
    city: "City B",
    country: "Country B",
  },
  {
    id: 3,
    legalName: "Broker 3",
    address: "789 Boulevard",
    city: "City C",
    country: "Country C",
  },
  {
    id: 4,
    legalName: "Broker 4",
    address: "101 Road",
    city: "City D",
    country: "Country D",
  },
  {
    id: 5,
    legalName: "Broker 5",
    address: "202 Lane",
    city: "City E",
    country: "Country E",
  },
  {
    id: 6,
    legalName: "Broker 6",
    address: "303 Drive",
    city: "City F",
    country: "Country F",
  },
  {
    id: 7,
    legalName: "Broker 7",
    address: "404 Parkway",
    city: "City G",
    country: "Country G",
  },
  {
    id: 8,
    legalName: "Broker 8",
    address: "505 Circle",
    city: "City H",
    country: "Country H",
  },
  {
    id: 9,
    legalName: "Broker 9",
    address: "606 Court",
    city: "City I",
    country: "Country I",
  },
  {
    id: 10,
    legalName: "Broker 10",
    address: "707 Square",
    city: "City J",
    country: "Country J",
  },
  {
    id: 11,
    legalName: "Broker 11",
    address: "808 Terrace",
    city: "City K",
    country: "Country K",
  },
  {
    id: 12,
    legalName: "Broker 12",
    address: "909 Plaza",
    city: "City L",
    country: "Country L",
  },
  {
    id: 13,
    legalName: "Broker 13",
    address: "1010 Crescent",
    city: "City M",
    country: "Country M",
  },
  {
    id: 14,
    legalName: "Broker 14",
    address: "1111 Vista",
    city: "City N",
    country: "Country N",
  },
  {
    id: 15,
    legalName: "Broker 15",
    address: "1212 Hill",
    city: "City O",
    country: "Country O",
  },
  {
    id: 16,
    legalName: "Broker 16",
    address: "1313 Ridge",
    city: "City P",
    country: "Country P",
  },
  {
    id: 17,
    legalName: "Broker 17",
    address: "1414 Field",
    city: "City Q",
    country: "Country Q",
  },
  {
    id: 18,
    legalName: "Broker 18",
    address: "1515 Meadow",
    city: "City R",
    country: "Country R",
  },
  {
    id: 19,
    legalName: "Broker 19",
    address: "1616 Park",
    city: "City S",
    country: "Country S",
  },
  {
    id: 20,
    legalName: "Broker 20",
    address: "1717 Garden",
    city: "City T",
    country: "Country T",
  },
  {
    id: 21,
    legalName: "Broker 21",
    address: "1818 Grove",
    city: "City U",
    country: "Country U",
  },
  {
    id: 22,
    legalName: "Broker 22",
    address: "1919 Forest",
    city: "City V",
    country: "Country V",
  },
  {
    id: 23,
    legalName: "Broker 23",
    address: "2020 Woods",
    city: "City W",
    country: "Country W",
  },
  {
    id: 24,
    legalName: "Broker 24",
    address: "2121 Glade",
    city: "City X",
    country: "Country X",
  },
  {
    id: 25,
    legalName: "Broker 25",
    address: "2222 Brook",
    city: "City Y",
    country: "Country Y",
  },
  {
    id: 26,
    legalName: "Broker 26",
    address: "2323 Spring",
    city: "City Z",
    country: "Country Z",
  },
  {
    id: 27,
    legalName: "Broker 27",
    address: "2424 Pond",
    city: "City AA",
    country: "Country AA",
  },
  {
    id: 28,
    legalName: "Broker 28",
    address: "2525 River",
    city: "City BB",
    country: "Country BB",
  },
  {
    id: 29,
    legalName: "Broker 29",
    address: "2626 Lake",
    city: "City CC",
    country: "Country CC",
  },
  {
    id: 30,
    legalName: "Broker 30",
    address: "2727 Ocean",
    city: "City DD",
    country: "Country DD",
  },
];
