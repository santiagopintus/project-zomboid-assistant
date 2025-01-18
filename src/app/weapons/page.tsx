"use client";
import WeaponDetails from "@/components/Weapons/WeaponDetails";
import WeaponsTable, { Weapon } from "@/components/Weapons/WeaponsTable";
import React, { useState } from "react";

const Page = () => {
  const [focusedWeapon, setFocusedWeapon] = useState<Weapon | null>(null);
  const [maxStats, setMaxStats] = useState<Weapon>({
    Icon: "",
    Category: "",
    Name: "",
    "Item ID": "",
    Encumbrance: 0,
    Equipped: "0",
    "Minimum Damage": 0,
    "Maximum Damage": 0,
    "Door Damage": 0,
    "Tree Damage": 0,
    "Minimum Range": 0,
    "Maximum Range": 0,
    "Attack Speed": 0,
    "Critical Hit Chance": 1,
    "Critical Multiplier": 1,
    Knockback: 0,
    "Max Condition": 0,
    "Condition Lower Chance": 0,
    "Average Condition": 0,
  });
  return (
    <div className="container">
      {focusedWeapon && (
        <WeaponDetails
          w={focusedWeapon}
          onClose={() => setFocusedWeapon(null)}
          maxStats={maxStats}
        />
      )}
      <WeaponsTable
        onWeaponClick={(w) => setFocusedWeapon(w)}
        updateMaxStats={setMaxStats}
      />
    </div>
  );
};

export default Page;
