import { Switch } from "..";
const RowVideo = ({ video }: { video?: Object }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-3"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-3" className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex w-full items-center space-x-2">
          <div className=" rounded overflow-hidden w-[140px] h-[90px] bg-slate-300"></div>
          <div>
            <h6 className=" font-bold">title</h6>
            <p className="text-slate-400 text-[12px]">add description</p>
          </div>
        </div>
      </td>

      <td className="px-6 py-4">
        <Switch />
      </td>
      <td className="px-6 py-4">Age-restricted</td>
      <td className="px-6 py-4">Aug 2, 2023 Uploaded </td>
      <td className="px-6 py-4">0 </td>
      <td className="px-6 py-4">0 </td>
      <td className="px-6 py-4">0 | 0 </td>
    </tr>
  );
};

export default RowVideo;
