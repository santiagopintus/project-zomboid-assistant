"use client";
import WeaponDetails from "@/components/Weapons/WeaponDetails";
import WeaponsTable, { Weapon } from "@/components/Weapons/WeaponsTable";
import React, { useState } from "react";

const Page = () => {
  const [focusedWeapon, setFocusedWeapon] = useState<Weapon | null>(null);
  return (
    <div className="container">
      {focusedWeapon && (
        <WeaponDetails
          w={focusedWeapon}
          onClose={() => setFocusedWeapon(null)}
        />
      )}
      <WeaponsTable onWeaponClick={(w) => setFocusedWeapon(w)} />
    </div>
  );
};

export default Page;
