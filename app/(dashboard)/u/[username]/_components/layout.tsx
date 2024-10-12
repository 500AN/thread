import React from "react";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import { getSelfByUsername } from "@/lib/auth-service";

import { Navbar } from "./navbar"; 
import { Sidebar } from "./sidebar"; 
import { Container } from "./container";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function CreatorLayout({
  children,
  params: { username },
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const self = await getSelfByUsername(username);

  if (!self) redirect("/");

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
}