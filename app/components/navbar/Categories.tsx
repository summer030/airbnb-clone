"use client";

import Container from "../Container";
import { BsSnow } from "react-icons/bs";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    descriptiopn: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    descriptiopn: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    descriptiopn: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    descriptiopn: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    descriptiopn: "This property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    descriptiopn: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    descriptiopn: "This property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    descriptiopn: "This property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    descriptiopn: "This property is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    descriptiopn: "This property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
      "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
