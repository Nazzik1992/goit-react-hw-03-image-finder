import { Blocks } from 'react-loader-spinner';
export default function Loader() {
  return (
    <Blocks
      visible={true}
      height="40"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
}