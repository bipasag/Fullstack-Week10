import React from "react";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const birthDate =
    birth instanceof Date
      ? birth.toDateString()
      : new Date(birth).toDateString();

  return (
    <div className="id-card">
      <img src={picture} alt={firstName + " " + lastName} />
      <p>
        <strong>First name:</strong> {firstName}
      </p>
      <p>
        <strong>Last name:</strong> {lastName}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Height:</strong> {height} cm
      </p>
      <p>
        <strong>Birth:</strong> {birthDate}
      </p>
    </div>
  );
}

export default IdCard;
