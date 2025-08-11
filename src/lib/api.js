export const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "";

export async function getByRegion() {
  const res = await fetch(`${API_URL}/sum/by-reg`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch /sum/by-reg");
  return res.json();
}

export async function getByUzbekistan() {
  const res = await fetch(`${API_URL}/sum/by-uzb`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch /sum/by-uzb");
  return res.json();
}

export async function uploadExcel(file, replace = true) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch(`${API_URL}/xls?replace=${replace}`, {
    method: "POST",
    body: fd,
  });
  if (!res.ok) throw new Error("Failed to upload excel");
  return res.json();
}
