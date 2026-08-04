import { Link } from 'react-router-dom'

function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/restaurant.jpeg)',
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-white pt-5">
        <h1>Welcome to Golden Spoon</h1>
        <p>Enjoy our delicious meals made with fresh ingredients every day.</p>

        <Link to="/menu" className="btn btn-warning">
          View Menu
        </Link>{' '}
        <Link to="/reservation" className="btn btn-light">
          Book a Table
        </Link>
      </div>
    </div>
    
  )
}

export default Home