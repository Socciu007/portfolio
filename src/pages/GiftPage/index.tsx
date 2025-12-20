import './style.scss'
import { useNavigate } from 'react-router-dom'
const GiftPage = () => {
  const navigate = useNavigate()
  return (
    <div className="gift-page">
      <div className="gift-page-container" onClick={() => navigate('/gift/1')}>
        <div className="gift-page-container-icon">💌</div>
        <div className="gift-page-container-title">
          <p>Christmas letter</p>
        </div>
      </div>
    </div>
  );
}

export default GiftPage