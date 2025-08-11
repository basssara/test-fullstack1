'use client';

import { useRef, useState } from 'react';
import { uploadExcel } from '../lib/api';

export default function UploadExcel({ onDone }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const onChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setBusy(true);
      await uploadExcel(file, true);
      onDone?.();
    } catch (e) {
      alert(`Ошибка загрузки: ${e.message}`);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        ref={inputRef}
        type="file"
        accept=".xls,.xlsx"
        onChange={onChange}
        disabled={busy}
        className="block w-full text-sm file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0 file:bg-blue-600 file:text-white
                   hover:file:bg-blue-700 disabled:file:bg-gray-400"
      />
      {busy && <span className="text-sm text-gray-600">Download</span>}
    </div>
  );
}