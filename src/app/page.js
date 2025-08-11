"use client";

import { useEffect, useState } from "react";
import { getByRegion, getByUzbekistan } from "../lib/api";
import UploadExcel from "../components/UploadExcel";
import ReportTable from "../components/ReportTable";

export default function Home() {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function load() {
    try {
      setLoading(true);
      setErr(null);
      const [byReg, byUzb] = await Promise.all([
        getByRegion(),
        getByUzbekistan(),
      ]);
      setRows(byReg);
      setTotal(byUzb.totalSubscribers);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="font-sans max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Сводный отчет по абонентам</h1>

      {loading ? (
        <p className="mt-6 text-gray-700">Загрузка…</p>
      ) : err ? (
        <p className="mt-6 text-red-600">Ошибка: {err}</p>
      ) : (
        <ReportTable rows={rows} total={total} />
      )}
    </main>
  );
}
