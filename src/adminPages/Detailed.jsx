import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

const Detailed = () => {
  const { id } = useParams();

  const { fetchRequest: userDetails, loading } = useFetch({
    url: `https://crudapi.co.uk/api/v1/users/${id}`,
    method: "GET",
  });

  console.log(userDetails);

  if (loading)
    return (
      <>
        <CircularProgress />
      </>
    );

  return (
    <div className="user-details" >
      <h2>User Details</h2>
      <p>Name:    {userDetails?.name}</p>
      <p>Surname:    {userDetails?.surname}</p>
      <p>Number:    {userDetails?.number}</p>
      <p>Email:    {userDetails?.email}</p>
      <p>Description:    {userDetails?.desc}</p>
    </div>
  );
};

export default Detailed;