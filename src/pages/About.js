function About() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#007bff' }}>About Us</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px' }}>
          Welcome to our travel app! Discover beautiful and exciting destinations around the world. Whether you're looking for a relaxing beach getaway or an adventurous mountain retreat, we've got you covered. Plan your next trip with ease and get ready to explore new places!
        </p>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Our mission is to inspire travelers by offering a user-friendly platform to explore travel destinations and create personalized itineraries. We believe that travel enriches lives, and we want to make it as easy as possible for you to plan your dream vacations.
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Why Choose Us?</h2>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            <li>Wide range of destinations to explore</li>
            <li>Personalized recommendations based on your preferences</li>
            <li>Simple and intuitive trip planning tools</li>
            <li>Up-to-date travel information and tips</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default About;
  