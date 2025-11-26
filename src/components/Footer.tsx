const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="font-body text-center">
            Made by Amreen Fathima © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
