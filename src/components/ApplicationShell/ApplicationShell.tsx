// components/ApplicationShell/Shell.tsx
"use client";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { useApplicationShell } from "@contexts/ApplicationShellContext";

export default function ApplicationShell({ children }: { children: React.ReactNode }) {
  const { expandedSidebar } = useApplicationShell();

  return (
    <div className="ApplicationShell antialiased flex flex-col w-screen h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Nav />
      <div className="flex flex-1 h-full overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
