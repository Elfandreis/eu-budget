const Layout = ({title, children}) => {
  return (
    <div className="mt-4 mb-4 flex flex-col">
      <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Layout;
