import { useEffect, useState } from 'react';
import { NextPage } from 'next';

interface FooterProps {
  year: number;
}

const Footer: NextPage<FooterProps> = ({ year }) => {
  const [currentYear, setCurrentYear] = useState(year);

  useEffect(() => {
    setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);
  }, []);

  return (
    <footer className='flex flex-col justify-center items-center'>
      Copyright &copy; MiNiMa {currentYear}
    </footer>
  );
}

Footer.getInitialProps = async () => {
  const year = new Date().getFullYear();
  return {
    year,
  };
}

export default Footer;
