"use client";

import { useContext, useEffect } from "react";
import { SessionContext } from "@/context/sessionContext";

const Home = () => {
  const { user, loading, fetchUser } = useContext(SessionContext);
  useEffect(() => {
    fetchUser();
  }, []); // Hanya dipanggil sekali setelah render pertama

  if (loading) {
    return <p>Loading...</p>; // Tampilkan ini jika sedang memuat
  }

  return (
    <>
      <h1>Nama: {user?.name}</h1>
    </>
  );
};

export default Home;
