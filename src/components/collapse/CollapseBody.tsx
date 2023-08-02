import NotHaveVideoYet from "./NotHaveVideoYet";
import RowVideo from "./RowVideo";

type Props = {
  headers: Array<any>;
  videos: Array<any>;
};

const CollapseBody = ({ headers, videos }: Props) => {
  return (
    <div>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {headers.map((header) => (
                <th scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {videos.length > 0 && videos.map((video) => <RowVideo />)}
          </tbody>
        </table>
        {!videos.length && <NotHaveVideoYet />}
      </div>
    </div>
  );
};

export default CollapseBody;
