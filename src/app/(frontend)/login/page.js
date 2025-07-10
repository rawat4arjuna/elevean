import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('@/features/Auth/login'), {
  loading: () => <p>Loading...</p>, // Optional loading component
});

const DynamicLoginPage = () => {
  return <LoginPage />;
};

export default DynamicLoginPage;