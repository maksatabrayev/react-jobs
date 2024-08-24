import React from 'react'
import { ClipLoader } from 'react-spinners'
const Spinner = ({loading}) => {
    const override = {
        display: "block",
        margin: "0 auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderWidth: "8px", // Make the spinner bolder
      };
  return (
      <ClipLoader
        color="#0000FF" // Hex code for blue
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner