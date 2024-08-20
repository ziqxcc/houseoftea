"use client";
import ReactGA from "react-ga4";
import React, { useEffect } from 'react';

function Analytics() {
  useEffect(() => {
    ReactGA.initialize("AW-11457241006");
  }, []);

  return null;
}

export default Analytics;
