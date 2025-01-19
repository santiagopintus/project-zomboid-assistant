import React, { useState, useEffect } from "react";
import improvised from "@/data/weapons/improvised.json";
import axes from "@/data/weapons/axes.json";
import longBlades from "@/data/weapons/long_blades.json";
import shortBlades from "@/data/weapons/short_blades.json";
import longBlunts from "@/data/weapons/long_blunts.json";
import shortBlunts from "@/data/weapons/short_blunts.json";
import spears from "@/data/weapons/spears.json";
import SortedArrow from "./SortedArrow";
import Loading from "../Loading";
import Image from "next/image";

export type Weapon = {
  Icon: string;
  Category: string;
  Name: string;
  Encumbrance: number | string;
  Equipped: string;
  "Minimum Damage": number | string;
  "Maximum Damage": number | string;
  "Door Damage": number | string;
  "Tree Damage": number | string;
  "Minimum Range": number | string;
  "Maximum Range": number | string;
  "Attack Speed": number | string;
  "Critical Hit Chance": number | string;
  "Critical Multiplier": number | string;
  Knockback: number | string;
  "Max Condition": number | string;
  "Condition Lower Chance": number | string;
  "Average Condition": number | string;
  "Item ID": string;
  [key: string]: number | string;
};

const WeaponsTable = ({
  onWeaponClick,
  updateMaxStats,
}: {
  onWeaponClick: (w: Weapon) => void;
  updateMaxStats: (w: Weapon) => void;
}) => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [sortedWeapons, setSortedWeapons] = useState<Weapon[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const categoryRef = React.useRef<HTMLSelectElement>(null);

  const getMaxStats = () => {
    const bestStats: Weapon = weapons.reduce(
      (acc, weapon) => {
        Object.keys(weapon).forEach((key) => {
          if (typeof weapon[key] === "number" || !isNaN(Number(weapon[key]))) {
            acc[key] = Math.max(Number(acc[key]), Number(weapon[key]));
          }
        });
        return acc;
      },
      {
        Icon: "",
        Category: "",
        Name: "",
        Encumbrance: 0,
        Equipped: "",
        "Minimum Damage": 0,
        "Maximum Damage": 0,
        "Door Damage": 0,
        "Tree Damage": 0,
        "Minimum Range": 0,
        "Maximum Range": 0,
        "Attack Speed": 0,
        "Critical Hit Chance": 0,
        "Critical Multiplier": 0,
        Knockback: 0,
        "Max Condition": 0,
        "Condition Lower Chance": 0,
        "Average Condition": 0,
        "Item ID": "",
      } as Weapon
    );
    updateMaxStats(bestStats);
  };

  const filterWeapons = () => {
    const selectedCategory = categoryRef.current?.value;
    if (selectedCategory && selectedCategory !== "All") {
      const filteredWeapons = weapons.filter(
        (w) => w.Category === selectedCategory
      );
      setSortedWeapons(filteredWeapons);
    } else {
      setSortedWeapons(weapons);
    }
  };

  useEffect(() => {
    const allWeapons: Weapon[] = [
      ...improvised,
      ...axes,
      ...longBlades,
      ...shortBlades,
      ...longBlunts,
      ...shortBlunts,
      ...spears,
    ];
    setWeapons(allWeapons);
  }, []);

  useEffect(() => {
    if (weapons.length > 0) {
      sortTable("Maximum Damage");
    }
    getMaxStats();
  }, [weapons]);

  const sortTable = (key: string) => {
    let direction = "descending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = "ascending";
    }

    const weaponsToSort = sortedWeapons.length > 0 ? sortedWeapons : weapons;

    const reSortedWeapons = [...weaponsToSort].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortedWeapons(reSortedWeapons);
    setSortConfig({ key, direction });
  };

  const categories: string[] = weapons.reduce((acc, weapon) => {
    if (!acc.includes(weapon.Category)) {
      acc.push(weapon.Category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      {/* CATEGORY SELECT */}
      <div className="select-box">
        <label htmlFor="category">Category: </label>
        <select
          name="category"
          id="category"
          ref={categoryRef}
          onChange={filterWeapons}
          defaultValue={"All"}
        >
          <option value="All">All</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {sortedWeapons.length > 0 ? (
        <div className="custom-table-container">
          {/* WEAPONS TABLE */}
          <table
            className="custom-table"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                {Object.keys(sortedWeapons[0] || {}).map((colName) => (
                  <th key={colName} onClick={() => sortTable(colName)}>
                    {colName}
                    {sortConfig?.key === colName && (
                      <SortedArrow
                        direction={sortConfig.direction}
                        key={colName}
                      />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedWeapons.map((weapon, index) => (
                <tr
                  key={index}
                  className="centered"
                  onClick={() => onWeaponClick(weapon)}
                >
                  {Object.entries(weapon).map(([key, value], i) => (
                    <td key={i}>
                      {key === "Icon" ? (
                        <Image
                          width={50}
                          height={50}
                          src={value as string}
                          alt={weapon.Name}
                          style={{ padding: 5 }}
                        />
                      ) : (
                        (value as string)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default WeaponsTable;
