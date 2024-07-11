import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetData } from '../../api/useApi/useGetData';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

const Promo = () => {
  const [promos, setPromos] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    } else {
      const fetchData = async () => {
        const data = await useGetData('promo');
        setPromos(data);
      };
      fetchData();
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Promos</h1>
        <div className="promos">
          {promos.map((promo) => (
            <div key={promo.id} className="promo-card">
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .promos {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .promo-card {
          flex: 1;
          min-width: 250px;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          background-color: white;
          text-align: center;
        }
        .promo-card h3 {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Promo;
