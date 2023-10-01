import { AxiosError } from "axios";

const Error = ({ error }: { error: AxiosError }) => {
  const { data, statusText } = error?.response || {};

  const responseData = data as IResponseData;
  const errorMessage = responseData?.message;

  return (
    <div className="text-white text-2xl md:text-4xl m-8 py-20 text-center capitalize">
      {errorMessage || statusText}
    </div>
  );
};

export default Error;

interface IResponseData {
  message: string;
  code: string;
}
