const Home = () => {
    return (
      <div style={styles.container}>
        <h1>Reliance Automotive</h1>
        <p>Your trusted vehicle repair experts!</p>
      </div>
    );
  };
  
  const styles = {
    container: {  paddingTop: '100px',backgroundImage: `url('/src/assets/AI_BMW_GARAGE.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', textAlign: "center", width:"100%", height:"70vh", color: 'white', textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black"}
  };
  
  export default Home;
  