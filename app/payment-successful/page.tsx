"use client"

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import PaymentFailed from "../components/PaymentFailed";
import PaymentSuccess from "../components/PaymentSuccess";

export default function Success() {
 // ! I have to handle failed and successful payment
 const [success, setSuccess] = useState(false);
  
 useEffect(() => {
   // Access the query string from the URL
   const queryString = window.location.search;

   // Use the URLSearchParams API to parse the query string
   const queryParams = new URLSearchParams(queryString);

   // Access the 'status' parameter
   const status = queryParams.get("status");

   // Use the 'status' value as needed
   console.log("Payment Status:", status);

   setSuccess(status === 'successful' ? true : false);

 }, []);
  return (
    <>
      {
        success ?
        <PaymentSuccess /> :
        <PaymentFailed />
      }
    </>
  );
};
