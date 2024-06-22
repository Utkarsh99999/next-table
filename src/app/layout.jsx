

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
  return (
    <html >
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
