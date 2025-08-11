/* eslint-disable react/prop-types */
export default function ReportTable({ rows, total }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">Отчет по регионам</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[380px] text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 border-b text-left">Регион</th>
              <th className="px-3 py-2 border-b text-left">Абоненты</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.region} className="odd:bg-white even:bg-gray-50">
                <td className="px-3 py-2 border-b">{r.region}</td>
                <td className="px-3 py-2 border-b">
                  {Number(r.totalSubscribers).toLocaleString('ru-RU')}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-semibold">
              <td className="px-3 py-2 border-t">Узбекистан (ИТОГО)</td>
              <td className="px-3 py-2 border-t">
                {Number(total ?? 0).toLocaleString('ru-RU')}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}