import React, { useEffect } from "react";
import { Weapon } from "./WeaponsTable";
import ProgressBar from "../ProgressBar";
import Image from "next/image";

const WeaponDetails = ({
  w,
  onClose,
  maxStats,
}: {
  w: Weapon;
  onClose: () => void;
  maxStats: Weapon;
}) => {
  useEffect(() => {
    console.log(maxStats);
  }, [maxStats]);

  const StatItem = ({
    name,
    attrName,
    val,
  }: {
    name: string;
    attrName: keyof Weapon;
    val: number;
  }) => {
    return (
      <>
        <p style={{ marginBottom: 2 }}>{name}</p>
        <ProgressBar max={maxStats[attrName] as number} value={val} />
      </>
    );
  };

  return (
    <div className="overlay">
      <div className="weapon-card-details">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h3 className="weapon-name">
          {w.Name}
          <span>({w.Category})</span>
        </h3>
        <Image
          className="main-weapon-img"
          width={120}
          height={120}
          src={w.Icon}
          alt={w.Name}
        />
        <ul className="weapon-stats-list">
          <li>
            <strong>Encumbrance:</strong> {w.Encumbrance}
          </li>
          <li>
            <strong>Equipped:</strong> {w.Equipped}
          </li>
          <li>
            <StatItem
              name="Minimum Damage"
              attrName="Minimum Damage"
              val={w["Minimum Damage"] as number}
            />
          </li>
          <li>
            <StatItem
              name="Maximum Damage"
              attrName={"Maximum Damage"}
              val={w["Maximum Damage"] as number}
            />
          </li>
          <li>
            <strong>Door Damage:</strong> {w["Door Damage"]}
          </li>
          <li>
            <strong>Tree Damage:</strong> {w["Tree Damage"]}
          </li>
          <li>
            <strong>Minimum Range:</strong> {w["Minimum Range"]}
          </li>
          <li>
            <strong>Maximum Range:</strong> {w["Maximum Range"]}
          </li>
          <li>
            <strong>Attack Speed:</strong> {w["Attack Speed"]}
          </li>
          <li>
            <strong>Critical Hit Chance:</strong> {w["Critical Hit Chance"]}
          </li>
          <li>
            <strong>Critical Multiplier:</strong> {w["Critical Multiplier"]}
          </li>
          <li>
            <strong>Knockback:</strong> {w.Knockback}
          </li>
          <li>
            <strong>Max Condition:</strong> {w["Max Condition"]}
          </li>
          <li>
            <strong>Condition Lower Chance:</strong>{" "}
            {w["Condition Lower Chance"]}
          </li>
          <li>
            <strong>Average Condition:</strong> {w["Average Condition"]}
          </li>
          <li>
            <strong>Item ID:</strong> {w["Item ID"]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeaponDetails;
