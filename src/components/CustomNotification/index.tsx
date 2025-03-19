import { ToastContainer, Slide } from 'react-toastify'

const CustomNotification = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      theme={theme}
      transition={Slide}
    />
  );
}

export default CustomNotification
