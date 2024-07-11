import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetData } from '../../api/useApi/useGetData';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    } else {
      const fetchData = async () => {
        const data = await useGetData('activity');
        setActivities(data);
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
        <h1>Activities</h1>
        <div className="activities">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .activities {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .activity-card {
          flex: 1;
          min-width: 250px;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 0.375rem;
          background-color: white;
          text-align: center;
        }
        .activity-card h3 {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Activity;
